import React, { useState } from 'react';
import "./css/Register.css";
import { Link } from "react-router-dom";
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';
import contractABI from './contracts/GrievanceSystem.json'; // Import the ABI
const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
//Sepolia
//const contractAddress = "0x26b01E3AD38E32645f308d11C81575D03f126da9";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [mobile, setMobile] = useState('');

  const registerUser = async () => {
    // Connect to MetaMask
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI.abi, signer);

        // Get the user's MetaMask address
        const userAddress = await signer.getAddress();

        // Check if the user is already registered
        const existingUser = await contract.users(userAddress);
        if (existingUser.name !== "") {
          alert('User is already registered!');
          return; // Exit if the user is already registered
        }

        // Call the registerUser function from the smart contract
        try {
          const tx = await contract.registerUser(
            userAddress,
            name,
            email,
            dob,
            mobile
          );
          await tx.wait();
          alert('User Registered Successfully');
        } catch (error) {
          console.error("Transaction Error:", error);
          if (error.reason) {
            alert(`Smart Contract Revert: ${error.reason}`);
          } else if (error.data && error.data.message) {
            alert(`Revert Reason: ${error.data.message}`);
          } else {
            alert('Unknown Error');
          }
        }
      } catch (error) {
        console.error("Error:", error);
        alert('Registration failed');
      }
    }
    else {
      alert('MetaMask is not installed!');
    }
  };


  // return (
  //   <div>
  //     <h2>Register</h2>
  //     <input
  //       type="text"
  //       placeholder="Name"
  //       value={name}
  //       onChange={(e) => setName(e.target.value)}
  //     />
  //     <input
  //       type="email"
  //       placeholder="Email"
  //       value={email}
  //       onChange={(e) => setEmail(e.target.value)}
  //     />
  //     <input
  //       type="text"
  //       placeholder="Date of Birth"
  //       value={dob}
  //       onChange={(e) => setDob(e.target.value)}
  //     />
  //     <input
  //       type="text"
  //       placeholder="Mobile"
  //       value={mobile}
  //       onChange={(e) => setMobile(e.target.value)}
  //     />
  //     <button onClick={registerUser}>Register</button>
  //   </div>
  // );

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
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter phone number"
          />

          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
          />

          <div className="button-group">
            <button onClick={registerUser}>Connect</button>
          </div>
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

};

export default Register;
