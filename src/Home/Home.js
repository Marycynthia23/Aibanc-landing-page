import React from "react";
import Download from "../components/Download";
import Testimonial from "../components/Testimonial";
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import HowItWorks from "../HowItWorks/HowItWorks";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div className="homeCont">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Download />
      <Testimonial />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
