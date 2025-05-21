import "./Navbar.css";
import doctorImg from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleClick = () => {
    // Add your menu toggle logic here
  };

  return (
    <div>
      <nav>
        <Link to="/" className="nav__logo">
          <span className="logo-text">StayHealthy</span>
          <img src={doctorImg} alt="Doctor icon" className="logo-img" />
        </Link>
        <span>.</span>
        <div className="nav__icon" onClick={handleClick}>
          <i className="fa fa-bars"></i>
        </div>
        <ul className="nav__links active">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/appointments">Appointments</Link>
          </li>
          <li className="link">
            <Link to="/signup">
              <button className="btn1">Sign Up</button>
            </Link>
          </li>
          <li className="link">
            <Link to="/login">
              <button className="btn1">Login</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
