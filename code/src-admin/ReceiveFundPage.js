import React, { useState, useEffect } from 'react';
import './ReceiveFundPage.css';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const ReceiveFundPage = () => {
  const [receivedFunds, setReceivedFunds] = useState([
    { id: 1, source: 'Government Grant', amount: 50000, date: '2024-11-01' },
    { id: 2, source: 'Community Donation', amount: 15000, date: '2024-11-05' },
  ]);

  const [newFund, setNewFund] = useState({ source: '', amount: '', date: '' });
  const [totalAmountReceived, setTotalAmountReceived] = useState(0);
  const [amountSpent, setAmountSpent] = useState(20000); // Example spent amount

  useEffect(() => {
    const totalReceived = receivedFunds.reduce((sum, fund) => sum + parseFloat(fund.amount), 0);
    setTotalAmountReceived(totalReceived);
  }, [receivedFunds]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFund({ ...newFund, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReceivedFunds([...receivedFunds, { ...newFund, id: receivedFunds.length + 1 }]);
    setNewFund({ source: '', amount: '', date: '' });
  };

  const sortedFunds = [...receivedFunds];

  const remainingAmount = totalAmountReceived - amountSpent;

  const data = {
    labels: receivedFunds.map(fund => fund.source),
    datasets: [
      {
        label: 'Amount (₹)',
        data: receivedFunds.map(fund => fund.amount),
        backgroundColor: 'rgba(173, 216, 230, 0.6)',
      },
    ],
  };

  return (
    <div className="receive-funds-container">
      <header className="header">
        <h1>E-Municipality</h1>
      </header>

      <main className="content">
        <h2>Received Funds</h2>

        {/* Financial Summary */}
        <div className="financial-summary">
          <p>Total Received: ₹{totalAmountReceived}</p>
          <p>Total Spent: ₹{amountSpent}</p>
          <p>Remaining Amount: ₹{remainingAmount}</p>
        </div>

        {/* Form to add new funds */}
        <form onSubmit={handleSubmit} className="add-fund-form">
          <input
            type="text"
            name="source"
            value={newFund.source}
            onChange={handleChange}
            placeholder="Source"
            required
          />
          <input
            type="number"
            name="amount"
            value={newFund.amount}
            onChange={handleChange}
            placeholder="Amount (₹)"
            required
          />
          <input
            type="date"
            name="date"
            value={newFund.date}
            onChange={handleChange}
            required
          />
          <button type="submit">Add Fund</button>
        </form>

        {/* Section to display received funds */}
        <div>
          <table className="receive-funds-table">
            <thead>
              <tr>
                <th>Source</th>
                <th>Amount (₹)</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {sortedFunds.map((fund) => (
                <tr key={fund.id}>
                  <td>{fund.source}</td>
                  <td>{fund.amount}</td>
                  <td>{fund.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Chart to visualize received funds */}
        <div className="fund-chart">
          <Bar data={data} options={{ maintainAspectRatio: false }} height={200} />
        </div>
      </main>

      <footer className="footer">
        <p>© 2024 E-Municipality. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ReceiveFundPage;
