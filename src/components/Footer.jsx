import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Footer.css';

// --- COMPONENT HÚT NAM CHÂM ---
const Magnetic = ({ children }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });
  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

const Footer = () => {
  const emailAddress = "vop8227@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Lệnh copy mail vào bộ nhớ
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    // Hiện chữ "Copied" trong 2 giây rồi đổi lại như cũ
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="footer-section" id="contact-section">
      <div className="footer-container">
        <div className="footer-zigzag">
          <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 10L15 2L30 18L45 2L59 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="footer-content">
          <h2 className="footer-title">LET'S COLLABORATE</h2>
          
          {/* Bấm vào dòng email này cũng sẽ copy luôn */}
          <h3 className="footer-email" onClick={handleCopy} style={{ cursor: 'pointer' }}>
            {emailAddress}
          </h3>

          <div className="footer-actions">
            <Magnetic>
              <button className="footer-btn" onClick={handleCopy}>
                {copied ? "EMAIL COPIED! " : "GET IN TOUCH ↗"}
              </button>
            </Magnetic>
            
            <div className="social-links">
              <Magnetic>
                <a href="https://www.instagram.com/huynhphcc/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </Magnetic>
              <Magnetic>
                <a href="https://www.linkedin.com/in/bryan-vo-1376b8340/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-text">
        <div className="marquee-content">
          <h1>PHUOC VO</h1><span className="separator">•</span>
          <h1>PHUOC VO</h1><span className="separator">•</span>
          <h1>PHUOC VO</h1><span className="separator">•</span>
        </div>
        <div className="marquee-content">
          <h1>PHUOC VO</h1><span className="separator">•</span>
          <h1>PHUOC VO</h1><span className="separator">•</span>
          <h1>PHUOC VO</h1><span className="separator">•</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;