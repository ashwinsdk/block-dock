import React from "react";
import { Link } from "react-router-dom";
import "./UserDashboard.css";

function UserDashboard() {
  return (
    <div className="layout">
      
      <header className="navbar">
        <div className="navbar-title">E-Municipality</div>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/login" className="navbar-link">Logout</Link>
        </div>
      </header>
      <br></br><br></br><br></br>

      <h2> Welcome to E-Muncipality,User</h2>
      <div className="dashboard">
        
        <div className="dashboard-buttons">
          <div className="dashboard-card">
            <h3>File Grievance</h3>
            <p>Submit your complaints or issues for the municipality's attention.</p>
            <Link to="/file-grievances" className="dashboard-link">
              <button className="dashboard-button">File Grievance</button>
            </Link>
          </div>

          <div className="dashboard-card">
            <h3>Ongoing Projects</h3>
            <p>Track the progress and updates of current municipal projects.</p>
            <Link to="/ongoing-projects" className="dashboard-link">
              <button className="dashboard-button">Ongoing Projects</button>
            </Link>
          </div>

          <div className="dashboard-card">
            <h3>Government Funds</h3>
            <p>View details of funds received from the government.</p>
            <Link to="/government-funds" className="dashboard-link">
              <button className="dashboard-button">Government Funds</button>
            </Link>
          </div>

          <div className="dashboard-card">
            <h3>Tax Funds</h3>
            <p>Access information about collected taxes and fund usage.</p>
            <Link to="/tax-funds" className="dashboard-link">
              <button className="dashboard-button">Tax Funds</button>
            </Link>
          </div>

          <div className="dashboard-card">
            <h3>Contact Us</h3>
            <p>Reach out to us for any queries or assistance.</p>
            <Link to="/contact-us" className="dashboard-link">
              <button className="dashboard-button">Contact Us</button>
            </Link>
          </div>

          <div className="dashboard-card">
            <h3>My Grievances</h3>
            <p>View and manage grievances you have submitted.</p>
            <Link to="/my-grievances" className="dashboard-link">
              <button className="dashboard-button">My Grievances</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 E-Municipality. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default UserDashboard;
