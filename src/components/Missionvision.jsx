import { useIsVisible } from "./Scrollefect";
import { useRef} from "react"
import { mision, vision } from "../images/img";
import "../index.css"


const Missionvision = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  
  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef();
  const isVisible4 = useIsVisible(ref4);

// bg-[#f3f4f7]
  

  return (
    <div>
      <section id="learn-more" className="bg-[#f3f4f7] py-10">
      <div className="text-center pt-10 lg:p-6">
          <h2 className="text-2xl text-[#093157] mx-6 lg:mt-6">WE’RE PASSIONATE ABOUT DIGITAL SUCCESS</h2>
          <p className=" mt-8 mb-8 text-gray-800 text-xl mx-4 lg:mx-40 lg:text-2xl lg:text-[18px] font-regular text-justify justify-center">
          We work with well-established companies in Ethiopia that are  willing to take their success 
          digitally to improve their digital marketing to get more customers and build a memorable markete brand.
          </p>
        </div>

     <div
        className="relative flex flex-col lg:flex-row gap-7 justify-center lg:max-h-[600px] px-3  max-w-6xl mx-auto"
      >
        <div
          ref={ref1}
          className={`shadow shadow-slate-300 lg:w-1/2 hover:border-[#f68e8b] border rounded-md transition ease-in-out delay-150 g-blue-500 hover:-translate-y-1 hover:scale-100 lg:hover:scale-110 duration-300  g-blue-500 ${isVisible1 ? "opacity-100" : "opacity-0"}`}
        >
          <div className="text-center">
            <h3 className="py-4 uppercase text-[#093157] text-2xl font-bold">
              Vision
            </h3>
            <div
            ref={ref3}
            className="text-center">
              <img src={vision} className= {`h-20 mx-auto ${isVisible3 ? "animate-zoom-in" : ""} `} alt="" />
            </div>
          </div>
          <p className="py-4 m-4  mt-10 leading-normal text-justify text-gray-700 text-lg italic font-regular ">
          &quot;We aspire to be the leading SaaS provider in the region, empowering
           our customers to achieve outstanding performance with our innovative
            solutions.&quot;
          </p>
        </div>
        <div
          
          ref={ref2}
          className={`shadow shadow-slate-300  g-blue-500   lg:w-1/2 hover:border-[#f68e8b] border rounded-md transition ease-in-out delay-150 g-blue-500 hover:-translate-y-1 hover:scale-100 lg:hover:scale-110 duration-300  ${isVisible2 ? "opacity-100" : "opacity-0"}`}
        >
          <div className="text-center">
            {/* text-[#093157]  */}
            <h1 className="text-center pt-4 uppercase text-[#093157] font-bold text-2xl">
              Mission
            </h1>
            <div
            ref={ref4}
            className="text-center">
              <img src={mision} className={`h-20 mx-auto ${isVisible4 ? "animate-zoom-in" : ""} `} alt="" />
            </div>
          </div>
          <p className="text-justify text-gray-700 m-4 text-lg italic lg:m-7 font-regular">
          &quot;To revolutionize the SaaS industry by empowering Ethiopian businesses
            with innovative and smart software solutions that leverage our expertise,
            experience, and local talents to enhance their management and performance
            so that they can explore their full output potential.&quot;
          </p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Missionvision;
