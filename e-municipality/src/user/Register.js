import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [wardNo, setWardNo] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const [address, setAddress] = useState('');

  // Handle form submission and validation
  const handleRegister = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!firstName || !lastName || !dob || !wardNo || !phoneNo || !email || !newPassword || !reEnterPassword || !address) {
      alert("All fields must be filled!");
      return;
    }

    if (newPassword !== reEnterPassword) {
      alert("Passwords don't match!");
      return;
    }

    // If everything is valid, display a success message
    alert('Registration successful!');
    // You can also handle the form data submission here, e.g., send data to a backend
  };

  return (
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
  );
}

export default Register;
