import { Container, Row, Col, Card } from "react-bootstrap";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment:
        "Amazing quality products and fast shipping! I'm very satisfied with my purchase.",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      product: "Wireless Headphones",
      date: "2 days ago",
    },
    {
      id: 2,
      name: "Mike Chen",
      rating: 5,
      comment:
        "Great customer service and the product exceeded my expectations. Highly recommended!",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      product: "Smart Watch",
      date: "1 week ago",
    },
    {
      id: 3,
      name: "Emily Davis",
      rating: 4,
      comment:
        "Good value for money. The delivery was quick and the packaging was excellent.",
      avatar:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      product: "Coffee Maker",
      date: "3 days ago",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <i
        key={i}
        className={`fas fa-star ${i < rating ? "text-warning" : "text-muted"}`}
      ></i>
    ));
  };

  return (
    <section className="reviews-section py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">What Our Customers Say</h2>
          <p className="lead text-muted">
            Real reviews from real customers who love shopping with us
          </p>
          <div className="divider mx-auto"></div>
        </div>

        <Row className="g-4">
          {reviews.map((review) => (
            <Col key={review.id} md={4}>
              <Card className="h-100 shadow-sm border-0 review-card">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="rounded-circle me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <h6 className="mb-0 fw-bold">{review.name}</h6>
                      <small className="text-muted">{review.date}</small>
                    </div>
                  </div>

                  <div className="mb-3">{renderStars(review.rating)}</div>

                  <p className="text-muted mb-3">"{review.comment}"</p>

                  <div className="border-top pt-3">
                    <small className="text-primary fw-semibold">
                      <i className="fas fa-shopping-bag me-1"></i>
                      Purchased: {review.product}
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <div className="row">
            <div className="col-md-3 col-6 mb-3">
              <div className="stat-item">
                <h3 className="fw-bold text-primary mb-1">10K+</h3>
                <p className="text-muted mb-0">Happy Customers</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <div className="stat-item">
                <h3 className="fw-bold text-success mb-1">4.8</h3>
                <p className="text-muted mb-0">Average Rating</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <div className="stat-item">
                <h3 className="fw-bold text-warning mb-1">50K+</h3>
                <p className="text-muted mb-0">Products Sold</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <div className="stat-item">
                <h3 className="fw-bold text-info mb-1">99%</h3>
                <p className="text-muted mb-0">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ReviewsSection;
