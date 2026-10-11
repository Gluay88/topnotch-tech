import React, { useState } from "react";
import Product from "../components/Product";
import products from "../products";
import Banner from "../components/Banner";

const categories = ["all", ...new Set(products.map((p) => p.category))];

const sorters = {
  featured: null,
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
  rating: (a, b) => b.rating - a.rating,
};

const label = (c) => (c === "all" ? "All" : c[0].toUpperCase() + c.slice(1));

export default function Homescreen() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("featured");

  const term = query.trim().toLowerCase();
  const visible = products.filter(
    (p) =>
      (category === "all" || p.category === category) &&
      (term === "" ||
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term))
  );
  if (sorters[sort]) visible.sort(sorters[sort]);

  const filtered = term !== "" || category !== "all";
  const clearFilters = () => {
    setQuery("");
    setCategory("all");
  };

  return (
    <>
      <Banner />
      <section id="products" className="container products-section">
        <div className="shop-toolbar">
          <h2 className="section-title">Shop all products</h2>
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input
              type="search"
              className="form-control"
              placeholder="Search headphones, laptops, mice..."
              aria-label="Search products"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="shop-subbar">
          <div className="category-pills" role="group" aria-label="Filter by category">
            {categories.map((c) => (
              <button
                key={c}
                className={`pill${category === c ? " active" : ""}`}
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {label(c)}
              </button>
            ))}
          </div>
          <div className="sort-box">
            <span className="result-count">
              {visible.length} {visible.length === 1 ? "product" : "products"}
            </span>
            <select
              className="form-select form-select-sm"
              aria-label="Sort products"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
              <option value="rating">Top rated</option>
            </select>
          </div>
        </div>
        {visible.length === 0 ? (
          <div className="empty-state">
            <i className="fas fa-search fa-2x mb-3"></i>
            <p>No products match {term ? `"${query.trim()}"` : "this filter"}.</p>
            <button className="btn cart" onClick={clearFilters}>
              Clear filters
            </button>
          </div>
        ) : (
          <>
            {filtered && (
              <button className="btn btn-link clear-link" onClick={clearFilters}>
                <i className="fas fa-times me-1"></i>Clear filters
              </button>
            )}
            <div className="row">
              {visible.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
