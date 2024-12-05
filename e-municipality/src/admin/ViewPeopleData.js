import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
//import './MyGrievances.css';
import './ViewPeopleData.css';
const transfer = require("./contracts/GrievanceSystem.json");
const contractABI = transfer.abi;
//import contractABI from './contracts/GrievanceSystem.json'; // Import the ABI
const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
//Sepolia
//const contractAddress = "0x26b01E3AD38E32645f308d11C81575D03f126da9";
const provider = new ethers.BrowserProvider(window.ethereum);
const signer = await provider.getSigner();
const contract = new ethers.Contract(contractAddress, contractABI, signer);
function MyGrievances() {
  const [grievances, setGrievances] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchGrievances = async () => {
      if (!window.ethereum) {
        alert("Please install MetaMask!");
        return;
      }
      try {
        // Assuming your contract has a method `getGrievances` that fetches grievances
        const grievancesData = await contract.viewAllUsers(); // Adjust based on actual function
        setGrievances(grievancesData);
      } catch (error) {
        console.error("Error fetching grievances:", error);
        alert("An error occurred while fetching grievances.");
      }
    };

    fetchGrievances();
  }, []);

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="people-data-container">
      <header className="header">
        <h1>E-Municipality</h1>
      </header>

      <main className="content">
        <h2>People Data</h2>
        <div className="people-data-list">
          <table className="people-data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>DOB</th>
                <th>Mobile</th>
                {/* <th>Wallet Address</th> */}
              </tr>
            </thead>
            <tbody>
              {grievances.length > 0 ? (
                grievances.map((grievance, index) => (
                  <tr key={index}>
                    <td>{grievance.name || 'N/A'}</td>
                    <td>{grievance.email || 'N/A'}</td>
                    <td>{grievance.dob || 'N/A'}</td>
                    <td>{grievance.mobile || 'N/A'}</td>
                    {/* <td>{grievance.useraddress || 'N/A'}</td> */}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No grievances found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      <footer className="footer">
        <p>© 2024 E-Municipality. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MyGrievances;