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
          Hi, I’m Bryan Vo
        </motion.h1>
        
        <motion.h2 variants={itemVariants} className="hero-subtitle">
          Design built with heart and clarity
        </motion.h2>
        
        <motion.div variants={itemVariants} className="hero-description-container">
          <p className="hero-description">
            I’m a designer who simply loves making things work better and look clearer. 
            For me, design is about finding the right balance between a <strong>creative spark</strong> and a <strong>solid structure</strong>.
          </p>
          <p className="hero-description">
            I don't aim for anything flashy; I just want to build experiences that feel 
            <strong> natural and meaningful</strong> to the person using them. Currently, I’m in Canada, 
            turning honest ideas into digital products that people can actually connect with.
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