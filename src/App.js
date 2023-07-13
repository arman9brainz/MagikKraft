import React from 'react';
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar';
import VideoSection from './components/VideoSection/VideoSection';
import Work from './components/Work/Work';
import Faqs from './components/Faqs/Faqs';
import Details from './components/Details/Details';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <VideoSection/>
      <Work/>
      <Faqs/>
      <Details/>
      <Contact/>
      <Footer/>
    </>

  );
}

export default App;
