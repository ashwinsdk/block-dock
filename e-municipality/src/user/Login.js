import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [userType, setUserType] = useState('user');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Navigate based on user type
    if (userType === 'user') {
      navigate('/user-dashboard'); // Make sure this matches the route in App.js
    } else if (userType === 'admin') {
      navigate('/municipality-home');
    } else if (userType === 'government') {
      navigate('/government-home');
    } else {
      alert('Please select a valid user type');
    }
  };

  const handleConnect = () => {
    // Implement connect logic if required
    alert('Connect button clicked!');
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <label>User Type</label>
      <select value={userType} onChange={(e) => setUserType(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Municipality Admin</option>
        <option value="government">Government</option>
      </select>

      <label>Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="button-group">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleConnect}>Connect</button>
      </div>

      <p>
        New user? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

export default Login;
