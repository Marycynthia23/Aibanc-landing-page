// import { Download } from "@mui/icons-material";
import React, { useState } from "react";
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./ContactUs.css";
import ContactPicture from "./images/contact.png";
import Testimonial from "./Testimonial";
import Download from "./Download";

function ContactUs() {
  const [name, setName] = useState("");
  const [textarea, setTextarea] = useState("");

  const handleChange = (e)=>{
    setName(e.target.value)
    setTextarea(e.target.value)

  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <>
    <Navbar/>
    <div className="Contact-container">
      <div className="contact">
        <div className="con-contact-form">
          <div className="contact-form">
            <h3>Get in touch</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <div className="inner-field">
                  <label className="label">Full name</label>
                  <input type="text" value={name}
                    onChange={handleChange}
                     placeholder="Enter full name" />
                </div>

                <div className="inner-field">
                  <label className="label">Email Address</label>
                  <input type="text" 
                  onChange={handleChange}
                  placeholder="Enter email address" />
                </div>

                <div className="message">
                  <label className="label">Message</label>
                  <textarea placeholder="Message......" />
                </div>

              <div className="message">
                <label className="label">Message</label>
                <textarea placeholder="Message......"  
                value={textarea} 
                onChange={handleChange}/>
              </div>

              <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
        <br />
        <br />
        <FAQ />
        <Download />
        <Testimonial />
        <Footer />
      </div>


      <br/>
      <br/>
      <div style={{background: "#fff"}}>
      <Testimonial/>
      <Footer/>
      </div>
    </div>

    </>
  );
}

export default ContactUs;
