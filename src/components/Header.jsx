import { useIsVisible } from "./Scrollefect";
import { useRef } from "react"
import "../index.css"
import { Helmet } from 'react-helmet-async';
import { telephone,ethiopia,logo } from "../images/img";

const Header = () => {

  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2)
  return (
    <>
    <Helmet>
      <title>Acacia Technologies</title>
      <meta name="description" content="Acacia technologies is a custom software and web application development and design company." />
 
      <div id="home" className="lg:pb-40 mx-auto custom-bg  bg-cover bg-center bg-fixed header">
        <img src="" alt="" />
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
        <div className="w-full lg:border-none">
          <div className="container lg:flex lg:flex-col-4 lg:mt-20">
            <div className="pt-10 lg:ml-20 mx-10">
              <div ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
              <h1 className="font-bold lg:text-6xl text-[42px] leading-[1.3] lg:leading-[1.3] [word-spacing:0.16rem]">
                <span className="text-white inline-block">Do that, <span className="text-[#e13e4f]">digitally</span></span> <br />
                <span className="text-white inline-block">by partnering with </span>
                <span className="text-white inline-block underline decoration-[#b73327] decoration-4 lg:pl-2">Acacia</span>
              </h1>
                <p className="mt-6 lg:mt-10 lg:px-1 lg:mr-16 font-regular text-2xl lg:text-left lg:text-xl lg:max-w-3xl leading-relaxed text-gray-200">
                  Bridging the gap between complexity and convenience with our intuitive solutions.
                </p>
              </div> 
              
              <div ref={ref2} className={`mb-0 pb-0  my-20 flex flex-col lg:flex-row gap-5 lg:gap-8 w-full transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
                <a href="#contact-us" className="flex flex-row items-center justify-center rounded-lg text-white hover:border-[#f7f4f4] bg-[#093157] hover:border-2 font-bold uppercase transition-all w-full h-14 lg:w-60 pb-1">
                  CONTACT US
                </a>
                <a href="#about-us" className="mb-6 lg:mb-0 flex justify-center items-center rounded-lg border-2 border-[#b73327] hover:border-[#ffffff] text-white text-our-secondary hover:bg-[#94101d] text-[10x] hover:text-[#ffffff] transition-all h-14 lg:w-60">
                  ABOUT US
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
</Helmet>
    </>
  )
}

export default Header;
