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
                    <p>EktaFund is a platform designed to help NGOs collect donations. It provides a website for NGOs to manage their fundraising efforts and connect with potential donors.</p>
                    <p>EktaFund helps NGOs reach a wider audience and facilitates easy online donations to support various causes and initiatives. It’s a reliable and secure platform for donors to contribute to meaningful projects.</p>
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
                    <p>The minimum amount to donate on EktaFund depends on the specific NGO or cause you are supporting. Typically, donations can start as low as $5, but it may vary by campaign or organization.</p>
                    <p>To know the exact minimum donation amount, please check the details of the specific NGO or cause you want to support on their fundraising page.</p>
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
              <div className="card border-0 wow fadeInUp" data-wow-delay="0.2s">
                <div className="card-header" id="headingOne" onClick={() => toggleAccordion(3)}>
                  <h6 className="mb-0">
                    How do I know if my donation has reached the beneficiary?
                    <span className={`lni-chevron-${activeIndex === 3 ? 'down' : 'up'}`}></span>
                  </h6>
                </div>
                {activeIndex === 3 && (
                  <div className="card-body">
                    <p>Once you make a donation, EktaFund ensures transparency by providing regular updates on the status of your donation. Here's how you can track your donation:</p>
                    <ul>
                      <li>You will receive an email confirmation once your donation is processed successfully.</li>
                      <li>NGOs on the platform may provide updates through email, their website, or on the donation campaign page, where you can see how the funds are being used.</li>
                      <li>In some cases, you may also receive impact reports or photos showing how your donation has helped the beneficiaries.</li>
                    </ul>
                    <p>If you have any questions or concerns, you can reach out to the NGO directly via the contact information provided on their campaign page.</p>
                  </div>
                )}
              </div>

              {/* Accordion Item 5 */}
              <div className="card border-0 wow fadeInUp" data-wow-delay="0.2s">
                <div className="card-header" id="headingOne" onClick={() => toggleAccordion(4)}>
                  <h6 className="mb-0">
                    Is it safe to donate online?
                    <span className={`lni-chevron-${activeIndex === 4 ? 'down' : 'up'}`}></span>
                  </h6>
                </div>
                {activeIndex === 4 && (
                  <div className="card-body">
                    <p>Yes, donating online is completely safe. At EktaFund, we prioritize the security and privacy of your personal information and financial details. Here's how we ensure your donation is safe:</p>
                    <ul>
                      <li><strong>Secure Payment Gateway:</strong> We use encrypted payment gateways to process all donations, ensuring your payment details are protected.</li>
                      <li><strong>Data Protection:</strong> Your personal information is stored securely and is never shared without your consent.</li>
                      <li><strong>Verified NGOs:</strong> All the NGOs listed on EktaFund go through a verification process, ensuring that your donation reaches the intended beneficiaries.</li>
                      <li><strong>Transparency:</strong> You will receive confirmation emails for every donation, and many NGOs provide updates on how your funds are used, ensuring complete transparency.</li>
                    </ul>
                    <p>We are committed to providing a safe, secure, and transparent donation experience, so you can donate with confidence.</p>
                  </div>
                )}
              </div>

              {/* Accordion Item 6 */}
              <div className="card border-0 wow fadeInUp" data-wow-delay="0.2s">
                <div className="card-header" id="headingOne" onClick={() => toggleAccordion(5)}>
                  <h6 className="mb-0">
                    Is the donation refundable?
                    <span className={`lni-chevron-${activeIndex === 5 ? 'down' : 'up'}`}></span>
                  </h6>
                </div>
                {activeIndex === 5 && (
                  <div className="card-body">
                    <p>Donations made on EktaFund are typically non-refundable, as they are intended to support the causes and NGOs listed on the platform. Once a donation is processed, it is considered a final transaction. However, we understand that there may be exceptional cases, and we have a process in place to address them.</p>
                    <p>Here’s what you can do if you need assistance with a donation:</p>
                    <ul>
                      <li><strong>If there is an error with your donation:</strong> Please contact us within 24 hours of making the donation, and we will do our best to assist you.</li>
                      <li><strong>If the campaign you donated to is canceled:</strong> In the rare case that a campaign is canceled before funds are used, we will work with the NGO to ensure your donation is either refunded or redirected to another cause of your choice.</li>
                      <li><strong>Contact support:</strong> For any concerns or issues, you can reach out to us at support@ektafund.com, and we’ll assist you as promptly as possible.</li>
                    </ul>
                    <p>We encourage you to review the campaign details carefully before making a donation to ensure that you are comfortable with your contribution.</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
