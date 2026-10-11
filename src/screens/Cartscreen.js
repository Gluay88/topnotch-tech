import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import { formatPrice, getTotals } from "../utils/format";
import OrderSummary from "../components/OrderSummary";
import QuantityStepper from "../components/QuantityStepper";
import FreeShippingBar from "../components/FreeShippingBar";
import CheckoutSteps from "../components/CheckoutSteps";

export default function Cartscreen() {
  const { items, count, addItem, updateQty, removeItem } = useCart();
  const showToast = useToast();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="container page text-center">
        <i className="fas fa-shopping-cart fa-3x empty-icon"></i>
        <h1 className="page-title">Your cart is empty</h1>
        <p className="empty-state pt-0">Looks like you haven't added anything yet.</p>
        <Link to="/" className="btn cart d-inline-flex">
          Start shopping
        </Link>
      </div>
    );
  }

  const totals = getTotals(items);

  const handleRemove = (item) => {
    removeItem(item.id);
    showToast(`Removed ${item.name.split(",")[0]}`, null, {
      label: "Undo",
      onClick: () => addItem(item, item.qty),
    });
  };

  return (
    <div className="container page">
      <CheckoutSteps current={1} />
      <div className="cart-heading">
        <h1 className="page-title mb-0">
          Shopping cart <span className="item-count">({count} {count === 1 ? "item" : "items"})</span>
        </h1>
        <Link to="/" className="back-link">
          <i className="fas fa-arrow-left me-1"></i>Continue shopping
        </Link>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <FreeShippingBar subtotal={totals.subtotal} />
          {items.map((item) => (
            <div key={item.id} className="card cart-item p-3 mb-3">
              <Link to={`/product/${item.id}`}>
                <img src={item.image} alt={item.name} className="cart-thumb" />
              </Link>
              <div className="cart-item-info">
                <Link to={`/product/${item.id}`} className="cart-item-name">
                  {item.name}
                </Link>
                <span className="text-muted small">{formatPrice(item.price)} each</span>
              </div>
              <div className="cart-item-actions">
                <QuantityStepper
                  label={`Quantity for ${item.name}`}
                  value={item.qty}
                  max={item.countInStock}
                  onChange={(qty) => updateQty(item.id, qty)}
                />
                <span className="product-price line-total">
                  {formatPrice(item.price * item.qty)}
                </span>
                <button
                  className="btn btn-link remove-btn"
                  onClick={() => handleRemove(item)}
                  aria-label={`Remove ${item.name}`}
                  title="Remove"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="col-lg-4">
          <div className="sticky-summary">
            <OrderSummary totals={totals}>
              <button
                className="btn cart w-100 justify-content-center btn-lg-touch"
                onClick={() => navigate("/checkout")}
              >
                Proceed to checkout <i className="fas fa-arrow-right ms-2"></i>
              </button>
            </OrderSummary>
          </div>
        </div>
      </div>
    </div>
  );
}
