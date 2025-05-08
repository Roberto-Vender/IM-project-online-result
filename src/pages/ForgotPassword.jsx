import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img 
        src="img4.jpg" 
        alt="Home Services" 
        className="w-full h-full object-cover absolute top-0 left-0 -z-10"
      />

      {/* White Box with Image Inside */}
      <div className="flex justify-center items-center h-full">
        <div className="w-[500px] h-[600px] bg-white p-3 rounded-lg shadow-lg m-3">

          {/* Form */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Enter your user account's verified email address and we will send you a <br /> password reset link.
            </label>

            <input 
              placeholder="Enter your email address"
              type="email" 
              name="email"    
              id="email" 
              autoComplete="email" 
              required 
              className="block w-full mt-2 p-3 rounded-md bg-white text-gray-900 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            {/* Image inside the white box */}
          <div className="w-full h-[400px] mb-4">
            <img src="img5.avif" alt="Circular Image" className="w-full h-full object-cover rounded-md mt-6" />
            <button className="bg-indigo-600 w-full hover:bg-indigo-700 text-white py-0.5 rounded-lg shadow-md border-black border-[1px] mt-3 mx-auto block "
            >
           Send password reset email
          </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;