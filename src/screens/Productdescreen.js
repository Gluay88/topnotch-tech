import React from "react";
import { useParams } from "react-router-dom";
import products from "../products";

export default function Productdescreen() {
  const { id } = useParams();
  const product = products.find((p) => p._id === id.match.params);

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="card p-3 m-2">
            <h1>The Product Id is {id}</h1>
            <h1>{product.name}</h1>
            <img src={product.image} className="img-fluid m-3 bigimg" alt="" />
            <p>{product.description}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="m-2">
            <h1>Price: {product.price}</h1>
            <hr />
            <h1>Select Quanity</h1>
            <select className="select">
              {[...Array(product.countInStock).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
            </select>
            <hr />
            <button className="btn cart">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
}
