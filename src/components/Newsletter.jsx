import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter py-5 bg-dark text-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6} data-aos="fade-right">
            <h4 className="fw-bold mb-3">Sign Up For Newsletter</h4>
            <p className="text-muted">
              Get updates about our latest shop and special offers.
            </p>
          </Col>
          <Col md={6} data-aos="fade-left">
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="me-2"
              />
              <Button variant="primary">Subscribe</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
