import React from 'react';


function Footer() {
  return (
    <footer className="bg-white py-6 mt-10 shadow shadow-black text-gray-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-6">

        {/* Contact Info Section */}
        <div>
          <h2 className="text-xl font-bold mb-2">Contact Info</h2>
          <p className="mb-1">📍 Aspac Building, Natalio Bacalso St., Cebu City, Philippines, 6000</p>
          <p className="mb-1">📍 Service Area: Cebu City, Philippines</p>
          <p className="mb-1">📞 <a href="tel:09660899304" className="text-blue-600 hover:underline">0966 089 9304</a></p>
          <p>📧 <a href="mailto:anchorlabmedicalcenter@gmail.com" className="text-blue-600 hover:underline  ">anchorlabmedicalcenter@gmail.com</a></p>
          <p>📧 <a href="https://www.facebook.com/anchorlabmedicalcenterinc" className="text-blue-600 hover:underline">www.facebook.com</a></p>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="mt-6 border-t pt-4 text-center text-sm text-gray-500">
        © 2025 Anchor Lab & Medical Center. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
