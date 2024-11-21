import React, { useState, useEffect } from 'react';
import './ViewTaxes.css';

const ViewTaxesPage = () => {
  // Sample state for tax data
  const [taxData, setTaxData] = useState([]);

  // Simulating an API call to fetch tax data
  useEffect(() => {
    const fetchTaxData = () => {
      setTaxData([
        { id: 1, name: 'John Doe', taxPaid: 5000, dueDate: '2024-12-31', status: 'Paid', paymentDate: '2024-12-01' },
        { id: 2, name: 'Jane Smith', taxPaid: 3000, dueDate: '2024-11-30', status: 'Unpaid', paymentDate: null },
        { id: 3, name: 'George Lee', taxPaid: 4000, dueDate: '2024-12-15', status: 'Paid', paymentDate: '2024-12-10' },
      ]);
    };

    fetchTaxData();
  }, []);

  // Calculate total tax paid
  const totalTaxPaid = taxData.reduce((total, person) => total + person.taxPaid, 0);

  // Separate paid and unpaid taxes
  const paidTaxes = taxData.filter(person => person.status === 'Paid');
  const unpaidTaxes = taxData.filter(person => person.status === 'Unpaid');

  return (
    <div className="taxes-container">
      <header className="header">
        <h1>E-Municipality</h1>
      </header>

      <main className="content">
        <h2>View Taxes</h2>

        <div className="total-tax">
          <h3>Total Tax Collected: ₹{totalTaxPaid}</h3>
        </div>

        <div className="taxes-list">
          <h3>Paid Taxes</h3>
          <table className="taxes-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Tax Paid</th>
                <th>Due Date</th>
                <th>Payment Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {paidTaxes.map((person) => (
                <tr key={person.id}>
                  <td>{person.name}</td>
                  <td>{person.taxPaid}</td>
                  <td>{person.dueDate}</td>
                  <td>{person.paymentDate}</td>
                  <td className={`status ${person.status.toLowerCase()}`}>{person.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="taxes-list">
          <h3>Unpaid Taxes</h3>
          <table className="taxes-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Tax Paid</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {unpaidTaxes.map((person) => (
                <tr key={person.id}>
                  <td>{person.name}</td>
                  <td>{person.taxPaid}</td>
                  <td>{person.dueDate}</td>
                  <td className={`status ${person.status.toLowerCase()}`}>{person.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <footer className="footer">
        <p>© 2024 E-Municipality. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ViewTaxesPage;
