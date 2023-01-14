// import { Download } from "@mui/icons-material";
import React from "react";
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./ContactUs.css";
import ContactPicture from "./images/contact.png";
import Testimonial from "./Testimonial";
import Download from "./Download";

function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="Contact-container">
        <div className="contact">
          <div className="con-contact-form">
            <div className="contact-form">
              <h3>Get in touch</h3>
              <form>
                <div className="form-field">
                  <div className="inner-field">
                    <label className="label">Full name</label>
                    <input type="text" placeholder="Enter full name" />
                  </div>

                  <div className="inner-field">
                    <label className="label">Email Address</label>
                    <input type="text" placeholder="Enter email address" />
                  </div>
                </div>

                <div className="inner-field2">
                  <label className="label">Subject</label>
                  <input type="text" placeholder="Kindly select a subject" />
                </div>

                <div className="message">
                  <label className="label">Message</label>
                  <textarea placeholder="Message......" />
                </div>

                <button type="submit">Send</button>
              </form>
            </div>
          </div>
          <div className="contact-picture">
            <img src={ContactPicture} alt="" />
          </div>
        </div>
        <br />
        <br />
        <FAQ />
        <Download />
        <Testimonial />
        <Footer />
      </div>
 tochi

      <br/>
      <br/>
      <div style={{background: "#fff"}}>
      <Testimonial/>
      <Footer/>
      </div>
    </div>
master
    </>
  );
}

export default ContactUs;
