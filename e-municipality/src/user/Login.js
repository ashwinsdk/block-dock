import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [userType, setUserType] = useState("user");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (userType === "user") {
      navigate("/user-dashboard");
    } else if (userType === "admin") {
      navigate("/admin-head-home");
    } else if (userType === "government") {
      navigate("/admin-govt-home");
    } else {
      alert("Please select a valid user type");
    }
  };

  const handleConnect = () => {
    alert("Connect button clicked!");
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="navbar">
        <div className="navbar-title">E-Municipality</div>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </div>
      </header>

      {/* Main Login Form */}
      <div className="login">
        <h2>Login</h2>
        <label>User Type</label>
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Municipality Admin</option>
          <option value="government">Government</option>
        </select>

        <div className="button-group">
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleConnect}>Connect</button>
        </div>

        <p>
          New user? <Link to="/register">Register here</Link>
        </p>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 E-Municipality. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Login;
