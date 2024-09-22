import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="relative flex justify-between items-center p-4 bg-white shadow-xl rounded-2xl">
      <div className="text-2xl font-bold text-violet-700">Designify</div>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="text-gray-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <ul className="hidden md:flex space-x-6 text-xl">
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Pricing</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>

      <div className="flex space-x-4">
        <button className="text-gray-600">Log In</button>
        <button className="bg-violet-500 text-white px-4 py-2 rounded">Sign Up</button>
      </div>

      {isOpen && (
        <ul
          id="mobile-menu"
          className="absolute top-16 left-0 w-full bg-white p-4 shadow-md md:hidden"
        >
          <li className="p-2 border-b border-gray-200 cursor-pointer" onClick={handleLinkClick}>Products</li>
          <li className="p-2 border-b border-gray-200 cursor-pointer" onClick={handleLinkClick}>Pricing</li>
          <li className="p-2 border-b border-gray-200 cursor-pointer" onClick={handleLinkClick}>About</li>
          <li className="p-2 cursor-pointer" onClick={handleLinkClick}>Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
