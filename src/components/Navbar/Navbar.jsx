import React from "react";
import { Link } from "react-router-dom";
import doctorImg from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = ({ onLoginClick, onSignUpClick, onLogoutClick }) => {
  const isLoggedIn = !!sessionStorage.getItem("auth-token");
  const username = sessionStorage.getItem("name");

  return (
    <nav>
      <Link to="/" className="nav__logo">
        <span className="logo-text">StayHealthy</span>
        <img src={doctorImg} alt="Doctor icon" className="logo-img" />
      </Link>
      <ul className="nav__links active">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__links active">
          <Link to="/appointment">Appointments</Link>
        </li>
        <li className="nav__links active">
          <Link to="/instant-consultation">Instant Consultation</Link>
        </li>
        <li className="link">
          {isLoggedIn ? (
            <span className="welcome-text">Welcome, {username || "User"}</span>
          ) : (
            <button className="btn1" onClick={onSignUpClick}>
              Sign Up
            </button>
          )}
        </li>
        <li className="link">
          {isLoggedIn ? (
            <button className="btn1" onClick={onLogoutClick}>
              Logout
            </button>
          ) : (
            <button className="btn1" onClick={onLoginClick}>
              Login
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
