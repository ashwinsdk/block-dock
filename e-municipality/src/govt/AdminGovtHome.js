import React from 'react';
import { Link } from 'react-router-dom';
import './AdminGovtHome.css';

const AdminGovtHome = () => {
  return (
    <div className="admin-govt-home">
      <header className="header">
        <h1>Government Admin Dashboard</h1>
      </header>
      <main className="content">
        <h2>Welcome to the Government Admin Dashboard</h2>
        <div className="admin-govt-links">
          <Link to="/send-funds">Send Funds</Link>
          <Link to="/govt/view-grievance-status">View Grievance Status</Link>
          
          <Link to="/view-people-data">View People Data</Link>
          <Link to="/view-taxes">View Taxes</Link>
          <Link to="/ongoing-projects">View On-going Projects</Link>
          <Link to="/contact-us">Municipality Admin Details</Link>
        </div>
      </main>
      <footer className="footer">
        <p>© 2024 E-Municipality. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdminGovtHome;