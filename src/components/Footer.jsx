// ✅ components/Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer py-5">
      <Container>
        <Row className="mb-4">
          <Col md={3}>
            <h5 className="fw-bold text-white">Cara</h5>
            <p className="text-muted small">
              Quality and style redefined. Shop confidently with us.
            </p>
          </Col>
          <Col md={3}>
            <h6 className="text-uppercase text-white mb-3">Support</h6>
            <ul className="list-unstyled text-muted small">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Track Order</a>
              </li>
              <li>
                <a href="#">Returns & Refunds</a>
              </li>
              <li>
                <a href="#">Shipping Info</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h6 className="text-uppercase text-white mb-3">Company</h6>
            <ul className="list-unstyled text-muted small">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h6 className="text-uppercase text-white mb-3">Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="#">
                <FaFacebookF className="text-light footer-icon" />
              </a>
              <a href="#">
                <FaInstagram className="text-light footer-icon" />
              </a>
              <a href="#">
                <FaTwitter className="text-light footer-icon" />
              </a>
              <a href="#">
                <FaYoutube className="text-light footer-icon" />
              </a>
            </div>
          </Col>
        </Row>
        <hr className="border-secondary" />
        <Row>
          <Col className="text-center text-muted small">
            © {new Date().getFullYear()} Cara. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
