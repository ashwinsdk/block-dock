import React from 'react';
import './AdminDetails.css';

function ContactUs() {
  return (
    <div className="admin-details">
      <h2 className="admin-title">Municipality Administration Details</h2>
      
      <div className="admin-section">
        <h3>Municipality Member (Admin-1)</h3>
        <p>
          <strong>Role:</strong> Manages grievances by accepting or rejecting them and updates tax payments on the blockchain.
          <br />
          <strong>Authentication:</strong> MetaMask authentication for secure access.
          <br />
          <strong>Action Flow:</strong> Grievances are marked pending if no action is taken and are escalated to the municipality head.
        </p>
        <div className="contact-info">
          <p><strong>Name:</strong> Ramesh</p>
          <p><strong>Phone Number:</strong>1234567890</p>
          <p><strong>Municipality ID:</strong> 001</p>
        </div>
      </div>

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
          <p><strong>Name:</strong> Sarah </p>
          <p><strong>Phone Number:</strong> +1 9876543210</p>
          <p><strong>Municipality ID:</strong> 002</p>
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
          <p><strong>Name:</strong> Mr.Ravi</p>
          <p><strong>Phone Number:</strong> 123455668</p>
          <p><strong>Municipality ID:</strong> 003</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
