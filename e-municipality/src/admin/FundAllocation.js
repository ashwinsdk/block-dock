import React, { useState, useEffect } from 'react';
import './FundAllocation.css';

const FundAllocationPage = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Park Development', allocated: 50000, total: 100000, deadline: '2024-12-31', builder: 'Builder A' },
    { id: 2, name: 'Street Lighting', allocated: 30000, total: 80000, deadline: '2024-11-30', builder: 'Builder B' },
    { id: 3, name: 'Road Repair', allocated: 20000, total: 60000, deadline: '2024-10-31', builder: 'Builder C' },
  ]);

  const [newProject, setNewProject] = useState({ name: '', total: '', deadline: '', builder: '' });
  const [allocationAmounts, setAllocationAmounts] = useState({});
  const [ongoingProjects, setOngoingProjects] = useState([]);
  const [completedProjects, setCompletedProjects] = useState([]);
  const [deadlineExtensions, setDeadlineExtensions] = useState({});
  const [totalReceivedFunds, setTotalReceivedFunds] = useState(200000); // Example total received funds
  const [remainingFunds, setRemainingFunds] = useState(totalReceivedFunds);

  useEffect(() => {
    const totalAllocated = projects.reduce((sum, project) => sum + project.allocated, 0);
    setRemainingFunds(totalReceivedFunds - totalAllocated);
  }, [projects, totalReceivedFunds]);

  const handleAllocationChange = (id, amount) => {
    setAllocationAmounts({ ...allocationAmounts, [id]: amount });
  };

  const handleAllocateFunds = (projectId) => {
    const amount = parseInt(allocationAmounts[projectId], 10);
    if (!amount) return;
    const totalAllocated = projects.reduce((sum, project) => sum + project.allocated, 0) + amount;
    if (totalAllocated > totalReceivedFunds) {
      alert('Warning: Allocated amount exceeds remaining funds.');
      return;
    }

    setProjects(projects.map(project =>
      project.id === projectId ? { ...project, allocated: project.allocated + amount } : project
    ));
    setAllocationAmounts({ ...allocationAmounts, [projectId]: '' });
  };

  const handleCreateProject = () => {
    const newId = projects.length + 1;
    setProjects([...projects, { id: newId, ...newProject, allocated: 0 }]);
    setNewProject({ name: '', total: '', deadline: '', builder: '' });
  };

  const handleMoveToOngoing = (projectId) => {
    const project = projects.find(project => project.id === projectId);
    setOngoingProjects([...ongoingProjects, project]);
    setProjects(projects.filter(project => project.id !== projectId));
  };

  const handleExtendDeadline = (projectId, newDeadline) => {
    setOngoingProjects(ongoingProjects.map(project =>
      project.id === projectId ? { ...project, deadline: newDeadline } : project
    ));
    setDeadlineExtensions({ ...deadlineExtensions, [projectId]: '' });
  };

  const handleMarkCompleted = (projectId) => {
    const project = ongoingProjects.find(project => project.id === projectId);
    setCompletedProjects([...completedProjects, project]);
    setOngoingProjects(ongoingProjects.filter(project => project.id !== projectId));
  };

  const handleDeadlineExtensionChange = (id, newDeadline) => {
    setDeadlineExtensions({ ...deadlineExtensions, [id]: newDeadline });
  };

  return (
    <div className="fund-allocation-container">
      <header className="header">
        <h1>E-Municipality</h1>
      </header>

      <main className="content">
        <h2>Fund Allocation</h2>

        <div className="financial-summary">
          <p>Total Received Funds: ₹{totalReceivedFunds}</p>
          <p>Remaining Funds: ₹{remainingFunds}</p>
        </div>

        <div className="new-project-form">
          <h3>Add New Project</h3>
          <input
            type="text"
            value={newProject.name}
            onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
            placeholder="Project Name"
          />
          <input
            type="number"
            value={newProject.total}
            onChange={(e) => setNewProject({ ...newProject, total: e.target.value })}
            placeholder="Total Funds"
          />
          <input
            type="date"
            value={newProject.deadline}
            onChange={(e) => setNewProject({ ...newProject, deadline: e.target.value })}
            placeholder="End Date"
          />
          <input
            type="text"
            value={newProject.builder}
            onChange={(e) => setNewProject({ ...newProject, builder: e.target.value })}
            placeholder="Builder"
          />
          <button onClick={handleCreateProject}>Create Project</button>
        </div>

        <div className="projects-list">
          <h3>Pending Projects</h3>
          <table className="fund-allocation-table">
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Total Funds</th>
                <th>Allocated Funds</th>
                <th>Remaining Funds</th>
                <th>End Date</th>
                <th>Builder</th>
                <th>Allocate Funds</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id}>
                  <td>{project.name}</td>
                  <td>{project.total}</td>
                  <td>{project.allocated}</td>
                  <td>{project.total - project.allocated}</td>
                  <td>{project.deadline}</td>
                  <td>{project.builder}</td>
                  <td>
                    <input
                      type="number"
                      value={allocationAmounts[project.id] || ''}
                      onChange={(e) => handleAllocationChange(project.id, e.target.value)}
                      placeholder="Amount"
                      min="0"
                    />
                    <button onClick={() => handleAllocateFunds(project.id)}>
                      Allocate
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleMoveToOngoing(project.id)}>Move to Ongoing</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="projects-list">
          <h3>Ongoing Projects</h3>
          <table className="fund-allocation-table">
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Total Funds</th>
                <th>Allocated Funds</th>
                <th>Remaining Funds</th>
                <th>End Date</th>
                <th>Builder</th>
                <th>Extend Deadline</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {ongoingProjects.map((project) => (
                <tr key={project.id}>
                  <td>{project.name}</td>
                  <td>{project.total}</td>
                  <td>{project.allocated}</td>
                  <td>{project.total - project.allocated}</td>
                  <td>{project.deadline}</td>
                  <td>{project.builder}</td>
                  <td>
                    <input
                      type="date"
                      value={deadlineExtensions[project.id] || ''}
                      onChange={(e) => handleDeadlineExtensionChange(project.id, e.target.value)}
                    />
                    <button onClick={() => handleExtendDeadline(project.id, deadlineExtensions[project.id])}>
                      Extend
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleMarkCompleted(project.id)}>Mark as Completed</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="projects-list">
          <h3>Completed Projects</h3>
          <table className="fund-allocation-table">
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Total Funds</th>
                <th>Allocated Funds</th>
                <th>Remaining Funds</th>
                <th>End Date</th>
                <th>Builder</th>
              </tr>
            </thead>
            <tbody>
              {completedProjects.map((project) => (
                <tr key={project.id}>
                  <td>{project.name}</td>
                  <td>{project.total}</td>
                  <td>{project.allocated}</td>
                  <td>{project.total - project.allocated}</td>
                  <td>{project.deadline}</td>
                  <td>{project.builder}</td>
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
