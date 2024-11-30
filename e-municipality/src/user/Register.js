import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Register.css";

function Register() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !dob || !phoneNo || !email || !address) {
      alert("All fields must be filled!");
      return;
    }


    alert("Registration successful!");
  };

  return (
    <div className="layout">
      {/* Header */}
      <header className="navbar">
        <div className="navbar-title">E-Municipality</div>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
        </div>
      </header>

      <div className="register-container">
        <div className="register">
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />

            <label>Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />

            <label>Phone Number</label>
            <input
              type="tel"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              placeholder="Enter phone number"
            />

            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
            />

            <label>Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
            ></textarea>

            <button type="submit">Connect</button>
          </form>

          <p>
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>

      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 E-Municipality. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Register;
