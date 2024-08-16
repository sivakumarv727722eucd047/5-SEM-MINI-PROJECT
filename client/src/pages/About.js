import React from 'react';
import '../resources/about.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function About() {
  return (
    <div>
      <Navbar />
      <div className="about-container">

        
        <header className="about-header">
          <h1>About Me</h1>
          <p>
            Hi there! I'm Sivakumar Veerasekar, a passionate college student currently pursuing my degree in Computer Science and Design at Sri Krishna College of Engineering and Technology. Welcome to my expense tracker web application!
          </p>
        </header>
        <section className="about-section">
          <h2>Why I Created This App</h2>
          <p>
            In today’s fast-paced world, managing finances can be quite challenging, especially for students. As I navigated through my academic journey, I realized the importance of tracking expenses efficiently. Hence, I decided to combine my passion for coding with a practical solution to a common problem. This web app is a product of that endeavor.
          </p>
        </section>
        <section className="about-section">
          <h2>Skills Developed</h2>
          <ul>
            <li><strong>Front-end Development:</strong> Leveraging HTML, CSS, and JavaScript to create an intuitive and responsive user interface.</li>
            <li><strong>Back-end Development:</strong> Building robust server-side logic with Node.js and MongoDB.</li>
            <li><strong>Full-Stack Integration:</strong> Seamlessly integrating front-end and back-end functionalities.</li>
            <li><strong>User Authentication:</strong> Implementing secure login and registration systems.</li>
            <li><strong>Data Management:</strong> Efficiently storing and retrieving user data.</li>
          </ul>
        </section>
        <section className="about-section">
          <h2>Features of the App</h2>
          <ul>
            <li>Expense Tracking: Easily add, edit, and delete your expenses.</li>
            <li>Analytics: Visualize your spending habits with comprehensive charts and graphs.</li>
            <li>User Account Management: Securely manage your profile and settings.</li>
            <li>Responsive Design: Access your expense tracker on any device, anytime, anywhere.</li>
          </ul>
        </section>
        <section className="about-section">
          <h2>Future Plans</h2>
          <p>
            This app is just the beginning. I plan to continuously improve and add new features, such as:
          </p>
          <ul>
            <li>AI Integration: Incorporating AI to provide personalized financial advice.</li>
            <li>Automated Expense Categorization: Using machine learning to categorize expenses automatically.</li>
            <li>Budget Planning: Helping users set and achieve their financial goals.</li>
          </ul>
        </section>
        <section className="about-section">
          <h2>Contact</h2>
          <p>
            Thank you for visiting my expense tracker web app. I hope you find it useful and that it helps you manage your finances more effectively. Feel free to reach out with any feedback or suggestions!
          </p>
          <p>
            If you have any questions or would like to get in touch, please email me at [contact@example.com].
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default About;
