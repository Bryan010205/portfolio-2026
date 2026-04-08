import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../../components/Reveal'; 
import './About.css';

// 🛠️ ĐÃ CẬP NHẬT ĐÚNG ĐUÔI .jpeg
import aboutPortrait from '../../assets/about1.jpeg';

const About = () => {
  return (
    <section className="about-section" id="about">
      <Reveal>
        <div className="portfolio-container">
          <h2 className="section-title">Something about me</h2>
          
          <div className="about-wrapper">
            {/* 1. LEFT SIDE: IMAGE (Bóp nhỏ và cân đối) */}
            <motion.div 
              className="about-image-column"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="about-image-container">
                <img 
                  src={aboutPortrait} 
                  alt="Bryan Vo - Designer in Canada" 
                  className="about-image-element"
                />
                <div className="about-decor-plus">+</div>
                <div className="about-decor-circle"></div>
              </div>
            </motion.div>
            
            {/* 2. RIGHT SIDE: CONTENT (Trải lòng & Mục tiêu) */}
            <motion.div 
              className="about-text-column"
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

              <div className="about-footer-line">
                <motion.div 
                  className="line-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: "120px" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <span className="quote-small">"Continuous learning, impactful experiences."</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default About;