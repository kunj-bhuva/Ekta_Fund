import React, { useState } from 'react';

const AdminDashboard = () => {
  const [ngoApplications, setNgoApplications] = useState([
    { id: 1, name: 'Helping Hands', status: 'pending' },
    { id: 2, name: 'Green Earth', status: 'approved' },
    { id: 3, name: 'Food For All', status: 'rejected' },
  ]);

  const [comments, setComments] = useState([
    { id: 1, ngo: 'Helping Hands', text: 'This NGO is very impactful!', user: 'User123' },
    { id: 2, ngo: 'Green Earth', text: 'Great work by this NGO.', user: 'User456' },
    { id: 3, ngo: 'Food For All', text: 'Could use more transparency.', user: 'User789' },
  ]);

  const [transactions, setTransactions] = useState([
    { id: 1, donor: 'Alice', amount: '$100', date: '2024-11-01' },
    { id: 2, donor: 'Bob', amount: '$50', date: '2024-11-03' },
    { id: 3, donor: 'Charlie', amount: '$25', date: '2024-11-05' },
    // Add more transactions as needed
  ]);

  // Function to approve or reject an NGO application
  const handleNgoStatusChange = (id, status) => {
    setNgoApplications(prevApplications =>
      prevApplications.map(app => app.id === id ? { ...app, status } : app)
    );
  };

  // Function to delete a comment
  const handleDeleteComment = (id) => {
    setComments(prevComments => prevComments.filter(comment => comment.id !== id));
  };

  return (
    <div style={{ fontFamily: 'Outfit, sans-serif', padding: '50px', color: '#4f5d75', backgroundColor: '#f2faff' }}>
      <h1 style={{ color: '#1a535c' }}>Admin Dashboard</h1>
      
      {/* NGO Registration Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#1a535c' }}>NGO Registration</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: '#e0f7f4' }}>
              <th style={{ padding: '10px' }}>NGO Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {ngoApplications.map(app => (
              <tr key={app.id} style={{ textAlign: 'center', backgroundColor: '#ffffff', borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px' }}>{app.name}</td>
                <td>{app.status}</td>
                <td>
                  <button onClick={() => handleNgoStatusChange(app.id, 'approved')} style={{ marginRight: '10px', color: '#fff', backgroundColor: '#1a535c', padding: '5px 10px', border: 'none', borderRadius: '5px' }}>Approve</button>
                  <button onClick={() => handleNgoStatusChange(app.id, 'rejected')} style={{ color: '#fff', backgroundColor: '#ff6b6b', padding: '5px 10px', border: 'none', borderRadius: '5px' }}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      
      {/* Comments Management Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#1a535c' }}>Comments Management</h2>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          {comments.map(comment => (
            <li key={comment.id} style={{ backgroundColor: '#ffffff', padding: '15px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <p><strong>{comment.ngo}</strong>: {comment.text}</p>
              <p><em>Posted by: {comment.user}</em></p>
              <button onClick={() => handleDeleteComment(comment.id)} style={{ color: '#fff', backgroundColor: '#ff6b6b', padding: '5px 10px', border: 'none', borderRadius: '5px' }}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
      
      {/* Transaction History Section */}
      <section>
        <h2 style={{ color: '#1a535c' }}>Transaction History</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: '#e0f7f4' }}>
              <th style={{ padding: '10px' }}>Donor Name</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.slice(0, 10).map(tx => (
              <tr key={tx.id} style={{ textAlign: 'center', backgroundColor: '#ffffff', borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px' }}>{tx.donor}</td>
                <td>{tx.amount}</td>
                <td>{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {transactions.length > 10 && (
          <button onClick={() => setTransactions(transactions.slice(0, 25))} style={{ marginTop: '20px', color: '#fff', backgroundColor: '#1a535c', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Show More</button>
        )}
      </section>
    </div>
  );
};

export default AdminDashboard;
