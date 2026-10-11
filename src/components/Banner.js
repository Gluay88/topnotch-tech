import React from "react";
import Headphone from "../assets/headphone.jpeg";

export default function Banner() {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="banner-container">
      <div className="banner-desc">
        <span className="btn-price">Best Price</span>
        <h1>
          Incredible Price <br />
          on All Your
          <br /> Favorite Items
        </h1>
        <p>Get more for less on selected brands</p>
        <button className="btn-shopnow" onClick={scrollToProducts}>
          Shop Now
        </button>
      </div>
      <div className="banner-img">
        <img src={Headphone} alt="Wireless headphones" />
      </div>
    </div>
  );
}
