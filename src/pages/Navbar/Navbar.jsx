import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <header id="mainHead">
      <input type="checkbox" id="nav_check" />
      <div class="headSection">
        <Link to="/" class="logo">
          <p>
            PKR<span>IT</span> LTD.
          </p>
        </Link>
        <label for="nav_check" class="fas fa-bars" id="nav_label">+</label>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
