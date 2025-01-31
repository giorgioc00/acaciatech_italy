
import { Helmet } from 'react-helmet-async';

import { useIsVisible } from "./Scrollefect";
import { useEffect, useRef } from 'react';
import { aboutUsVideo} from "../images/img";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
    // Initialize AOS on component mount
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
const videoRef = useRef(null);
const sectionRef = useRef();
const isVisible = useIsVisible(sectionRef);

useEffect(() => {
    if (videoRef.current) {
    videoRef.current.playbackRate = 1;
    }
}, []);

useEffect(() => {
    if (videoRef.current) {
    if (isVisible) {
        videoRef.current.play();
    } else {
        videoRef.current.pause();
    }
    }
}, [isVisible]);

const handleVideoEnd = () => {
    if (videoRef.current) {
    videoRef.current.pause();
    }
};

return (
    <>
    <Helmet>
      <title>Acacia Technologies PLC</title>
      <meta name="description" content="Acacia Technologies, we are a software agency in Ethiopia, Hawassa. We specialize in developing unique and impactful websites that help businesses thrive online." />
    </Helmet>
    <section id="about-us" ref={sectionRef} className="relative h-[500px] py-10 overflow-hidden">
    {/* Video Background */}
    <div className="absolute inset-0 z-0">
    <video 
        ref={videoRef}
        className="w-full h-full object-cover"
        muted 
        playsInline
        onEnded={handleVideoEnd}
    >
        <source src={aboutUsVideo} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
        <div className="absolute inset-0 opacity-100"></div> {/* Optional: Overlay for better text visibility */}
    </div>

    <div class="relative z-10 top-10 h">
        <h2 className='text-center text-4xl text-[#082153]'> How Can We Help? </h2>
        <div className="flex gap-10 pt-16 justify-center items-center">
            <div
             data-aos="fade-right"
            className='flex flex-col justify-center items-center backdrop-filter backdrop-blur-3xl  w-72 h-56 border-2  border-[#b83535] text-[#1e4798] cursor-pointer rounded-2xl'>
                <h4 className='text-2xl'>Data</h4>
                <p className='px-4 font-regular text-lg pt-4'>Fuel optimal campaigns with thousands of high-performing audiences.</p>
            </div>
            <div 
            data-aos="zoom-in"
            className='flex flex-col justify-center items-center backdrop-filter backdrop-blur-3xl w-72 h-56 border-2  border-[#b83535] text-[#1e4798] cursor-pointer rounded-2xl'>
            <h4 className='text-2xl'>Analytics</h4>
            <p className='px-4 font-regular text-lg pt-4'>Fuel optimal campaigns with thousands of high-performing audiences.</p>
            </div>
            <div
            data-aos="fade-left"
            className='flex flex-col justify-center items-center w-72 h-56 border-2  border-[#b83535] text-[#1e4798] cursor-pointer rounded-2xl backdrop-filter backdrop-blur-3xl'>
            <h4 className='text-2xl'>Examples</h4>
            <p className='px-4 font-regular text-lg pt-4'>Fuel optimal campaigns with thousands of high-performing audiences.</p>
            </div>
        </div> 
    </div>
   
    </section>
  
    </>
);
};

export default AboutUs;


