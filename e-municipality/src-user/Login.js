import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [userType, setUserType] = useState('user');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    
    navigate('/user-dashboard');  
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
      <label>Password</label>
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
