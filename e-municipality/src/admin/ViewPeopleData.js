import React, { useState, useEffect } from 'react';
import './ViewPeopleData.css';

const ViewPeopleDataPage = () => {
  // Sample state for people data
  const [peopleData, setPeopleData] = useState([]);

  // Simulating an API call to fetch people data
  useEffect(() => {
    // Sample data for demonstration
    const fetchPeopleData = () => {
      setPeopleData([
        { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', taxPaid: 5000, grievances: 2 },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', taxPaid: 3000, grievances: 1 },
        { id: 3, name: 'George Lee', email: 'george@example.com', phone: '456-789-1230', taxPaid: 4000, grievances: 0 },
      ]);
    };

    fetchPeopleData();
  }, []);

  return (
    <div className="people-data-container">
      <header className="header">
        <h1>E-Municipality</h1>
      </header>

      <main className="content">
        <h2>View People Data</h2>
        <div className="people-data-list">
          <table className="people-data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Tax Paid</th>
                <th>Number of Grievances</th>
              </tr>
            </thead>
            <tbody>
              {peopleData.map((person) => (
                <tr key={person.id}>
                  <td>{person.name}</td>
                  <td>{person.email}</td>
                  <td>{person.phone}</td>
                  <td>{person.taxPaid}</td>
                  <td>{person.grievances}</td>
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

export default ViewPeopleDataPage;
