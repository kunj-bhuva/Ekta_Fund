import React from 'react';
import './admindonations.css';

// Sample data for recent donations
const donationsData = [
  { name: 'Ryan Hernansyah', time: '2 minutes ago', email: 'ryanher11@gmail.com', campaign: 'Education Care', amount: '$1,240' },
  { name: 'Rizaldi Ahmad', time: '2 minutes ago', email: 'rizaldiahmad@gmail.com', campaign: 'Love and Care for the Little Children', amount: '$802' },
  { name: 'Samuel Utam', time: '2 minutes ago', email: 'samuelu@gmail.com', campaign: 'Book Donation For Children', amount: '$154' },
  { name: 'Fernansyah Devi', time: '2 minutes ago', email: 'fdav89@gmail.com', campaign: 'Health Food Donation', amount: '$1,000' },
  { name: 'Dean Hartono', time: '2 minutes ago', email: 'deanhartono@gmail.com', campaign: 'Medical Equipment Donation', amount: '$642' }
];

const Donations = () => {
  return (
    <div className="donations-container">
      <div className="header">
        <h3>Recent Donations</h3>
      </div>
      <table className="donations-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date & Time</th>
            <th>Email</th>
            <th>Campaign</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {donationsData.map((donation, index) => (
            <tr key={index}>
              <td>{donation.name}</td>
              <td>{donation.time}</td>
              <td>{donation.email}</td>
              <td>{donation.campaign}</td>
              <td className="amount">{donation.amount}</td>
              <td className="action">--</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Donations;
