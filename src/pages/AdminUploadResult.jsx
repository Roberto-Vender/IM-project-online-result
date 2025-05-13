import React from 'react';

function AdminUploadResult() {
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
    <input type="text" placeholder="Enter code" className="w-40 px-3 py-1 bg-white text-black text-sm rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
    />
  </div>
</div>

        <table className="w-full bg-white rounded shadow-md">
          <thead>
            <tr className="bg-blue-950 text-white">
              <th className="py-2 px-4 text-center">Tracking Code</th>
              <th className="py-2 px-4 text-center">Patient Name</th>
              <th className="py-2 px-4 text-center">Service </th>
              <th className="py-2 px-4 text-center">Appoitment Date</th>
              <th className="py-2 px-4 text-center">Upload Result</th>
            </tr>
          </thead>
          <tbody>
            {/* First row */}
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 text-center">2001</td>
              <td className="py-2 px-4 text-center">Vender</td>
              <td className="py-2 px-4 text-center">X-ray</td>
              <td className="py-2 px-4 text-center">
                <div className="text-black">05/13/2025</div>
              </td>
              <td className="py-2 px-4 text-center ">
                <div className="flex justify-center space-x-2">
                <label className="inline-flex items-center bg-gray-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-indigo-700 transition">Choose File
            <input type="file" className="hidden"  aria-label="Upload File"/> </label>



                </div>
              </td>
            </tr>

            {/* Second row */}
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 text-center">2002</td>
              <td className="py-2 px-4 text-center">Arsua</td>
              <td className="py-2 px-4 text-center">X-ray</td>
              <td className="py-2 px-4 text-center">
                <div className="text-black">05/13/2025</div>
              </td>
              <td className="py-2 px-4 text-center">
                <div className="flex justify-center space-x-2">
                <label className="inline-flex items-center bg-gray-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-indigo-700 transition">Choose File
                <input type="file" className="hidden"  aria-label="Upload File"/> </label>
                </div>
              </td>
            </tr>

            {/* Third row */}
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 text-center">2003</td>
              <td className="py-2 px-4 text-center">Noquanna</td>
              <td className="py-2 px-4 text-center">X-ray</td>
              <td className="py-2 px-4 text-center">
                <div className="text-black">05/13/2025</div>
              </td>
              <td className="py-2 px-4 text-center">
                <div className="flex justify-center space-x-2">
                <label className="inline-flex items-center bg-gray-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-indigo-700 transition">Choose File
                <input type="file" className="hidden"  aria-label="Upload File"/> </label>
                </div>
              </td>
            </tr>

            {/* Fourth row */}
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 text-center">2004</td>
              <td className="py-2 px-4 text-center">Ayuman</td>
              <td className="py-2 px-4 text-center">X-ray</td>
              <td className="py-2 px-4 text-center">
                <div className="text-black">05/13/2025</div>
              </td>
              <td className="py-2 px-4 text-center">
                <div className="flex justify-center space-x-2">
                <label className="inline-flex items-center bg-gray-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-indigo-700 transition">Choose File
                <input type="file" className="hidden"  aria-label="Upload File"/> </label>
                </div>
              </td>
            </tr>

            {/* Fifth row */}
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 text-center">2005</td>
              <td className="py-2 px-4 text-center">Abella</td>
              <td className="py-2 px-4 text-center">X-ray</td>
              <td className="py-2 px-4 text-center">
                <div className="text-black">05/13/2025</div>
              </td>
              <td className="py-2 px-4 text-center">
                <div className="flex justify-center space-x-2">
                <label className="inline-flex items-center bg-gray-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-indigo-700 transition">Choose File
                <input type="file" className="hidden"  aria-label="Upload File"/> </label>
                </div>
              </td>
            </tr>

            {/* Sixth row */}
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 text-center">2006</td>
              <td className="py-2 px-4 text-center">Lorenzo</td>
              <td className="py-2 px-4 text-center">X-ray</td>
              <td className="py-2 px-4 text-center">
                <div className="text-black">05/13/2025</div>
              </td>
              <td className="py-2 px-4 text-center">
                <div className="flex justify-center space-x-2">
                <label className="inline-flex items-center bg-gray-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-indigo-700 transition">Choose File
                <input type="file" className="hidden"  aria-label="Upload File"/> </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminUploadResult;