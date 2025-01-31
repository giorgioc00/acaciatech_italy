import { Helmet } from 'react-helmet-async';

import Header from './components/Header';
import Quote from './components/Quote'
import Solutions from './components/Solutions';
import Missionvision from './components/Missionvision';
import Contactus from './components/Contactus';
// import Price from './components/price';
import AboutUs from './components/About';
import Footer from './components/Footer';

import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Helmet>
        <title>Acacia Technologies PLC</title>
        <meta
          name="description"
          content="Acacia Technologies PLC is a custom software and web application development and design company."
        />
      </Helmet>
      <Navbar />
      <Header />
      <Quote />
      
      <div className=''>
       {/* <Solutions /> */}
      </div>
      <AboutUs />
      {/* <Price /> */}
      {/* <Missionvision /> */}
      <Contactus />
      <Footer />
    </>
  );
}

export default App;
