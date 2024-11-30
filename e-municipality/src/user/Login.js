import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [userType, setUserType] = useState('user');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleConnect = () => {
    alert('Connect button clicked!');
  };

  return (
    <div className="login-container">
      <header className="navbar">
        <div className="navbar-title">E-Municipality</div>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </div>
      </header>
      <div className="login">
        <h2>Login</h2>
        <label>User Type</label>
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Municipality Admin</option>
          <option value="government">Government</option>
        </select>

        <div className="button-group">
          <button onClick={handleConnect}>Connect</button>
        </div>

        {userType === 'user' && (
          <p>
            New user? <Link to="/register">Register here</Link>
          </p>
        )}
      </div>

    </div>
  );
}

export default Login;