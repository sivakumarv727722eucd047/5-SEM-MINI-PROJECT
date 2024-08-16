// src/pages/PrivacyPolicy.js

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div>
    <Navbar/>
    <div style={{ padding: '20px', maxWidth: '800px', margin: '120px' , }}>
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> [Insert Date]</p>

      <p><strong>Note:</strong> This Privacy Policy document is a placeholder and should not be considered a legally binding agreement. Please consult with a legal professional to create a proper Privacy Policy for your application.</p>

      <h2>1. Introduction</h2>
      <p>[Your Web Application Name] ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose information about you.</p>

      <h2>2. Information We Collect</h2>
      <p>We collect information you provide directly, such as when you create an account, update your profile, or submit data through our website. This may include personal information such as your name, email address, and other details you provide.</p>

      <h2>3. How We Use Your Information</h2>
      <p>We use your information to provide and improve our services, communicate with you, and comply with legal obligations. We may also use your information to personalize your experience and send you updates.</p>

      <h2>4. Data Security</h2>
      <p>We implement reasonable measures to protect your information from unauthorized access or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

      <h2>5. Sharing Your Information</h2>
      <p>We do not share your information with third parties except as necessary to provide our services, comply with legal requirements, or with your consent.</p>

      <h2>6. Your Choices</h2>
      <p>You have the right to access, correct, or delete your personal information. You may also opt out of receiving promotional communications from us by following the instructions in those communications.</p>

      <h2>7. Changes to the Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website. Your continued use of the website constitutes acceptance of the updated policy.</p>

      <h2>8. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy or our data practices, please contact us at [Your Contact Email].</p>
    </div>
    <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
