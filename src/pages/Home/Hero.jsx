import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion'; 
import './Hero.css';

// 💡 ĐƯỜNG DẪN ASSETS
import logo2 from '../../assets/logo2.png';
import backgroundHero from '../../assets/background_hero.png';

const Hero = () => {
  // 1. SETUP PARALLAX
  const { scrollY } = useScroll();
  
  // Các vật thể trôi với tốc độ khác nhau khi cuộn chuột
  const ySlow = useTransform(scrollY, [0, 500], [0, 150]); 
  const rotateDeg = useTransform(scrollY, [0, 500], [0, 90]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Hiệu ứng bồng bềnh liên tục cho ảnh chân dung
  const floatingAnim = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
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
          Hi, I’m Bryan.
        </motion.h1>
        
        <motion.h2 variants={itemVariants} className="hero-subtitle">
          I'm a Graphic & UX/UI Designer
        </motion.h2>
        
        <motion.div variants={itemVariants} className="hero-description-container">
          <p className="hero-description">
            I’m a designer who also makes videos and writes a bit of code to turn sketches into real websites, and I always try to keep my work clean, balanced, and straightforward so that the main message gets across perfectly without getting lost in flashy or overcomplicated details.
          </p>
          <p className="hero-description">
            I'm really glad you stopped by to check out my portfolio, and whether you're a recruiter, a potential client, or just someone looking around, I'm always happy to connect and talk about building real projects together since I'm currently based right here in Vancouver.
          </p>
        </motion.div>

        <motion.button 
          variants={itemVariants} 
          className="more-info-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          More info <span className="arrow-icon">↗</span>
        </motion.button>
      </motion.div>

      <motion.div 
        className="hero-visuals"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="image-wrapper">
          {/* Nền xanh trôi theo Parallax */}
          <motion.img 
            style={{ y: ySlow }}
            src={backgroundHero} 
            alt="Hero Background" 
            className="hero-background" 
          />
          
          {/* Ảnh chân dung bồng bềnh (Floating) */}
          <motion.img 
            variants={floatingAnim}
            animate="animate"
            src={logo2} 
            alt="Bryan Vo Portrait" 
            className="profile-image" 
          />
          
          {/* Họa tiết trang trí */}
          <motion.div style={{ rotate: rotateDeg }} className="decorative-plus">+</motion.div>
          <div className="decorative-circle"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;