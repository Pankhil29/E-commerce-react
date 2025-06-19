import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const FeaturedProducts = ({ addToCart }) => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=4");
        const data = await res.json();
        setFeatured(data.products);
      } catch (err) {
        console.error("Error fetching featured products:", err);
      }
    };

    fetchFeatured();
  }, []);

  return (
    <section className="py-5 bg-light" id="featured">
      <div className="container">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                id: product.id,
                title: product.title,
                brand: product.brand,
                price: product.price,
                image: product.thumbnail,
                rating: Math.round(product.rating),
              }}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
