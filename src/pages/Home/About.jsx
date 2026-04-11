import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '../../components/Reveal'; 
import './About.css';

// 🛠️ ASSETS
import aboutPortrait from '../../assets/about1.jpeg';
import figmaLogo from '../../assets/figma.svg';
import photoshopLogo from '../../assets/photoshop.svg';
import illustratorLogo from '../../assets/illustrator.png';
import afterEffectsLogo from '../../assets/after_effect.png';

const About = () => {
  // 1. Dữ liệu 4 đoạn văn mộc mạc tui viết cho bạn
  const stories = [
    {
      id: 1,
      content: (
        <p>
          I started my journey from the busy, lively streets of <strong>Vietnam</strong> and found my way to the peaceful landscapes of <strong>Canada</strong>. Moving across the world and stepping into a whole new culture was a big challenge, but it’s also what changed the way I look at design.
        </p>
      )
    },
    {
      id: 2,
      content: (
        <p>
          For me, design isn’t just about making things look good on a screen. It’s like a <strong>bridge</strong>—a way to help people from different places understand each other through simple, intuitive experiences.
        </p>
      )
    },
    {
      id: 3,
      content: (
        <p>
          In the <strong>next two years</strong>, I’m focused on learning how to balance the 'art' of telling a story with the 'math' of technical precision. My goal is to help build UX/UI projects that actually mean something to the people who use them.
        </p>
      )
    },
    {
      id: 4,
      content: (
        <p>
          When I’m away from Figma, you’ll probably find me wandering through Canada’s beautiful trails or getting lost in the high-energy world of <strong>gaming culture</strong>. That’s where I go to recharge and find fresh ideas.
        </p>
      )
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 2. Thiết lập tự động chuyển đoạn sau 6 giây
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
    }, 10000); // 6 giây

    return () => clearInterval(timer);
  }, [stories.length]);

  return (
    <section className="about-section" id="about">
      <Reveal>
        <div className="portfolio-container">
          <h2 className="section-title">Something about me</h2>
          
          <div className="about-container">
            {/* LEFT SIDE: IMAGE & SKILLS */}
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
                  alt="Bryan Vo" 
                  className="video-thumbnail"
                />
              </div>

              <div className="skills-wrapper">
                <p className="skills-label">My essential skills:</p>
                <div className="skill-icons-row">
                  <div className="skill-icon-item" title="Figma"><img src={figmaLogo} alt="Figma" className="skill-img" /></div>
                  <div className="skill-icon-item" title="Photoshop"><img src={photoshopLogo} alt="Photoshop" className="skill-img" /></div>
                  <div className="skill-icon-item" title="Illustrator"><img src={illustratorLogo} alt="Illustrator" className="skill-img" /></div>
                  <div className="skill-icon-item" title="After Effects"><img src={afterEffectsLogo} alt="After Effects" className="skill-img" /></div>
                </div>
              </div>
            </motion.div>
            
            {/* RIGHT SIDE: ANIMATED CONTENT */}
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
              
              {/* VÙNG CHỨA TEXT CÓ HIỆU ỨNG FADE */}
              <div className="about-description" style={{ minHeight: '180px', position: 'relative' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                    {stories[currentIndex].content}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* THANH PROGRESS CHẠY THEO THỜI GIAN 6S */}
              <div className="quote-progress-bar">
                <motion.div 
                  key={currentIndex} // Restart animation mỗi khi đổi text
                  className="quote-progress-fill"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
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