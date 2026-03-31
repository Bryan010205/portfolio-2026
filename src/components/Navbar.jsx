import React from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link'; // 1. Import cái này
import './Navbar.css';
import logo1 from '../assets/logo1.png'; 
import logo3 from '../assets/logo3.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo1} alt="Bryan Logo" />
      </Link>

      <ul className="navbar-links">
        {/* 2. Dùng NavHashLink và thêm smooth để cuộn mượt */}
        <li>
          <NavHashLink smooth to="/#home">Home</NavHashLink>
        </li>
        <li>
          <NavHashLink smooth to="/#about">About</NavHashLink>
        </li>
        <li>
          <NavHashLink smooth to="/#projects">Projects</NavHashLink>
        </li>
      </ul>

      <div className="navbar-actions">
        <button className="contact-btn">Contact</button>
        <img src={logo3} alt="Profile" className="profile-img-nav" />
      </div>
    </nav>
  );
};

export default Navbar;