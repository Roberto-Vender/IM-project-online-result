import React, { useState } from 'react';

function ResultStatus() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
              {/* First row */}
              <tr className="hover:bg-gray-100">
                <td className="py-2 px-4 text-center">2001</td>
                <td className="py-2 px-4 text-center">Vender</td>
                <td className="py-2 px-4 text-center">X-ray</td>
                <td className="py-2 px-4 text-center">Pending</td>
                <td className="py-2 px-4 text-center">01/22/12</td>
                <td className="py-2 px-4 text-center">Edmark</td>
                <td className="py-2 px-4 text-center">
                  <button
                    className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onClick={openModal}
                  >
                    Details
                  </button>
                </td>
              </tr>

              {/* Second row */}
              <tr className="hover:bg-gray-100">
                <td className="py-2 px-4 text-center">2002</td>
                <td className="py-2 px-4 text-center">Arusa</td>
                <td className="py-2 px-4 text-center">X-ray</td>
                <td className="py-2 px-4 text-center">Pending</td>
                <td className="py-2 px-4 text-center">01/22/12</td>
                <td className="py-2 px-4 text-center">Edmark</td>
                <td className="py-2 px-4 text-center">
                  <button
                    className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onClick={openModal}
                  >
                    Details
                  </button>
                </td>
              </tr>

              {/* Second row */}
              <tr className="hover:bg-gray-100">
                <td className="py-2 px-4 text-center">2002</td>
                <td className="py-2 px-4 text-center">Arusa</td>
                <td className="py-2 px-4 text-center">X-ray</td>
                <td className="py-2 px-4 text-center">Pending</td>
                <td className="py-2 px-4 text-center">01/22/12</td>
                <td className="py-2 px-4 text-center">Edmark</td>
                <td className="py-2 px-4 text-center">
                  <button
                    className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onClick={openModal}
                  >
                    Details
                  </button>
                </td>
              </tr>

              {/* Second row */}
              <tr className="hover:bg-gray-100">
                <td className="py-2 px-4 text-center">2002</td>
                <td className="py-2 px-4 text-center">Arusa</td>
                <td className="py-2 px-4 text-center">X-ray</td>
                <td className="py-2 px-4 text-center">Pending</td>
                <td className="py-2 px-4 text-center">01/22/12</td>
                <td className="py-2 px-4 text-center">Edmark</td>
                <td className="py-2 px-4 text-center">
                  <button
                    className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onClick={openModal}
                  >
                    Details
                  </button>
                </td>
              </tr>

              {/* Second row */}
              <tr className="hover:bg-gray-100">
                <td className="py-2 px-4 text-center">2002</td>
                <td className="py-2 px-4 text-center">Arusa</td>
                <td className="py-2 px-4 text-center">X-ray</td>
                <td className="py-2 px-4 text-center">Pending</td>
                <td className="py-2 px-4 text-center">01/22/12</td>
                <td className="py-2 px-4 text-center">Edmark</td>
                <td className="py-2 px-4 text-center">
                  <button
                    className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onClick={openModal}
                  >
                    Details
                  </button>
                </td>
              </tr>

              {/* Second row */}
              <tr className="hover:bg-gray-100">
                <td className="py-2 px-4 text-center">2002</td>
                <td className="py-2 px-4 text-center">Arusa</td>
                <td className="py-2 px-4 text-center">X-ray</td>
                <td className="py-2 px-4 text-center">Pending</td>
                <td className="py-2 px-4 text-center">01/22/12</td>
                <td className="py-2 px-4 text-center">Edmark</td>
                <td className="py-2 px-4 text-center">
                  <button
                    className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onClick={openModal}
                  >
                    Details
                  </button>
                </td>
              </tr>

              {/* Second row */}
              <tr className="hover:bg-gray-100">
                <td className="py-2 px-4 text-center">2002</td>
                <td className="py-2 px-4 text-center">Arusa</td>
                <td className="py-2 px-4 text-center">X-ray</td>
                <td className="py-2 px-4 text-center">Pending</td>
                <td className="py-2 px-4 text-center">01/22/12</td>
                <td className="py-2 px-4 text-center">Edmark</td>
                <td className="py-2 px-4 text-center">
                  <button
                    className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onClick={openModal}
                  >
                    Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center  z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Patient Details</h2>
            <p><strong>Name:</strong> Vender</p>
            <p><strong>Email:</strong> vender@example.com</p>
            <p><strong>Address:</strong> 123 Street, City</p>
            <p><strong>Contact Number:</strong> 123-456-7890</p>
            <p><strong>DOB:</strong> 01/22/12</p>
            <p><strong>Gender:</strong> Male</p>
            <p><strong>Service Type:</strong> X-ray</p>
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
