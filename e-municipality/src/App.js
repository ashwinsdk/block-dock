import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './user/Home';
import Login from './user/Login';
import Register from './user/Register';
import UserDashboard from './user/UserDashboard';
import FileGrievances from './user/FileGrievances';
import OngoingProjects from './user/OngoingProjects';
import GovernmentFunds from './user/GovernmentFunds';
import TaxFunds from './user/TaxFunds';
import ContactUs from './user/ContactUs';
import MyGrievances from './user/MyGrievances';

import AdminHeadHome from './admin/AdminHeadHome';
import FundAllocation from './admin/FundAllocation';
import ReceiveFund from './admin/ReceiveFund';
import ViewGrievance from './admin/ViewGrievance'; 
import ViewPeopleData from './admin/ViewPeopleData';
import ViewTaxes from './admin/ViewTaxes';

import AdminGovtHome from './govt/AdminGovtHome';
import SendFunds from './govt/SendFunds';
import ViewGrievanceStatus from './govt/ViewGrievanceStatus';
import AssignAdminHead from './govt/AssignAdminHead';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* User Routes */}
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

          {/* Admin Routes */}
          <Route path="/admin-head-home" element={<AdminHeadHome />} />
          <Route path="/fund-allocation" element={<FundAllocation />} />
          <Route path="/receive-fund" element={<ReceiveFund />} />
          <Route path="/view-grievance" element={<ViewGrievance />} />
          <Route path="/view-people-data" element={<ViewPeopleData />} />
          <Route path="/view-taxes" element={<ViewTaxes />} />

          {/* Government Routes */}
          <Route path="/admin-govt-home" element={<AdminGovtHome />} />
          <Route path="/send-funds" element={<SendFunds />} />
          <Route path="/govt/view-grievance-status" element={<ViewGrievanceStatus />} />
          <Route path="/govt/assign-admin-head" element={<AssignAdminHead />} />

          {/* Placeholder routes for features not implemented yet */}
          <Route path="/view-fund-allocation" element={<div>Fund Allocation Placeholder</div>} />
          <Route path="/view-people-data" element={<div>People Data Placeholder</div>} />
          <Route path="/view-taxes" element={<div>Taxes Placeholder</div>} />

          {/* Fallback Route for 404 Errors */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
