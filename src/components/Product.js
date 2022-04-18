import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";

export default function Product({ product }) {
  return (
    <div className="col-md-3 m-4 card p-2">
      <div>
        <Link to={`product/${product.id}`}>
          <img src={product.image} className="img-fluid" alt="" />
          <h1 className="text-center">{product.name}</h1>
          <h1 className="text-center">Rating:</h1>
          <Rating initialRating={product.rating} readonly={true} className="rating"/>
          <h1 className="text-center">Price: {product.price}</h1>
        </Link>
      </div>
    </div>
  );
}
