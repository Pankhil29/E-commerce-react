import { useState, useEffect } from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Discover Amazing Products",
      subtitle: "Shop the latest trends and find everything you need",
      description:
        "Quality products, competitive prices, and exceptional service.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      buttonText: "Shop Now",
      buttonVariant: "light",
    },
    {
      id: 2,
      title: "Premium Electronics",
      subtitle: "Latest technology at your fingertips",
      description:
        "From smartphones to laptops, find the best tech deals here.",
      image: "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg",
      buttonText: "Explore Electronics",
      buttonVariant: "warning",
    },
    {
      id: 3,
      title: "Fashion & Style",
      subtitle: "Express yourself with our fashion collection",
      description: "Trendy clothes and accessories for every occasion.",
      image:
        "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg",
      buttonText: "Browse Fashion",
      buttonVariant: "info",
    },
  ];

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="hero-slider">
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        fade
        controls={true}
        indicators={false}
        interval={null}
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={slide.id}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "500px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Container>
                <Row className="align-items-center">
                  <Col lg={6}>
                    <div className="hero-content text-white ms-2">
                      <h1 className="display-4 fw-bold mb-3 animate-slide-in">
                        {slide.title}
                      </h1>
                      <h4 className="mb-3 animate-slide-in-delay-1">
                        {slide.subtitle}
                      </h4>
                      <p className="lead mb-4 animate-slide-in-delay-2">
                        {slide.description}
                      </p>
                      <div className="d-flex gap-3 animate-slide-in-delay-3">
                        {/* <Button variant={slide.buttonVariant} size="lg">
                          <i className="fas fa-shopping-bag me-2"></i>
                          {slide.buttonText}
                        </Button>
                        <Button variant="outline-light" size="lg">
                          Learn More
                        </Button> */}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSlider;
