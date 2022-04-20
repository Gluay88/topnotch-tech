import React from "react";
import Product from "../components/Product";
import products from "../products";

export default function Homescreen() {
  return (
    <div>
      <div className="row justify-content-center">
        {products.map(product => {
          return <Product product={product}/>;
        })}
      </div>
    </div>
  );
}
