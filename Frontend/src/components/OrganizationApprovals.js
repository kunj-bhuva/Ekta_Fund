import React, { useEffect, useState } from 'react';
import './OrganizationApprovals.css';
import checkIcon from '../images/check.png';
import crossIcon from '../images/cross.png';

const OrganizationApprovals = () => {
  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/pending-verifications');
        const data = await response.json();

        if (response.ok) {
          setOrganizations(data.pendingNGOs || []);
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

  const updateStatus = async (index, status) => {
    const updatedOrganization = organizations[index];
    const { name } = updatedOrganization; 
  
    try {
      const response = await fetch('http://localhost:5000/api/admin/verify-ngo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ngoName: name, 
          status: status ? 'verified' : 'rejected',
        }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="organization-approvals-container">
      <div className="organization-approvals">
        <div className="header">
          <h3>Pending Organization Approvals</h3>
          </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Cause</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {organizations.map((org, index) => (
              <tr key={index}>
                <td>{org.name}</td>
                <td>{org.location}</td>
                <td>{org.causeArea}</td>
                <td className="status-cell">
                    <img
                      src={checkIcon}
                      alt="Approve"
                      className={`status-icon ${org.status === true ? 'approved' : ''}`}
                      onClick={() => updateStatus(index, true)}
                      title="Approve"
                      style={{
                        cursor: org.status === true ? 'not-allowed' : 'pointer',
                      }}
                    />
                  
                    <img
                      src={crossIcon}
                      alt="Reject"
                      className={`status-icon ${org.status === false ? 'rejected' : ''}`}
                      onClick={() => updateStatus(index, false)}
                      title="Reject"
                      style={{
                        cursor: org.status === false ? 'not-allowed' : 'pointer',
                      }}
                    />
                  </td>
                    
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrganizationApprovals;
