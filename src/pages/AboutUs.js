import { Button, Container } from "react-bootstrap";
import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";
import "./AboutUs.css";
import ContactForm from "./ContactForm";

function AboutUs() {
  const [showContactForm, setShowContactForm] = useState(false); // State for contact form visibility

  // Function to show contact form popup
  const showPopup = () => {
    setShowContactForm(true);
    document.body.style.overflow = "hidden";
  };

  // Function to hide contact form popup
  const hidePopup = () => {
    setShowContactForm(false);
    document.body.style.overflow = "auto";
  };


  return (
    <div className="about">
      <Container className="d-flex justify-content-between flex-wrap flex-md-nowrap">
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimationTitles title="LOCATION MAP" className="title" />
          <div className="d-flex">
            <ul className="points-list">
              <b>
                <li>5 Mins to Orion Uptown Mall</li>
                <li>15 Mins to Whitefield (Kadugodi) Metra Station</li>
                <li>25 Mins to International Tech Park</li>
              </b>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="d-flex flex-column"
        >
          <div className="d-flex">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12339.812837520169!2d77.7518036465876!3d13.048562202151912!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0f6cf5ad3bed%3A0xc7a238bcd3a48ce9!2sGodrej%20Whitefield%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1706778997118!5m2!1sen!2sin"
              className="location-map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{
                width: "35rem",
                height: "24rem",
                border: "none",
              }}
            ></iframe>
          </div>
          <div className="d-flex"></div>
        </motion.div>
      </Container>

      <div className="CTA-location-btn">
        <Button
          className="brochure-btn1 m-0 my-3 px-5 py-2 fs-5 fw-bold"
          onClick={showPopup}
        >
          Get in Touch
        </Button>

        {showContactForm && (
          <div className="contact-form-popup">
            <div className="contact-form-container">
              <Button className="close-btn" onClick={hidePopup}>
                &times;
              </Button>
              <ContactForm />
            </div>
          </div>
        )}
      </div>
      <Container className="d-flex justify-content-between flex-wrap flex-md-nowrap">
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimationTitles title="ABOUT US" className="title" />
          <p className="gray-50 mb-5">
            Established in 1897, the Godrej Group has its roots in India's
            Independence and Swadeshi movement. Our founder, Ardeshir Godrej, a
            lawyer-turned-serial entrepreneur failed with a few ventures before
            he struck gold with a locks business. Today, we enjoy the patronage
            of 1.1 billion consumers globally across consumer goods, real
            estate, appliances, agriculture and many other businesses. In fact,
            our geographical footprint extends beyond Earth, with our engines
            now powering many of India's space missions. At the heart of all of
            this is our people. We take much pride in fostering an inspiring
            workplace, with an agile and high-performance culture. We are also
            deeply committed to recognizing and valuing diversity across our
            teams.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="d-flex flex-column"
        >
          <div className=" d-flex">
            <img
              src={require("../images/properties/house_big-1.jpg")}
              alt="description"
              className="about-image"
            />
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default AboutUs;
