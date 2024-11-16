import React, { useEffect, useState } from 'react';
import './OrganizationApprovals.css';
import checkIcon from '../images/check.png';
import crossIcon from '../images/cross.png';

const OrganizationApprovals = () => {
  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error state

  // Fetch data from the backend
  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/pending-verifications'); // Replace with your backend API
        const data = await response.json();

        if (response.ok) {
          setOrganizations(data.pendingNGOs); // Assuming backend returns "pendingNGOs" as the array of data
          setError(null);
        } else {
          setError(data.message || 'Failed to fetch organizations');
        }
      } catch (error) {
        setError('Error fetching organizations: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrganizations();
  }, []);

  // Loading and Error States
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  // Function to update the status
  const updateStatus = async (index, status) => {
    const updatedOrganization = organizations[index];
    const { name } = updatedOrganization;

    try {
      const response = await fetch('http://localhost:5000/api/admin/verify-ngo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ngoId: updatedOrganization._id,
          status: status ? 'verified' : 'rejected',
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Update the status in the UI
        setOrganizations((prev) =>
          prev.map((org, i) => (i === index ? { ...org, status } : org))
        );
        alert(`${name} has been ${status ? 'approved' : 'rejected'}.`);
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className="organization-approvals">
      <div className="header">
        <h3>Organization Approvals</h3>
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
          {organizations.map((org, index) => (
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
                  onClick={() => updateStatus(index, true)}
                  title="Approve"
                  style={{
                    opacity: org.status === null ? 0.5 : 1,
                    cursor: org.status === true ? 'not-allowed' : 'pointer',
                  }}
                />

                {/* Reject Icon */}
                <img
                  src={crossIcon}
                  alt="Reject"
                  className={`status-icon ${org.status === false ? 'rejected' : ''}`}
                  onClick={() => updateStatus(index, false)}
                  title="Reject"
                  style={{
                    opacity: org.status === null ? 0.5 : 1,
                    cursor: org.status === false ? 'not-allowed' : 'pointer',
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrganizationApprovals;
