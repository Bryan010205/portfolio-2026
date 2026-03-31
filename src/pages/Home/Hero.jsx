import React from 'react';
import { motion } from 'framer-motion'; // Thêm animation cho xịn
import './Hero.css';

// 💡 CẬP NHẬT ĐƯỜNG DẪN: Lùi ra 2 cấp (../../)
import logo2 from '../../assets/logo2.png';
import backgroundHero from '../../assets/background_hero.png';

const Hero = () => {
  // Biến cấu hình hiệu ứng hiện chữ từng dòng
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="hero-section" id="home">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="hero-title">
          Hi I'm Bryan Vo
        </motion.h1>
        
        <motion.h2 variants={itemVariants} className="hero-subtitle">
          I'm a Graphic & UX/UI Designer
        </motion.h2>
        
        <motion.div variants={itemVariants}>
          <p className="hero-description">
            Hi, I'm Bryan. I design digital experiences that balance bold visual energy 
            with structured, intentional systems. Inspired by gaming aesthetics and 
            competitive environments, I bring controlled intensity into every project— 
            combining expressive visuals with disciplined execution.
          </p>
          <p className="hero-description">
            As a UI/UX and web-focused designer, I care deeply about clarity, hierarchy, 
            and purposeful design decisions. I actively learn, adapt quickly, and refine 
            my work continuously. My goal is not just to create visuals, but to build 
            experiences that are memorable, strategic, and technically strong.
          </p>
        </motion.div>

        <motion.button variants={itemVariants} className="more-info-btn">
          More info <span className="arrow-icon">↗</span>
        </motion.button>
      </motion.div>

      <motion.div 
        className="hero-visuals"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="image-wrapper">
          {/* Lớp lót dưới cùng: Nền lượn sóng màu xanh */}
          <img src={backgroundHero} alt="Hero Background" className="hero-background" />
          
          {/* Lớp nổi lên trên: Ảnh chân dung */}
          <img src={logo2} alt="Bryan Vo Portrait" className="profile-image" />
          
          {/* Các họa tiết trang trí */}
          <div className="decorative-circle"></div>
          <div className="decorative-plus">+</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;