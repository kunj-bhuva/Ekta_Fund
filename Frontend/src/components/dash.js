import React from 'react';
import './dash.css';
import logo from '../images/white.png';
import over from '../images/overview.png';
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="d-flex flex-column flex-shrink-0 p-3 bg" style={{ width: '280px' }}>
        

          <img src={logo} alt="Logo" width="250" height="auto" />
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <img src={over} alt="overview" width="250" height="auto" />
          </li>
          
        </ul>
        <hr />
        <div className="dropdown">           
            <a className="dropdown-item" href="#">Sign out</a>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
