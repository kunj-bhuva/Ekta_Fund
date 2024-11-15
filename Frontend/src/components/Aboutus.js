import React from 'react';
import Header_white from './Header_white';
import './aboutus.css';

const teamMembers = [
  { name: 'Aman Sharma', role: 'Project Lead', rollNo: 'CS01' },
  { name: 'Neha Gupta', role: 'Frontend Developer', rollNo: 'CS02' },
  { name: 'Rohit Kumar', role: 'Backend Developer', rollNo: 'CS03' },
  { name: 'Simran Singh', role: 'UI/UX Designer', rollNo: 'CS04' },
  { name: 'Anjali Mehta', role: 'Database Engineer', rollNo: 'CS05' },
  { name: 'Varun Verma', role: 'DevOps Engineer', rollNo: 'CS06' },
  { name: 'Priya Nair', role: 'Marketing Specialist', rollNo: 'CS07' },
  { name: 'Kabir Das', role: 'Content Writer', rollNo: 'CS08' },
  { name: 'Rhea Kapoor', role: 'Quality Assurance', rollNo: 'CS09' },
  { name: 'Aditya Roy', role: 'Business Analyst', rollNo: 'CS10' },
];

const Aboutus = () => {
  return (
    <> 
    <Header_white/>
    <div style={{ fontFamily: 'Outfit, sans-serif', padding: '50px', textAlign: 'center', backgroundColor: '#e0f7f4', marginTop: '5rem' }}>
      <h1 className='thung' style={{ fontSize: '3rem', color: '#1a535c' }}>About EktaFund</h1>
      <p style={{ fontSize: '1.2rem', color: '#4f5d75', maxWidth: '800px', margin: '0 auto' }}>
        EktaFund is a dedicated platform designed to empower NGOs by helping them connect with donors around the world.
        Our mission is to make donating simple, transparent, and impactful, facilitating meaningful change in various sectors
        like education, healthcare, and environmental conservation.
      </p>
      
      <h2 style={{ fontSize: '2.5rem', color: '#1a535c', marginTop: '40px' }}>Meet Our Team</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '30px' }}>
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            style={{ 
              width: '250px', 
              margin: '20px', 
              textAlign: 'left', 
              borderRadius: '10px', 
              boxShadow: '0 4px 8px rgba(26, 83, 92, 0.2)', 
              padding: '20px',
              backgroundColor: '#ffffff', 
              border: '1px solid #d3e0dc' 
            }}
          >
            <h3 style={{ fontSize: '1.5rem', color: '#1a535c' }}>{member.name}</h3>
            <p style={{ fontSize: '1rem', color: '#4f5d75', fontStyle: 'italic' }}>{member.role}</p>
            <p style={{ fontSize: '1rem', color: '#4f5d75' }}>Roll No: {member.rollNo}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Aboutus;
