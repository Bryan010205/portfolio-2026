import React from 'react';
import { motion } from 'framer-motion'; // Thêm hiệu ứng cuộn cho chuyên nghiệp
import './About.css';

const About = () => {
  // Cấu hình hiệu ứng hiện lên khi người dùng cuộn tới phần About
  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section className="about-section" id="about">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }} // Chạy hiệu ứng khi cuộn tới cách 100px
        variants={revealVariants}
      >
        <h2 className="section-title">Something about me</h2>
        
        <div className="video-container">
          <div className="video-wrapper">
            {/* Thumbnail video - Hoàng có thể thay bằng ảnh cá nhân trong assets sau này */}
            <img 
              src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="About Me Video Thumbnail" 
              className="video-thumbnail"
            />
            
            {/* Nút Play có hiệu ứng Hover nhẹ */}
            <motion.button 
              className="play-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => alert("Chỗ này để Hoàng gắn link Video giới thiệu bản thân nè! 🎬")}
            >
              <span className="play-icon">▶</span>
            </motion.button>
          </div>
          
          {/* Gợi ý thêm: Hoàng có thể thêm 1 dòng quote ngắn dưới video cho nghệ */}
          <p className="video-caption">
            "Design is not just what it looks like, it's how it works."
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;