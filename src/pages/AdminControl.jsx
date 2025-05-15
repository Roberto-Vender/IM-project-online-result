import React, { useState, useEffect } from 'react';
import * as fetch from '../js/fetch.js';
import * as send from '../js/send.js';


function AdminControl() {
  const [showPopup1, setShowPopup1] = useState(false);
  const [password, setPassword] = useState('');
  const [service, setService] = useState('');
  const [serviceList, setServiceList] = useState([]);
  const [adminList, setAdminList] = useState([]);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [popupDetails, setPopUpDetails] = useState([]);
  const loadServices = async () => {
    const response = await fetch.getAllService();
    setServiceList(response.data);
    console.log(response.data);
  };
  const loadAdmin = async () => {
    const response = await fetch.getAllAdmin();
    setAdminList(response.data);
  }
  useEffect(() => {
    loadServices();
  }, []);
  useEffect(() => {
    loadAdmin();
  }, []);

  const handleAddService = async () => {
    const addService = { "serv_name": service };
    const response = await send.addService(addService);
    if (response.message.includes("Successfully")) {
      console.log(response.message);
      setService('');
      await loadServices();
    }
    console.log(response.message);
  }
  const handleAddAdmin = async() => {
    const addAdmin = {
      "admin_fname": firstname,
      "admin_lname": lastname,
      "admin_username": username,
      "admin_password" : password
    }
    const response = await send.addAdmin(addAdmin);
    if (response.message.includes("successfully")) {
      console.log(response.message);
      await loadAdmin();
    } else {
      console.log(response.message);
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br bg-[#5bd1cd] flex items-start justify-start p-10">
      <div className="flex flex-col lg:flex-row gap-10 w-full">
        {/* Left Column */}
        <div className="flex flex-col gap-10 w-full lg:w-2/3">
          {/* Admin Users */}
          <div className="bg-white rounded-xl p-6 shadow-xl w-full h-[355px]">
            <div className="text-3xl font-bold text-blue-700 mb-6 text-center">Admin Users</div>

            <div className="overflow-y-auto max-h-[220px]">
              <table className="w-full bg-gray-200 rounded shadow-md text-sm">
                <thead>
                  <tr className="bg-blue-950 text-white">
                    <th className="py-2 px-4 text-center">Username</th>
                    <th className="py-2 px-4 text-center">Firstname</th>
                    <th className="py-2 px-4 text-center">Lastname</th>
                    <th className="py-2 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                {
                  adminList.map((adm, index) => (
                    <tr className="hover:bg-gray-100">
                      <td className="py-2 px-4 text-center">{adm.admin_username}</td>
                      <td className="py-2 px-4 text-center">{adm.admin_fname}</td>
                      <td className="py-2 px-4 text-center">{adm.admin_lname}</td>
                  <td className="py-2 px-4 text-center">
                        <img
                          src="eye.png"
                          alt="View Password"
                          className="w-5 h-5 cursor-pointer inline-block"
                          onClick={() => { setShowPopup1(true); setPopUpDetails(adm)}}
                    />
                  </td>
                </tr>
                  ))
                }
                {/* Admin Row 1 */}
              </tbody>

              </table>
            </div>
          </div>

          {/* Services */}
          <div className="bg-white rounded-xl p-6 shadow-xl w-full h-[255px]">
            <div className="text-3xl font-bold text-blue-700 mb-6 text-center">Services</div>
            <div className="overflow-y-auto max-h-[150px]">
              <table className="w-full bg-gray-200 rounded shadow-md text-sm">
                <thead>
                  <tr className="bg-blue-950 text-white">
                    <th className="py-2 px-4 text-center">Service Name</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    serviceList.map((serv,index) => (
                      <tr className="hover:bg-gray-100"><td className="py-2 px-4 text-center">{serv.serv_name}</td></tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-10 w-full lg:w-1/3">
          {/* Create Admin */}
          <div className="bg-white rounded-2xl shadow-2xl w-full p-8">
            <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Create Admin Account</h1>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Firstname</label>
              <input
                type="text"
                value={firstname}
                placeholder="Enter admin firstname"
                onChange={(e) => setFirstname(e.target.value)}
                required
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Lastname</label>
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
                placeholder="Enter admin lastname"
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Username</label>
              <input
                type="text"
                placeholder="Enter admin username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="adminPassword">Password</label>
              <input
                id="adminPassword"
                type="password"
                value={password}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full shadow-md transition duration-300" onClick={handleAddAdmin}>
              Create Account
            </button>
          </div>

          {/* Add Service */}
          <div className="bg-white rounded-2xl shadow-2xl w-full p-8">
            <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Add Service</h1>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Service Name</label>
              <input
                type="text"
                placeholder="Enter new service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full shadow-md transition duration-300" onClick={handleAddService}>
              Add Service
            </button>
          </div>
        </div>
      </div>

      {showPopup1 && (
        <div className="fixed inset-0  flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-center">Enter Super Admin Password</h2>
            <input
              type="password"
              placeholder="Super Admin Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            />
            <div className="flex justify-center gap-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
                onClick={() => setShowPopup1(false)}
              >
                Submit
              </button>
              <button
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-full"
                onClick={() => setShowPopup1(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminControl;
