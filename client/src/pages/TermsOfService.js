// src/pages/TermsOfService.js

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {

  return (
    <div>
    <Navbar />
    <div style={{ padding: '20px', maxWidth: '800px', margin: '128px' }}>
      <h1>Terms of Service</h1>
      <p><strong>Effective Date:</strong> [Insert Date]</p>

      <p><strong>Note:</strong> This Terms of Service document is a placeholder and should not be considered a legally binding agreement. Please consult with a legal professional to create a proper Terms of Service for your application.</p>

      <h2>1. Introduction</h2>
      <p>Welcome to [Your Web Application Name]! By using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.</p>

      <h2>2. Use of Our Service</h2>
      <p>You agree to use our service only for lawful purposes and in accordance with these Terms of Service. You must not use our website in any way that could damage or impair our website or interfere with other users' enjoyment.</p>

      <h2>3. User Accounts</h2>
      <p>To access certain features of our website, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>

      <h2>4. Content</h2>
      <p>You retain ownership of any content you submit to our website, but you grant us a non-exclusive, royalty-free, worldwide license to use, reproduce, and display such content in connection with our service.</p>

      <h2>5. Termination</h2>
      <p>We reserve the right to terminate or suspend your account and access to our website at our sole discretion, without notice, for any reason.</p>

      <h2>6. Limitation of Liability</h2>
      <p>Our website is provided "as is" and "as available" without warranties of any kind. We are not liable for any damages arising from the use or inability to use our website.</p>

      <h2>7. Changes to the Terms</h2>
      <p>We may update these Terms of Service from time to time. We will notify you of any significant changes by posting the new terms on our website. Your continued use of the website constitutes acceptance of the updated terms.</p>

      <h2>8. Contact Us</h2>
      <p>If you have any questions about these Terms of Service, please contact us at [Your Contact Email].</p>
    </div>
    <Footer />
    </div>
  );
};

export default TermsOfService;
