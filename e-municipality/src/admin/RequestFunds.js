import React, { useState } from 'react';
import './RequestFunds.css';

const RequestFunds = () => {
  const [fundRequest, setFundRequest] = useState({
    projectName: '',
    amount: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFundRequest((prevRequest) => ({
      ...prevRequest,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically send the fundRequest to the server
    console.log('Fund Request Submitted:', fundRequest);
    alert('Fund request submitted successfully!');
  };

  return (
    <div className="request-funds">
      <header className="header">
        <h1>E-Municipality</h1>
      </header>
      <main className="main-content">
        <form onSubmit={handleSubmit} className="fund-request-form">
          <label>
            Project Name:
            <input
              type="text"
              name="projectName"
              value={fundRequest.projectName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Amount:
            <input
              type="number"
              name="amount"
              value={fundRequest.amount}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={fundRequest.description}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit" className="submit-button">Submit Request</button>
        </form>
      </main>
      <footer className="footer">
        <p>© 2024 E-Municipality. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RequestFunds;
