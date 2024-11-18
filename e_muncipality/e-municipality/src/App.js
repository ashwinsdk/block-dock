import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import UserDashboard from './UserDashboard';
import FileGrievances from './FileGrievances';
import OngoingProjects from './OngoingProjects';
import GovernmentFunds from './GovernmentFunds';
import TaxFunds from './TaxFunds';
import ContactUs from './ContactUs'; 
import MyGrievances from './MyGrievances';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path="/" element={<Home />} />
          
          
          <Route path="/login" element={<Login />} />
          
          
          <Route path="/user-dashboard" element={<UserDashboard />} />

         
          <Route path="/file-grievances" element={<FileGrievances />} />
          <Route path="/ongoing-projects" element={<OngoingProjects />} />
          <Route path="/government-funds" element={<GovernmentFunds />} />
          <Route path="/tax-funds" element={<TaxFunds />} />
          
          
          <Route path="/contact-us" element={<ContactUs />} /> 

         
          <Route path="/my-grievances" element={<MyGrievances />} />

          
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
