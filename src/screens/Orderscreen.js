import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getOrder } from "../utils/orders";
import { formatPrice } from "../utils/format";
import OrderSummary from "../components/OrderSummary";
import CheckoutSteps from "../components/CheckoutSteps";
import Notfoundscreen from "./Notfoundscreen";

export default function Orderscreen() {
  const { orderId } = useParams();
  const { state } = useLocation();
  const order = state?.order?.id === orderId ? state.order : getOrder(orderId);

  if (!order) return <Notfoundscreen message="We couldn't find that order." />;

  const { customer } = order;

  return (
    <div className="container page">
      <CheckoutSteps current={4} />
      <div className="order-confirmed">
        <i className="fas fa-check-circle"></i>
        <h1 className="page-title">Thank you, {customer.fullName.split(" ")[0]}!</h1>
        <p>
          Order <strong>{order.id}</strong> has been placed. A confirmation would be sent
          to {customer.email}.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="card p-3 mb-3">
            <h2 className="summary-title">Items</h2>
            <ul className="summary-items">
              {order.items.map((item) => (
                <li key={item.id}>
                  <span>
                    {item.qty} × {item.name}
                  </span>
                  <span>{formatPrice(item.price * item.qty)}</span>
                </li>
              ))}
            </ul>
            <h2 className="summary-title mt-3">Shipping to</h2>
            <p className="mb-0">
              {customer.fullName}
              <br />
              {customer.address}
              <br />
              {customer.city}, {customer.state} {customer.zip}
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <OrderSummary totals={order.totals}>
            <Link to="/" className="btn cart w-100 justify-content-center">
              Continue shopping
            </Link>
          </OrderSummary>
        </div>
      </div>
    </div>
  );
}
