import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Container className="conatiner-color">
        <div className=" footer-wrap1 d-flex justify-content-between flex-column flex-md-row flex-wrap  pb-4">
          <motion.div
            initial={{ y: -200 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="footer-wrap"
          >
            <img
              src={require("../images/logo/logo.png")}
              alt="logo"
              className="footer-logo"
            />
            <div className="link-wrapper">
              <Link
                className="link-primary link-underline-opacity-0"
                to={
                  "https://www.inspirabuilders.com/disclaimer-inspirabuilders/"
                }
              >
                Disclaimer
              </Link>
              <br />
              <Link
                className="link-primary link-underline-opacity-0"
                to={"https://www.inspirabuilders.com/privacy-policy/"}
              >
                Privacy Policy
              </Link>
            </div>
            <p className="rera">
              <b>RERA No. : </b> ACK/KA/RERA/1251/446/
              <br />
              PR/250124/007806{" "}
            </p>
          </motion.div>
          <span className="d-block d-md-none"></span>
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="d-flex"
          >
            <div className="me-5"></div>
            <div></div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className=" inspiraText   flex-column flex-md-row flex-wrap gray-100 pt-3"
        >
          <p>Copyright © 2023 Godrej Properties</p>
        </motion.div>
      </Container>
    </footer>
  );
}

export default Footer;
