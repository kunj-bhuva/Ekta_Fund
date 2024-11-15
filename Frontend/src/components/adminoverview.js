import React from 'react';
import './adminoverview.css';

const Overview = () => {
  const data = {
    donation: { amount: "₹85,23,176", percentageChange: "+8.3%", difference: "+ ₹12,45,823" },
    donors: { count: "17,983", percentageChange: "+6.7%", difference: "+534" },
    average: { amount: "₹476.15", percentageChange: "-9.1%", difference: "-₹44.92" }
  };

  return (
    <div className="overview">
      
      <div className="overview-cards">
        <div className="card">
          <h3>Donation</h3>
          <p className="amount">{data.donation.amount}</p>
          <p className="change positive">{data.donation.percentageChange}</p>
          <p className="difference">than last year: {data.donation.difference}</p>
        </div>
        <div className="card">
          <h3>Donors</h3>
          <p className="amount">{data.donors.count}</p>
          <p className="change positive">{data.donors.percentageChange}</p>
          <p className="difference">than last year: {data.donors.difference}</p>
        </div>
        <div className="card">
          <h3>Average</h3>
          <p className="amount">{data.average.amount}</p>
          <p className="change negative">{data.average.percentageChange}</p>
          <p className="difference">than last year: {data.average.difference}</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
