import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/style.css";


function UserDashboard() {
  const location = useLocation();
  const userName = location.state?.userName || "User";

  return (
    <div className="layout">

      <header className="header">
        <h1>E-Municipality</h1>
      </header>

      <div className="dashboard">
        <h2> Welcome to E-Muncipality,{userName}!</h2><br />
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
            <h3>Admin Details</h3>
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

          <div className="dashboard-card">
            <h3>All Grievances</h3>
            <p>View all grievances made by all users.</p>
            <Link to="/all-grievances" className="dashboard-link">
              <button className="dashboard-button">All Grievances</button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

export default UserDashboard;
