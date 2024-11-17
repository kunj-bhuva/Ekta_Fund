import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './dash.css';
import logo from '../images/white.png';
import over from '../images/overview.png';
import report from '../images/report.png';
import donor from '../images/donor.png';
import seting from '../images/seting.png';
import Logout from '../images/Logout.png';
import giftmatch from '../images/gift match.png';

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogout = () => {
    // Perform any necessary logout logic here (e.g., clearing tokens)
    console.log('User logged out');
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="dashboar">
      <div className="d-flex flex-column flex-shrink-0 p-3 bg" style={{ width: '280px' }}>
        <img src={logo} alt="Logo" width="250" height="auto" />
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="hover-cursor">
            <img src={over} alt="overview" width="250" height="auto" />
          </li>
          
        </ul>
        <hr />
        <div className="dropdown">
          <div className="list-sidebar hover-cursor" onClick={handleLogout}>
            <img src={Logout} alt="Logout" width="auto" height="25" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
