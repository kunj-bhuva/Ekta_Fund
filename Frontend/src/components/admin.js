import React from 'react';
import Dashboard from './dash.js';
import Overview from './adminoverview';
import OrganisationApprovals from './OrganizationApprovals';
import Donations from './admindonations';
import './admin.css';

const Admin = () => {
    return (
        <div className="admin-container">
            <Dashboard />
            <div className="admin-main">
                <Overview />
                <OrganisationApprovals />
                <Donations />
            </div>
        </div>
    );
};

export default Admin;
