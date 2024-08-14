import { useIsVisible } from "./Scrollefect";
import React, { useState} from 'react';
import {useRef} from 'react'
import emailjs from '@emailjs/browser';
import Spinner from './Spinner';

const Contactus = () => {

const [loading, setLoading] = useState(false);
const form = useRef();
 const preFilledMessage = `[YOU CAN TYPE YOUR OWN MSG]
 Dear AcaciaTech Development Team, I am reaching out to propose
a collaboration on a new project. We are looking to create a comprehensive website and mobile application that aligns
 with our vision and goals.

Project Overview:
👉Website: The website will serve as the primary platform for our services, featuring an intuitive user interface,
seamless navigation, and robust backend functionalities.
👉Mobile Application: The mobile application will complement the website, providing users with on-the-go access
to our services. It will be developed using React Native for cross-platform compatibility.

Key Features:
- User authentication and profiles
- Real-time data synchronization
- Integration with third-party APIs
- Secure payment processing
- Responsive design for all devices

We believe that your expertise Software Development
makes you an ideal partner for this project. We are excited about the potential of this collaboration and are eager to discuss
 further details.

Please let us know your availability for a meeting to discuss this proposal in more detail. We look forward to hearing
from you soon.

Best regards,
[Phone Number]`;
 const [message, setMessage] = useState(preFilledMessage);

 const handleChange = (e) => {
   setMessage(e.target.value);
 };

const sendEmail = (e) => {
  e.preventDefault();

  // Basic form validation
  const name = form.current.name.value;
  const email = form.current.email.value;
  const message = form.current.message.value;

  if (!name || !email || !message) {
    window.alert('Please fill in all fields.');
    return;
  }

  // Start loading
  setLoading(true);

  emailjs.sendForm('service_u63erek', 'template_berv3y6', form.current, {
    publicKey: 'QofdXISfDZyHkHMDM',
  }).then(
    () => {
      console.log('SUCCESS!');
      window.alert('Email sent successfully!');
      
      form.current.reset();
      form.current.message.value = '';
    },
    (error) => {
      console.log('FAILED...', error.text);
      window.alert('Failed to send email. Please try again later.');
    }
  )
  .finally(() => {
    // Stop loading
    setLoading(false);
  });
}

  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  return (
    <>
  <section id="contact-us" className="bg-[#0f2759] max-h-[700px] py-14 relative">
    <div className="max-w-5xl mx-auto">
      <div ref={ref1} className={`absolute top-0 left-1/2 -translate-x-1/2 transform flex gap-6 justify-center pt-14 overflow-x-auto w-full px-10 ml-2 lg:ml-0 to-zinc-200 py-10 pl-10 transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"} `}>
        
      <div className="flex-shrink-0 h-40 w-40 shadow-xl bg-white flex flex-col justify-center items-center ml-20 lg:ml-0   jscroll-snap-type-x mandatory z-30">
      <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
           <defs>
             <style>{`.cls-1{fill:#0050E5}`}</style>
           </defs>
           <g id="Location">
             <path className="cls-1" d="M27 12.27V12a11 11 0 0 0-22 0v.27C5 17 9 21 10 22c3.56 3.56 4.59 6.62 4.88 8.08A1.15 1.15 0 0 0 16 31a1.15 1.15 0 0 0 1.12-.92c.29-1.46 1.32-4.52 4.88-8.08 1-1 5-5 5-9.73z"/>
             <circle cx="16" cy="12" r="8" fill="#ffffff"/>
             <path className="cls-1" d="M20 10.12a2.12 2.12 0 0 1-.62 1.5l-3.76 3.76a2.12 2.12 0 0 1-3-3l3.76-3.76a2.12 2.12 0 0 1 3.62 1.5z"/>
             <path d="M20 10.12a2.12 2.12 0 0 1-.62 1.5L17.5 13.5l-3-3 1.88-1.88a2.12 2.12 0 0 1 3.62 1.5z" fill="#ffffff"/>
           </g>
        </svg>
           <p className="uppercase font-semibold">Address</p>
           <p className="text-gray-700 ">Trufat Hawassa</p>
           <p className="text-gray-700 ">worku buche tower</p>
             
        </div>
        <div className="flex-shrink-0 h-40 w-40 shadow-xl bg-white flex flex-col justify-center items-center">
        <svg className="mb-6 w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
          <defs>
            <style>{`.cls-2{fill:#0440E5}.cls-3{fill:#0050E5}`}</style>
          </defs>
          <g id="calling">
            <path d="M38.29 38.29 37 39.64a3.22 3.22 0 0 1-3.05.86l-.25-.06C19.83 37 11.05 28.17 7.56 14.34l-.06-.24a3.22 3.22 0 0 1 .86-3l1.35-1.39a3.24 3.24 0 0 1 4.58 0l4 4a3.23 3.23 0 0 1 0 4.58l-.91.91a5.31 5.31 0 0 0-.25 7.16 41.75 41.75 0 0 0 4.51 4.51 5.31 5.31 0 0 0 7.16-.25l.91-.91a3.3 3.3 0 0 1 4.58 0l4 4a3.23 3.23 0 0 1 0 4.58z" fill="#0030E5"/>
            <path className="cls-2" d="M16 17a1 1 0 0 1-.71-.29l-7-7a1 1 0 0 1 1.42-1.42l7 7a1 1 0 0 1 0 1.42A1 1 0 0 1 16 17zM36 37a1 1 0 0 1-.71-.29l-7-7a1 1 0 0 1 1.42-1.42l7 7a1 1 0 0 1 0 1.42A1 1 0 0 1 36 37z"/>
            <path className="cls-3" d="M32 24a1 1 0 0 1-1-1 6 6 0 0 0-6-6 1 1 0 0 1 0-2 8 8 0 0 1 8 8 1 1 0 0 1-1 1z"/>
            <path className="cls-3" d="M37 24a1 1 0 0 1-1-1 11 11 0 0 0-11-11 1 1 0 0 1 0-2 13 13 0 0 1 13 13 1 1 0 0 1-1 1z"/>
            <path className="cls-3" d="M42 24a1 1 0 0 1-1-1A16 16 0 0 0 25 7a1 1 0 0 1 0-2 18 18 0 0 1 18 18 1 1 0 0 1-1 1z"/>
            <path d="m39.71 32.29-4-4a5.26 5.26 0 0 0-7.42 0l-.91.91a3.24 3.24 0 0 1-4.44.15 38.62 38.62 0 0 1-4.29-4.29 3.24 3.24 0 0 1 .15-4.44l.91-.91a5.26 5.26 0 0 0 0-7.42l-4-4a5.26 5.26 0 0 0-7.42 0L7 9.64a5.22 5.22 0 0 0-1.39 4.95l.06.24c3.68 14.6 13 23.87 27.54 27.55l.25.06a4.74 4.74 0 0 0 1.24.16 5.28 5.28 0 0 0 3.71-1.55l1.35-1.34a5.26 5.26 0 0 0-.05-7.42zm-1.42 6L37 39.64a3.22 3.22 0 0 1-3.05.86l-.25-.06C19.83 37 11.05 28.17 7.56 14.34l-.06-.24a3.22 3.22 0 0 1 .86-3l1.35-1.39a3.24 3.24 0 0 1 4.58 0l4 4a3.23 3.23 0 0 1 0 4.58l-.91.91a5.31 5.31 0 0 0-.25 7.16 41.75 41.75 0 0 0 4.51 4.51 5.31 5.31 0 0 0 7.16-.25l.91-.91a3.3 3.3 0 0 1 4.58 0l4 4a3.23 3.23 0 0 1 0 4.58z" fill="#192835"/>
          </g>
        </svg>
          <p className="mb-3 uppercase font-semibold">Phone Number</p>
          <a href="tel:+251 988077707" className="text-gray-700">+251 988077707</a>
        </div>
        <div className="flex-shrink-0 h-40 w-40 shadow-xl bg-white flex flex-col justify-center items-center">
        <svg className="mb-6 w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
          <path fill="#0030E5" d="M503.756 118.065c0-9.069-7.42-16.489-16.489-16.489H24.733c-9.069 0-16.489 7.42-16.489 16.489v275.87c0 9.069 7.42 16.489 16.489 16.489h462.533c9.069 0 16.489-7.42 16.489-16.489v-275.87z"/>
          <path style={{ opacity: 0.1, enableBackground: 'new' }} d="M255.996 230.032 9.306 399.687c2.148 5.713 7.372 9.949 13.636 10.634l233.053-160.278L489.05 410.321c6.267-.683 11.492-4.918 13.641-10.631L255.996 230.032z"/>
          <path style={{ opacity: 0.2, enableBackground: 'new' }} d="M487.267 101.576H24.733c-9.069 0-16.489 7.42-16.489 16.489v2.199l247.755 172.539 247.755-172.539v-2.199c.002-9.069-7.418-16.489-16.487-16.489z"/>
          <path fill="#0030E5" d="M487.267 101.576H24.733c-4.091 0-7.839 1.52-10.73 4.01l241.996 168.529 241.996-168.529c-2.89-2.49-6.637-4.01-10.728-4.01z"/>
          <path fill="#ffffff" d="M487.267 93.332H24.733C11.095 93.332 0 104.427 0 118.065v275.87c0 13.639 11.095 24.733 24.733 24.733h462.533c13.639 0 24.733-11.095 24.733-24.733v-275.87c.001-13.638-11.095-24.733-24.732-24.733zm-9.777 16.489L256 264.068 34.51 109.821h442.98zm18.021 284.114c0 4.547-3.698 8.244-8.244 8.244H24.733c-4.547 0-8.244-3.698-8.244-8.244v-275.87c0-.229.016-.453.034-.677L251.288 280.88a8.243 8.243 0 0 0 9.422 0l234.765-163.492c.019.224.034.448.034.677v275.87h.002z"/>
        </svg>
          <p className="mb-3 uppercase font-semibold">Email</p>
          <a href="mailto:ceo@acaciatech.et" className="text-gray-700 text-lg px-4">ceo@acaciatech.et</a>
        </div>
      </div>
      
      <div ref={ref2} className={`lg:max-w-2xl bg-white mx-auto my-16 pt-10 text-center shadow-3xl transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}` }>
        <form ref={form} onSubmit={sendEmail} 
        className="px-4 mt-10 ">
          <h2 className=" mt-10 py-16 pb-6 uppercase">Contact us</h2>
          <div className="flex flex-col items-center mx-12">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name or Campany"
              className="w-full border border-gray-00 rounded-md py-2 px-3 my-2 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="name@gmail.com"
              className="w-full border border-gray-300 rounded-md py-2 px-3 my-2 focus:outline-none focus:border-blue-500"
            />
            <textarea
              name="message"
              id="message"
              cols="10"
              rows="5"
              value={message} // Set the value to the state
              placeholder="Message"
              className="w-full border border-gray-300 rounded-md py-2 px-3 my-2 focus:outline-none focus:border-blue-500"
              onChange={handleChange} // Update the state on change
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#093157] text-white py-2 text-[18px] px-6 rounded-md mt-4 mb-4 border-2 hover:border-[#093157] hover:bg-[#94101d] focus:outline-none uppercase focus:bg-blue-700">
               {loading ? <Spinner />: 'SEND'}
          </button>
        </form>
      </div>
    </div>
  </section>
    </>
  )
}
export default Contactus