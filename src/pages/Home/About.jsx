import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../../components/Reveal'; 
import './About.css';

// 🛠️ SỬ DỤNG ẢNH MỚI CỦA HOÀNG
import aboutPortrait from '../../assets/about1.jpeg';

const About = () => {
  return (
    <section className="about-section" id="about">
      <Reveal>
        <div className="portfolio-container">
          <h2 className="section-title">Something about me</h2>
          
          <div className="about-container">
            {/* 1. LEFT SIDE: IMAGE (Kích thước bự y hệt video cũ) */}
            <motion.div 
              className="video-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="video-wrapper">
                <img 
                  src={aboutPortrait} 
                  alt="Bryan Vo - Designer in Canada" 
                  className="video-thumbnail"
                  style={{ opacity: 1 }} /* Luôn hiện rõ ảnh */
                />
                {/* Giữ lại icon decor ✦ giữa ảnh cho giống nút Play cũ */}
                <div className="play-btn" style={{ cursor: 'default' }}>
                  <span className="play-icon">✦</span>
                </div>
              </div>
            </motion.div>
            
            {/* 2. RIGHT SIDE: CONTENT (Nằm gọn bên phải) */}
            <motion.div 
              className="quote-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="about-subtitle">
                ✦ From Vietnam to <span className="highlight-text">Canada</span>
              </h3>
              
              <div className="about-description">
                <p>
                  As an <strong>international student in Canada</strong>, I’ve embraced the challenge of adapting to a new culture, which has profoundly shaped my perspective as a designer. I believe that design is a universal bridge that connects diverse backgrounds and ideas.
                </p>
                <p>
                  Over the <strong>next two years</strong>, my mission is to master the intersection of aesthetic storytelling and technical precision. I aim to secure a professional position in the Canadian tech industry, contributing to meaningful UX/UI projects.
                </p>
                <p>
                  When I’m not diving into Figma, I find my peace in exploring Canada’s breathtaking landscapes or getting inspired by the high-energy visuals of <strong>gaming culture</strong>.
                </p>
              </div>

              {/* Thanh tiến trình trang trí y hệt bản cũ */}
              <div className="quote-progress-bar">
                <motion.div 
                  className="quote-progress-fill"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default About;