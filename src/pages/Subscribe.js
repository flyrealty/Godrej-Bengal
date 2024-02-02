import React, { useState, useRef, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import AnimationTitles from "../components/functions/AnimationTitles";
import Thanks from "./Thanks";
import "./Subscribe.css";

function Subscribe() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  });
  const [phoneError, setPhoneError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [formError, setFormError] = useState("");
  const contactFormRef = useRef(null);

  useEffect(() => {
    if (showPopup) {
      window.history.pushState(null, "", "/about?thanks=true");
    } else {
      window.history.pushState(null, "", "/");
    }
  }, [showPopup]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "Phone") {
      validatePhoneNumber(value);
    }
  }

  function validatePhoneNumber(value) {
    const sanitizedValue = value.replace(/[^0-9]/g, "");
    const isValidLength = sanitizedValue.length === 10;
    const startsWithValidDigit = /^[6-9]/.test(sanitizedValue);

    if (!isValidLength || !startsWithValidDigit) {
      setPhoneError(
        "Phone number should have exactly 10 digits and start with 6, 7, 8, or 9."
      );
    } else {
      setPhoneError("");
    }
  }

  function validateForm() {
    if (!formData.Name || !formData.Email || !formData.Phone) {
      setFormError("Please fill in all required fields.");
      return false;
    }
    if (phoneError) {
      setFormError("Please enter a valid phone number.");
      return false;
    }
    return true;
  }

  function Submit(e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbxb7SPFy8jTsHyZo62JFzxV__WKZmWeP7Weuf9XIcEYvZb4Vkmb44VJoEeK5eSnZyBh/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        if (data.toLowerCase().includes("success")) {
          setShowPopup(true);

          setFormData({
            Name: "",
            Email: "",
            Phone: "",
            Message: "",
          });

          setPhoneError("");
        } else {
          console.log("Error submitting the form");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    contactFormRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  const inputStyle = {
    display: "block",
    height: "50px",
    marginTop: "20px",
    borderRadius: "4px",
    padding: "14px",
    backgroundColor: "white",
    width: "92%",
  };

  const submitButtonStyle = {
    width: "100%",
    backgroundColor: "#27262e",
    height: "3rem",
    marginTop: "20px",
    borderRadius: "5px",
    padding: "5px",
    cursor: "pointer",
    color: "white",
  };

  return (
    <div className="subscribe">
      <Container>
        <AnimationTitles
          title={`Contact us:`}
          className="title text-center mx-auto w-75"
        />
        <p className="gray-50 text-center mt-3 mb-5">
          We will notify you as soon as new property is added. You can also
          follow us on social media for real time updates
        </p>
        <div className=" contact-form d-flex justify-content-between align-items-center mx-auto p-1">
          <form
            className="formm"
            ref={contactFormRef}
            onSubmit={(e) => {
              e.preventDefault();
              Submit(e);
            }}
          >
            <input
              className="bg-transparent border-0  ps-1 w-100"
              placeholder="Your Name *"
              name="Name"
              type="text"
              value={formData.Name}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <input
              className="bg-transparent border-0  ps-1 w-100"
              placeholder="Email Address *"
              name="Email"
              type="text"
              value={formData.Email}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <input
              className="bg-transparent border-0  ps-1 w-100"
              placeholder="Phone/Mobile number *"
              name="Phone"
              type="text"
              value={formData.Phone}
              onChange={handleInputChange}
              style={inputStyle}
            />
            {phoneError && (
              <p
                style={{
                  color: "red",
                  marginLeft: "28px",
                  marginTop: "5px",
                }}
              >
                {phoneError}
              </p>
            )}
            <input
              className="bg-transparent border-0  ps-1 w-100"
              placeholder="Messages (if any)"
              name="Message"
              type="text"
              value={formData.Message}
              onChange={handleInputChange}
              style={{
                display: "block",
                height: "50px",
                marginTop: "20px",
                borderRadius: "4px",
                marginBottom: "1rem",
                padding: "14px",
                backgroundColor: "white",
                width: "92%",
              }}
            />
            <input value={new Date()} name="DateReceived" hidden readOnly />
            {formError && (
              <p
                style={{
                  color: "red",
                  marginLeft: "28px",
                  marginTop: "5px",
                }}
              >
                {formError}
              </p>
            )}
            <div className="submit--btn">
              <Button type="submit" className="m-0" style={submitButtonStyle}>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Container>

      {showPopup && <Thanks setShowPopup={setShowPopup} />}

      <style>
        {`
          @media only screen and (max-width: 768px) {
            html,
            body {
              width: 100%;
              height: 100%;
              padding: 0;
              margin: 0;
              overflow-x: hidden;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Subscribe;
