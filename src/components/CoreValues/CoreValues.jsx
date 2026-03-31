import React from 'react';
import { motion } from 'framer-motion';
import './CoreValues.css';

const CoreValues = () => {
  const valuesData = [
    { id: 1, title: 'Responsibility', description: 'If any words can describe about me, responsibility is one of first key which I always choose to stand for.', icon: '☐' },
    { id: 2, title: 'Proactive Growth', description: 'I never wait the chance, I always looking for it by being active to learn, get feedback from teachers/friends or family.', icon: '☰' },
    { id: 3, title: 'Structured Creativity', description: 'Creativity is something very hard to describe about it only 1 word. I believe every creativity also has reason behind it.', icon: '○' },
    { id: 4, title: 'Continuous Learning', description: 'Knowledge from school never enough in the real world. That\'s why my mindset always keep going on even though after graduation.', icon: '△' },
    { id: 5, title: 'Never make my teammates down', description: 'When someone assigns me the project or deadline, I always prioritize doing and submitting deadline on time.', icon: '◎' },
    { id: 6, title: 'Competitive Mindset', description: 'I realized that continuously improving myself every day serves as a guiding principle that motivates me to grow and stay competitive in a highly demanding job market.', icon: '◇' }
  ];

  // Biến hiệu ứng cho container và các card con
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Mỗi card hiện cách nhau 0.15s
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="core-values-section">
      {/* Decorative elements với hiệu ứng xoay nhẹ */}
      <motion.div 
        className="decor-triangle-left"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      
      <h2 className="section-title">Core values</h2>
      
      <motion.div 
        className="decor-cross-right"
        whileHover={{ scale: 1.5, rotate: 90 }}
      >✕</motion.div>

      <motion.div 
        className="values-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {valuesData.map((value) => (
          <motion.div 
            className="value-card" 
            key={value.id}
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              borderColor: "#5d5fef", 
              backgroundColor: "rgba(93, 95, 239, 0.05)" 
            }}
          >
            <div className="icon-wrapper">
              <span className="icon-placeholder">{value.icon}</span>
            </div>
            <h3 className="value-title">{value.title}</h3>
            <p className="value-description">{value.description}</p>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="decor-circles-bottom">
        <div className="circle-outline"></div>
        <div className="circle-outline offset"></div>
      </div>
    </section>
  );
};

export default CoreValues;