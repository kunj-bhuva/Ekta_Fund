import React from 'react';
import './tickertape.css';

const TickerTape = () => {
    return (
        <div className="container mt-10">
            <div className="row">
                <div className="col-md-18">
                    <div className="d-flex justify-content-between align-items-center breaking-news bg-white">
                        <div className="news-scroll" onMouseOver={(e) => e.currentTarget.classList.add("paused")} onMouseOut={(e) => e.currentTarget.classList.remove("paused")}>

                            <div className="scroll-content">
                                <span className="separator">|</span>
                                <a href="#" className="donationname" style={{ color: 'black' }}> Kunj Bhuva just donated </a>
                                <a className='Money' style={{ color: 'green' }}> ₹1000 </a>

                                <span className="separator">|</span>
                                <a href="#" className="donationname" style={{ color: 'black' }}> Synapse just donated </a>
                                <a className='Money' style={{ color: 'green' }}> ₹7800 </a>
                                
                                <span className="separator">|</span>
                                <a href="#" className="donationname" style={{ color: 'black' }}> Sakshi Shah just donated</a>
                                <a className='Money' style={{ color: 'green' }}> ₹1290 </a>
                                
                                <span className="separator">|</span>
                                <a href="#" className="donationname" style={{ color: 'black' }}> Patel Ram </a>
                                <a className='Money' style={{ color: 'green' }}> ₹8210  </a>

                                <span className="separator">|</span>
                                <a href="#" className="donationname" style={{ color: 'black' }}> Patel Ram </a>
                                <a className='Money' style={{ color: 'green' }}> ₹8210  </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TickerTape;
