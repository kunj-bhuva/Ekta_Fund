import React, { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq_area section_padding_130" id="faq">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-lg-6">
            {/* Section Heading */}
            <div className="section_heading text-center wow fadeInUp" data-wow-delay="0.2s">
              <h2 id="faq">FAQs</h2>
                <h6>For more queries please reach out to us</h6>
                <h6>at:support@ektafund.com</h6>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {/* FAQ Area */}
          <div className="col-12 col-sm-10 col-lg-8">
            <div className="accordion faq-accordion">
              {/* Accordion Item 1 */}
              <div className="card border-0 wow fadeInUp" data-wow-delay="0.2s">
                <div className="card-header" id="headingOne" onClick={() => toggleAccordion(0)}>
                  <h6 className="mb-0">
                  What does EktaFund do?
                    <span className={`lni-chevron-${activeIndex === 0 ? 'down' : 'up'}`}></span>
                  </h6>
                </div>
                {activeIndex === 0 && (
                  <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                    <p>Appland is completely creative, lightweight, clean & super responsive app landing page.</p>
                  </div>
                )}
              </div>

              {/* Accordion Item 2 */}
              <div className="card border-0 wow fadeInUp" data-wow-delay="0.3s">
                <div className="card-header" id="headingTwo" onClick={() => toggleAccordion(1)}>
                  <h6 className="mb-0">
                  What is the minimum amount to donate?
                    <span className={`lni-chevron-${activeIndex === 1 ? 'down' : 'up'}`}></span>
                  </h6>
                </div>
                {activeIndex === 1 && (
                  <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                    <p>Appland is completely creative, lightweight, clean & super responsive app landing page.</p>
                  </div>
                )}
              </div>

              {/* Accordion Item 3 */}
              <div className="card border-0 wow fadeInUp" data-wow-delay="0.4s">
                <div className="card-header" id="headingThree" onClick={() => toggleAccordion(2)}>
                  <h6 className="mb-0">
                  What are the causes that I can support?
                    <span className={`lni-chevron-${activeIndex === 2 ? 'down' : 'up'}`}></span>
                  </h6>
                </div>
                {activeIndex === 2 && (
                  <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                    <p>Appland is completely creative, lightweight, clean & super responsive app landing page.</p>
                  </div>
                )}
              </div>
            </div>

             {/* Accordion Item 4 */}
             <div className="card border-0 wow fadeInUp" data-wow-delay="0.2s">
                <div className="card-header" id="headingOne" onClick={() => toggleAccordion(0)}>
                  <h6 className="mb-0">
                  How do I know if my donation has reached the beneficiary?
                    <span className={`lni-chevron-${activeIndex === 0 ? 'down' : 'up'}`}></span>
                  </h6>
                </div>
                {activeIndex === 0 && (
                  <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                    <p>Appland is completely creative, lightweight, clean & super responsive app landing page.</p>
                  </div>
                )}
              </div>

               {/* Accordion Item 5 */}
             <div className="card border-0 wow fadeInUp" data-wow-delay="0.2s">
                <div className="card-header" id="headingOne" onClick={() => toggleAccordion(0)}>
                  <h6 className="mb-0">
                  Is it safe to donate online?                    <span className={`lni-chevron-${activeIndex === 0 ? 'down' : 'up'}`}></span>
                  </h6>
                </div>
                {activeIndex === 0 && (
                  <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                    <p>Appland is completely creative, lightweight, clean & super responsive app landing page.</p>
                  </div>
                )}
              </div>


               {/* Accordion Item 6 */}
             <div className="card border-0 wow fadeInUp" data-wow-delay="0.2s">
                <div className="card-header" id="headingOne" onClick={() => toggleAccordion(0)}>
                  <h6 className="mb-0">
                  Is the donation refundable?
                    <span className={`lni-chevron-${activeIndex === 0 ? 'down' : 'up'}`}></span>
                  </h6>
                </div>
                {activeIndex === 0 && (
                  <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                    <p>Appland is completely creative, lightweight, clean & super responsive app landing page.</p>
                  </div>
                )}
              </div>
           
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
