import React from "react";
import { Container, Button } from "react-bootstrap";
import heroImg from "../assets/heroimg.avif";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <Container className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
        <div data-aos="fade-right">
          <h1 className="display-4 fw-bold mb-3 text-white">
            Discover the Best <br /> Quality Products
          </h1>
          <p className="text-white mb-4">
            Style meets comfort and innovation. Shop the latest trends now.
          </p>
          <Button variant="light" className="rounded-pill px-4 py-2">
            Shop Now
          </Button>
        </div>
        <img
          src={heroImg}
          alt="hero"
          className="img-fluid hero-img"
          data-aos="zoom-in"
        />
      </Container>
    </section>
  );
};

export default Hero;
