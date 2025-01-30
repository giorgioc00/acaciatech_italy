import React from 'react'
import { telephone,ethiopia,logo } from "../images/img";

const Navbar = () => {
  return (
   <>
   <div>
        <header className="bg-[#030712] text-blue-900 z-30 md:bg-opacity-90 transition duration-300 ease-in-out h-24 text-center mx-auto w-full border-b border-indigo-300">
            <div className="flex items-center justify-between mx-5 lg:mx-10 pt-3">
            <div className="flex items-center gap-6 lg:pl-6">
                <a href="#home">
                {/* mobile logo */}
                <div className="w-44 ">
                <img src={logo} alt="" height="32" />
                </div>
                </a>
            </div>
            
            <div className="text-white hidden lg:inline">
            
                <div className="inline-block ">
                <img src={telephone} className="inline-block" width="20" height="10" alt="" /> 
                <span className="tx-shdow pr-4 text-3xl font-bold phone_no shadow-lg shadow-red-500/50 ">+251 988 07 77 07</span>
                </div>
            <img className="inline-block m-2" src={ethiopia} alt="" height="32" width="20" />
            <span className="text-sm">Hawassa, Ethiopia
            {/* 📍 */}
            </span>
            </div>
            </div>
        </header>
   </div>
   </>
  )
}

export default Navbar