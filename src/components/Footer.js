import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import Logo from "./images/logo.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="foot">
        <img src={Logo} alt="" />

        <div className="footerLinks">
          <ul>
            <li>
              <NavLink to="company">Our Company</NavLink>{" "}
            </li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Support@aibanc.co</li>
          </ul>
        </div>
        <div className="socialMedia">
          <button>
            <FaFacebookF />
          </button>
          <button>
            <BsTwitter />
          </button>
          <button>
            <BsInstagram />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
