import React from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link'; 
import './Navbar.css';

// 💡 ĐƯỜNG DẪN ASSETS
import logo1 from '../../assets/logo1.png'; 
import logo3 from '../../assets/logo3.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* BÊN TRÁI: LOGO */}
        <Link to="/" className="navbar-logo">
          <img src={logo1} alt="Bryan Logo" />
        </Link>

        {/* Ở GIỮA: CÁC NÚT ĐIỀU HƯỚNG */}
        <ul className="navbar-links">
          <li>
            <NavHashLink 
              smooth 
              to="/#home" 
              activeClassName="active-link"
            >
              Home
            </NavHashLink>
          </li>
          <li>
            <NavHashLink 
              smooth 
              to="/#about" 
              activeClassName="active-link"
            >
              About
            </NavHashLink>
          </li>
          <li>
            <NavHashLink 
              smooth 
              to="/#projects" 
              activeClassName="active-link"
            >
              Projects
            </NavHashLink>
          </li>
        </ul>

        {/* BÊN PHẢI: ACTIONS */}
        <div className="navbar-actions">
          <NavHashLink smooth to="/#contact-section" className="contact-btn">
            Contact
          </NavHashLink>
          
          <div className="profile-wrapper">
            <img src={logo3} alt="Profile" className="profile-img-nav" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;