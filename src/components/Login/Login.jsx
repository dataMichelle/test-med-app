import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
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
            <Link to="/signup" className="signup-link">
              Sign Up Here
            </Link>
          </span>
        </div>
        <br />
        {/* Div for login form */}
        <div className="login-form" style={{ width: "100%" }}>
          <form style={{ width: "100%" }}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
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

            <div
              className="login-text"
              style={{ textAlign: "center", marginTop: "1rem" }}
            >
              Forgot Password?
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
