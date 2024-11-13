import React, { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* Add Outfit font dynamically in the head */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap');
        `}
      </style>

      <div
        className="faq_area section_padding_130"
        id="faq"
        style={{
          paddingBottom: '50px',
          opacity: 0.7,
          fontFamily: 'Outfit, sans-serif',
          color: 'black',
          display: 'flex',
          justifyContent: 'center', // Center the content horizontally
        }}
      >
        <div className="container" >
          <div className="row justify-content-center">
            <div className="col col-sm-8 col-lg-10">
              <div className="section_heading text-center wow fadeInUp" data-wow-delay="0.2s">
                <h6 style={{ fontSize: '1.2rem' }}>For more queries please reach out to us</h6>
                <h6 style={{ fontSize: '1.2rem' }}>
                  at: <a href="mailto:support@ektafund.com" style={{ color: 'black' }}>support@ektafund.com</a>
                </h6>
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {/* FAQ Area */}
            <div className="col-12 col-sm-10 col-lg-10">
              <div className="accordion faq-accordion" style={{ backgroundColor: '#73e0cc' }}>
                {/* Accordion Item 1 */}
                <div className="card border-0 wow fadeInUp" data-wow-delay="0.2s">
                  <div
                    className="card-header"
                    id="headingOne"
                    onClick={() => toggleAccordion(0)}
                    style={{
                      backgroundColor: '#73e0cc',
                      padding: '20px 0',
                      paddingLeft: '30px',
                      paddingRight: '30px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%', // Ensure it spans full width inside container
                      transition: 'width 1s ease', // Smooth transition on width change
                    }}
                  >
                    <h6 className="mb-0" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                      What does EktaFund do?
                    </h6>
                    <span
                      className={`chevron-icon ${activeIndex === 0 ? 'open' : 'closed'}`}
                      style={{ fontSize: '18px', paddingRight: '10px' }}
                    >
                      &#9660;
                    </span>
                  </div>
                  {activeIndex === 0 && (
                    <div
                      className="card-body"
                      style={{
                        fontSize: '24px',
                        backgroundColor: '#73e0cc',
                        overflow: 'hidden',
                        maxHeight: '500px',
                        transition: 'max-height 0.3s ease-out',
                      }}
                    >
                      <p>EktaFund is a platform designed to help NGOs collect donations. It provides a website for NGOs to manage their fundraising efforts and connect with potential donors.</p>
                      <p>EktaFund helps NGOs reach a wider audience and facilitates easy online donations to support various causes and initiatives. It’s a reliable and secure platform for donors to contribute to meaningful projects.</p>
                    </div>
                  )}
                </div>

                {/* Accordion Item 2 */}
                <div className="card border-0 wow fadeInUp" data-wow-delay="0.3s">
                  <div
                    className="card-header"
                    id="headingTwo"
                    onClick={() => toggleAccordion(1)}
                    style={{
                      backgroundColor: '#73e0cc',
                      padding: '20px 0',
                      paddingLeft: '30px',
                      paddingRight: '30px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%', // Ensure it spans full width inside container
                      transition: 'width 0.3s ease',
                    }}
                  >
                    <h6 className="mb-0" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                      What is the minimum amount to donate?
                    </h6>
                    <span
                      className={`chevron-icon ${activeIndex === 1 ? 'open' : 'closed'}`}
                      style={{ fontSize: '18px', paddingRight: '10px' }}
                    >
                      &#9660;
                    </span>
                  </div>
                  {activeIndex === 1 && (
                    <div
                      className="card-body"
                      style={{
                        fontSize: '24px',
                        backgroundColor: '#73e0cc',
                        overflow: 'hidden',
                        maxHeight: '500px',
                        transition: 'max-height 0.3s ease-out',
                      }}
                    >
                      <p>The minimum amount to donate on EktaFund depends on the specific NGO or cause you are supporting. Typically, donations can start as low as $5, but it may vary by campaign or organization.</p>
                      <p>To know the exact minimum donation amount, please check the details of the specific NGO or cause you want to support on their fundraising page.</p>
                    </div>
                  )}
                </div>

                {/* Accordion Item 3 */}
                <div className="card border-0 wow fadeInUp" data-wow-delay="0.4s">
                  <div
                    className="card-header"
                    id="headingThree"
                    onClick={() => toggleAccordion(2)}
                    style={{
                      backgroundColor: '#73e0cc',
                      padding: '20px 0',
                      paddingLeft: '30px',
                      paddingRight: '30px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%', // Ensure it spans full width inside container
                      transition: 'width 0.3s ease',
                    }}
                  >
                    <h6 className="mb-0" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                      What are the causes that I can support?
                    </h6>
                    <span
                      className={`chevron-icon ${activeIndex === 2 ? 'open' : 'closed'}`}
                      style={{ fontSize: '18px', paddingRight: '10px' }}
                    >
                      &#9660;
                    </span>
                  </div>
                  {activeIndex === 2 && (
                    <div
                      className="card-body"
                      style={{
                        fontSize: '24px',
                        backgroundColor: '#73e0cc',
                        overflow: 'hidden',
                        maxHeight: '500px',
                        transition: 'max-height 0.3s ease-out',
                      }}
                    >
                      <p>On EktaFund, you can support a wide range of causes, including but not limited to:</p>
                      <ul>
                        <li>Education for underprivileged children</li>
                        <li>Healthcare and medical treatments for those in need</li>
                        <li>Environmental conservation and sustainability efforts</li>
                        <li>Empowering women and girls in disadvantaged communities</li>
                        <li>Animal welfare and protection</li>
                        <li>Humanitarian aid in times of crisis or disaster</li>
                      </ul>
                      <p>Each cause has its own campaign page where you can learn more about the specific needs and how your donation can make a difference.</p>
                    </div>
                  )}
                </div>

                {/* Accordion Item 4 */}
                <div className="card border-0 wow fadeInUp" data-wow-delay="0.5s">
                  <div
                    className="card-header"
                    id="headingFour"
                    onClick={() => toggleAccordion(3)}
                    style={{
                      backgroundColor: '#73e0cc',
                      padding: '20px 0',
                      paddingLeft: '30px',
                      paddingRight: '30px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%', // Ensure it spans full width inside container
                      transition: 'width 0.3s ease',
                    }}
                  >
                    <h6 className="mb-0" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                      How do I know if my donation has reached the beneficiary?
                    </h6>
                    <span
                      className={`chevron-icon ${activeIndex === 3 ? 'open' : 'closed'}`}
                      style={{ fontSize: '18px', paddingRight: '10px' }}
                    >
                      &#9660;
                    </span>
                  </div>
                  {activeIndex === 3 && (
                    <div
                      className="card-body"
                      style={{
                        fontSize: '24px',
                        backgroundColor: '#73e0cc',
                        overflow: 'hidden',
                        maxHeight: '500px',
                        transition: 'max-height 0.3s ease-out',
                      }}
                    >
                      <p>Once you make a donation, EktaFund ensures transparency by providing regular updates on the status of your donation. Here's how you can track your donation:</p>
                      <ul>
                        <li>You will receive an email confirmation once your donation is processed successfully.</li>
                        <li>NGOs on the platform may provide updates through email, their website, or on the donation campaign page, where you can see how the funds are being used.</li>
                        <li>In some cases, you may also receive impact reports or photos showing how your donation has helped the beneficiaries.</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Accordion Item 5 */}
                <div className="card border-0 wow fadeInUp" data-wow-delay="0.6s">
                  <div
                    className="card-header"
                    id="headingFive"
                    onClick={() => toggleAccordion(4)}
                    style={{
                      backgroundColor: '#73e0cc',
                      padding: '20px 0',
                      paddingLeft: '30px',
                      paddingRight: '30px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%', // Ensure it spans full width inside container
                      transition: 'width 0.3s ease',
                    }}
                  >
                    <h6 className="mb-0" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                      Is it safe to donate online?
                    </h6>
                    <span
                      className={`chevron-icon ${activeIndex === 4 ? 'open' : 'closed'}`}
                      style={{ fontSize: '18px', paddingRight: '10px' }}
                    >
                      &#9660;
                    </span>
                  </div>
                  {activeIndex === 4 && (
                    <div
                      className="card-body"
                      style={{
                        fontSize: '24px',
                        backgroundColor: '#73e0cc',
                        overflow: 'hidden',
                        maxHeight: '500px',
                        transition: 'max-height 0.3s ease-out',
                      }}
                    >
                      <p>Yes, donating online is completely safe. At EktaFund, we prioritize the security and privacy of your personal information and financial details.</p>
                    </div>
                  )}
                </div>

                {/* Accordion Item 6 */}
                <div className="card border-0 wow fadeInUp" data-wow-delay="0.7s">
                  <div
                    className="card-header"
                    id="headingSix"
                    onClick={() => toggleAccordion(5)}
                    style={{
                      backgroundColor: '#73e0cc',
                      padding: '20px 0',
                      paddingLeft: '30px',
                      paddingRight: '30px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%', // Ensure it spans full width inside container
                      transition: 'width 0.3s ease',
                    }}
                  >
                    <h6 className="mb-0" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                      Is the donation refundable?
                    </h6>
                    <span
                      className={`chevron-icon ${activeIndex === 5 ? 'open' : 'closed'}`}
                      style={{ fontSize: '18px', paddingRight: '10px' }}
                    >
                      &#9660;
                    </span>
                  </div>
                  {activeIndex === 5 && (
                    <div
                      className="card-body"
                      style={{
                        fontSize: '24px',
                        backgroundColor: '#73e0cc',
                        overflow: 'hidden',
                        maxHeight: '500px',
                        transition: 'max-height 0.3s ease-out',
                      }}
                    >
                      <p>Donations made on EktaFund are typically non-refundable, but there are exceptional cases where we can assist you.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
