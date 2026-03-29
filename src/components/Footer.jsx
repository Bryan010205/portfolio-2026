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
            <button className="footer-btn">
              GET IN TOUCH <span className="arrow-icon">↗</span>
            </button>
            
            <div className="social-links">
              <a href="#instagram" className="social-icon" aria-label="Instagram">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              
              <a href="#linkedin" className="social-icon" aria-label="LinkedIn">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              
              <a href="mailto:contact@huynhphuocvo.com" className="social-icon" aria-label="Email">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
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
        {/* Duplicate for seamless loop */}
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