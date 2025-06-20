import React from "react";
import Navbar from "../components/Navbar";
import FeaturedProducts from "../components/FeaturedProducts";
import RepairServices from "../components/RepairServices";
import NewArrivals from "../components/NewArrivals";
import Footer from "../components/Footer";
import Newsletter from "../components/Review";
import Services from "../components/Services";

import Hero from "./Hero";
import ReviewsSection from "../components/Review";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Services />
      <RepairServices />
      <NewArrivals />
      <ReviewsSection />
      <Footer />
    </div>
  );
}

export default Home;
