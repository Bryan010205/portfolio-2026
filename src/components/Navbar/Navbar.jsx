import React from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link'; 
import './Navbar.css';

// 💡 CẬP NHẬT ĐƯỜNG DẪN: Lùi ra 2 cấp (../../) để tìm thư mục assets
import logo1 from '../../assets/logo1.png'; 
import logo3 from '../../assets/logo3.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo1} alt="Bryan Logo" />
      </Link>

      <ul className="navbar-links">
        {/* Đảm bảo ở các Section như Hero, About, Projects Hoàng đã đặt id tương ứng */}
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
        {/* Trỏ về id="contact-section" nằm ở Footer */}
        <NavHashLink smooth to="/#contact-section" className="contact-btn">
          Contact
        </NavHashLink>
        
        <img src={logo3} alt="Profile" className="profile-img-nav" />
      </div>
    </nav>
  );
};

export default Navbar;