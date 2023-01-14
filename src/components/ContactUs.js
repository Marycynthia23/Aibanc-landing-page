import React, { useState } from "react";
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./ContactUs.css";
import ContactPicture from "./images/contact.png";
import Testimonial from "./Testimonial";

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
              </div>

              <div className="inner-field2">
                <label className="label">Subject</label>
                <input type="text" placeholder="Kindly select a subject" />
              </div>

              <div className="message">
                <label className="label">Message</label>
                <textarea placeholder="Message......"  
                value={textarea} 
                onChange={handleChange}/>
              </div>

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <div className="contact-picture">
          <img src={ContactPicture} alt="" />
        </div>
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
