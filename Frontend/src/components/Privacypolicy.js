import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={{ fontFamily: 'Outfit, sans-serif',
      padding: '50px',
      textAlign: 'justify',
      backgroundColor: '#e0f7f4',
      lineHeight: '1.8', }}>
      {/* <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'left' }}> */}
        <h1 style={{ fontSize: '2.5rem', color: '#1a535c', marginBottom: '20px',  paddingBottom: '10px', textAlign: 'center' }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px' }}>
          At EktaFund, your privacy is our priority. We are committed to safeguarding your personal information and ensuring its use aligns 
          with applicable laws in India, including the Information Technology Act, 2000, and related rules.
        </p>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Information We Collect</h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '10px' }}>
            We collect personal information directly from you when you:
          </p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.6' }}>
            <li>Create an account on our platform.</li>
            <li>Make a donation.</li>
            <li>Contact our support team.</li>
            <li>Subscribe to updates or newsletters.</li>
          </ul>
          <p style={{ marginTop: '15px', fontSize: '1rem', lineHeight: '1.6' }}>
            The information we collect may include:
          </p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.6' }}>
            <li>Name, email address, phone number, and address.</li>
            <li>Payment details (e.g., UPI ID, bank account, credit/debit card information).</li>
            <li>Identification documents, if required for compliance purposes (e.g., PAN card for tax exemption).</li>
          </ul>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#1a535c', marginTop: '20px' }}>How We Use Your Information</h2>
          <ul style={{ marginLeft: '20px', lineHeight: '1.6' }}>
            <li>To facilitate the donation process and provide tax receipts.</li>
            <li>To communicate updates about your donations, supported projects, and NGOs.</li>
            <li>To improve and personalize your experience on our platform.</li>
            <li>To comply with legal and regulatory obligations under Indian law, such as tax reporting.</li>
            <li>For internal analytics to enhance our services and user experience.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Sharing Your Information</h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '10px' }}>
            We do not sell or trade your personal information. However, we may share your data in the following scenarios:
          </p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.6' }}>
            <li>
              <strong>Payment Processing:</strong> With trusted third-party payment gateways compliant with Reserve Bank of India (RBI) guidelines.
            </li>
            <li>
              <strong>Legal Compliance:</strong> If required by Indian law or to comply with legal processes, such as court orders or government requests.
            </li>
            <li>
              <strong>NGO Partners:</strong> Limited information (e.g., your name or message) may be shared with NGOs you support, if necessary.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Security of Your Information</h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            EktaFund employs industry-standard security practices, including:
          </p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.6' }}>
            <li>Data encryption during transmission and storage.</li>
            <li>Secure servers compliant with Indian regulations for data storage.</li>
            <li>Regular security audits to protect against unauthorized access and cyber threats.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Your Rights</h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '10px' }}>
            Under Indian law, you have the right to:
          </p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.6' }}>
            <li>Access your personal information held by us.</li>
            <li>Update or correct inaccuracies in your data.</li>
            <li>Request deletion of your personal information, subject to legal requirements.</li>
          </ul>

          <p style={{ fontSize: '1rem', lineHeight: '1.6', textAlign: 'left', marginTop: '20px' }}>
            For any queries, contact us at: {' '}
            <a href="mailto:support@ektafund.com">support@ektafund.com</a> | <strong style={{ color: '#1a535c' }}>+91-10011225259</strong>
          </p>
        </section>
      </div>
    // </div>
  );
};

export default PrivacyPolicy;
