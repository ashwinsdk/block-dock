import React, { useState, useEffect } from 'react';
import './ViewMunicipalityHead.css';

const ViewMunicipalityHead = () => {
  const [headDetails, setHeadDetails] = useState(null);

  // Simulating an API call to fetch municipality head details
  useEffect(() => {
    const fetchHeadDetails = () => {
      // Sample data
      setHeadDetails({
        name: 'John Doe',
        position: 'Municipality Head',
        email: 'johndoe@example.com',
        phone: '123-456-7890'
      });
    };

    fetchHeadDetails();
  }, []);

  return (
    <div className="view-municipality-head">
      <h2>View Municipality Head Details</h2>
      {headDetails ? (
        <div className="head-details">
          <p><strong>Name:</strong> {headDetails.name}</p>
          <p><strong>Position:</strong> {headDetails.position}</p>
          <p><strong>Email:</strong> {headDetails.email}</p>
          <p><strong>Phone:</strong> {headDetails.phone}</p>
        </div>
      ) : (
        <p>Loading details...</p>
      )}
    </div>
  );
};

export default ViewMunicipalityHead;
