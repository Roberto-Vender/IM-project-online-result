import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as send from '../js/send.js';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const loginData = {
      "admin_username": username,
      "admin_password" : password
    }
    console.log(loginData);
    const response = await send.login(loginData);
    if (response.message.includes("successfully")) {
      localStorage.setItem("credentials", response.data);
      navigate('/AdminUploadResult');
    } else {
      setError("Incorrect Details!Pleas Try Again");
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  
  }
    return (
      <div className="relative flex w-full h-screen">
        <img
          src="img4.jpg"
          alt="Background"
          className="w-full h-full object-cover absolute z-0"
        />
  
        <div className="absolute left-5 top-[2px] bg-white/80 w-[800px] h-[590px] rounded-lg z-10 p-10 shadow-lg mt-4 ">
          <div className="text-black font-bold text-4xl font-Poppins text-center absolute f-left-[200px] mb-8 ">
            Login for Admin
          </div>
  
          {/* Email Input */} 
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-black mt-20" >
              Username
            </label>
            <input
              type="text"
              id="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 w-72 p-3 rounded-md bg-white text-gray-900 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
  
          {/* Password Input */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
          
            </div>
            <input
              type="password"
              value = {password}
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-72 p-3 rounded-md bg-white text-gray-900 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
  
          {/* Submit Button */}
          <button className="w-40 mt-10 bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition" onClick={handleSubmit}>
            Login
          </button>
          <div className="text-red-500 mt-4 ">{error}</div>
        </div>
      </div>
    );
  }
  
  export default AdminLogin;