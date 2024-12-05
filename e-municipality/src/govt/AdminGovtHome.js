import React from 'react';
import { Link } from 'react-router-dom';
import './css/AdminGovtHome.css';

const AdminGovtHome = () => {
  return (
    <div className="admin-govt-home">
      <header className="header">
        <h1>Government Admin Dashboard</h1>
      </header>
      <main className="content">
        <h2>Welcome to the Government Admin Dashboard</h2>
        <div className="admin-govt-links">
          <div className="feature-card">
            <p>Allocate and send funds to municipalities for various projects and needs.</p>
            <Link to="/send-funds" className="feature-button">Send Funds</Link>
          </div>
          <div className="feature-card">
            <p>Check the status of grievances submitted by the public and address them promptly.</p>
            <Link to="/my-grievances" className="feature-button">View Grievance Status</Link>
          </div>
          <div className="feature-card">
            <p>Access and review the data of people within your jurisdiction.</p>
            <Link to="/view-people-data" className="feature-button">View People Data</Link>
          </div>
          <div className="feature-card">
            <p>Assign Admin Head  by entering the wallet address of the new admin head.</p>
            <Link to="/govt/assign-admin-head" className="feature-button">Assign</Link>
          </div>
          <div className="feature-card">
            <p>Monitor the progress of ongoing government projects.</p>
            <Link to="/ongoing-projects" className="feature-button">View Ongoing Projects</Link>
          </div>
          <div className="feature-card">
            <p>Get in touch with municipality administrators for any assistance or queries.</p>
            <Link to="/contact-us" className="feature-button">Administrators Details</Link>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>© 2024 E-Municipality. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdminGovtHome;
