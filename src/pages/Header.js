import React, { useState, useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";
import CountDown from "../components/functions/CountDown";
import introLarge from "../images/intro-bg.jpg";
import introSmall from "../images/intro-gb.jpg";
import ContactForm from "./ContactForm";
import "./Header.css";

function Loading() {
  const [introImage, setIntroImage] = useState(introLarge);
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIntroImage(introSmall);
      } else {
        setIntroImage(introLarge);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to toggle contact form visibility
  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <div className="loading position-relative">
      <div className="banner-container">
        <img className="intro" src={introImage} alt="Introduction" />
      </div>
      <Container className="d-flex justify-content-between align-items-center gap-md-5 flex-column flex-md-row mt-3 mt-xl-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.1 }}
        >
          <AnimationTitles title="Forest Themed Apartments in Budigere Cross." />
          <p className="gray-90 mt-3 fs-5">
            <b>Godrej Properties,</b> A 39 floor high-rise apartment in East
            Bengaluru with a sprawling 28 acres of land parcel, with a massive
            central courtyard with 4 types of gardens. Godrej Bengal Lamps
            offers a perfect blend of luxury amenities and the natural
            tranquility of the surroundings.
          </p>

          <Button
            className="brochure-btn m-0 my-3 px-5 py-2 fs-5 fw-bold"
            onClick={showPopup}
          >
            Contact Us
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 400 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          className="w-100 my-5"
        >
          <div className="cards">
            <Card className="bg-black-100 rounded">
              <Card.Body className="p-2">
                <div className="rounded overflow-hidden position-relative">
                  <Card.Img
                    variant="top"
                    alt="img"
                    src={require("../images/image1.webp")}
                  />
                </div>
                <h5 className="mt-2 text-white fw-normal">Godrej</h5>

                <div className="d-flex">
                  <div className="me-3">
                    <CountDown h={18} m={21} s={8} />
                    <span className="gray-90">Hurry up !</span>
                  </div>
                  <div></div>
                </div>
              </Card.Body>
            </Card>
            <Card className="bg-black-100">
              <Card.Body className="p-2">
                <div className="rounded overflow-hidden position-relative">
                  <Card.Img
                    variant="top"
                    alt="img"
                    src={require("../images/image2.webp")}
                  />
                </div>
                <h5 className="mt-2 text-white fw-normal">Properties</h5>

                <div className="d-flex">
                  <div className="me-3">
                    <CountDown h={23} m={16} s={11} />
                    <span className="gray-90">Hurry up !</span>
                  </div>
                  <div></div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default Loading;
