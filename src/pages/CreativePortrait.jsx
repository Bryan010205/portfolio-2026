import React from 'react';
import { motion } from 'framer-motion';
import './CreativePortrait.css'; 

// 💡 ĐƯỜNG DẪN ẢNH
import finalComposite from '../assets/Vo_FinalComposite.jpg';
import beachOriginal from '../assets/Vo_original2.png';
import streetOriginal from '../assets/Vo_original3.png';

const CreativePortrait = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <motion.div 
      className="creative-portrait-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* 1. HERO SECTION */}
      <section className="project-hero">
        <motion.div 
          className="hero-img-wrapper"
          initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
        >
          <img src={finalComposite} alt="Creative Portrait Final" />
          <div className="decor-zigzag top-left">〰</div>
          <div className="decor-circle top-right">○</div>
        </motion.div>
      </section>

      {/* 2. OVERVIEW & SKILLS */}
      <motion.section 
        className="project-info-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="overview-content" variants={fadeUp}>
          <div className="section-header">
            <span className="decor-triangle">▷</span>
            <h2>Overview</h2>
          </div>
          <p>
            This project required planning a creative portrait concept, photographing the subject in manual mode, 
            and combining multiple images into a single cohesive composition. The final outcome aimed to achieve 
            realistic lighting, consistent mood, and visual balance between the foreground and background elements.
          </p>
        </motion.div>

        <motion.div className="skills-content" variants={fadeUp}>
          <div className="section-header">
            <h2>Skills</h2>
            <span className="plus-icon">+</span>
          </div>
          <ul className="skills-list">
            <li>Adobe Photoshop</li>
            <li>DSLR Camera Photography</li>
          </ul>
        </motion.div>
      </motion.section>

      {/* 3. PROBLEM & SOLUTION */}
      <section className="problem-solution">
        <motion.div 
          className="problem-box"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3>The Challenge</h3>
          <p>
            This project was assigned with a partner, making it challenging to synchronize schedules for the shoot. 
            Initially, the concept was set in a forest, but due to logistical constraints, we pivoted to a city light/beach concept. 
            Finding a location with optimal sunlight and minimal crowds was key.
          </p>
        </motion.div>

        <motion.div 
          className="solution-box"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="solution-inner">
            <div className="section-header">
              <span className="decor-triangle">▷</span>
              <span className="close-icon">✕</span>
            </div>
            <h3>Strategic Solution</h3> 
            <p>
              I organized a flexible schedule and suggested locations that suited both our visions. 
              By choosing a beach near Downtown, we found a convenient spot that offered the perfect 
              balance of natural light and urban atmosphere, resulting in a successful final shot.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 4. DESIGN PROCESS */}
      <section className="process-section">
        <div className="process-header">
          <h2>Working Process</h2>
          <div className="decor-circle">○</div>
        </div>

        <motion.div 
          className="process-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="process-item large" variants={fadeUp}>
            <img src={beachOriginal} alt="Beach Shot" />
            <span className="label-btn">Beach Shot</span>
          </motion.div>
          
          <motion.div className="process-item large" variants={fadeUp}>
            <img src={streetOriginal} alt="Street Shot" />
            <span className="label-btn">Street Shot</span>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Footer đã được xóa để tránh trùng lặp với Footer tổng của App */}
    </motion.div>
  );
};

export default CreativePortrait;