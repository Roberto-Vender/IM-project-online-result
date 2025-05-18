import React, { useEffect, useState } from 'react';
import * as fetch from '../js/fetch.js';
import * as send from '../js/send.js';

function AdminUploadResult() {
  const [appointment, setAppointmentList] = useState([]);
  const [allAppointments, setAllAppointments] = useState([]); // store original data
  const [uploadMessage, setUploadMessage] = useState('');
  const [search, setSearch] = useState('');

  const loadAppointment = async () => {
    const response = await fetch.getAllAppointment();
    const filterPending = response.data.filter((res) => res.app_res_status !== 'Complete');
    setAllAppointments(filterPending); // original data
    setAppointmentList(filterPending); // filtered view
  };

  const searchFilter = (e) => {
    const keyword = e.target.value;
    setSearch(keyword);
    const filtered = allAppointments.filter((res) =>
      res.app_track_id.toLowerCase().includes(keyword.toLowerCase())
    );
    setAppointmentList(filtered);
  };

  useEffect(() => {
    loadAppointment();
  }, []);

  const admin = JSON.parse(localStorage.getItem("credentials"));

  const handleFileChange = async (e, app) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('res_file', file);
    formData.append('app_track_id', app.app_track_id);
    formData.append('admin_id', admin.admin_id);

    try {
      const response = await send.addResult(formData);
      if (response.message.toLowerCase().includes('successfully')) {
        await send.updateAppointment(app.app_id, { app_res_status: "Complete" });
        setUploadMessage(`Successfully uploaded result for ${app.app_track_id}`);
        setTimeout(() => setUploadMessage(''), 3000);
        loadAppointment(); // reload after upload
      } else {
        setUploadMessage(`Upload failed: ${response.message}`);
      }
    } catch (error) {
      setUploadMessage(`Error: ${error.message}`);
    }
  };

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
              value={search}
              onChange={searchFilter}
              className="w-40 px-3 py-1 bg-white text-black text-sm rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </div>
        </div>

        {uploadMessage && (
          <div className="mb-4 p-3 bg-green-100 text-green-800 rounded shadow font-medium text-center">
            {uploadMessage}
          </div>
        )}

        {appointment.length > 0 ? (
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
                {appointment.map((app, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="py-2 px-4 text-center">{app.app_track_id}</td>
                    <td className="py-2 px-4 text-center">
                      {`${app.pat_fname} ${app.pat_mname ? app.pat_mname + ' ' : ''}${app.pat_lname}${app.pat_ext ? ' ' + app.pat_ext : ''}`}
                    </td>
                    <td className="py-2 px-4 text-center">{app.serv_name}</td>
                    <td className="py-2 px-4 text-center text-black">{app.app_date}</td>
                    <td className="py-2 px-4 text-center">
                      <div className="flex justify-center space-x-2">
                        <label className="inline-flex items-center bg-gray-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-indigo-700 transition">
                          Choose File
                          <input
                            type="file"
                            className="hidden"
                            onChange={(e) => handleFileChange(e, app)}
                            accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                          />
                        </label>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white text-center text-gray-600 py-8">
            No pending appointment result.
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminUploadResult;
