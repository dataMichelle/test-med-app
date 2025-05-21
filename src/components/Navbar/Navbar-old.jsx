import "./Navbar.css";
import doctorImg from "../../assets/doctor.png"; // adjust path as needed

const Navbar = () => {
  // Dummy handleClick function for the nav icon
  const handleClick = () => {
    // Add your menu toggle logic here
  };

  return (
    <div>
      <nav>
        <a href="/">
          StayHealthy
          <img src={doctorImg} style={{ height: "24px" }} alt="Doctor icon" />
          {/* SVG icon example (replace with your actual SVG if needed) */}
          <svg height="30" width="30" viewBox="0 0 1024 1024">
            <title>Doctor With Stethoscope SVG icon</title>
            <g>
              <g>
                {/* Path for the stethoscope icon */}
                <path d="M499.8,10c91.7,0,166,74.3,166,166c0,91.7-74.3,166-166,166c-91.7,0-166-74.3-166-166C333.8,84.3,408.1,10,499.8,10z"></path>
                {/* Additional path for the icon */}
                <path d="M499.8,522.8c71.2,0,129.1-58.7,129.1-129.1H370.6C370.6,464.1,428.6,522.8,499.8,522.8z"></path>
                {/* Another path for the icon */}
                <path d="M693.2,395c-0.7,94.9-70.3,173.7-160.8,188.9v155.9c0,80.3-60.7,150.8-140.8,155.3c-83,4.7-152.7-58.9-157.6-139.7c-22-12.8-35.6-38.5-30.3-66.7c4.7-25.1,25.5-45.6,50.8-49.9c39.7-6.7,74.1,23.7,74.1,62.1c0,23-12.3,43-30.7,54.1c4.7,45.4,45.1,80.4,92.6,76c44.6-4,77.2-44...."></path>
              </g>
            </g>
          </svg>
        </a>
        {/* A span element for styling purposes */}
        <span>.</span>
        {/* Navigation icon section with an onClick event listener */}
        <div className="nav__icon" onClick={handleClick}>
          {/* Font Awesome icon for bars (hamburger menu) */}
          <i className="fa fa-bars"></i>
        </div>
        {/* Unordered list for navigation links with 'active' className */}
        <ul className="nav__links active">
          {/* List item for the 'Home' link */}
          <li className="link">
            <a href="../Landing_Page/LandingPage.html">Home</a>
          </li>
          {/* List item for the 'Appointments' link */}
          <li className="link">
            <a href="#">Appointments</a>
          </li>
          {/* List item for the 'Sign Up' link with a button */}
          <li className="link">
            <a href="../Sign_Up/Sign_Up.html">
              <button className="btn1">Sign Up</button>
            </a>
          </li>
          {/* List item for the 'Login' link with a button */}
          <li className="link">
            <a href="../Login/Login.html">
              <button className="btn1">Login</button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
