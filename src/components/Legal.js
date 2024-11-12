import React from 'react';

const LegalInformation = () => {
  return (
    <div style={{ fontFamily: 'Outfit, sans-serif', padding: '50px', textAlign: 'left', backgroundColor: '#e0f7f4' }}>
      <h1 style={{ fontSize: '3rem', color: '#1a535c' }}>Legal Information</h1>
      
      <p style={{ color: '#4f5d75', fontSize: '1rem', lineHeight: '1.8' }}>
        This Legal Information page outlines the terms and conditions that govern your use of EktaFund’s platform. By using this platform, 
        you agree to abide by these terms.
      </p>
      
      <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Terms of Service</h2>
      <p style={{ color: '#4f5d75', fontSize: '1rem', lineHeight: '1.8' }}>
        By accessing or using EktaFund, you agree to these Terms of Service. You are responsible for using the platform in a lawful manner 
        and for ensuring that all the information you provide is accurate and complete. Any unlawful use or misuse of the platform may lead 
        to termination of your account.
      </p>

      <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Intellectual Property</h2>
      <p style={{ color: '#4f5d75', fontSize: '1rem', lineHeight: '1.8' }}>
        All content, trademarks, and data on EktaFund, including logos, text, graphics, and other intellectual property, are owned by EktaFund or 
        licensed to us. Unauthorized use of this content is prohibited and may result in legal action.
      </p>

      <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Limitation of Liability</h2>
      <p style={{ color: '#4f5d75', fontSize: '1rem', lineHeight: '1.8' }}>
        EktaFund is not liable for any direct, indirect, incidental, or consequential damages resulting from the use of, or the inability to use, 
        our platform. We strive to provide accurate information, but we cannot guarantee the accuracy, completeness, or reliability of content.
      </p>

      <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Third-Party Links</h2>
      <p style={{ color: '#4f5d75', fontSize: '1rem', lineHeight: '1.8' }}>
        Our platform may contain links to third-party websites. We are not responsible for the content or privacy practices of these sites. 
        Visiting these sites is at your own risk, and we encourage you to review their privacy policies and terms.
      </p>

      <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Governing Law</h2>
      <p style={{ color: '#4f5d75', fontSize: '1rem', lineHeight: '1.8' }}>
        These terms are governed by and construed in accordance with the laws of [Country/State]. By using EktaFund, you agree to submit to 
        the jurisdiction of the courts of [Country/State] for any disputes arising from these terms.
      </p>

      <p style={{ color: '#4f5d75', fontSize: '1rem', lineHeight: '1.8', marginTop: '20px' }}>
        If you have any questions about this Legal Information, please contact us at support@ektafund.com.
      </p>
    </div>
  );
};

export default LegalInformation;
