import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion'; 
import './Hero.css';

// 💡 ĐƯỜNG DẪN: Lùi 2 cấp (../../)
import logo2 from '../../assets/logo2.png';
import backgroundHero from '../../assets/background_hero.png';

const Hero = () => {
  // 1. SETUP PARALLAX (Phép thuật thứ 2)
  const { scrollY } = useScroll();
  
  // Các vật thể trôi với tốc độ khác nhau khi cuộn chuột
  const ySlow = useTransform(scrollY, [0, 500], [0, 150]);   // Trôi chậm xuống
  const yFast = useTransform(scrollY, [0, 500], [0, -200]);  // Trôi ngược lên nhanh
  const rotateDeg = useTransform(scrollY, [0, 500], [0, 90]); // Vừa trôi vừa xoay

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
      {/* CÁC VẬT THỂ PARALLAX BAY LƠ LỬNG TRONG NỀN */}
      <motion.div style={{ y: ySlow, rotate: rotateDeg }} className="parallax-decor p-1">✦</motion.div>
      <motion.div style={{ y: yFast }} className="parallax-decor p-2">✕</motion.div>
      <motion.div style={{ y: ySlow }} className="parallax-decor p-3">○</motion.div>

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
            with structured, intentional systems. Inspired by gaming aesthetics.
          </p>
          <p className="hero-description">
            My goal is not just to create visuals, but to build 
            experiences that are memorable, strategic, and technically strong.
          </p>
        </motion.div>

        <motion.button 
          variants={itemVariants} 
          className="more-info-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
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
          
          {/* Họa tiết trang trí cố định trong wrapper */}
          <motion.div style={{ rotate: rotateDeg }} className="decorative-plus">+</motion.div>
          <div className="decorative-circle"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;