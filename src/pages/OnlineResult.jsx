function OnlineResult() {
  return (
    <div className="relative w-full min-h-screen overflow-auto bg-gray-200">
      
      {/* Header */}
      <div className="flex justify-between items-center px-14 py-1 bg-white shadow z-10">
        <div className="flex items-center space-x-4">
          <img src="logo.png" alt="Logo" className="w-40 h-35" />
          <div className="text-blue-600">
            <div className="text-5xl font-semibold">ANCHOR LAB</div>
            <div className="text-3xl font-semibold">& MEDICAL CENTER</div>
            <div className="text-lg font-medium text-center">
              WITH DENTAL CLINIC
            </div>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="flex justify-center mt-10">
        <div className="text-blue-600 font-bold text-4xl absolute left-[525px] ">T E S T &nbsp;&nbsp; R E S U L T</div>
      </div>

      {/* Two White Boxes */}
      <div className="flex justify-center gap-4 mt-16">
        <div className="bg-white w-[400px] h-[150px] rounded-lg p-0  shadow-lg">
        <div className="flex absolute text-2xl p-4 top-[250px]">Name:
        </div>
        <div className="flex absolute text-2xl p-4 top-[290px] ">Email:
        </div>
        <div className="flex absolute text-2xl p-4 top-[330px] ">Gender:
        </div>
        </div>
        <div className="bg-white w-[400px] h-[150px] rounded-lg p-0 shadow-lg">
        <div className="flex absolute text-2xl p-4 top-[250px]">Contact Number:
        </div>
        <div className="flex absolute text-2xl p-4 top-[290px] ">Date of Birth:
        </div>
        <div className="flex absolute text-2xl p-4 top-[330px] ">Address:
        </div>
        </div>
        </div>
     

      {/* Table Section */}
      <div className="flex justify-center mt-16 px-4 pb-20">
        <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-6xl">
          <div className="overflow-x-auto">
            <table className="table-auto w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-100 text-gray-700 uppercase">
                <tr>
                  <th className="border px-4 py-2">Test Name</th>
                  <th className="border px-4 py-2">Result</th>
                  <th className="border px-4 py-2">Normal Range</th>
                  <th className="border px-4 py-2">Unit</th>
                  <th className="border px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="bg-white">
                  <td className="border px-4 py-2">Hemoglobin</td>
                  <td className="border px-4 py-2">13.2</td>
                  <td className="border px-4 py-2">12.0 - 15.5</td>
                  <td className="border px-4 py-2">g/dL</td>
                  <td className="border px-4 py-2 text-green-600">Normal</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border px-4 py-2">White Blood Cells</td>
                  <td className="border px-4 py-2">11.5</td>
                  <td className="border px-4 py-2">4.0 - 10.0</td>
                  <td className="border px-4 py-2">x10⁹/L</td>
                  <td className="border px-4 py-2 text-red-600">High</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}

export default OnlineResult;
