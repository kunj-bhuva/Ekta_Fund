import React from 'react';
import Header_white from './Header_white';

const teamMembers = [
  { name: 'Kunj Bhuva', role: 'Project Lead', rollNo: '202201275' },
  { name: 'Sakshi Shah', role: 'Frontend Developer', rollNo: '202201281' },
  { name: 'Ram Kulkarni', role: 'Backend Developer', rollNo: '202201354' },
  { name: 'Jal Dani', role: 'Backend Developer', rollNo: '202201315' },
  { name: 'Devamm Patel', role: 'Backend Developer', rollNo: '202201292' },
  { name: 'Ansh Pandya', role: 'Backend Developer', rollNo: '202201303' },
  { name: 'Rishabh Jain', role: 'UI/UX', rollNo: '202201271' },
  { name: 'Tanay Kewalramani', role: 'Documentation', rollNo: '202201362' },
  { name: 'Aplesh Yadav', role: 'Documentation', rollNo: '202201264' },
  { name: 'Harsh Mangukiya', role: 'Documentation', rollNo: '202201363' },
];

const AboutUs = () => {
  return (
    <> 
    <Header_white/>
      <div style={{ fontFamily: 'Outfit, sans-serif', padding: '50px', textAlign: 'center', backgroundColor: '#e0f7f4', marginTop: '4rem' }}>      
      <h1 style={{ fontSize: '3rem', color: '#1a535c'}}>About EktaFund</h1>
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

export default AboutUs;
