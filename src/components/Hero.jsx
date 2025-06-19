import React from "react";
import "../styles/Hero.css"; // Make sure this file exists
import img from "../assets/heroimg.avif";
const Hero = () => {
  return (
    <section id="home" className="hero-section m-0 p-0 ">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img} className="d-block w-100 hero-img" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img
              src="https://via.placeholder.com/1200x400?text=Banner+2"
              className="d-block w-100 hero-img"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img src={img} className="d-block w-100 hero-img" alt="Slide 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
