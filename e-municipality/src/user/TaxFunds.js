import React from "react";

import "./GovernmentFunds.css";

function TaxFunds() {
  const taxFunds = [
    { id: 1, amount: "$150,000", date: "2023-02-10" },
    { id: 2, amount: "$200,000", date: "2023-03-20" },
  ];

  const handlePayTax = (fundId) => {
    alert(`Pay Tax button clicked for Fund ID: ${fundId}`);
    
  };

  return (
    <div className="layout">
      <header className="navbar">
        <div className="navbar-title">E-Municipality</div>
      </header>

      <div className="funds-container">
        <h2>Funds Received from Tax</h2>
        <table className="funds-table">
          <thead>
            <tr>
              <th>Fund ID</th>
              <th>Amount</th>
              <th>Date Received</th>
              <th>Action</th> {/* New column header for "Pay Tax" */}
            </tr>
          </thead>
          <tbody>
            {taxFunds.map((fund) => (
              <tr key={fund.id}>
                <td>{fund.id}</td>
                <td>{fund.amount}</td>
                <td>{fund.date}</td>
                <td>
                  <button
                    className="pay-tax-btn"
                    onClick={() => handlePayTax(fund.id)}
                  >
                    Pay Tax
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="footer">
        <p>&copy; 2024 E-Municipality. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default TaxFunds;
