import React, { useEffect, useState } from 'react';
import * as fetch from '../js/fetch.js';
function ResultStatus() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resultApp, setResultApp] = useState([]);
  const [result, setResult] = useState({});
  const openModal = (res) => {
    setIsModalOpen(true);
    setResult(res);
  };
  const resultList = async () => {
    const response = await fetch.getAllResult();
    setResultApp(response.data);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    resultList();
  },[]);
  return (
    <div
      className="min-h-screen bg-cover bg-center p-5"
      style={{ backgroundImage: "url('img4.jpg')" }}
    >
      <div className="bg-[#5bd1cd] bg-opacity-90 rounded-xl p-6 shadow-xl mt-20">
        <div className="mt-2 mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Status Result</h2>
          <div className="flex items-center space-x-2">
            <label className="text-white text-sm">Search Tracking Code:</label>
            <input
              type="text"
              placeholder="Enter code"
              className="w-40 px-3 py-1 bg-white text-black text-sm rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </div>
        </div>

        <div className="overflow-y-auto max-h-[400px] rounded-md border">
          <table className="w-full bg-white text-sm">
            <thead className="sticky top-0 z-10 bg-blue-950 text-white shadow-md">
              <tr>
                <th className="py-2 px-4 text-center">Tracking Code</th>
                <th className="py-2 px-4 text-center">Patient Name</th>
                <th className="py-2 px-4 text-center">Service</th>
                <th className="py-2 px-4 text-center">Result File</th>
                <th className="py-2 px-4 text-center">Date Uploaded</th>
                <th className="py-2 px-4 text-center">Uploaded By</th>
                <th className="py-2 px-4 text-center">Details</th>
              </tr>
            </thead>
            <tbody>
              {resultApp.map((res, index) => (
                <tr className="hover:bg-gray-100">
                <td className="py-2 px-4 text-center">{res.app_track_id}</td>
                <td className="py-2 px-4 text-center">{res.pat_fname}</td>
                <td className="py-2 px-4 text-center">{res.serv_name}</td>
                  <td className="py-2 px-4 text-center">{<a href={`http://localhost:8000/uploads/results/${res.res_file}`} target='_blank' > <u>{ res.res_file}</u> </a>}</td>
                  <td className="py-2 px-4 text-center">{ res.app_date}</td>
                  <td className="py-2 px-4 text-center">{ `${res.admin_fname+" "+res.admin_lname}`}</td>
                <td className="py-2 px-4 text-center">
                  <button
                    className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onClick={()=> openModal(res)}
                  >
                    Details
                  </button>
                </td>
              </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center  z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Patient Details</h2>
            <strong>Name: </strong>{`${result.pat_fname} ${result.pat_mname ? result.pat_mname + ' ' : ''}${result.pat_lname}${result.pat_extension ? ' ' + result.pat_extension : ''}`}
            <p><strong>Email: </strong>{result.pat_email}</p>
            <p><strong>Address: </strong>{ result.pat_address}</p>
            <p><strong>Contact Number: </strong>{ result.pat_contact}</p>
            <p><strong>DOB: </strong>{ result.pat_dob}</p>
            <p><strong>Gender: </strong>{ result.pat_gender}</p>
            <p><strong>Service Type: </strong>{result.serv_name}</p>
            <p><strong>Result File: </strong><button
            onClick={() =>
            window.open(`http://localhost:8000/uploads/results/${result.res_file}`, '_blank')}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Open in new tab</button></p>
            <div className="mt-4 text-right">
              <button
                className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-500"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResultStatus;
