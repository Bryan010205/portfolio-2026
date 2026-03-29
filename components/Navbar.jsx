import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <h2>BRYAN</h2>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>

      {/* Actions and Avatar */}
      <div className="navbar-actions">
        <button className="contact-btn">Contact</button>
        <div className="avatar">
          {/* Placeholder image, replace with your actual image later */}
          <img src="https://i.pravatar.cc/150?img=11" alt="Bryan Avatar" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;