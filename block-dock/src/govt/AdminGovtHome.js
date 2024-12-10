import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';

const AdminGovtHome = () => {
  return (
    <div className="admin-govt-home">
      <header className="header">
        <h1>Block-Dock</h1>
      </header>
      <div className="dashboard">

        <h2>Welcome to the Government Admin Dashboard</h2><br />
        <div className="dashboard-buttons">
          <div className="dashboard-card">
            <h3>Send Funds</h3>
            <p>Allocate and send funds to municipalities for various projects and needs.</p>
            <Link to="/send-funds" className="dashboard-link">
              <button className="dashboard-button">Send Funds</button>
            </Link>
          </div>
          <div className="dashboard-card">
            <h3>View Grievance Status</h3>
            <p>Check the status of grievances submitted by the public and address them promptly.</p>
            <Link to="/all-grievances" className="dashboard-link">
              <button className="dashboard-button">View Grievance Status</button>
            </Link>
          </div>
          <div className="dashboard-card">
            <h3>View People Data</h3>
            <p>Access and review the data of people within your jurisdiction.</p>
            <Link to="/view-people-data" className="dashboard-link">
              <button className="dashboard-button">View People Data</button>
            </Link>
          </div>
          <div className="dashboard-card">
            <h3>Assign Admin Head</h3>
            <p>Assign Admin Head  by entering the wallet address of the new admin head.</p>
            <Link to="/govt/assign-admin-head" className="dashboard-link">
              <button className="dashboard-button">Assign</button>
            </Link>
          </div>
          <div className="dashboard-card">
            <h3>View Ongoing Projects</h3>
            <p>Monitor the progress of ongoing government projects.</p>
            <Link to="/ongoing-projects" className="dashboard-link">
              <button className="dashboard-button">View Ongoing Projects</button>
            </Link>
          </div>
          <div className="dashboard-card">
            <h3>View Administrators Details</h3>
            <p>Get in touch with municipality administrators for any assistance or queries.</p>
            <Link to="/contact-us" className="dashboard-link">
              <button className="dashboard-button">Administrators Details</button>
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AdminGovtHome;
