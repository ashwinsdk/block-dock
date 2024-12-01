import React, { useState } from 'react';
import './AssignAdminHead.css';

const AssignAdminHead = () => {
  const [adminDetails, setAdminDetails] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'Municipality Head',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically send the adminDetails to the server
    console.log('Assigned Admin Head Details:', adminDetails);
    alert('Admin Head assigned successfully!');
  };

  return (
    <div className="assign-admin-head">
      <header className="header">
        <h1>Assign Admin Head</h1>
      </header>
      <main className="main-content">
        <form onSubmit={handleSubmit} className="admin-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={adminDetails.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={adminDetails.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={adminDetails.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Position:
            <input
              type="text"
              name="position"
              value={adminDetails.position}
              readOnly
            />
          </label>
          <button type="submit" className="submit-button">Assign Admin Head</button>
        </form>
      </main>
      <footer className="footer">
        <p>© 2024 E-Municipality. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AssignAdminHead;
