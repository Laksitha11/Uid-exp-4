import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Mobile Store. All rights reserved.</p>
      <nav className="footer-links">
        <a href="#privacy">Privacy Policy. </a>
        <a href="#terms">Terms of Service</a>
      </nav>
    </footer>
  );
};

export default Footer;
