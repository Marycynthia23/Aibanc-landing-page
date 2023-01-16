import React from 'react'
import "./Footer.css"
import logo from "../Images/logo.png"
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='FooterCont'>
        <div className="logo">
            <img src={logo} alt="nav-logo"/>
        </div>
        <ul className="navmenu">
            <li><a className="footerlist" href="/company">Our Company</a></li>
            <li><a className="footerlist" href="//Contactus ">Contact us</a></li>
            <li><a className="footerlist" href="/faq">FAQs</a></li>
            <li><a className="footerlist" href="mailto:Support@aibanc.co">Support@aibanc.co</a></li>
        </ul>
        <div className="socials">
            <div className="social-media"><FaFacebookF /></div>
            <div className="social-media"><BsTwitter /></div>
            <div className="social-media"><BsInstagram /></div>

        </div> 

    </div>
  )
}

export default Footer