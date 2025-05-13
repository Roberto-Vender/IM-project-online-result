import React from 'react';

function AdminControl() {
  return (
    <div className="min-h-screen bg-gradient-to-br bg-[#5bd1cd] flex items-start justify-start p-10">
      <div className="flex flex-col lg:flex-row gap-10 w-full">

        {/*Table For Admin user and Pass */}
        <div className="bg-white rounded-xl p-6 shadow-xl w-full lg:w-2/3">
          <table className="w-full bg-white rounded shadow-md text-sm">
            <thead>
              <tr className="bg-blue-950 text-white">
                <th className="py-2 px-4 text-center">Username</th>
                <th className="py-2 px-4 text-center">Password</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="py-2 px-4 text-center">-</td>
                <td className="py-2 px-4 text-center">-</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="py-2 px-4 text-center">-</td>
                <td className="py-2 px-4 text-center">-</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="py-2 px-4 text-center">-</td>
                <td className="py-2 px-4 text-center">-</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Create Admin Account */}
        <div className="flex flex-col gap-10 w-full lg:w-1/3">

          
          <div className="bg-white rounded-2xl shadow-2xl w-full p-8">
            <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Create Admin Account</h1>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter admin username"
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="adminPassword">
                Password
              </label>
              <input
                id="adminPassword"
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full shadow-md transition duration-300">
              Create Account
            </button>
          </div>

          {/* Add Service */}
          <div className="bg-white rounded-2xl shadow-2xl w-full p-8">
            <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Add Service</h1>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Service Name
              </label>
              <input
                type="text"
                placeholder="Enter new service"
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full shadow-md transition duration-300">
              Add Service
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminControl;
