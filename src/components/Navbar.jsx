import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { useCart } from "../context/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm p-3"
        data-aos="fade-down"
      >
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-5" to="/">
            FashionHub
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
                  className="nav-link btn btn-link"
                  onClick={() => scrollToSection("home")}
                >
                  Home
                </button>
              </li>
              <li className="nav-item pt-1">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => scrollToSection("featured")}
                >
                  Featured
                </button>
              </li>
              <li className="nav-item pt-1">
                <button
                  className="nav-link btn btn-link"
                  id="#footer"
                  onClick={() => scrollToSection("services")}
                >
                  Contact
                </button>
              </li>
              <li className="nav-item pt-1">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="btn btn-cart ms-sm-3 mt-1" to="/cart">
                  🛒 Cart ({totalItems})
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
