import React from 'react';

function AdminControl() {
  return (
    <div className="min-h-screen bg-gradient-to-br bg-[#5bd1cd] flex items-center justify-center p-6 ">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Add Service</h1>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" type="serviceName">
            Service Name
          </label>
          <input id="serviceName" type="text" placeholder="Enter new service" className="w-full px-4 py-2 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full shadow-md transition duration-300">
          Add Service
        </button>
      </div>
    </div>
  );
}

export default AdminControl;
