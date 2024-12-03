import React, { useState, useEffect } from 'react';
import './ViewFundRequests.css';

const ViewFundRequests = () => {
  const [fundRequests, setFundRequests] = useState([]);

  // Simulating an API call to fetch fund requests data
  useEffect(() => {
    const fetchFundRequests = () => {
      // Sample data
      setFundRequests([
        { id: 1, project: 'Park Renovation', amount: '50,000', status: 'Pending' },
        { id: 2, project: 'Road Expansion', amount: '100,000', status: 'Approved' },
      ]);
    };

    fetchFundRequests();
  }, []);

  const handleApproval = (id, status) => {
    setFundRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status } : request
      )
    );
    alert(`Request ${id} has been ${status.toLowerCase()}.`);
  };

  return (
    <div className="view-fund-requests">
      <header className="header">
        <h1>Fund Requests</h1>
      </header>
      <main className="main-content">
        <h2>View Fund Requests from Admin Head</h2>
        <table className="fund-requests-table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fundRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.project}</td>
                <td>{request.amount}</td>
                <td>{request.status}</td>
                <td>
                  {request.status === 'Pending' && (
                    <div>
                      <button
                        className="approve-button"
                        onClick={() => handleApproval(request.id, 'Approved')}
                      >
                        Approve
                      </button>
                      <button
                        className="reject-button"
                        onClick={() => handleApproval(request.id, 'Rejected')}
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </td>
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

export default ViewFundRequests;
