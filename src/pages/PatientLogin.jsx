import React from 'react';
import { Link } from 'react-router-dom';

function PatientLogin() {
    return (
      <div className="relative flex w-full h-screen">
        <img
          src="img4.jpg"
          alt="Background"
          className="w-full h-full object-cover absolute z-0"
        />
  
        <div className="absolute left-5 top-[2px] bg-white/80 w-[800px] h-[590px] rounded-lg z-10 p-10 shadow-lg mt-4 ">
          <div className="text-black font-bold text-4xl font-Poppins text-center absolute f-left-[200px] mb-8 ">
            Login for Patient
          </div>

  
          {/* Tracking Code Input */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-900 mt-20">
                Tracking Code
              </label>
              
              <a href="/ForgotPassword" className=" absolute text-sm bottom-[290px] font-semibold text-indigo-600 hover:text-indigo-500 ">
                Forgot Tracking Code?
              </a>
          
            </div>
            <input
              type="password"
              id="password"
              required
              className="mt-2 w-72 p-3 rounded-md bg-white text-gray-900 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
  
          {/* Submit Button */}
          <Link to="/OnlineResult">
          <button className="w-40 mt-1 bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition ">
            Login
          </button>
          </Link>
        <div className="text-red-500 mt-10 "> Login Tips:
        If you cannot remember your Tracking Code or misplaced it, click Forgot Tracking Code.
        </div>
        <div className="text-black   mt-4  "> Welcome! To access your account or check your status, you will need to use your tracking code. This tracking code works like your personal login key. You don’t need to remember a username or password — the tracking code is all you need. Please check the paper, email, or SMS we gave you to find your tracking code.
<br></br><br></br>
When you enter the tracking code on the login page, type it carefully. The code may have both numbers and letters, so make sure you include everything as shown. Don’t worry about uppercase or lowercase — the system will recognize the code either way. If you copy and paste the code, make sure you don’t accidentally include extra spaces.</div>
        </div>
        
        </div>
      
    );
  }
  
  export default PatientLogin;
  
  