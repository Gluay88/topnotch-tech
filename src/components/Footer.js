import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">Shop</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <h6>
        Copyright &copy; {new Date().getFullYear()} -{" "}
        <span className="topnotch">TopNotch</span> Tech
      </h6>
    </footer>
  );
}
