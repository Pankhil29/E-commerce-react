// ✅ App.jsx (Main Entry)
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./context/Cart";
import ReviewsSection from "./components/Review";
import Home from "./components/Home";
import Products from "./pages/Products";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      const links = document.querySelectorAll(".nav-link");
      links.forEach((link) => {
        const href = link.getAttribute("href");
        if (!href || !href.startsWith("#")) return;

        const section = document.querySelector(href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
