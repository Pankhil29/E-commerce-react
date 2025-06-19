import React from "react";
import { Container, Carousel } from "react-bootstrap";

function Testimonials() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">What Our Customers Say</h2>
      <Carousel>
        {["Great quality!", "Fast delivery!", "Excellent support!"].map(
          (quote, index) => (
            <Carousel.Item key={index}>
              <blockquote className="blockquote text-center">
                <p className="mb-4">“{quote}”</p>
                <footer className="blockquote-footer">
                  Customer {index + 1}
                </footer>
              </blockquote>
            </Carousel.Item>
          )
        )}
      </Carousel>
    </Container>
  );
}

export default Testimonials;
