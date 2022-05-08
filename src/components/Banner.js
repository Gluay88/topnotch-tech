import React from "react";
import Headphone from "../assets/headphone.jpeg";

export default function Banner() {
  return (
    <>
      <p style={{ color: "red", fontSize: "1rem", paddingLeft:'10rem', paddingTop: '0'}}>
        **Work in progress
      </p>
      <div className="banner-container">
        <div className="banner-desc">
          <button className="btn-price">Best Price</button>
          <h1>
            Incredible Price <br />
            on All Your
            <br /> Favorite Items
          </h1>
          <p>Get more for less on selected brands</p>
          <button className="btn-shopnow">Shop Now</button>
        </div>
        <div className="banner-img">
          <img src={Headphone} alt="headphone" />
        </div>
      </div>
    </>
  );
}
