import React from 'react';

const LegalInformation = () => {
  return (
    <div
      style={{
        fontFamily: 'Outfit, sans-serif',
        padding: '50px',
        textAlign: 'justify',
        backgroundColor: '#e0f7f4',
        lineHeight: '1.8',
      }}
    >
      <h1 style={{ fontSize: '3rem', color: '#1a535c', textAlign: 'center' }}>Legal Information</h1>

      <p style={{ color: '#4f5d75', fontSize: '1rem' }}>
        This Legal Information page outlines the terms and conditions governing your use of EktaFund's platform. By using this platform, you
        agree to comply with these terms and conditions as per Indian laws.
      </p>

      <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Terms of Service</h2>
      <p style={{ color: '#4f5d75', fontSize: '1rem' }}>
        By accessing or using EktaFund, you agree to these Terms of Service. You must use the platform in accordance with Indian laws and
        ensure the accuracy and completeness of the information you provide. Unlawful use or misuse of the platform may result in termination
        of your account and legal action under the Information Technology Act, 2000.
      </p>

      <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Privacy and Data Protection</h2>
      <p style={{ color: '#4f5d75', fontSize: '1rem' }}>
        Your personal information is protected under the
        
          Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011
        
        . By using EktaFund, you consent to the collection, use, storage, and sharing of your data in accordance with our Privacy Policy.
        For more details, please review our Privacy Policy.
      </p>

      <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Intellectual Property</h2>
      <p style={{ color: '#4f5d75', fontSize: '1rem' }}>
        All content, trademarks, and data on EktaFund, including logos, text, graphics, and other intellectual property, are owned by
        EktaFund or licensed to us. Unauthorized use of this content is strictly prohibited and may lead to legal action under the
        Copyright Act, 1957 and the Trademarks Act, 1999.
      </p>

      <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Refund and Cancellation Policy</h2>
      <p style={{ color: '#4f5d75', fontSize: '1rem' }}>
        Donations made on EktaFund are final and non-refundable, except in cases of technical errors. Refund requests must be submitted
        in writing, and the final decision will be made by EktaFund. Refunds,
        if approved, will be processed in accordance with Indian banking regulations.
      </p>

      <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Limitation of Liability</h2>
      <p style={{ color: '#4f5d75', fontSize: '1rem' }}>
        EktaFund shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of, or inability to
        use, our platform. While we strive to provide accurate information, we do not guarantee the accuracy, completeness, or reliability of
        the content.
      </p>

      <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Dispute Resolution</h2>
      <p style={{ color: '#4f5d75', fontSize: '1rem' }}>
        Any disputes arising from the use of EktaFund will be resolved through arbitration in accordance with the
        Arbitration and Conciliation Act, 1996. The venue for arbitration will be New Delhi, India,
        and proceedings will be conducted in English.
      </p>

      <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Third-Party Links</h2>
      <p style={{ color: '#4f5d75', fontSize: '1rem' }}>
        Our platform may contain links to third-party websites. EktaFund is not responsible for the content or privacy practices of these
        sites. Use of these sites is at your own risk, and we recommend reviewing their respective terms and policies.
      </p>

      <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Force Majeure</h2>
      <p style={{ color: '#4f5d75', fontSize: '1rem' }}>
        EktaFund is not liable for delays or failures in performance caused by events beyond our control, including natural disasters,
        government actions, or technical disruptions.
      </p>

      <h2 style={{ color: '#1a535c', marginTop: '20px' }}>Governing Law</h2>
      <p style={{ color: '#4f5d75', fontSize: '1rem' }}>
        These terms are governed by the laws of India. By using EktaFund, you agree to submit to the exclusive jurisdiction of the courts in
        New Delhi, India, for any disputes arising from these terms.
      </p>

      <p style={{ color: '#4f5d75', fontSize: '1rem', marginTop: '20px' }}>
        If you have any questions or require further assistance, please contact us at{' '}
        <a href="mailto:support@ektafund.com">support@ektafund.com</a>.
      </p>
    </div>
  );
};

export default LegalInformation;
