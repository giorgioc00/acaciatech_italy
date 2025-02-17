import { useIsVisible } from "./Scrollefect";
import { useRef } from "react"
import "../index.css"
import { Helmet } from 'react-helmet-async';
import Quote from "./Quote";
// import { telephone,ethiopia,logo } from "../images/img";

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
    </Helmet>
      <div id="home" className="pb-10 lg:pb-80 mx-auto custom-bg bg-cover bg-center bg-fixed header">
        <div className="lg:border-none">
          <div className="container lg:flex lg:flex-col-4">
            <div className="mt-28 lg:ml-20 mx-4">
              <div className="p-4 bg-[#093157] bg-opacity-80 rounded-2xl">

              
              <div ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>

              <h1 className="font-bold lg:text-7xl text-[42px] leading-[1.3] lg:leading-[1.3] [word-spacing:0.16rem] text-white text-left px-4 rounded-lg">
              <span className="">Noi la trasformiamo in </span>
              <span className="text-[#d83b2d]">
              realtà
              </span>
              </h1>


              <div className="mt-10 px-7 p-2 rounded-2xl ">
              <p className="lg:px-1 lg:mr-16 font-regular text-3xl lg:text-left lg:text-xl lg:max-w-3xl leading-relaxed text-white">
                    <span className="">Acacia Technologies </span>
                  è il tuo partner tecnologico per trasformare <span className="text-[#d83b2d] font-bold">la tua idea in un prodotto concreto e scalabile.  </span> 
                  Dalla progettazione alla realizzazione, ti accompagniamo in ogni fase del percorso per <span className="text-[#d83b2d] font-bold">dare vita alla tua visione.</span>
                  </p>
              </div>
              </div>
              </div>      
              <div className="bg-gradient-to-r from-[#263252] to-transparent">
              <div ref={ref2} className={`mb-0 pb-0  my-20 flex flex-col lg:flex-row gap-5 lg:gap-8 w-full transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
                <a href="#contact-us" className="flex flex-row items-center justify-center rounded-lg text-white hover:border-[#f7f4f4] bg-[#af2d21] bg-opacity-80 hover:border-2 font-bold uppercase transition-all w-full h-14 lg:w-60 pb-1">
                  SENTIAMOCI
                </a>
                <a href="#about-us" className="mb-6 lg:mb-0 flex justify-center items-center rounded-lg border-2 border-gray-300 hover:border-[#ffffff] text-white text-our-secondary hover:bg-[#093157] text-[10x] hover:text-[#ffffff] transition-all h-14 lg:w-60">
                  A PROPOSITO DI NOI
                </a>
              </div>
              </div>
              
            </div>
            <div></div>
          </div>
        {/* add quote */}
       
        </div>
      </div>
    </>
  )
}

export default Header;
