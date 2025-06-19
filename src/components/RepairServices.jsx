import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import repairImg from "../assets/heroimg.avif";
import "../styles/RepairServices.css";

const RepairServices = () => {
  return (
    <section className="repair-section py-5 bg-dark text-white">
      <Container>
        <Row className="align-items-center">
          <Col md={6} data-aos="fade-right">
            <img src={repairImg} alt="repair" className="img-fluid" />
          </Col>
          <Col md={6} data-aos="fade-left">
            <h2 className="fw-bold">Repair Services</h2>
            <p className="mt-3">
              Fast and reliable repair solutions for your gadgets. Professional
              support and parts replacement.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RepairServices;
