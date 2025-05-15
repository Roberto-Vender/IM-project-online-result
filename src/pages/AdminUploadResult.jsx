import React, { useEffect, useState } from 'react';
import * as fetch from '../js/fetch.js';
import * as send from '../js/send.js';
function AdminUploadResult() {
  const [appointment, setAppointmentList] = useState([]);
  const loadAppointment = async () => {
    const response = await fetch.getAllAppointment();
    setAppointmentList(response.data);
  }
  useEffect(() => {
    loadAppointment();
  },[]);
  return (
    <div
      className="min-h-screen bg-cover bg-center p-5"
      style={{ backgroundImage: "url('img4.jpg')" }}
    >
      <div className="bg-[#5bd1cd] bg-opacity-90 rounded-xl p-6 shadow-xl mt-20">
  <div className="mt-2 mb-4 flex items-center justify-between">
    <h2 className="text-2xl font-bold text-white">Upload File</h2>

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
          <th className="py-2 px-4 text-center">Appointment Date</th>
          <th className="py-2 px-4 text-center">Upload Result</th>
        </tr>
      </thead>
      <tbody>
              {
                appointment.map((app, index) => (
                  <tr className="hover:bg-gray-100">
                    <td className="py-2 px-4 text-center">{ app.app_track_id}</td>
                    <td className="py-2 px-4 text-center">{`${app.pat_fname} ${app.pat_mname ? app.pat_mname + ' ' : ''}${app.pat_lname}${app.pat_ext ? ' ' + app.pat_ext : ''}`}</td>
                    <td className="py-2 px-4 text-center">{ app.serv_name}</td>
              <td className="py-2 px-4 text-center">
                      <div className="text-black">{ app.app_date}</div>
              </td>
              <td className="py-2 px-4 text-center ">
                <div className="flex justify-center space-x-2">
                <label className="inline-flex items-center bg-gray-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-indigo-700 transition">Choose File
                  <input type="file" className="hidden"  aria-label="Upload File"/> </label>
                </div>
              </td>
            </tr>
              ))
              }        
        
      </tbody>
    </table>
  </div>
</div>
</div>
  );
}

export default AdminUploadResult;