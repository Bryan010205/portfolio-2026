import React from 'react';
import './Navbar.css';
import logo1 from '../assets/logo1.png'; 
import logo3 from '../assets/logo3.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo1} alt="Bryan Logo" className="brand-logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
      <div className="navbar-actions">
        <button className="contact-btn">Contact</button>
        <div className="avatar">
          <img src={logo3} alt="Profile" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;