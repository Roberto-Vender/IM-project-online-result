import React from 'react';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <div className="font-sans">
      <div className="flex justify-between items-center px-14 py-5 bg-white shadow relative">
        <div className="flex items-center space-x-4">
          <img src="logo.png" alt="Logo" className="w-40 h-35" />
          <div className="text-blue-600">
            <div className="text-5xl font-semibold">ANCHOR LAB</div>
            <div className="text-3xl font-semibold"> & MEDICAL CENTER</div>
            <div className="text-lg font-medium text-center">
              WITH DENTAL CLINIC
            </div>
          </div>
        </div>

        {/* Right Side: Online Results Button */}
          <div className="group relative">
            <button className="bg-[#5bd1cd] hover:bg-cyan-600 text-white px-10 py-2 rounded">
              Online Results
            </button>
          
            <div className="hidden group-hover:block absolute right-0 w-48 bg-white border rounded shadow-lg z-10">
  <Link
    to="/PatientLogin"
    className="block py-2 px-4 text-sm text-gray-700 hover:bg-cyan-100">
    Patient Portal
  </Link>
  <a href="/Adminlogin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-100">
    Admin Login
  </a>
</div>

        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white">
        <ul className="flex justify-end font-medium items-center">
          {/* Optional: Decorative Bar */}
          <div className="w-[716px] h-11 bg-[#5bd1cd] text-white text-3xl flex items-center justify-center">
  ONLINE MEDICAL RESULTS
</div>


          <li>
          <Link to="/Home">
            <button className="bg-[#5bd1cd] hover:bg-cyan-600 text-white px-12 py-2.5">
              HOME
            </button>
            </Link>
          </li>
          <li>
            <Link to="/Location">
            <button className="bg-[#5bd1cd] hover:bg-cyan-600 text-white px-10 py-2.5">
              LOCATION
            </button>
            </Link>
          </li>
          <li>
            <button className="bg-[#5bd1cd] hover:bg-cyan-600 text-white px-10 py-2.5">
              SERVICES
            </button>
          </li>
          <li>
            <Link to="/AboutUs">
            <button className="bg-[#5bd1cd] hover:bg-cyan-600 text-white px-8 py-2.5">
              ABOUT US
            </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
