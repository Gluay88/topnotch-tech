import React from "react";

const steps = ["Cart", "Shipping", "Confirmation"];

export default function CheckoutSteps({ current }) {
  return (
    <ol className="checkout-steps" aria-label="Checkout progress">
      {steps.map((step, i) => {
        const n = i + 1;
        const state = n < current ? "done" : n === current ? "current" : "todo";
        return (
          <li key={step} className={state} aria-current={state === "current" ? "step" : undefined}>
            <span className="step-dot">
              {state === "done" ? <i className="fas fa-check"></i> : n}
            </span>
            <span className="step-label">{step}</span>
          </li>
        );
      })}
    </ol>
  );
}
