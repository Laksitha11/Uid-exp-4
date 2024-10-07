import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Mobile Store</div>
      <nav className="nav-links">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;
