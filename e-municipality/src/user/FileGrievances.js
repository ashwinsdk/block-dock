import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";  // Correct import for ethers
import './FileGrievances.css';
const transfer = require("./contracts/GrievanceSystem.json");
const contractABI = transfer.abi;
//import contractABI from './contracts/GrievanceSystem.json'; // Import the ABI
const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
//Sepolia
//const contractAddress = "0x26b01E3AD38E32645f308d11C81575D03f126da9";
const provider = new ethers.BrowserProvider(window.ethereum);
const signer = await provider.getSigner();
const contract = new ethers.Contract(contractAddress, contractABI, signer);

const FileGrievances = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });
    const [trackingId, setTrackingId] = useState(null);
    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!window.ethereum) {
                alert("Please install MetaMask!");
                return;
            }

            // Call the smart contract function to file the grievance
            const grievanceName = formData.name;
            const grievanceDetails = formData.description;

            const transaction = await contract.fileGrievance(grievanceName, grievanceDetails);

            // Wait for the transaction to be mined
            await transaction.wait();

            // Set the tracking ID after the grievance is filed
            const newTrackingId = Math.floor(Math.random() * 1000000000);
            setTrackingId(newTrackingId);

            alert(`Your grievance has been filed with Tracking ID: ${newTrackingId}`);

            // Navigate to Thank You page after successful filing
            navigate("/thank-you");
        } catch (error) {
            console.error("Error filing grievance:", error);
            alert("An error occurred while filing your grievance. Please try again.");
        }
    };

    return (
        <div>
            <header className="navbar">
                <div className="navbar-links"></div>
                <div className="navbar-title">E-Municipality</div>
            </header>

            <div className="file-grievance-container" style={{ paddingTop: '5rem' }}>
                <h2>📩 File Your Grievance</h2>
                <p>Please fill out the form below to submit your grievance regarding city services.</p>

                <form onSubmit={handleSubmit} className="file-grievance-form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Petitioner's Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description" className="form-label">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            className="form-textarea"
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-button">Submit</button>
                </form>

                {trackingId && (
                    <p className="success-message">Your grievance has been filed with Tracking ID: {trackingId}</p>
                )}
            </div>

            <br />
            <footer className="footer">
                <p>&copy; 2024 E-Municipality. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default FileGrievances;
