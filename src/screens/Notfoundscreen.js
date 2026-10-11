import React from "react";
import { Link } from "react-router-dom";

export default function Notfoundscreen({ message = "That page doesn't exist." }) {
  return (
    <div className="container page text-center">
      <h1 className="page-title">Not found</h1>
      <p className="empty-state">{message}</p>
      <Link to="/" className="btn cart d-inline-flex">
        Back to shop
      </Link>
    </div>
  );
}
