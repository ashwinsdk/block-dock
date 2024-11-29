import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [wardNo, setWardNo] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !dob ||
      !wardNo ||
      !phoneNo ||
      !email ||
      !newPassword ||
      !reEnterPassword ||
      !address
    ) {
      alert("All fields must be filled!");
      return;
    }

    if (newPassword !== reEnterPassword) {
      alert("Passwords don't match!");
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

     
      <br></br><br></br>
      <div className="register">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
          />

          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
          />

          <label>Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />

          <label>Ward Number</label>
          <input
            type="text"
            value={wardNo}
            onChange={(e) => setWardNo(e.target.value)}
            placeholder="Enter ward number"
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

          <label>Create New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter a new password"
          />

          <label>Re-enter Password</label>
          <input
            type="password"
            value={reEnterPassword}
            onChange={(e) => setReEnterPassword(e.target.value)}
            placeholder="Re-enter your password"
          />

          <label>Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
          ></textarea>

          <button type="submit">Register</button>
        </form>

        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 E-Municipality. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Register;
