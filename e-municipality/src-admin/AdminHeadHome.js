import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminHeadHome.css';
import { FaMoneyCheckAlt, FaClipboardList, FaFileInvoiceDollar, FaDatabase, FaReceipt } from 'react-icons/fa';

const AdminHeadHome = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-head-home">
      <header className="header">
        <h1>E-Municipality</h1>
      </header>

      <main className="content">
        <h2>Welcome, Municipality Head</h2>
        <p>Navigate through the dashboard to manage municipal tasks efficiently.</p>
        
        <div className="dashboard">
          <FeatureCard 
            icon={<FaMoneyCheckAlt />}
            title="Receive Funds" 
            description="Manage incoming funds from government departments." 
            onClick={() => navigate('/receive-fund')} 
          />
          <FeatureCard 
            icon={<FaClipboardList />}
            title="View Grievance" 
            description="Review and resolve grievances raised by city residents." 
            onClick={() => navigate('/view-grievances')} 
          />
          <FeatureCard 
            icon={<FaFileInvoiceDollar />}
            title="Fund Allocation" 
            description="Allocate funds to specific projects for urban development." 
            onClick={() => navigate('/fund-allocation')} 
          />
          <FeatureCard 
            icon={<FaDatabase />}
            title="View People Data" 
            description="Access data of residents and registered entities." 
            onClick={() => navigate('/view-people-data')} 
          />
          <FeatureCard 
            icon={<FaReceipt />}
            title="View Taxes" 
            description="Monitor tax collection details and overall revenue." 
            onClick={() => navigate('/view-taxes')} 
          />
        </div>
      </main>

      <footer className="footer">
        <p>© 2024 E-Municipality. All rights reserved.</p>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, onClick }) => {
  return (
    <div className="feature-card" onClick={onClick}>
      {icon}
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="feature-button">{title}</button>
    </div>
  );
};

export default AdminHeadHome;
