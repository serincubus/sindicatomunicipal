import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú hamburguesa

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-4">
      <div className="block lg:hidden mx-auto">
        <button onClick={toggleMenu} className="text-white hover:text-gray-300 focus:outline-none transition-transform duration-300 ease-in-out">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="lg:flex lg:space-x-4">
          <li><a href="#TURISMO" className="block lg:inline-block text-white">TURISMO</a></li>
          <li><a href="#ACCION SOCIAL Y CONSULTORIOS" className="block lg:inline-block text-white">ACCION SOCIAL Y CONSULTORIOS</a></li>
          <li><a href="#TERCERA EDAD" className="block lg:inline-block text-white">TERCERA EDAD</a></li>
          <li><a href="#JUVENTUD" className="block lg:inline-block text-white">JUVENTUD</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
