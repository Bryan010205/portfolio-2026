import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '../../components/Reveal'; // Nhớ check đúng đường dẫn nha
import './About.css';

const quotes = [
  "Design is not just what it looks like, it's how it works.",
  "Good design is obvious. Great design is transparent.",
  "Digital experiences that balance bold visual energy with structured systems.",
  "Controlled intensity in every project—expressive visuals with disciplined execution."
];

const About = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  // Logic tự động chuyển câu quote sau mỗi 5 giây
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000); // 5000ms = 5 giây
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="about-section" id="about">
      <Reveal>
        <h2 className="section-title">Something about me</h2>
        
        <div className="about-container">
          <div className="video-container">
            <div className="video-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="About Me Video Thumbnail" 
                className="video-thumbnail"
              />
              <motion.button 
                className="play-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="play-icon">▶</span>
              </motion.button>
            </div>
          </div>
          
          {/* KHU VỰC BIẾN HÌNH CHỮ CỰC ĐẶC BIỆT NÈ */}
          <div className="quote-container">
            <AnimatePresence mode="wait">
              <motion.p 
                key={currentQuote} // Key thay đổi để framer-motion biết cần làm animation
                className="video-caption"
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} // Bắt đầu: mờ, thấp, blur
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}  // Hiện: rõ, về vị trí, hết blur
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}  // Thoát: mờ, bay lên, blur lại
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                "{quotes[currentQuote]}"
              </motion.p>
            </AnimatePresence>
            
            {/* Thanh tiến trình nhỏ xíu bên dưới cho nghệ */}
            <div className="quote-progress-bar">
              <motion.div 
                className="quote-progress-fill"
                key={currentQuote}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default About;