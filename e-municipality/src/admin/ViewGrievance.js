import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import './ViewGrievance.css';

const transfer = require("./contracts/GrievanceSystem.json");
const contractABI = transfer.abi;
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
        const grievancesData = await contract.viewGrievances(); // Fetch grievances
        setGrievances(grievancesData);
      } catch (error) {
        console.error("Error fetching grievances:", error);
        alert("An error occurred while fetching grievances.");
      }
    };

    fetchGrievances();
  }, []);

  const handleEditStatus = async (grievanceIndex, newStatus) => {
    try {
      // Call the smart contract method to edit grievance status
      const tx = await contract.viewAndEditGrievances(grievanceIndex, newStatus);
      await tx.wait(); // Wait for the transaction to be mined

      alert(`Grievance status updated to ${newStatus}`);
      // Update grievances state locally to reflect the new status
      setGrievances((prevGrievances) =>
        prevGrievances.map((g, index) =>
          index === grievanceIndex ? { ...g, status: newStatus } : g
        )
      );
    } catch (error) {
      console.error("Error editing grievance status:", error);
      alert("An error occurred while updating grievance status.");
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="people-data-container">
      <header className="header">
        <h1>E-Municipality</h1>
      </header>

      <main className="content">
        <h2>Edit Grievances</h2>
        <div className="people-data-list">
          <table className="people-data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Details</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {grievances.length > 0 ? (
                grievances.map((grievance, index) => (
                  <tr key={index}>
                    <td>{grievance.name || 'N/A'}</td>
                    <td>{grievance.details || 'N/A'}</td>
                    <td>{grievance.status || 'N/A'}</td>
                    <td>
                      <button
                        onClick={() => handleEditStatus(index, 'ACCEPTED')}
                        className="btn-accept"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleEditStatus(index, 'REJECTED')}
                        className="btn-reject"
                      >
                        Reject
                      </button>
                    </td>
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
