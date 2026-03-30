import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo1 from '../assets/logo1.png'; // Logo chữ BRYAN
import logo3 from '../assets/logo3.png'; // Logo chân dung hình tròn

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Click logo về Home */}
      <Link to="/" className="navbar-logo">
        <img src={logo1} alt="Bryan Logo" />
      </Link>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/project">Projects</Link></li>
      </ul>

      <div className="navbar-actions">
        <button className="contact-btn">Contact</button>
        
        {/* FIX TẠI ĐÂY: Dùng <img> trực tiếp, bỏ <div> bao quanh */}
        <img src={logo3} alt="Profile" className="profile-img-nav" />
      </div>
    </nav>
  );
};

export default Navbar;