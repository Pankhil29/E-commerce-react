import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer mt-5 pb-4 bg-dark" id="footer">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3">FashionHub</h5>
            <p className="text-light">
              Your one-stop destination for quality products at competitive
              prices. We're committed to providing excellent shopping
              experience.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-light">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </Col>

          <Col md={2} className="mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="fw-bold mb-3">Customer Service</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Track Order
                </a>
              </li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="fw-bold mb-3">Contact Info</h6>
            <ul className="list-unstyled">
              <li className="text-light mb-2">
                <i className="fas fa-phone me-2"></i>
                +1 (555) 123-4567
              </li>
              <li className="text-light mb-2">
                <i className="fas fa-envelope me-2"></i>
                info@shophub.com
              </li>
              <li className="text-light">
                <i className="fas fa-map-marker-alt me-2"></i>
                123 Business St, City, State 12345
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4 text-white" />

        <Row>
          <Col className="text-center">
            <p className="text-light mb-0">
              &copy; 2024 FashionHub. All rights reserved. |
              <a href="#" className="text-light text-decoration-none ms-2">
                Privacy Policy
              </a>{" "}
              |
              <a href="#" className="text-light text-decoration-none ms-2">
                Terms of Service
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
