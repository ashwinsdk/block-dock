import React, { useState, useEffect } from 'react';
import './ViewOngoingProjects.css';

const ViewOngoingProjects = () => {
  const [projects, setProjects] = useState([]);

  // Simulating an API call to fetch ongoing projects data
  useEffect(() => {
    const fetchProjects = () => {
      // Sample data
      setProjects([
        { id: 1, name: 'Park Renovation', status: 'In Progress', deadline: '2024-12-31' },
        { id: 2, name: 'Road Expansion', status: 'In Progress', deadline: '2025-03-15' }
      ]);
    };

    fetchProjects();
  }, []);

  return (
    <div className="view-ongoing-projects">
      <h2>View On-going Projects</h2>
      <table className="projects-table">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Status</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{project.status}</td>
              <td>{project.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewOngoingProjects;
