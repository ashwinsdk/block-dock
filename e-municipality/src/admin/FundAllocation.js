import React, { useState, useEffect } from 'react';
import './css/FundAllocation.css';
import { ethers } from 'ethers';
import transfer from './contracts/GrievanceSystem.json'; // Import the ABI properly

const contractABI = transfer.abi;
//const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
//Sepolia 
//const contractAddress = "0x26b01E3AD38E32645f308d11C81575D03f126da9";
const contractAddress = "0xb93E6A9CA2C59267cBfb484Ac0F24440B19574ca"; // Update for your deployment
const FundAllocationPage = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ name: '', details: '', total: '' });
  const [editingProject, setEditingProject] = useState(null); // Update with your deployed contract address
  const [newFund, setNewFund] = useState({ amount: '' });
  const [balance, setBalance] = useState(0); // To store the balance

  // Load existing projects from the smart contract
  useEffect(() => {
    const fetchProjects = async () => {
      if (!window.ethereum) {
        alert('Please install MetaMask!');
        return;
      }

      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, transfer.abi, signer);

        const balance = await contract.viewBalanceAdminHead(); // Replace with the actual function name in the contract
        setBalance(balance.toString());

        // Fetch all projects directly
        const fetchedProjects = await contract.viewAllProjects();
        const projectList = fetchedProjects.map((project, index) => ({
          id: index,
          name: project.pname,
          details: project.details,
          total: project.customFund,
          status: project.status,
        }));

        setProjects(projectList);
      } catch (error) {
        console.error('Error fetching projects:', error);
        alert('An error occurred while fetching projects.');
      }
    };

    fetchProjects();
  }, []);


  // Create a new project
  const handleCreateProject = async () => {
    if (!newProject.name || !newProject.details || !newProject.total) {
      alert('Please fill all fields before creating a project.');
      return;
    }

    if (!window.ethereum) {
      alert('Please install MetaMask!');
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, transfer.abi, signer);

      const tx = await contract.createProject(newProject.name, newProject.details, newProject.total);
      await tx.wait();

      alert('Project created successfully!');

      // Reload projects after successful creation
      setNewProject({ name: '', details: '', total: '' });
      window.location.reload();
    } catch (error) {
      console.error('Error creating project:', error);
      alert('An error occurred while creating the project.');
    }
  };

  // Edit project status
  const handleEditStatus = async (projectId, newStatus) => {
    if (!window.ethereum) {
      alert('Please install MetaMask!');
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, transfer.abi, signer);

      const tx = await contract.editProjectStatus(projectId, newStatus);
      await tx.wait();

      alert('Project status updated successfully!');
      window.location.reload();
    } catch (error) {
      console.error('Error updating project status:', error);
      alert('An error occurred while updating the project status.');
    }
  };

  return (
    <div className="fund-allocation-container">
      <header className="header">
        <h1>E-Municipality</h1>
      </header>

      <div className="financial-summary">
        <p>Balance: {balance}</p> {/* Display raw balance */}
      </div>

      <main className="content">
        <h2>Fund Allocation</h2>

        <div className="new-project-form">
          <h3>Add New Project</h3>
          <input
            type="text"
            value={newProject.name}
            onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
            placeholder="Project Name"
          />
          <input
            type="text"
            value={newProject.details}
            onChange={(e) => setNewProject({ ...newProject, details: e.target.value })}
            placeholder="Details"
          />
          <input
            type="number"
            value={newProject.total}
            onChange={(e) => setNewProject({ ...newProject, total: e.target.value })}
            placeholder="Amount (in Tokens)"
          />
          <button onClick={handleCreateProject}>Create Project</button>
        </div>

        <div className="projects-list">
          <h3>Ongoing Projects</h3>
          <table className="fund-allocation-table">
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Details</th>
                <th>Amount (in Tokens)</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id}>
                  <td>{project.name}</td>
                  <td>{project.details}</td>
                  <td>{project.customFund}</td>
                  <td>{project.status}</td>
                  <td>
                    {project.status !== 'DONE' && (
                      <button onClick={() => handleEditStatus(project.id, 'DONE')}>
                        Mark as Done
                      </button>
                    )}
                  </td>
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

export default FundAllocationPage;
