import React from "react";
import Product from "../components/Product";
import products from "../products";
import Banner from "../components/Banner";

export default function Homescreen() {
  return (
    <>
      <Banner />
      <div>
        <div className="row justify-content-center">
          {products.map((product) => {
            return <Product product={product} />;
          })}
        </div>
      </div>
    </>
  );
}
