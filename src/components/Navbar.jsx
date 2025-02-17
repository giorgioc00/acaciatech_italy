import React from 'react'
import { telephone, horizontalLogo } from "../images/img";

const Navbar = () => {
  return (
    <header className="bg-[#093157] text-white z-30 transition duration-300 ease-in-out h-20 w-full border-b border-indigo-300">
      <div className="flex items-center justify-between px-5 lg:px-10 h-full container">
        
        {/* Logo */}
        <a href="#home">
          <img src={horizontalLogo} alt="Logo" className="w-44" />
        </a>

        {/* Info di contatto */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Numero di telefono */}
          <div className="flex items-center space-x-2">
            <img src={telephone} alt="Telefono" width="20" height="20" />
            <span className="text-sm font-semibold">+251 988 07 77 07</span>
          </div>

          {/* Località */}
          <div className="flex items-center space-x-2">
            <span className="text-sm flex items-center">
              📍 🇪🇹 Hawassa, Ethiopia |  🇮🇹 Turin, Italy
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
