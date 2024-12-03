import React from 'react';
import { Link } from 'react-router-dom';
import './AdminGovtHome.css';

const AdminGovtHome = () => {
  return (
    <div className="admin-govt-home">
      <header className="header">
        <h1>Government Admin Dashboard</h1>
        <Link to="/govt/assign-admin-head" className="top-right-button">Assign Admin Head</Link>
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
            <Link to="/govt/view-grievance-status" className="feature-button">View Grievance Status</Link>
          </div>
          <div className="feature-card">
            <p>Access and review the data of people within your jurisdiction.</p>
            <Link to="/view-people-data" className="feature-button">View People Data</Link>
          </div>
          <div className="feature-card">
            <p>Manage and view tax-related information for effective governance.</p>
            <Link to="/view-taxes" className="feature-button">View Taxes</Link>
          </div>
          <div className="feature-card">
            <p>Monitor the progress of ongoing government projects.</p>
            <Link to="/ongoing-projects" className="feature-button">View Ongoing Projects</Link>
          </div>
          <div className="feature-card">
            <p>Get in touch with municipality administrators for any assistance or queries.</p>
            <Link to="/contact-us" className="feature-button">Administrators Details</Link>
          </div>
          <div className="feature-card">
            <p>View and approve fund requests from Admin Head.</p>
            <Link to="/govt/view-fund-requests" className="feature-button">View Fund Requests</Link>
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
