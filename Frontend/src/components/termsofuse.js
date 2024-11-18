import React from 'react';

const TermsOfUse = () => {
  return (
    <div style={{ fontFamily: 'Outfit, sans-serif', padding: '50px', textAlign: 'justify', backgroundColor: '#e0f7f4' }}>
      <h1 style={{ fontSize: '3rem', color: '#1a535c', textAlign: 'center' }}>Terms of Use</h1>

      <p style={{ color: '#4f5d75', fontSize: '1rem', lineHeight: '1.8' }}>
        Welcome to EktaFund. By accessing or using our platform, you agree to these Terms of Use. Please read them carefully. These terms are governed by the applicable laws of India.
      </p>

      <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Acceptance of Terms</h2>
      <p style={{ color: '#4f5d75', fontSize: '1rem', lineHeight: '1.8' }}>
        By accessing and using EktaFund, you agree to be bound by these terms and any policies referenced herein. If you do not agree with any part of these terms, please do not use our platform.
      </p>

      <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Use of Platform</h2>
      <p style={{ color: '#4f5d75', fontSize: '1rem', lineHeight: '1.8' }}>
        EktaFund provides information about various Non-Governmental Organizations (NGOs) and enables users to make donations. You agree to use this platform responsibly and comply with all applicable Indian laws. Any form of unauthorized, fraudulent, or illegal activities is strictly prohibited.
      </p>

      <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Donations</h2>
      <p style={{ color: '#4f5d75', fontSize: '1rem', lineHeight: '1.8' }}>
        Donations made through EktaFund are processed securely in accordance with Indian financial regulations. However, EktaFund does not guarantee the efficacy of any NGO or ensure that funds are utilized for the intended purpose once transferred. Users are encouraged to review and verify the details of the NGOs before making contributions.
      </p>

      <h2 style={{ color: '#1a535c', marginTop: '20px' }}>User Responsibilities</h2>
      <p style={{ color: '#4f5d75', fontSize: '1rem', lineHeight: '1.8' }}>
        You are responsible for ensuring that all information provided during registration or use of the platform is accurate and up-to-date. Misuse of the platform, including providing false information or engaging in prohibited activities, may result in account suspension or other legal actions as per Indian law.
      </p>

      <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Intellectual Property</h2>
      <p style={{ color: '#4f5d75', fontSize: '1rem', lineHeight: '1.8' }}>
        All content on EktaFund, including but not limited to text, images, and logos, is the property of EktaFund or its partners and is protected under Indian copyright laws. Unauthorized use, reproduction, or distribution of this content without prior written consent is prohibited.
      </p>

      <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Limitation of Liability</h2>
      <p style={{ color: '#4f5d75', fontSize: '1rem', lineHeight: '1.8' }}>
        EktaFund is not liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the platform. Users agree to assume full responsibility for any risks associated with using EktaFund. EktaFund’s liability shall be limited to the extent permitted under Indian law.
      </p>

      <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Compliance and Governing Law</h2>
      <p style={{ color: '#4f5d75', fontSize: '1rem', lineHeight: '1.8' }}>
        These terms shall be governed by, and construed in accordance with, the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in [City/Region, e.g., New Delhi].
      </p>

      <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Privacy and Data Security</h2>
      <p style={{ color: '#4f5d75', fontSize: '1rem', lineHeight: '1.8' }}>
        EktaFund adheres to the rules and regulations outlined in the Information Technology Act, 2000, and other applicable data protection laws. Personal information provided by users is managed in accordance with our Privacy Policy.
      </p>

      <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Changes to Terms</h2>
      <p style={{ color: '#4f5d75', fontSize: '1rem', lineHeight: '1.8' }}>
        EktaFund reserves the right to modify these Terms of Use at any time. It is the user's responsibility to review these terms regularly for any changes. Continued use of the platform after modifications implies acceptance of the updated terms.
      </p>

      <p style={{ color: '#4f5d75', fontSize: '1rem', lineHeight: '1.8', marginTop: '20px' }}>
        If you have any questions regarding these Terms of Use or require assistance, please contact us at {' '}
        <a href="mailto:support@ektafund.com">support@ektafund.com</a>
      </p>
    </div>
  );
};

export default TermsOfUse;
