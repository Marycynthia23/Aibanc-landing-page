import React from 'react'
import Download from '../components/Download'
import Testimonial from '../components/Testimonial'
import FAQ from '../FAQ/FAQ'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Testimonial from "../components/Testimonial";
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const FAQPage = () => {
  return (
    <div>
        <Navbar/>
        <div style={{backgroundColor: "#F4F6FC"}}>
        <FAQ />
        </div>
        
        <Download/>
        <Testimonial/>
        <Footer/>
    </div>
  );
};

export default FAQPage;
