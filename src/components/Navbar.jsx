import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToSection = (id) => {
    if (window.location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          Cara
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item pt-1">
              <button
                className="nav-link btn-link"
                onClick={() => scrollToSection("home")}
              >
                Home
              </button>
            </li>
            <li className="nav-item pt-1">
              <button
                className="nav-link btn-link"
                onClick={() => scrollToSection("featured")}
              >
                Featured
              </button>
            </li>
            <li className="nav-item pt-1">
              <button
                className="nav-link btn-link"
                onClick={() => scrollToSection("services")}
              >
                Services
              </button>
            </li>
            <li className="nav-item pt-1 ">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item ms-auto">
              <NavLink className="btn btn-cart" to="/cart">
                🛒 Cart ({totalItems})
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
