import React from 'react';
import './tickertape.css';

const TickerTape = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex justify-content-between align-items-center breaking-news bg-white">
                        <div className="news-scroll" onMouseOver={(e) => e.currentTarget.classList.add("paused")} onMouseOut={(e) => e.currentTarget.classList.remove("paused")}>

                            <div className="scroll-content">
                                <span className="dot"></span>
                                <a href="#">Kunj Bhuva just donated </a>
                                <a className='Money'> ₹1000 </a>

                                <span className="dot"></span>
                                <a href="#"> Synapse just donated </a>
                                <a className='Money'> ₹7800 </a>
                                
                                <span className="dot"></span>
                                <a href="#">  Sakshi Shah just donated</a>
                                <a className='Money'> ₹1290 </a>
                                
                                <span className="dot"></span>
                                <a href="#">  Patel Ram </a>
                                <a className='Money'> ₹8210  </a>

                                <span className="dot"></span>
                                <a href="#">  Patel Ram </a>
                                <a className='Money'> ₹8210  </a>

                                <span className="dot"></span>
                                <a href="#">  Patel Ram </a>
                                <a className='Money'> ₹8210  </a>

                                <span className="dot"></span>
                                <a href="#">  Patel Ram </a>
                                <a className='Money'> ₹8210  </a>

                                <span className="dot"></span>
                                <a href="#">  Patel Ram </a>
                                <a className='Money'> ₹8210  </a>

                                <span className="dot"></span>
                                <a href="#">  Patel Ram </a>
                                <a className='Money'> ₹8210  </a>

                                <span className="dot"></span>
                                <a href="#">  Patel Ram </a>
                                <a className='Money'> ₹8210  </a>

                                <span className="dot"></span>
                                <a href="#">  Patel Ram </a>
                                <a className='Money'> ₹8210  </a>

                                <span className="dot"></span>
                                <a href="#">  Patel Ram </a>
                                <a className='Money'> ₹8210  </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TickerTape;
