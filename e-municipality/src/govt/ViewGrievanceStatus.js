import React, { useState, useEffect } from 'react';
import './css/ViewGrievanceStatus.css';

const ViewGrievanceStatus = () => {
  const [grievances, setGrievances] = useState([]);

  useEffect(() => {
    // Fetch grievances from backend or API
    // This is a placeholder for demonstration purposes
    const fetchedGrievances = [
      { id: 1, description: 'Road repair needed on 5th Avenue', status: 'Pending', date: '2024-11-01' },
      { id: 2, description: 'Overflowing garbage bins in Sector 4', status: 'Resolved', date: '2024-11-03' },
      { id: 3, description: 'Street lights not working on Maple Street', status: 'Rejected', date: '2024-11-05' },
    ];
    setGrievances(fetchedGrievances);
  }, []);

  return (
    <div className="view-grievance-status-container">
      <header className="header">
        <h1>E-Municipality</h1>
      </header>
      <main className="content">
        <h2>Grievance Status</h2>
        <table className="view-grievance-status-table">
          <thead>
            <tr>
              <th>Grievance ID</th>
              <th>Description</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {grievances.map(grievance => (
              <tr key={grievance.id}>
                <td>{grievance.id}</td>
                <td>{grievance.description}</td>
                <td>{grievance.status}</td>
                <td>{grievance.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <footer className="footer">
        <p>© 2024 E-Municipality. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ViewGrievanceStatus;
