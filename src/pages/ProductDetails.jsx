import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/ProductDetails.css";
import Products from "./Products";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  if (!product) return <div className="text-center text-white">Loading...</div>;

  return (
    <div className="container my-5">
      <div className="row align-items-center product-detail" data-aos="fade-up">
        <div className="col-md-6 mb-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid rounded shadow detail-img"
          />
        </div>
        <div className="col-md-6">
          <h2 className="product-title mb-3">{product.title}</h2>
          <div className="text-warning fs-5 mb-2">
            {"⭐".repeat(Math.floor(product.rating))}
          </div>
          <p className="text-black mb-3">{product.description}</p>
          <h4 className="text-info mb-4">${product.price}</h4>
          <button className="btn btn-add" onClick={() => addToCart(product)}>
            🛒 Add to Cart
          </button>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default ProductDetails;
