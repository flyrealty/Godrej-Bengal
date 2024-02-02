import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo/logo.png";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { IoCall } from "react-icons/io5";

function NavBar() {
  const handleCallButtonClick = () => {
    window.location.href = "tel:7026170262";
  };

  return (
    <Navbar expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#" className="me-lg-5">
          <img className="logo" src={logo} alt="logo" />
        </Navbar.Brand>

        <div className="d-flex align-items-center order">
          <span className="line d-lg-inline-block d-none"></span>
          <Button
          className="btn-primary1-CTA d-none d-lg-inline-block"
          onClick={handleCallButtonClick}
        >
          <IoCall /> &nbsp; 9874561230
        </Button>
       
        
        
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
