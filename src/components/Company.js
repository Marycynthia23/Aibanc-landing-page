import React from "react";
import "./Company.css";
import CompanyImage from "./images/companyImage.png";
import { MdSecurity } from "react-icons/md";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { RiSearchEyeLine } from "react-icons/ri";
import { MdPeopleOutline } from "react-icons/md";
import Testimonial from "./Testimonial";
import Download from "./Download";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Company() {
  return (
    <>
    <Navbar/>
    <div className="CompanyPage">
      <div className="company">
        <div className="companyText">
          <h1 className="paragraph1">
            We make credit a part of your everyday life.
          </h1>
          <p className="paragraph2">
            Apply early, get approved and get on with life. Aibanc is changing
            the way you think about credit by helping you get access to your
            money faster and cheaper.
          </p>
        </div>
        <div className="companyImage">
          <img src={CompanyImage} alt="companyImage" />
        </div>
      </div>

      <div className="value_container">
        <p className="value_paragraph1">Our Values</p>
        <div className="values">
          <div className="container">
            <button className="value_button security">
              <MdSecurity className="font" />
            </button>
            <p className="p1">Security</p>
            <p className="p2">
              We ensure the security of financial transactions and data of our
              users.
            </p>
          </div>

          <div className="container">
            <button className="value_button transparency">
              <RiSearchEyeLine className="font" />
            </button>
            <p className="p1">Transparency</p>
            <p className="p2">
              We provide clear, concise information about their products and
              services
            </p>
          </div>

          <div className="container">
            <button className="value_button efficiency">
              <MdPeopleOutline className="font" />
            </button>
            <p className="p1">Efficiency</p>
            <p className="p2">
              We use technology to automate and streamline financial processes
            </p>
          </div>

          <div className="container">
            <button className="value_button innovation">
              <MdOutlineTipsAndUpdates className="font" />
            </button>
            <p className="p1">Innovation</p>
            <p className="p2">
              We use technology to innovate and improve financial services
            </p>
          </div>
        </div>
      </div>

      <Download />

      <Testimonial />
      <Footer/>
    </div>
    </>
  );
}

export default Company;
