import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import products from "../products";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import Product, { Stars } from "../components/Product";
import QuantityStepper from "../components/QuantityStepper";
import { formatPrice, FREE_SHIPPING_THRESHOLD } from "../utils/format";
import Notfoundscreen from "./Notfoundscreen";

const SHORT_DESC = 220;

export default function Productdescreen() {
  const { id } = useParams();
  const parseIntId = parseInt(id);
  const product = products.find((p) => p.id === parseIntId);
  const [qty, setQty] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const { addItem } = useCart();
  const showToast = useToast();
  const navigate = useNavigate();

  if (!product) return <Notfoundscreen message="We couldn't find that product." />;

  const inStock = product.countInStock > 0;
  const description = product.description.trim();
  const longDesc = description.length > SHORT_DESC;
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, qty);
    showToast(`Added ${qty} to your cart`, { to: "/cart", label: "View cart" });
  };

  const handleBuyNow = () => {
    addItem(product, qty);
    navigate("/checkout");
  };

  return (
    <div className="container page" key={product.id}>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Shop</Link>
          </li>
          <li className="breadcrumb-item text-capitalize">{product.category}</li>
          <li className="breadcrumb-item active text-truncate" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>
      <div className="row mt-2">
        <div className="col-md-6">
          <div className="card p-3 mb-3">
            <img src={product.image} className="img-fluid bigimg" alt={product.name} />
          </div>
        </div>
        <div className="col-md-6">
          <h1 className="detail-name">{product.name}</h1>
          <Stars value={product.rating} />
          <p className="detail-price">{formatPrice(product.price)}</p>
          <p className={inStock ? "stock in" : "stock out"}>
            <i className={`fas ${inStock ? "fa-check" : "fa-times"} me-1`}></i>
            {!inStock
              ? "Out of stock"
              : product.countInStock <= 3
              ? `Only ${product.countInStock} left - order soon`
              : "In stock"}
          </p>
          {inStock && (
            <div className="buy-box">
              <QuantityStepper
                label="Quantity"
                value={qty}
                max={product.countInStock}
                onChange={setQty}
              />
              <button className="btn cart btn-lg-touch" onClick={handleAddToCart}>
                <i className="fas fa-cart-plus me-2"></i>Add to cart
              </button>
              <button className="btn btn-buy btn-lg-touch" onClick={handleBuyNow}>
                Buy now
              </button>
            </div>
          )}
          <ul className="perks">
            <li>
              <i className="fas fa-truck"></i> Free shipping on orders over{" "}
              {formatPrice(FREE_SHIPPING_THRESHOLD).replace(".00", "")}
            </li>
          </ul>
          <hr />
          <h2 className="summary-title">About this item</h2>
          <p className="detail-desc">
            {longDesc && !expanded ? `${description.slice(0, SHORT_DESC).trim()}…` : description}
          </p>
          {longDesc && (
            <button className="btn btn-link p-0 read-more" onClick={() => setExpanded((e) => !e)}>
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>
      </div>
      {related.length > 0 && (
        <section className="related">
          <h2 className="section-title mb-3">You might also like</h2>
          <div className="row">
            {related.map((p) => (
              <Product key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
