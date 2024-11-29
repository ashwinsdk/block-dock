import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import './FileGrievances.css';

function FileGrievances() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        publicOrIndividual: '',
        description: '',
        differentlyAbled: false,
    });
    const [trackingId, setTrackingId] = useState(null);
    const navigate = useNavigate();  

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTrackingId = Math.floor(Math.random() * 1000000000);
        setTrackingId(newTrackingId);

        const newGrievance = {
            ...formData,
            trackingId: newTrackingId,
            status: "PENDING"
        };

        const grievances = JSON.parse(localStorage.getItem('grievances')) || [];
        grievances.push(newGrievance);
        localStorage.setItem('grievances', JSON.stringify(grievances));

        alert(`Your grievance has been filed with Tracking ID: ${newTrackingId}`);
        navigate('/thank-you'); 
    };

    return (
        <div>
            
            <header className="navbar">
                <div className="navbar-links"></div>
                <div className="navbar-title">E-Municipality</div>
                
            </header>

            
            <div className="file-grievance-container" style={{ paddingTop: '5rem' }}>
                <h2>📩 File Your Grievance</h2>
                <p>Please fill out the form below to submit your grievance regarding city services.</p>

                <form onSubmit={handleSubmit} className="file-grievance-form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Petitioner's Name:</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mobile" className="form-label">Mobile Number:</label>
                        <input 
                            type="tel" 
                            id="mobile" 
                            name="mobile" 
                            value={formData.mobile} 
                            onChange={handleChange} 
                            required 
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="publicOrIndividual" className="form-label">Public/Individual:</label>
                        <input 
                            type="text" 
                            id="publicOrIndividual" 
                            name="publicOrIndividual" 
                            value={formData.publicOrIndividual} 
                            onChange={handleChange} 
                            required 
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description" className="form-label">Description:</label>
                        <textarea 
                            id="description" 
                            name="description" 
                            value={formData.description} 
                            onChange={handleChange} 
                            required 
                            className="form-textarea"
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label className="checkbox-container">
                            <input 
                                type="checkbox" 
                                name="differentlyAbled" 
                                checked={formData.differentlyAbled} 
                                onChange={handleChange} 
                            />
                            Are You a Differently Abled Person
                        </label>
                    </div>

                    <button type="submit" className="submit-button">Submit</button>
                </form>

                {trackingId && (
                    <p className="success-message">Your grievance has been filed with Tracking ID: {trackingId}</p>
                )}
            </div>
            <br></br>
<br></br>
            
            <footer className="footer">
                <p>&copy; 2024 E-Municipality. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default FileGrievances;
