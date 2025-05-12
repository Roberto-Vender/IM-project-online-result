import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function AdminHeader() {
  // State to manage the dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Reference to the dropdown menu for detecting outside clicks
  const dropdownRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Toggle function for the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when a menu item is clicked
  const closeDropdown = () => {
    setIsOpen(false);
  };

  // Effect hook to handle clicks outside the dropdown and menu button
  useEffect(() => {
    // Function to handle click outside of dropdown and menu button
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        menuButtonRef.current && !menuButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false); 
      }
    };


    document.addEventListener('mousedown', handleClickOutside);

 
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div className="bg-blue-700 p-3.5 z-10">
        <div className="flex justify-between items-center mx-12">
          <h1 className="text-2xl text-white text-center font-bold font-poppins">
            ONLINE MEDICAL RESULTS
          </h1>

  
          <div className="relative inline-block text-left" ref={menuButtonRef}>
          <button
              onClick={toggleDropdown}
              className="flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none"
            >
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </button>

            {/* Dropdown Menu */}
            <div
              ref={dropdownRef}
              className={`${
                isOpen ? 'block' : 'hidden'
              } z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1" role="none">
                <Link
                  to="/AdminUploadResult"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  onClick={closeDropdown} 
                >
                  Admin Upload Result
                </Link>
                <Link
                  to="/AdminControl"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  onClick={closeDropdown} 
                >
                  Admin Controller
                </Link>
                <Link
                  to="/ResultStatus"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  onClick={closeDropdown} 
                >
                  Result Status
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;