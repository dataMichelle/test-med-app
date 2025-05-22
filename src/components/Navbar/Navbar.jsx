import React from "react";
import { Link } from "react-router-dom";
import doctorImg from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = ({ onLoginClick, onSignUpClick }) => (
  <nav>
    <Link to="/" className="nav__logo">
      <span className="logo-text">StayHealthy</span>
      <img src={doctorImg} alt="Doctor icon" className="logo-img" />
    </Link>
    <ul className="nav__links active">
      <li className="link">
        <Link to="/">Home</Link>
      </li>
      <li className="link">
        <button className="btn1" onClick={onSignUpClick}>
          Sign Up
        </button>
      </li>
      <li className="link">
        <button className="btn1" onClick={onLoginClick}>
          Login
        </button>
      </li>
    </ul>
  </nav>
);

export default Navbar;
