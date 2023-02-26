import React from "react";
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
        <p>Product</p>
      </div>
      <div className="manu">
        <ul className="menu__list">
          <li>Products</li>
          <li>Customers</li>
          <li>Priceng</li>
          <li>Recources</li>
        </ul>
      </div>
      <div className="register">
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
