import React from 'react';
import './dash.css';
import logo from '../images/white.png';
import over from '../images/overview.png';
import report from '../images/report.png';
import donor from '../images/donor.png';
import seting from '../images/seting.png';
import Logout from '../images/Logout.png';

import giftmatch from '../images/gift match.png';
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

          <li className='list-sidebar'>
            <img src={donor} alt="donars" width="auto" height="25" />
          </li>

          <li className='list-sidebar'>
            <img src={giftmatch} alt="giftmatch" width="auto" height="25" />
          </li>

          <li className='list-sidebar'>
            <img src={report} alt="report" width="auto" height="25" />
          </li>

          <li className='list-sidebar'>
            <img src={seting} alt="settings" width="auto" height="25" />
          </li>
          
        </ul>
        <hr />
        <div className="dropdown">     
          <ul>     
          <li className='list-sidebar'>
            <img src={Logout} alt="Logout" width="auto" height="25" />
          </li>
          </ul> 
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
