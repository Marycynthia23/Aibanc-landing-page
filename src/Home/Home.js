import React from 'react'
import Testimonial from '../components/Testimonial'
// import Footer from '../components/Footer'
import DownloadCont from '../DownloadCont/DownloadCont'
import FAQ from '../FAQ/FAQ'
import Footer from '../Footer/Footer'
import HeroSection from '../HeroSection/HeroSection'
import HowItWorks from '../HowItWorks/HowItWorks'
import Navbar from '../Navbar/Navbar'
// import Testimonals from '../Testimonals/Testimonals'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <HowItWorks/>
      <Testimonial/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default Home