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
      <div id="home" className="pb-10 lg:pb-48 mx-auto custom-bg bg-cover bg-center bg-fixed header">
        <div className="w-full lg:border-none">
          <div className="container lg:flex lg:flex-col-4">
            <div className="pt-20 lg:ml-20 mx-4">
              <div ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
              <h1 className="font-bold lg:text-6xl text-[42px] leading-[1.3] lg:leading-[1.3] [word-spacing:0.16rem] text-white text-left bg-blue-950 bg-opacity-80 px-4 rounded-lg">
              <span className="">Noi la trasformiamo in </span>
              <span className="text-[#d83b2d]">
              realtà
              </span>
            </h1>
                <p className="mt-10 lg:px-1 lg:mr-16 font-regular text-2xl lg:text-left lg:text-xl lg:max-w-3xl leading-relaxed text-white font-semibold">
                Acacia Technologies è il tuo partner tecnologico per trasformare le idee in prodotti concreti e scalabili.  
                </p>
              </div>      
              <div ref={ref2} className={`mb-0 pb-0  my-20 flex flex-col lg:flex-row gap-5 lg:gap-8 w-full transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
                <a href="#contact-us" className="flex flex-row items-center justify-center rounded-lg text-white hover:border-[#f7f4f4] bg-[#093157] hover:border-2 font-bold uppercase transition-all w-full h-14 lg:w-60 pb-1">
                  SENTIAMOCI
                </a>
                <a href="#about-us" className="mb-6 lg:mb-0 flex justify-center items-center rounded-lg border-2 border-[#b73327] hover:border-[#ffffff] text-white text-our-secondary hover:bg-[#94101d] text-[10x] hover:text-[#ffffff] transition-all h-14 lg:w-60">
                  A PROPOSITO DI NOI
                </a>
              </div>
            </div>
          </div>
        {/* add quote */}
       
        </div>
      </div>
    </>
  )
}

export default Header;
