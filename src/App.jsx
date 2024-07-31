import Header from './components/Header'
import Solutions from './components/Solutions'
import Missionvision from './components/Missionvision'
import Contactus from './components/Contactus'
import Price from './components/price'
import AboutUs from './components/About'

import Footer from './components/Footer'

import './App.css'



function App() {

  return (
     <>
      
       <Header/>
      <Solutions/>
       <AboutUs />
      <Price/> 
       <Missionvision/>
       <Contactus/>
      <Footer/>
    </>
  )
}
{/* <div ref={ref1} className={`absolute top-0 left-1/2 -translate-x-1/2 transform flex gap-6 justify-center pt-14 overflow-x-auto w-full px-10 ml-2 to-zinc-200 py-10 pl-6 transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"} `}> */}

export default App
