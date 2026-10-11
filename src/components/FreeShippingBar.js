import React from "react";
import { formatPrice, FREE_SHIPPING_THRESHOLD } from "../utils/format";

export default function FreeShippingBar({ subtotal }) {
  const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
  const percent = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <div className="ship-progress">
      <p>
        {remaining > 0 ? (
          <>
            You're <strong>{formatPrice(remaining)}</strong> away from free shipping
          </>
        ) : (
          <>
            <i className="fas fa-truck"></i> You've unlocked <strong>free shipping</strong>
          </>
        )}
      </p>
      <div className="ship-track">
        <div className="ship-fill" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}
