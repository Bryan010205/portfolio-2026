import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../../components/Reveal'; 
import './About.css';

// 💡 ĐƯỜNG DẪN: Nhớ kiểm tra lại file ảnh của bạn trong thư mục assets
import aboutPortrait from '../../assets/about_portrait.jpg';

const About = () => {
  return (
    <section className="about-section" id="about">
      <Reveal>
        <div className="portfolio-container">
          <h2 className="section-title">Something about me</h2>
          
          <div className="about-grid">
            {/* 1. KHU VỰC HÌNH ẢNH */}
            <motion.div 
              className="about-visuals"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="about-image-wrapper">
                <img 
                  src={aboutPortrait} 
                  alt="Bryan Vo - International Student & Designer" 
                  className="about-main-img"
                />
                <div className="about-decor-plus">+</div>
                <div className="about-decor-circle"></div>
              </div>
            </motion.div>
            
            {/* 2. KHU VỰC NỘI DUNG (Trải lòng về hành trình Canada & Mục tiêu) */}
            <motion.div 
              className="about-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="about-subtitle">
                ✦ From Vietnam to <span className="highlight-text">Canada</span>: A Journey of Growth
              </h3>
              
              <div className="about-description">
                <p>
                  As an <strong>international student in Canada</strong>, I’ve embraced the challenge of adapting to a new culture, which has profoundly shaped my perspective as a designer. I believe that design is a universal bridge that connects diverse backgrounds and ideas.
                </p>
                <p>
                  Over the <strong>next two years</strong>, my mission is to master the intersection of aesthetic storytelling and technical precision. I aim to secure a professional position in the Canadian tech industry, where I can contribute to meaningful UX/UI projects that solve real-world accessibility and usability challenges.
                </p>
                <p>
                  When I’m not diving into Figma or coding, you’ll find me exploring Canada’s breathtaking landscapes, capturing urban moments through my camera, or getting inspired by the high-energy visuals of <strong>gaming culture</strong>. These hobbies keep my creativity fueled and my mind fresh for every new design challenge.
                </p>
              </div>

              {/* Thanh ngăn cách và câu chốt */}
              <div className="about-footer-line">
                <motion.div 
                  className="line-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: "120px" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <span className="quote-small">"Focused on continuous learning and creating impactful digital experiences."</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default About;