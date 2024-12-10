import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';

const AdminHeadHome = () => {

  return (

    <div className="layout">

      <header className="header">
        <h1>E-Municipality</h1>
      </header>

      <div className="dashboard">
        <h2> Welcome, Municipality Head</h2><br />
        <div className="dashboard-buttons">

          <div className="dashboard-card">
            <h3>Receive Funds</h3>
            <p>Manage incoming funds from government departments.</p>
            <Link to="/receive-fund" className="dashboard-link">
              <button className="dashboard-button">Receive Funds</button>
            </Link>
          </div>

          <div className="dashboard-card">
            <h3>View Grievance</h3>
            <p>Review and resolve grievances raised by city residents.</p>
            <Link to="/view-grievance" className="dashboard-link">
              <button className="dashboard-button">View Grievance</button>
            </Link>
          </div>

          <div className="dashboard-card">
            <h3>Fund Allocation</h3>
            <p>Allocate funds to specific projects for urban development.</p>
            <Link to="/fund-allocation" className="dashboard-link">
              <button className="dashboard-button">Fund Allocation</button>
            </Link>
          </div>

          <div className="dashboard-card">
            <h3>View People Data</h3>
            <p>Access data of residents and registered entities.</p>
            <Link to="/view-people-data" className="dashboard-link">
              <button className="dashboard-button">View People Data</button>
            </Link>
          </div>

          <div className="dashboard-card">
            <h3>Admin Details</h3>
            <p>Reach out to us for any queries or assistance.</p>
            <Link to="/contact-us" className="dashboard-link">
              <button className="dashboard-button">Details</button>
            </Link>
          </div>

        </div>
      </div>

    </div>

  );
};

const FeatureCard = ({ icon, title, description, onClick }) => {
  return (
    <div className="feature-card" onClick={onClick}>
      {icon}
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="feature-button">{title}</button>
    </div>
  );
};

export default AdminHeadHome;
