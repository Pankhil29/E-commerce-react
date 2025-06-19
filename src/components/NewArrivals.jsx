import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/NewArrivals.css";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((data) =>
        setProducts(
          data.map((item) => ({
            id: item.id,
            title: item.title,
            brand: item.category,
            image: item.image,
            price: item.price,
            rating: Math.round(item.rating.rate),
          }))
        )
      );
  }, []);

  const addToCart = (product) => {
    console.log("Add to cart:", product);
  };

  return (
    <section className="py-5 bg-white" id="new">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">New Arrivals</h2>
        <div className="row">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
