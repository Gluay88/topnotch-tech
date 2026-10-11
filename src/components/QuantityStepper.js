import React from "react";

export default function QuantityStepper({ value, max, onChange, label }) {
  return (
    <div className="stepper" role="group" aria-label={label}>
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(value - 1)}
        disabled={value <= 1}
      >
        <i className="fas fa-minus"></i>
      </button>
      <span aria-live="polite">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
      >
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
}
