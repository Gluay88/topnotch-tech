import React from "react";
import { formatPrice } from "../utils/format";

export default function OrderSummary({ totals, children }) {
  return (
    <div className="card order-summary p-3">
      <h2 className="summary-title">Order summary</h2>
      <dl className="summary-rows">
        <dt>Subtotal</dt>
        <dd>{formatPrice(totals.subtotal)}</dd>
        <dt>Shipping</dt>
        <dd>{totals.shipping === 0 ? "Free" : formatPrice(totals.shipping)}</dd>
        <dt>Tax</dt>
        <dd>{formatPrice(totals.tax)}</dd>
        <dt className="summary-total">Total</dt>
        <dd className="summary-total">{formatPrice(totals.total)}</dd>
      </dl>
      {children}
    </div>
  );
}
