import React, { useState } from 'react';
import './ViewGrievance.css';

const ViewGrievancePage = () => {
  const [grievances, setGrievances] = useState([
    { id: 1, description: 'Road repair needed on 5th Avenue', status: 'Pending', date: '2024-11-01', details: 'Road has been in bad condition for over a month causing traffic and accidents.' },
    { id: 2, description: 'Overflowing garbage bins in Sector 4', status: 'Pending', date: '2024-11-03', details: 'Garbage bins have not been emptied for over a week leading to an unpleasant smell and health hazards.' },
    { id: 3, description: 'Street lights not working on Maple Street', status: 'Pending', date: '2024-11-05', details: 'Street lights have been out for two weeks causing safety concerns for residents.' },
  ]);

  const [selectedGrievance, setSelectedGrievance] = useState(null);

  const updateGrievanceStatus = (id, status) => {
    setGrievances(grievances.map(grievance =>
      grievance.id === id ? { ...grievance, status } : grievance
    ));
  };

  const viewDetails = (grievance) => {
    setSelectedGrievance(grievance);
  };

  const closeDetails = () => {
    setSelectedGrievance(null);
  };

  const pendingGrievances = grievances.filter(grievance => grievance.status === 'Pending');
  const acceptedGrievances = grievances.filter(grievance => grievance.status === 'Accepted');
  const rejectedGrievances = grievances.filter(grievance => grievance.status === 'Rejected');

  return (
    <div className="view-grievance-container">
      <header className="header">
        <h1>E-Municipality</h1>
      </header>

      <main className="content">
        <h2>Grievances</h2>

        <div className="grievances-section">
          <h3>Pending Grievances</h3>
          <table className="view-grievance-table">
            <thead>
              <tr>
                <th>Grievance ID</th>
                <th>Description</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingGrievances.map(grievance => (
                <tr key={grievance.id}>
                  <td>{grievance.id}</td>
                  <td>{grievance.description}</td>
                  <td className={`status ${grievance.status.toLowerCase()}`}>{grievance.status}</td>
                  <td>{grievance.date}</td>
                  <td>
                    <button onClick={() => viewDetails(grievance)}>View Details</button>
                    <button onClick={() => updateGrievanceStatus(grievance.id, 'Accepted')}>Accept</button>
                    <button onClick={() => updateGrievanceStatus(grievance.id, 'Rejected')}>Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grievances-section">
          <h3>Accepted Grievances</h3>
          <table className="view-grievance-table">
            <thead>
              <tr>
                <th>Grievance ID</th>
                <th>Description</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {acceptedGrievances.map(grievance => (
                <tr key={grievance.id}>
                  <td>{grievance.id}</td>
                  <td>{grievance.description}</td>
                  <td className={`status ${grievance.status.toLowerCase()}`}>{grievance.status}</td>
                  <td>{grievance.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grievances-section">
          <h3>Rejected Grievances</h3>
          <table className="view-grievance-table">
            <thead>
              <tr>
                <th>Grievance ID</th>
                <th>Description</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {rejectedGrievances.map(grievance => (
                <tr key={grievance.id}>
                  <td>{grievance.id}</td>
                  <td>{grievance.description}</td>
                  <td className={`status ${grievance.status.toLowerCase()}`}>{grievance.status}</td>
                  <td>{grievance.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedGrievance && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeDetails}>&times;</span>
              <h2>Grievance Details</h2>
              <p><strong>ID:</strong> {selectedGrievance.id}</p>
              <p><strong>Description:</strong> {selectedGrievance.description}</p>
              <p><strong>Status:</strong> {selectedGrievance.status}</p>
              <p><strong>Date:</strong> {selectedGrievance.date}</p>
              <p><strong>Details:</strong> {selectedGrievance.details}</p>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>© 2024 E-Municipality. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ViewGrievancePage;
