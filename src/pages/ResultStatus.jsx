import React from 'react';

function ResultStatus() {
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

        <table className="w-full bg-white rounded shadow-md">
          <thead>
            <tr className="bg-blue-950 text-white">
              <th className="py-2 px-4 text-center">Tracking Code</th>
              <th className="py-2 px-4 text-center">Patient Name</th>
              <th className="py-2 px-4 text-center">Service </th>
              <th className="py-2 px-4 text-center">Result File</th>
              <th className="py-2 px-4 text-center">Date Uploaded</th>
              <th className="py-2 px-4 text-center">Uploaded By</th>
              <th className="py-2 px-4 text-center">Details</th>
              
            </tr>
          </thead>
          <tbody>
            {/* First row */}
            <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 text-center">VENDER</td>
            <td className="py-2 px-4 text-center">Vender@gmail.com</td>
            <td className="py-2 px-4 text-center">Lalaki</td>
            <td className="py-2 px-4 text-center">Babag2</td>
            <td className="py-2 px-4 text-center">01/22/12</td>
            <td className="py-2 px-4 text-center">Edmark</td>
            <td className="py-2 px-4 text-center">
            <a href="/" className="text-blue-400">Details</a>
            </td>
            </tr>


            {/* Second row */}
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 text-center">ARSUA</td>
              <td className="py-2 px-4 text-center">Arsua@gmail.com</td>
              <td className="py-2 px-4 text-center">Provider</td>
              <td className="py-2 px-4 text-center">
                <div className="text-black">Babag2</div>
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
              <td className="py-2 px-4 text-center">NOQUANNA</td>
              <td className="py-2 px-4 text-center">Noquanna@gmail.com</td>
              <td className="py-2 px-4 text-center">Provider</td>
              <td className="py-2 px-4 text-center">
                <div className="text-black">Babag2</div>
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
              <td className="py-2 px-4 text-center">AYUMAN</td>
              <td className="py-2 px-4 text-center">Ayuman@gmail.com</td>
              <td className="py-2 px-4 text-center">Provider</td>
              <td className="py-2 px-4 text-center">
                <div className="text-black">Babag2</div>
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
              <td className="py-2 px-4 text-center">ABELLA</td>
              <td className="py-2 px-4 text-center">Abella@gmail.com</td>
              <td className="py-2 px-4 text-center">Bakla</td>
              <td className="py-2 px-4 text-center">
                <div className="text-black">Babag2</div>
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
              <td className="py-2 px-4 text-center">LORENZO</td>
              <td className="py-2 px-4 text-center">Lorenzo@gmail.com</td>
              <td className="py-2 px-4 text-center">Bayot</td>
              <td className="py-2 px-4 text-center">
                <div className="text-black">Babag2</div>
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

export default ResultStatus;