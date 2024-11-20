import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminHeadHome from "./components/AdminHeadHome";
import FundAllocationPage from "./components/FundAllocationPage";
import ReceiveFundPage from "./components/ReceiveFundPage";
import ViewGrievancePage from "./components/ViewGrievancePage";
import ViewPeopleDataPage from "./components/ViewPeopleDataPage";
import ViewTaxesPage from "./components/ViewTaxesPage";

function App() {
  return (
    <Router>
      <div>
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<AdminHeadHome />} />
          <Route path="/fund-allocation" element={<FundAllocationPage />} />
          <Route path="/receive-fund" element={<ReceiveFundPage />} />
          <Route path="/view-grievances" element={<ViewGrievancePage />} />
          <Route path="/view-people-data" element={<ViewPeopleDataPage />} />
          <Route path="/view-taxes" element={<ViewTaxesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
