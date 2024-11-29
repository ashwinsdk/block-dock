import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyGrievances.css';

function MyGrievances() {
    const [grievances, setGrievances] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedGrievances = JSON.parse(localStorage.getItem('grievances')) || [];
        setGrievances(storedGrievances);
    }, []);

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="my-grievances-page">
            
            <header className="navbar">
                <div className="navbar-links"></div>
                <div className="navbar-title">E-Municipality</div>
                <div className="navbar-links">
                    <button onClick={handleBack} className="navbar-link">Back</button>
                </div>
            </header>

            
            <main className="my-grievances-container">
                <h2>My Grievances</h2>
                <table className="grievance-table">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Grievance ID</th>
                            <th>Date Filed</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grievances.map((grievance, index) => (
                            <tr key={index}>
                                <td>{grievance.description || 'N/A'}</td>
                                <td>{grievance.trackingId}</td>
                                <td>{grievance.dateFiled || 'N/A'}</td>
                                <td>{grievance.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="back-button" onClick={handleBack}>Back</button>
            </main>

            
            <footer className="footer">
                <p>&copy; 2024 E-Municipality. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default MyGrievances;
