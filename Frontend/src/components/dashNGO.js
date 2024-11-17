import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashNGO.css'; // Add your own CSS for styling

const NGOList = () => {
  const [ngos, setNgos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNgos = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/ngo');
        const data = await response.json();

        if (response.ok) {
          setNgos(data); // Assuming the API returns an array of NGOs
        } else {
          setError('Failed to fetch NGOs');
        }
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchNgos();
  }, []);

  const handleUpdate = (ngoId) => {
    // Navigate to the update page, passing the NGO ID
    navigate(`/NGOupdation/${ngoId}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="ngo-list-container">
      <h2>NGO List</h2>
      <ul className="ngo-list">
        {ngos.map((ngo) => (
          <li key={ngo._id} className="ngo-item">
            <h3>{ngo.name}</h3>
            <p><strong>Location:</strong> {ngo.location}</p>
            <p><strong>Cause Area:</strong> {ngo.causeArea}</p>
            <p><strong>Contact Person:</strong> {ngo.contactPerson}</p>
            <button onClick={() => handleUpdate(ngo._id)} className="update-btn">
              Update Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NGOList;
