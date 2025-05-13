import React from 'react';

function AdminControl() {
  return (
    <div className="min-h-screen bg-gradient-to-br bg-[#5bd1cd] flex items-start justify-center p-10">
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-7xl">

        {/* Upload File (Left Side) */}
        <div className="bg-[#5bd1cd] bg-opacity-90 rounded-xl p-6 shadow-xl mt-2 w-full lg:w-2/3">
          <div className="mt-2 mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Upload File</h2>
            <div className="flex items-center space-x-2">
              <label className="text-white text-sm">Search Tracking Code:</label>
              <input type="text" placeholder="Enter code" className="w-40 px-3 py-1 bg-white text-black text-sm rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-300" />
            </div>
          </div>

          <table className="w-full bg-white rounded shadow-md text-sm">
            <thead>
              <tr className="bg-blue-950 text-white">
                <th className="py-2 px-4 text-center">Tracking Code</th>
                <th className="py-2 px-4 text-center">Patient Name</th>
                <th className="py-2 px-4 text-center">Service</th>
                <th className="py-2 px-4 text-center">Appointment Date</th>
                <th className="py-2 px-4 text-center">Upload Result</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample Rows */}
              {[
                ['VENDER', 'Vender@gmail.com', 'Lalaki', 'Babag2'],
                ['ARSUA', 'Arsua@gmail.com', 'Provider', 'Babag2'],
                ['NOQUANNA', 'Noquanna@gmail.com', 'Provider', 'Babag2'],
                ['AYUMAN', 'Ayuman@gmail.com', 'Provider', 'Babag2'],
                ['ABELLA', 'Abella@gmail.com', 'Bakla', 'Babag2'],
                ['LORENZO', 'Lorenzo@gmail.com', 'Bayot', 'Babag2'],
              ].map(([code, email, service, date], i) => (
                <tr key={i} className="hover:bg-gray-100">
                  <td className="py-2 px-4 text-center">{code}</td>
                  <td className="py-2 px-4 text-center">{email}</td>
                  <td className="py-2 px-4 text-center">{service}</td>
                  <td className="py-2 px-4 text-center text-black">{date}</td>
                  <td className="py-2 px-4 text-center">
                    <div className="flex justify-center space-x-2">
                      <label className="inline-flex items-center bg-gray-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-indigo-700 transition">
                        Choose File
                        <input type="file" className="hidden" aria-label="Upload File" />
                      </label>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Side: Create Admin + Add Service */}
        <div className="flex flex-col gap-8 w-full lg:w-1/3">
          {/* Create Admin */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Create Admin Account</h1>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Username</label>
              <input type="text" placeholder="Enter admin username" className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Password</label>
              <input type="password" placeholder="Enter password" className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full shadow-md transition duration-300">
              Create Account
            </button>
          </div>

          {/* Add Service */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Add Service</h1>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Service Name</label>
              <input type="text" placeholder="Enter new service" className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
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
