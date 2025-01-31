
import { Helmet } from 'react-helmet-async';

import { useIsVisible } from "./Scrollefect";
import { useEffect, useRef } from 'react';
import { aboutUsVideo} from "../images/img";


const AboutUs = () => {
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

    <div class="flex">
        <div className="relative z-10 text-center border-2 border-[#20456a] top-10 h-[350px] lg:p-6 mx-auto max-w-96 lg:max-w-3xl backdrop-filter backdrop-blur-sm">
        <h2 className="text-[#093157] text-[36px] font-medium lg:mt-6">Acacia Technologies PLC</h2>
        <p className="text-justify px-6 leading-normal flex mt-8 text-[#010000] text-xl lg:text-[18px] font-regular justify-center">
        Welcome to Acacia Technologies, we are a software agency in Ethiopia, Hawassa established in 2023
        by Giorjo Contenti. We specialize in developing unique and impactful websites that help businesses thrive online.
        </p>
    </div> 
    </div>
   
    </section>
  
    </>
);
};

export default AboutUs;


