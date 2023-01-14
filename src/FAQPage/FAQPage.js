import React from 'react'
import Testimonial from '../components/Testimonial'
import DownloadCont from '../DownloadCont/DownloadCont'
import FAQ from '../FAQ/FAQ'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const FAQPage = () => {
  return (
    <div>
        <Navbar/>
        <FAQ/>
        <DownloadCont/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default FAQPage