import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Decorative Zigzag */}
        <div className="footer-zigzag">
          <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 10L15 2L30 18L45 2L59 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="footer-content">
          <h2 className="footer-title">LET'S COLLABORATE</h2>
          <h3 className="footer-email">@huynhphuocvo.com</h3>

          <div className="footer-actions">
            {/* Nút bấm trỏ vào mail */}
            <a href="mailto:contact@huynhphuocvo.com" style={{ textDecoration: 'none' }}>
              <button className="footer-btn">
                GET IN TOUCH <span className="arrow-icon">↗</span>
              </button>
            </a>
            
            <div className="social-links">
              {/* CHỈ GIỮ LẠI INSTAGRAM VÀ LINKEDIN */}
              <a 
                href="https://www.instagram.com/huynhphcc/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon" 
                aria-label="Instagram"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/bryan-vo-1376b8340/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon" 
                aria-label="LinkedIn"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Marquee Text */}
      <div className="footer-bottom-text">
        <div className="marquee-content">
          <h1>PHUOC VO</h1>
          <span className="separator">•</span>
          <h1>PHUOC VO</h1>
          <span className="separator">•</span>
          <h1>PHUOC VO</h1>
          <span className="separator">•</span>
        </div>
        <div className="marquee-content">
          <h1>PHUOC VO</h1>
          <span className="separator">•</span>
          <h1>PHUOC VO</h1>
          <span className="separator">•</span>
          <h1>PHUOC VO</h1>
          <span className="separator">•</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;