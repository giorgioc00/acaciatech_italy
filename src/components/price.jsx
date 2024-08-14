import React from 'react'

const price = () => {
  return (
    <>       
      <section id='' className='price-bg bg-cover bg-center'>
        <div className="text-center pb-4 lg:pb-0 pt-10 lg:pt-4 lg:p-6 text-[#093157]">
          <h2 className="text-3xl font-medium lg:my-6">Our fixed packages</h2>
        </div>
        <div className='flex flex-col justify-center lg:flex-row gap-2 mb-0'>
          <div className='bg-[#093157] h-[450px] lg:w-[350px] mx-6 my-4 p-10 text-center shadow-lg text-white shadow-[#4c91be]'>
            <p className='lg:text-xl text-center  text-3xl font-medium lg:mt-6'>Landing Page</p>
            <span className='text-2xl lg:ml-4'>19,000 </span><small>ETB/once</small>
           <div className='m-4'>
              <ul className='flex flex-col gap-1'>
              <li class='flex items-center'>
                <span class='mx-2 bg-[#94101d] rounded-full w-6 h-6 text-white flex items-center justify-center'>&#10003;</span>
                <span class='mx-2 text-left'>Responsive</span>
              </li>
              <li class='flex items-center'>
                <span class='mx-2 bg-[#94101d] rounded-full w-6 h-6 text-white flex items-center justify-center'>&#10003;</span>
                <span class='mx-2 text-left'>Can Update your Info</span>
              </li>
              <li class='flex items-center'>
                <span class='mx-2 bg-[#94101d] rounded-full w-6 h-6 text-white flex items-center justify-center'>&#10003;</span>
                <span class='mx-2 text-left'>Informative</span>
              </li>
              <li class='flex items-center'>
                <span class='mx-2 bg-[#94101d] rounded-full w-6 h-6 text-white flex items-center justify-center'>&#10003;</span>
                <span class='mx-2 text-left'>Add Google Map</span>
              </li>
              </ul>
            </div>
            <a href="#contact-us" className="mx-auto mt-24 h-10 flex flex-row items-center justify-center rounded-lg text-white  bg-[#94101d] hover:bg-red-950 uppercase transition-all">
              Buy Now
            </a>
          </div>
          <div className='bg-gradient-to-r from-[#093157] to-[#21629f] bg-opacity-50 rounded-md border-t-4 border-[#b73327] text-center h-[450px] lg:w-[350px] mx-6 my-4  shadow-lg text-white shadow-[#4c91be] lg:scale-105'>
            <div className='relative -top-4 left-56 h-10 my-8 rotate-45 bg-red-800 w-36'>
              <p className='absolute ml-3 py-2'>Most requested</p>
            </div>
            <p className='lg:text-xl text-3xl font-medium -mt-8'>Static Website</p>
            <p className=' '>Informative and business details</p>
             <span className='text-2xl px-1'>29,000</span><small>ETB/once</small>
            
            <div className='m-4 mx-12'>
              <ul className='flex flex-col gap-1'>
              <li className='flex flex-row'><span className='mx-2 bg-[#94101d] rounded-[100%] w-6'>&#10003;</span><span className='mx-2'>Responsive</span></li>
              <li class='flex items-center'>
                <span class='mx-2 bg-[#94101d] rounded-full w-6 h-6 text-white flex items-center justify-center'>&#10003;</span>
                <span class='mx-2 text-left'>Can Update your Info</span>
              </li>

              <li className='flex flex-row'><span className='mx-2 bg-[#94101d] rounded-[100%] w-6'>&#10003;</span><span className='mx-2'>Add Google Map</span> </li>
              <li className='flex flex-row'><span className='mx-2 bg-[#94101d] rounded-[100%] w-6'>&#10003;</span><span className='mx-2'>Blog included</span></li>
              </ul>
            </div>
            <a href="#contact-us" className="mt-14 mx-8 h-10 pb-1 flex flex-row items-center justify-center rounded-lg text-white  bg-[#94101d] hover:bg-red-950 uppercase transition-all">
              Buy Now
            </a>
          </div>
          <div className='bg-[#093157] text-center h-[450px] lg:w-[350px] mx-6 my-4 p-10 shadow-lg text-white shadow-[#4c91be] '>
            <p className='lg:text-xl text-3xl font-medium lg:mt-6'>Custom Software</p>
            <span className='text-2xl px-1'> 50,000</span><small>ETB</small><span className='text-2xl'>+</span>  
            <div className='m-4'>
              <ul className='flex flex-col gap-1'>
              <li class='flex items-center'>
                <span class='mx-2 bg-[#94101d] rounded-full w-6 h-6 text-white flex items-center justify-center'>&#10003;</span>
                <span class='mx-2'>Responsive</span>
              </li>
              <li class='flex items-center'>
                <span class='mx-2 bg-[#94101d] rounded-full w-6 h-6 text-white flex items-center justify-center'>&#10003;</span>
                <span class='mx-2'>Tailor made</span>
              </li>
              <li class='flex items-center'>
                <span class='mx-2 bg-[#94101d] rounded-full w-6 h-6 text-white flex items-center justify-center'>&#10003;</span>
                <span class='mx-2 text-left'>Full-stack Application</span>
              </li>
              <li class='flex items-center'>
                <span class='mx-2 bg-[#94101d] rounded-full w-6 h-6 text-white flex items-center justify-center'>&#10003;</span>
                <span class='mx-2 text-left'>Specific Functionality</span>
              </li>
              </ul>
            </div>
            <a href="#contact-us" className="flex flex-row items-center justify-center mt-24 mx-auto h-10 pb-1 rounded-lg text-white  bg-[#94101d] hover:bg-red-950 uppercase transition-all">
            Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
export default price

