import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastContext";
import { formatPrice, FREE_SHIPPING_THRESHOLD } from "./utils/format";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homescreen from "./screens/Homescreen";
import Productdescreen from "./screens/Productdescreen";
import Cartscreen from "./screens/Cartscreen";
import Checkoutscreen from "./screens/Checkoutscreen";
import Orderscreen from "./screens/Orderscreen";
import Notfoundscreen from "./screens/Notfoundscreen";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ToastProvider>
          <ScrollToTop />
          <div className="App">
            <a href="#main" className="skip-link">
              Skip to content
            </a>
            <div className="announce">
              <i className="fas fa-truck"></i> Free shipping on orders over{" "}
              {formatPrice(FREE_SHIPPING_THRESHOLD).replace(".00", "")}
            </div>
            <Navbar />
            <main className="main" id="main">
              <Routes>
                <Route path="/" element={<Homescreen />} />
                <Route path="/product/:id" element={<Productdescreen />} />
                <Route path="/cart" element={<Cartscreen />} />
                <Route path="/checkout" element={<Checkoutscreen />} />
                <Route path="/order/:orderId" element={<Orderscreen />} />
                <Route path="*" element={<Notfoundscreen />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ToastProvider>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
