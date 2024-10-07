import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Header from './components/Header'; // Ensure these paths are correct
import Content from './components/Content';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Importing Footer component
import './App.css'; // Any global styles

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header /> {/* Render Header */}

        <Routes>
          <Route path="/" element={<Content />} /> {/* Main content with explore functionality */}
          <Route path="/about" element={<About />} /> {/* About page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        </Routes>

        <Footer /> {/* Render Footer */}
      </div>
    </Router>
  );
};

export default App;
