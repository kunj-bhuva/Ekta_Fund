import React, { useState } from 'react';
import './OrganizationApprovals.css';
import checkIcon from '../images/check.png'; // Path to your check icon image
import crossIcon from '../images/cross.png'; // Path to your cross icon image

const initialOrganisations = [
  { name: 'Eco Guardians', location: 'Ahmedabad', type: 'Environment', status: null }, // Initially no approval status
  { name: 'Bright Minds', location: 'Manipur', type: 'Education', status: null },
  { name: 'SheRise Foundation', location: 'Shimla', type: 'Women', status: null },
  { name: 'CareNet', location: 'Indore', type: 'Health', status: null }
];

const OrganisationApprovals = () => {
  const [organisations, setOrganisations] = useState(initialOrganisations);

  // Function to approve an organization
  const approveOrganization = (index) => {
    const updatedOrganisations = [...organisations];
    updatedOrganisations[index].status = true; // Set the status to approved
    setOrganisations(updatedOrganisations);
  };

  // Function to reject an organization
  const rejectOrganization = (index) => {
    const updatedOrganisations = [...organisations];
    updatedOrganisations[index].status = false; // Set the status to not approved
    setOrganisations(updatedOrganisations);
  };

  return (
    <div className="organisation-approvals">
      <div className="header">
        <h3>Organisation Approvals</h3>
        <a href="#" className="view-more">View More</a>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {organisations.map((org, index) => (
            <tr key={index}>
              <td>{org.name}</td>
              <td>{org.location}</td>
              <td>{org.type}</td>
              <td className="status-cell">
                {/* Approve Icon */}
                <img
                  src={checkIcon}
                  alt="Approve"
                  className={`status-icon ${org.status === true ? 'approved' : ''}`}
                  onClick={() => approveOrganization(index)} // Approve when clicked
                  style={{ opacity: org.status === null ? 0.5 : 1 }} // Set opacity based on current status
                />
                {/* Reject Icon */}
                <img
                  src={crossIcon}
                  alt="Reject"
                  className={`status-icon ${org.status === false ? 'not-approved' : ''}`}
                  onClick={() => rejectOrganization(index)} // Reject when clicked
                  style={{ opacity: org.status === null ? 0.5 : 1 }} // Set opacity based on current status
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrganisationApprovals;
