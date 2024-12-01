import React from 'react';

const faqData = [
  {
    question: 'What does EktaFund do?',
    answer: 'EktaFund is a platform designed to help NGOs collect donations and support their missions. We connect donors with organizations working towards various social causes, ensuring a seamless and secure way to contribute to meaningful projects.',
  },
  {
    question: 'What is the minimum amount to donate?',
    answer: 'The minimum donation amount varies depending on the specific NGO and their needs. Each organization sets its own minimum donation, which can be found on their donation page on the EktaFund platform.',
  },
  {
    question: 'What are the causes that I can support?',
    answer: 'EktaFund supports a wide range of causes, including education, healthcare, environment, poverty alleviation, animal welfare, and more. Donors can explore different NGOs and their respective projects to choose the causes they are most passionate about.',
  },
  {
    question: 'How do I know if my donation has reached the beneficiary?',
    answer: 'EktaFund ensures transparency by providing regular updates on how donations are being utilized. Donors can track the progress of the funded projects, and many NGOs provide direct feedback or thank-you messages to donors, making sure that your contribution is reaching those in need.',
  },
  {
    question: 'Is it safe to donate online?',
    answer: 'Yes, donating online is completely safe. At EktaFund, we prioritize your privacy and security. We use industry-standard encryption technology to protect your personal and financial information.',
  },
];

const FAQAccordion = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        // minHeight: '100vh',
        // backgroundColor: '#e6f7f1', // Light mint background
        padding: '20px',
            }}
          >
            <h2 style={{ color: '#2d6a4f', marginBottom: '20px' }}>
        For more details, contact us at: <a href="mailto:info.ektafund@gmail.com" style={{ color: '#2d6a4f' }}>info.ektafund@gmail.com</a>
            </h2>
            <div
        className="accordion accordion-flush"
        id="accordionFlushExample"
        style={{
          width: '70%',
          backgroundColor: '#ffffff', // White background for accordion
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for better design
        }}
      >
        {faqData.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`flush-heading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse${index}`}
                aria-expanded="false"
                aria-controls={`flush-collapse${index}`}
                style={{
                  backgroundColor: '#e6f7f7', // Light mint color for the header
                  color: '#2d6a4f', // Dark green text color
                  borderRadius: '8px',
                  fontSize: '1rem',
                }}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`flush-collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`flush-heading${index}`}
              data-bs-parent="#accordionFlushExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: '#ffffff', // White background for content
                  color: '#2d6a4f', // Dark green text color for content
                  fontSize: '0.95rem',
                }}
              >
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
