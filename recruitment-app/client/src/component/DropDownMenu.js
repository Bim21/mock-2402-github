import React, { useState, useRef, useEffect } from 'react';

const DropdownMenu = ({button}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleMenu}
        className="bg-blue-500 text-white font-semibold px-4 py-2 rounded focus:outline-none focus:bg-blue-600"
      >
        {button}
      </button>
      {isOpen && (
        <div className="absolute top-0 right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-10">
          <ul>
       
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Menu Item 1</li>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Menu Item 2</li>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Menu Item 3</li>
        
         
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;