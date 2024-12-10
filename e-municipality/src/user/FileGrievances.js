import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ethers } from "ethers";  // Correct import for ethers
import './css/style.css';
const transfer = require("./contracts/GrievanceSystem.json");
const contractABI = transfer.abi;
//import contractABI from './contracts/GrievanceSystem.json'; // Import the ABI
//const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
//Sepolia 
const contractAddress = "0x26b01E3AD38E32645f308d11C81575D03f126da9";
//const contractAddress = "0xb93E6A9CA2C59267cBfb484Ac0F24440B19574ca";

const provider = new ethers.BrowserProvider(window.ethereum);
const signer = await provider.getSigner();
const contract = new ethers.Contract(contractAddress, contractABI, signer);
const accounts = await provider.listAccounts();
const user = await contract.users(accounts[0].address);
console.log(user.name);


const FileGrievances = () => {


    const [formData, setFormData] = useState({
        name: user.name,
        description: '',
    });
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
            const grievanceName = user.name;
            console.log(grievanceName);
            const grievanceDetails = formData.description;

            const transaction = await contract.fileGrievance(grievanceName, grievanceDetails);

            // Wait for the transaction to be mined
            await transaction.wait();

            alert(`Your grievance has been filed.`);

            navigate("/user-dashboard");
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
            <div className="register-container">
                <div className="register">
                    <h2>📩 File Your Grievance</h2>
                    <p>Please fill out the form below to submit your grievance regarding city services.</p>
                    <label>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        //value={formData.name}
                        value={user.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                    />
                    <label>Details</label>
                    <input
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        placeholder="Enter the details"
                    />

                    <div className="button-group">
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default FileGrievances;
