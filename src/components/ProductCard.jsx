import React from "react";
import "../styles/ProductCard.css";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="col-md-6 col-lg-3 mb-4 d-flex">
      <div className="card h-100 shadow-sm p-3 border rounded-4 w-100 product-card">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            className="card-img-top mx-auto"
            alt={product.title}
            style={{ height: "180px", objectFit: "contain" }}
          />
        </Link>
        <div className="card-body d-flex flex-column">
          <small className="text-muted">{product.brand}</small>
          <Link
            to={`/product/${product.id}`}
            className="text-decoration-none text-dark"
          >
            <h6 className="card-title mt-2">{product.title}</h6>
          </Link>
          <div className="text-warning mb-2">
            {Array.from({ length: product.rating }, (_, i) => (
              <i key={i} className="fas fa-star">
                <FaStar />
              </i>
            ))}
          </div>
          <div className="mt-auto d-flex justify-content-between align-items-center">
            <h6 className="text-success fw-bold">₹{product.price}</h6>
            <button className="btn btn-outline-primary btn-sm">
              <i className="fas fa-cart-plus me-1">
                <FaShoppingCart />
              </i>{" "}
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
