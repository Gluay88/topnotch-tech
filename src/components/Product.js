import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import { formatPrice } from "../utils/format";

export function Stars({ value }) {
  return (
    <span className="stars" title={`Rated ${value} out of 5`}>
      <Rating
        initialRating={value}
        readonly={true}
        className="rating"
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
      />
      <span className="visually-hidden">Rated {value} out of 5</span>
    </span>
  );
}

export default function Product({ product }) {
  const { addItem } = useCart();
  const showToast = useToast();
  const [added, setAdded] = useState(false);
  const inStock = product.countInStock > 0;

  useEffect(() => {
    if (!added) return;
    const t = setTimeout(() => setAdded(false), 1500);
    return () => clearTimeout(t);
  }, [added]);

  const handleAdd = () => {
    addItem(product, 1);
    setAdded(true);
    showToast("Added to your cart", { to: "/cart", label: "View cart" });
  };

  return (
    <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
      <div className="card product-card h-100 p-3">
        <Link to={`/product/${product.id}`} className="product-link">
          <div className="product-img-wrap">
            <img src={product.image} className="product-img" alt={product.name} loading="lazy" />
            {inStock && product.countInStock <= 3 && (
              <span className="stock-tag">Only {product.countInStock} left</span>
            )}
          </div>
          <h2 className="product-name">{product.name}</h2>
        </Link>
        <div className="mt-auto">
          <Stars value={product.rating} />
          <div className="product-footer">
            <span className="product-price">{formatPrice(product.price)}</span>
            <button
              className={`btn btn-sm cart${added ? " added" : ""}`}
              onClick={handleAdd}
              disabled={!inStock}
            >
              {!inStock ? (
                "Sold out"
              ) : added ? (
                <>
                  <i className="fas fa-check me-1"></i> Added
                </>
              ) : (
                <>
                  <i className="fas fa-cart-plus me-1"></i> Add
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
