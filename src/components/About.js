import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './About.css';

const About = () => {
  const navigate = useNavigate(); // Create the navigate function

  const handleExploreGalleries = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to our Mobile Store! We offer the latest smartphones from top brands with comprehensive reviews, product recommendations, and the best deals.
        </p>
        <p>
          Our mission is to provide our customers with up-to-date information about mobile technology and help them make informed purchase decisions.
        </p>
        <div className="explore-button-container">
          <button className="explore-galleries" onClick={handleExploreGalleries}>
            Explore Mobiles
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
