import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './user/Home'; // Ensure the correct path for components
import Login from './user/Login';
import Register from './user/Register';
import UserDashboard from './user/UserDashboard'; // Ensure this is the correct path
import FileGrievances from './user/FileGrievances';
import OngoingProjects from './user/OngoingProjects';
import GovernmentFunds from './user/GovernmentFunds';
import TaxFunds from './user/TaxFunds';
import ContactUs from './user/ContactUs';
import MyGrievances from './user/MyGrievances';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes for your components */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/file-grievances" element={<FileGrievances />} />
          <Route path="/ongoing-projects" element={<OngoingProjects />} />
          <Route path="/government-funds" element={<GovernmentFunds />} />
          <Route path="/tax-funds" element={<TaxFunds />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/my-grievances" element={<MyGrievances />} />
          
          {/* Fallback Route for 404 Errors */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
