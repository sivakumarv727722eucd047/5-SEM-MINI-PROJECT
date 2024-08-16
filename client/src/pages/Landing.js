import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../resources/landing.css';

import getStartedImg from '../assets/landing_page_img.png';
import registerImg from '../assets/register_page_img.png';
import loginImg from '../assets/login_page_img.png';
import addNewImg from '../assets/addnewtransaction_img.png';
import saveImg from '../assets/addnewtransaction_img.png';
import analyticsImg from '../assets/analytics_page_img.png';



const testimonials = [
  {
    text: "This app changed my life!",
    author: "User A"
  },
  {
    text: "Easy to use and very effective.",
    author: "User B"
  }
];






function Landing() {
  return (
    <div>
      <Navbar />




      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-headline">Take Control of Your Finances</h1>
          <p className="hero-subheadline">Track your expenses, plan your budget, and achieve your financial goals.</p>
          <div className="hero-buttons">
            <Link to="/register" className="cta-button">Get Started</Link>
            <Link to="/login" className="cta-button">Login</Link>
          </div>
        </div>
      </div>









      <div className="how-it-works-container">
      <h2 className="section-title">How It Works</h2>
      <div className="steps-container">
        <div className="step">
          <img src={getStartedImg} alt="Click Get Started" className="step-image"/>
          <h3 className="step-title">Step 1: Click 'Get Started'</h3>
        </div>
        <div className="step">
          <img src={registerImg} alt="Register" className="step-image"/>
          <h3 className="step-title">Step 2: Register</h3>
        </div>
        <div className="step">
          <img src={loginImg} alt="Login" className="step-image"/>
          <h3 className="step-title">Step 3: Login</h3>
        </div>
        <div className="step">
          <img src={addNewImg} alt="Add New" className="step-image"/>
          <h3 className="step-title">Step 4: Click 'Add New'</h3>
        </div>
        <div className="step">
          <img src={saveImg} alt="Save" className="step-image"/>
          <h3 className="step-title">Step 5: Click 'Save'</h3>
        </div>
        <div className="step">
          <img src={analyticsImg} alt="Analytics" className="step-image"/>
          <h3 className="step-title">Step 6: Click the Analytics Icon</h3>
        </div>
      </div>
    </div>









    <div className="testimonials-container">
      <h2 className="section-title">What Our Users Say</h2>
      <div className="testimonials-content">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p className="testimonial-text">“{testimonial.text}”</p>
            <p className="testimonial-author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>

      
      
     
      <Footer />
    </div>
  );
}

export default Landing;
