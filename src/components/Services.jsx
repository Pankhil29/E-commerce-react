import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaTruck, FaLock, FaUndo, FaHeadphones } from "react-icons/fa";
import "../styles/Services.css";

const Services = () => {
  return (
    <section className="services-section py-5 bg-light">
      <Container>
        <Row className="text-center">
          <Col md={3} sm={6} className="mb-4" data-aos="fade-up">
            <FaTruck size={36} className="text-primary mb-2" />
            <h6 className="fw-bold">Free Shipping</h6>
            <p className="small text-muted">On all orders over $50</p>
          </Col>
          <Col md={3} sm={6} className="mb-4" data-aos="fade-up">
            <FaUndo size={36} className="text-primary mb-2" />
            <h6 className="fw-bold">Easy Returns</h6>
            <p className="small text-muted">30-day return policy</p>
          </Col>
          <Col md={3} sm={6} className="mb-4" data-aos="fade-up">
            <FaLock size={36} className="text-primary mb-2" />
            <h6 className="fw-bold">Secure Payments</h6>
            <p className="small text-muted">100% secure payment</p>
          </Col>
          <Col md={3} sm={6} className="mb-4" data-aos="fade-up">
            <FaHeadphones size={36} className="text-primary mb-2" />
            <h6 className="fw-bold">24/7 Support</h6>
            <p className="small text-muted">Always here to help</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
