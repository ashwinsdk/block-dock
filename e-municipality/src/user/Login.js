import React, { useState } from 'react';
import "./css/Login.css";
import { Link } from "react-router-dom";
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';
import contractABI from './contracts/GrievanceSystem.json'; // Import the ABI
//const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
//Sepolia 
const contractAddress = "0x26b01E3AD38E32645f308d11C81575D03f126da9";
//const contractAddress = "0xb93E6A9CA2C59267cBfb484Ac0F24440B19574ca";

const Login = () => {
  const [userAddress, setUserAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [userType, setUserType] = useState('user');
  const [name, setName] = useState('');

  // Function to handle login
  const adminGovt = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'; // AdminGovt Address
  //const adminHead = '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC'; // AdminGovt Address
  //const [adminHead, setAdminHead] = useState(''); // Dynamically set adminHead

  const handleLogin = async () => {
    setLoading(true);
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        // Get the user's MetaMask address
        const address = await signer.getAddress();
        setUserAddress(address);

        // Initialize contract interaction
        const contract = new ethers.Contract(contractAddress, contractABI.abi, signer);
        const fetchedAdminHead = await contract.adminHead();
        const fetchedAdminGovt = await contract.adminGovt();
        console.log(fetchedAdminHead, fetchedAdminGovt);
        if (address === fetchedAdminGovt) {
          // Redirect to AdminGovt home if the address matches adminGovt
          alert('Welcome, AdminGovt!');
          navigate('/admin-govt-home');
          return;
        } else if (address === fetchedAdminHead) {
          // Redirect to AdminHead home if the address matches adminHead
          alert('Welcome, AdminHead!');
          navigate('/admin-head-home');
          return;
        }

        // Check if the user is registered
        const user = await contract.users(address);

        if (user.name) {
          // If user data exists, navigate to the user dashboard
          alert('Login successful');
          navigate('/user-dashboard', { state: { userName: user.name } });
          // Navigate to the UserDashboard component
        } else {
          alert('User not registered');
        }
      } catch (error) {
        console.error(error);
        alert('Login failed');
      }
    } else {
      alert('MetaMask is not installed!');
    }
    setLoading(false);
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
        <h3>{loading ? 'Logging in...' : 'Login with MetaMask'}</h3>

        <div className="button-group">
          <button onClick={handleLogin}>Connect</button>
        </div>

        {userType === 'user' && (
          <p>
            New user? <Link to="/register">Register here</Link>
          </p>
        )}
      </div>

    </div>
  );

};

export default Login;
