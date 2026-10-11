import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice, getTotals } from "../utils/format";
import { saveOrder } from "../utils/orders";
import OrderSummary from "../components/OrderSummary";
import CheckoutSteps from "../components/CheckoutSteps";

const fields = [
  { name: "fullName", label: "Full name", autoComplete: "name", col: 12 },
  { name: "email", label: "Email", type: "email", autoComplete: "email", col: 12 },
  { name: "address", label: "Street address", autoComplete: "street-address", col: 12 },
  { name: "city", label: "City", autoComplete: "address-level2", col: 6 },
  { name: "state", label: "State", autoComplete: "address-level1", col: 3, options: true },
  { name: "zip", label: "ZIP code", autoComplete: "postal-code", col: 3 },
];

const US_STATES = "AL AK AZ AR CA CO CT DE DC FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY".split(" ");

const emptyForm = Object.fromEntries(fields.map((f) => [f.name, ""]));

export function validate(form) {
  const errors = {};
  fields.forEach((f) => {
    if (!form[f.name].trim()) errors[f.name] = `${f.label} is required`;
  });
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address";
  }
  if (form.zip && !/^\d{5}(-\d{4})?$/.test(form.zip.trim())) {
    errors.zip = "Enter a 5-digit ZIP code";
  }
  return errors;
}

export default function Checkoutscreen() {
  const { items, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  if (items.length === 0) return <Navigate to="/cart" replace />;

  const totals = getTotals(items);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  };

  // Check a field as soon as the shopper leaves it, but only once they've typed something.
  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim()) return;
    setErrors({ ...errors, [name]: validate(form)[name] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    const firstInvalid = fields.find((f) => found[f.name]);
    if (firstInvalid) {
      document.getElementById(firstInvalid.name)?.focus();
      return;
    }

    const order = saveOrder({ customer: form, items, totals });
    clearCart();
    navigate(`/order/${order.id}`, { state: { order } });
  };

  return (
    <div className="container page">
      <CheckoutSteps current={2} />
      <div className="cart-heading">
        <h1 className="page-title mb-0">Checkout</h1>
        <Link to="/cart" className="back-link">
          <i className="fas fa-arrow-left me-1"></i>Back to cart
        </Link>
      </div>
      <div className="demo-notice" role="note">
        <i className="fas fa-info-circle"></i> Online payment isn't enabled yet. Placing
        an order here does not charge a card or send the order anywhere.
      </div>
      <div className="row">
        <div className="col-lg-8">
          <form className="card p-3 mb-3" onSubmit={handleSubmit} noValidate>
            <h2 className="summary-title">Shipping details</h2>
            <div className="row g-3">
              {fields.map((f) => (
                <div key={f.name} className={`col-md-${f.col}`}>
                  <label htmlFor={f.name} className="form-label">
                    {f.label}
                  </label>
                  {f.options ? (
                    <select
                      id={f.name}
                      name={f.name}
                      autoComplete={f.autoComplete}
                      className={`form-select${errors[f.name] ? " is-invalid" : ""}`}
                      value={form[f.name]}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      {US_STATES.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type || "text"}
                      inputMode={f.name === "zip" ? "numeric" : undefined}
                      autoComplete={f.autoComplete}
                      className={`form-control${errors[f.name] ? " is-invalid" : ""}`}
                      aria-invalid={!!errors[f.name]}
                      aria-describedby={errors[f.name] ? `${f.name}-error` : undefined}
                      value={form[f.name]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  )}
                  {errors[f.name] && (
                    <div className="invalid-feedback" id={`${f.name}-error`}>
                      {errors[f.name]}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button type="submit" className="btn cart mt-4 justify-content-center btn-lg-touch">
              Place order · {formatPrice(totals.total)}
            </button>
          </form>
        </div>
        <div className="col-lg-4">
          <OrderSummary totals={totals}>
            <ul className="summary-items">
              {items.map((item) => (
                <li key={item.id}>
                  <span>
                    {item.qty} × {item.name}
                  </span>
                  <span>{formatPrice(item.price * item.qty)}</span>
                </li>
              ))}
            </ul>
          </OrderSummary>
        </div>
      </div>
    </div>
  );
}
