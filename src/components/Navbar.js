import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu after navigating.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="topnotch">TopNotch</span> Tech
        </Link>
        <Link className="nav-link mobile-cart d-lg-none" to="/cart" aria-label={`Cart, ${count} items`}>
          <i className="fas fa-shopping-cart"></i>
          {count > 0 && <span className="cart-badge">{count}</span>}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          <i className={`fas ${open ? "fa-times" : "fa-bars"}`}></i>
        </button>
        <div className={`collapse navbar-collapse${open ? " show" : ""}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link d-none d-lg-flex" to="/cart" aria-label={`Cart, ${count} items`}>
                <i className="fas fa-shopping-cart"></i>
                <span className="cart-label">Cart</span>
                {count > 0 && <span className="cart-badge">{count}</span>}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
