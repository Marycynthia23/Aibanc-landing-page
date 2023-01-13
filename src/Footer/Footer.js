import React from 'react'
import "./Footer.css"
import logo from "../Images/logo.png"

const Footer = () => {
  return (
    <div className='FooterCont'>
        <div className="logo">
            <img src={logo}/>
        </div>
        <ul className="navmenu">
            <li><a href="">Our Company</a></li>
            <li><a href="">Contact us</a></li>
            <li><a href="">FAQs</a></li>
            <li><a href="">Support@aibanc.co</a></li>
        </ul>
        <div className="socials">
            <div className="social-media"><i class="fa-brands fa-facebook-f"></i></div>
            <div className="social-media"><i class="fa-brands fa-twitter"></i></div>
            <div className="social-media"><i class="fa-brands fa-square-instagram"></i></div>

        </div> 

    </div>
  )
}

export default Footer