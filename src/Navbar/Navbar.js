import React, { useState } from 'react'
import "./Navbar.css"
import Logo from "../Images/logo.png"
import googleplay from "../Images/googleplay.png"
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {


const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);

const closeMenu = () => setClick(false);

  return (

<div className="navbar" id="navbar">
      <nav className="navBar">
            <Link to="/"><img className="logo" src={Logo} alt="logo" /></Link>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#172B4D" }}/>
          ) : (
            <FaBars size={30} style={{ color: "#172B4D" }}/>
          )}
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
         
          <li className="nav-item">
            <NavLink to="/Company" onClick={closeMenu}>
            Our Company
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/Contactus" onClick={closeMenu}>
            Contact us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/faq" onClick={closeMenu}>
            FAQs
            </NavLink>
          </li>

          <li className='googleLink'>
                  <div className='googleBg'>
                    <img src={googleplay} alt="googleplay"/>
                    <div className='textgoogle'>
                      <p className='googleSm'>GET IT ON</p>
                      <p className='googleLg'>Google Play</p>
                    </div>
                  </div>
                  </li>
        </ul>
      </nav>
    </div>


   
  )
}

export default Navbar