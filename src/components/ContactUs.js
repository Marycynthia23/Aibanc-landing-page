// import { Download } from "@mui/icons-material";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./ContactUs.css";
import ContactPicture from "./images/contact.png";
import Testimonial from "./Testimonial";
import Download from "./Download";


function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(formData);

    // Details for email
    let toSend = {
      name: formData.name,
      email: formData.email,
      phone: formData.subject,
      message: formData.message,
    };
    // sending emails to users
    emailjs
      .send("service_tmxdsnc", "template_2rxfrml", toSend, "l-Ga1egKjNHY92Thv")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormData({
    name: "",
    email: "",
    subject: "",
    message: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="Contact-container">
        <div className="contact">
          <div className="con-contact-form">
            <div className="contact-form">
              <h3>Get in touch</h3>
              <form onSubmit={sendEmail}>
                <div className="form-field">
                  <div className="inner-field">
                    <label className="label">Full name</label>
                    <input type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange} placeholder="Enter full name" />
                  </div>

                  <div className="inner-field">
                    <label className="label">Email Address</label>
                    <input type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                     placeholder="Enter email address" />
                  </div>
                </div>

                <div className="inner-field22">
                  <label className="label">Full name</label>
                  <input type="text" name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your fullname" />
                </div>

                <div className="inner-field22">
                  <label className="label">Email address</label>
                  <input type="text" placeholder="Enter your email address" />
                </div>

                <div className="inner-field2">
                  <label className="label">Subject</label>
                  <input type="text" name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Kindly select a subject" />
                </div>

                <div className="message">
                  <label className="label">Message</label>
                  <textarea placeholder="Message......" 
                  value={formData.message}
                  onChange={handleChange}
                  name="message"
                  rows="7"
                  cols="40"
                 
             />
                </div>

                <button type="submit">Send</button>
              </form>
            </div>
          </div>
          <div className="contact-picture">
            <img src={ContactPicture} alt="" />
          </div>
        </div>
      </div>
      <FAQ />
      <Download />
      <div style={{ background: "#fff" }}>
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;
