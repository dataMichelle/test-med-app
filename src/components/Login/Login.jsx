import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../server/config";
import { useState, useEffect } from "react";

const Login = ({ onShowSignUpModal }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // Get navigate function from react-router-dom
  const navigate = useNavigate();

  // Check if user is already authenticated, then redirect to home page
  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/");
    }
  }, [navigate]);

  // Function to handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    // Send a POST request to the login API endpoint
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    // display the name extracted from email of the user in the session storage
    const extractedName = email.split("@")[0];
    sessionStorage.setItem("name", extractedName);

    // Parse the response JSON
    const json = await res.json();
    if (json.authtoken) {
      sessionStorage.setItem("auth-token", json.authtoken);
      sessionStorage.setItem("email", email);
      // Extract name from email if not provided by backend
      const extractedName = email.split("@")[0];
      sessionStorage.setItem("name", extractedName);
      navigate("/");
      window.location.reload();
    } else {
      // Handle errors if authentication fails
      if (json.errors) {
        for (const error of json.errors) {
          alert(error.msg);
        }
      } else {
        alert(json.error);
      }
    }
  };

  return (
    <div className="container">
      {/* Div for login grid layout */}
      <div className="login-grid">
        {/* Div for login text */}
        <div className="login-text">
          <h2>Login</h2>
        </div>
        {/* Additional login text with a link to Sign Up page */}
        <div className="login-text">
          Are you a new member?
          <span>
            <Link
              to="/signup"
              className="signup-link"
              onClick={(e) => {
                e.preventDefault();
                if (onShowSignUpModal) onShowSignUpModal();
              }}
            >
              Sign Up Here
            </Link>
          </span>
        </div>
        <br />
        {/* Div for login form */}
        <div className="login-form">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="helpId"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="btn-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <button type="reset" className="btn btn-danger">
                Reset
              </button>
            </div>

            <div className="login-text">Forgot Password?</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
