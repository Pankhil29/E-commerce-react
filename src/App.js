// ✅ App.jsx (Main Entry)
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import RepairServices from "./components/RepairServices";
import NewArrivals from "./components/NewArrivals";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Services from "./components/Services";
import Products from "./pages/Products";
import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./context/Cart";

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
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeaturedProducts />
              <Services />
              <RepairServices />
              <NewArrivals />
              <Newsletter />
              <Footer />
            </>
          }
        />

        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
