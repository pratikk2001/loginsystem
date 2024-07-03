import React from 'react';
import './About.css'; // Assuming you want to use CSS for styling

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>Welcome to My Portfolio!</p>
      <p>
        I am [Your Name], a passionate software developer with expertise in web development, 
        particularly in JavaScript, React, and other modern web technologies. I love creating 
        interactive and dynamic web applications that provide great user experiences.
      </p>
      <p>
        With a background in [Your Background, e.g., Computer Science, Engineering], I have 
        honed my skills through various projects and collaborations. My goal is to continuously 
        learn and grow in the field of software development while contributing to impactful projects.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to build innovative web solutions that meet the needs of our clients 
        and users. We strive for excellence in every project, focusing on quality, usability, 
        and performance.
      </p>
      <h2>Our Values</h2>
      <ul>
        <li><strong>Integrity:</strong> We believe in honesty and transparency in our work.</li>
        <li><strong>Innovation:</strong> We embrace creativity and are always looking for new ways to solve problems.</li>
        <li><strong>Collaboration:</strong> We value teamwork and believe that great things are achieved together.</li>
        <li><strong>Customer Satisfaction:</strong> We are committed to delivering solutions that exceed our clients' expectations.</li>
      </ul>
      <p>Thank you for visiting my portfolio. Feel free to explore my projects and get in touch if you'd like to collaborate or learn more about my work.</p>
    </div>
  );
};

export default AboutUs;
