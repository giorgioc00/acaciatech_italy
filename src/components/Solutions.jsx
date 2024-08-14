
import { Helmet } from 'react-helmet-async';

import { useIsVisible } from "./Scrollefect";
import { useRef,  } from "react"
import { asetmgt, consultant,ecomerce, webapp } from "../images/svgs/svgicon";
import "../index.css"
//
const Solutions = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef();
  const isVisible4 = useIsVisible(ref4);



  return (
    <>
    <Helmet>
      <title>Acacia Technologies PLC</title>
      <meta name="description" content="Acacia tech solutions custom software, Web Applications, E-Commerce Development, Assets and Inventory Management System and IT consultant services for enterprise level" />
     </Helmet>
      <section className= 'bg-[#093157]'>
        <div className="text-center pt-10 lg:p-6 text-white">
          <h2 className="text-white text-[36px] font-medium lg:mt-6">The Services We Offer</h2>
          <p className=" mt-8 text-gray-200 text-xl lg:text-2xl lg:text-[18px] font-regular justify-center">Embrace the Digital Age: Empowering Your Business with 
          Technological Advancement for Future Success</p>
        </div>

        <div className='grid lg:grid-cols-2 lg:gap-7 text-white max-w-6xl mx-auto py-5 lg:py-10'>
          <div ref={ref1} className={`flex flex-col gap-3 mx-6 my-4 p-10 cursor-pointer ${isVisible1 ? "opacity-100" : "opacity-0"} bg-white shadow-lg shadow-[#4c91be] g-blue-500 transition ease-in-out delay-150 g-blue-500 hover:-translate-y-1 hover:scale-110 duration-500 `} >
            <div className="flex gap-5">
            <img className="w-16 h-16" src={ecomerce} alt=""/>
            <h4 className="text-gray-800 font-semibold text-[20px] lg:text-2xl pt-4">
            E-Commerce Development
            </h4>
            </div>
            <p className="text-gray-600 py-1 font-regular text-[18px]" >
            Our e-Commerce specialists handle everything for you, from storefront development and design to product
              inventory management, ensuring a comprehensive and enjoyable experience.
            </p>
            <a className=" hidden text-blue-700 font-bold flex-row mt-10 items-center gap-2" href="" >
              <span>See More</span>
              <svg
                className="w-8 h-8 mt-1.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25">
                <path style={{ fill: '#0050E5' }} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right" />
              </svg>
            </a>
          </div>
              
          <div ref={ref2} className={`flex flex-col gap-3 mx-6 my-4 p-10 cursor-pointer ${isVisible2 ? "opacity-100" : "opacity-0"} bg-white shadow-lg shadow-[#4c91be] text-gray-700 g-blue-500 transition ease-in-out delay-150 g-blue-500 hover:-translate-y-1 hover:scale-110 duration-300`} >
            <div className="flex gap-5">
              <img className="w-16 h-16" src={webapp} alt=""/>
            <h4 className="text-gray-800 font-semibold text-[20px] lg:text-2xl py-1">
            Custom Web Applications
            </h4>
            </div>
            <p  className="font-regular text-[18px]">
            Tailor made software becomes essential if you’re seeking functionalities that standard solutions 
            can’t provide, or if you want to outshine competitors through tech innovation.
            </p>
            {/* remember to add 'flex' when you remove 'hidden' className */}
            <a
            className="hidden text-blue-700 font-bold flex-row mt-10 items-center gap-2"
              href="" >
              <span>See More</span>
              <svg
                className="w-8 h-8 mt-1.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25">
                <path style={{ fill: '#0050E5' }} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right" />
              </svg>
            </a>
          </div>
          <div ref={ref3} className={`flex flex-col gap-3 mx-6 my-4 p-10 cursor-pointer ${isVisible3 ? "opacity-100" : "opacity-0"} bg-white shadow-lg shadow-[#4c91be] text-gray-700 g-blue-500 transition ease-in-out delay-150 g-blue-500 hover:-translate-y-1 hover:scale-110 duration-300`} >
            <div className="flex gap-5">
              <img className="w-16 h-16 my-auto" src={asetmgt} alt=""/>
            <h4 className="text-gray-800 font-semibold text-[20px] lg:text-2xl py-1">
            Assets and Inventory Management System
            </h4>
            </div>
            <p className="font-regular text-[18px]">
            Efficiently Streamline Your Business Operations with our Assets and Inventory Management System, Providing Real-Time Insights and Optimal Control.
            </p>
            <a
            className=" hidden text-blue-700 font-bold flex-row mt-10 items-center gap-2"
              href="" >
              <span>See More</span>
              <svg
                className="w-8 h-8 mt-1.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25">
                <path style={{ fill: '#0050E5' }} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right" />
              </svg>
            </a>
          </div>
          <div ref={ref4} className={`flex flex-col gap-3 mx-6 my-4 p-10 cursor-pointer ${isVisible4 ? "opacity-100" : "opacity-0"} bg-white shadow-lg shadow-[#4c91be] text-gray-700 g-blue-500 transition ease-in-out delay-150 g-blue-500 hover:-translate-y-1 hover:scale-110 duration-300`} >
            <div ref={ref4} className="flex gap-5">
              <img className={`w-16  h-16 my-auto ${isVisible4 ? "animate-slide-out-right" : ""}`} src={consultant} alt="" width={40}/>
            <h4 className="text-gray-800 font-semibold text-[20px] lg:text-2xl py-1"> 
              IT consultant  services for enterprise level
            </h4>
            </div>
            <p className="font-regular text-[18px]">
              we offer specialized IT consulting services tailored specifically for enterprise-level customers.
              With our expertise and innovative solutions, we strive to empower businesses to thrive in the ever-evolving digital landscape.
            </p>
            <a className="hidden text-blue-700 font-bold  flex-row mt-10 items-center gap-2" href="" >
              <span>See More</span>
              <svg
                className="w-8 h-8 mt-1.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25">
                <path style={{ fill: '#0050E5' }} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right" />
              </svg>
            </a>
          </div>   
        </div>
      </section>
     
    </>
  )
}
export default Solutions;




















