// ✅ src/pages/Products.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import "../styles/Products.css";
import { Link } from "react-router-dom";

const Products = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Products");
  const [sort, setSort] = useState("");

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=100").then((res) => {
      setProducts(res.data.products);
      setFiltered(res.data.products);
    });
  }, []);

  useEffect(() => {
    let updated = [...products];

    if (search) {
      updated = updated.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "All Products") {
      updated = updated.filter((p) => p.category === category);
    }

    if (sort === "low") {
      updated.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      updated.sort((a, b) => b.price - a.price);
    } else if (sort === "rating") {
      updated.sort((a, b) => b.rating - a.rating);
    }

    setFiltered(updated);
  }, [search, category, sort, products]);

  const uniqueCategories = [
    "All Products",
    ...new Set(products.map((p) => p.category)),
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {/* Filters */}
        <div className="col-md-6 mb-4 w-100">
          <div className="filter-box p-3 shadow-sm rounded bg-white">
            <h5 className="mb-3">Filters</h5>
            <div className="d-flex gap-2">
              <div>
                <label>Search</label>
                <input
                  className="form-control mb-3"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div>
                <label>Category</label>
                <select
                  className="form-select mb-3"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {uniqueCategories.map((cat, i) => (
                    <option key={i} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Sort By</label>
                <select
                  className="form-select"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option value="">None</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        {/* Products */}
        <div className="col-md-9 w-100">
          <h3 className="mb-4">
            Products{" "}
            <span className="text-muted">({filtered.length} found)</span>
          </h3>
          <div className="row gy-4 ">
            {filtered.map((product) => (
              <div className="col-12 col-sm-6 col-lg-3" key={product.id}>
                <div className="card h-100 shadow-sm border rounded product-card">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="card-img-top img-fluid product-img"
                      style={{ height: "180px", objectFit: "contain" }}
                    />
                  </Link>
                  <div className="card-body">
                    <small className="text-muted">{product.brand}</small>
                    <Link
                      to={`/product/${product.id}`}
                      className="text-decoration-none text-dark"
                    >
                      <h6 className="fw-bold mt-1">{product.title}</h6>
                    </Link>
                    <div className="text-warning mb-1">
                      {"⭐".repeat(Math.floor(product.rating))}
                    </div>
                    <p className="text-success fw-bold">₹{product.price}</p>
                    <button
                      className="btn btn-outline-primary w-100"
                      onClick={() => addToCart(product)}
                    >
                      <i className="bi bi-cart-plus"></i> Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
