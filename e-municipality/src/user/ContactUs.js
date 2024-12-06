import React, { useState } from 'react';
import './css/AdminDetails.css';
import "./css/Login.css";
import { Link } from "react-router-dom";
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';
import contractABI from './contracts/GrievanceSystem.json'; // Import the ABI
import AdminHeadHome from '../admin/AdminHeadHome';
//const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
//Sepolia 
//const contractAddress = "0x26b01E3AD38E32645f308d11C81575D03f126da9";
const contractAddress = "0xb93E6A9CA2C59267cBfb484Ac0F24440B19574ca";

const provider = new ethers.BrowserProvider(window.ethereum);
const signer = await provider.getSigner();

const contract = new ethers.Contract(contractAddress, contractABI.abi, signer);
const fetchedAdminHead = await contract.adminHead();
const fetchedAdminGovt = await contract.adminGovt();

console.log(fetchedAdminHead, fetchedAdminGovt);
function ContactUs() {
  return (
    <div>

      <header className="navbar">
        <div className="navbar-links"></div>
        <div className="navbar-title">E-Municipality</div>

      </header>


      <div className="admin-details" style={{ paddingTop: "4rem" }}><br></br>
        <h2 className="admin-title">Municipality Administration Details</h2>

        <div className="admin-section">
          <h3>Municipality Head (Admin-Head)</h3>
          <p>
            <strong>Role:</strong> Oversees funds, allocates funds for projects, assigns contractors, and views individual tax details.
            <br />
            <strong>Authentication:</strong> MetaMask authentication for secure access.
            <br />
            <strong>Key Actions:</strong> Manages fund allocation and project licensing to ensure transparent fund utilization.
          </p>
          <div className="contact-info">
            <p><strong>Wallet:</strong> {fetchedAdminHead}</p>
            {/* <p><strong>Phone Number:</strong> +1 9876543210</p>
            <p><strong>Municipality ID:</strong> 002</p> */}
          </div>
        </div>

        <div className="admin-section">
          <h3>Government Department Officer</h3>
          <p>
            <strong>Role:</strong> Manages fund transfers to the municipality, monitors tax collection and fund allocation, and oversees financial integrity.
            <br />
            <strong>Authentication:</strong> MetaMask authentication for secure access.
            <br />
            <strong>Key Actions:</strong> Ensures that all allocated funds are transparent and accessible for public viewing.
          </p>
          <div className="contact-info">
            <p><strong>Wallet:</strong> {fetchedAdminGovt}</p>
          </div>
        </div>
      </div>


      <footer className="footer">
        <p>&copy; 2024 E-Municipality. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContactUs;
