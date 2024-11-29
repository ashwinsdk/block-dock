import React from 'react';

import './OngoingProject.css';

function OngoingProjects() {
    
    const projects = [
        { id: 1, projectNo: "RP12345", name: "Road Repair Project", progress: "50%" },
        { id: 2, projectNo: "PR67890", name: "Park Renovation", progress: "25%" },
    ];

   

    return (
        <div className="ongoing-projects-page">
           
            <header className="navbar">
                <div className="navbar-links"></div>
                <div className="navbar-title">E-Municipality</div>
                <div className="navbar-links">
                    
                </div>
            </header>

           
            <main className="projects-container">
                <h2 className="projects-title">Ongoing Projects</h2>
                <table className="projects-table">
                    <thead>
                        <tr>
                            <th className="table-header">Project No</th>
                            <th className="table-header">Project Name</th>
                            <th className="table-header">Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project) => (
                            <tr key={project.id} className="table-row">
                                <td className="table-cell">{project.projectNo}</td>
                                <td className="table-cell">{project.name}</td>
                                <td className="table-cell">{project.progress}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>

            
            <footer className="footer">
                <p>&copy; 2024 E-Municipality. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default OngoingProjects;
