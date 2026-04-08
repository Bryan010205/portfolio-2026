import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../../components/Reveal'; 
import './About.css';

// 💡 ĐƯỜNG DẪN: Đảm bảo bạn có ảnh about_portrait.jpg trong thư mục assets
import aboutPortrait from '../../assets/about_portrait.jpg';

const About = () => {
  return (
    <section className="about-section" id="about">
      <Reveal>
        <div className="portfolio-container">
          <h2 className="section-title">Something about me</h2>
          
          <div className="about-grid">
            {/* 1. KHU VỰC HÌNH ẢNH (Thay thế Video) */}
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
                  alt="Bryan Vo - Graphic & UX/UI Designer" 
                  className="about-main-img"
                />
                {/* Họa tiết decor bay bổng cho giống Hero */}
                <div className="about-decor-plus">+</div>
                <div className="about-decor-circle"></div>
              </div>
            </motion.div>
            
            {/* 2. KHU VỰC NỘI DUNG (Content tự suy nghĩ cực bén) */}
            <motion.div 
              className="about-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="about-subtitle">
                ✦ Design with <span className="highlight-text">Purpose</span>
              </h3>
              
              <div className="about-description">
                <p>
                  Tôi là <strong>Bryan Vo</strong>, một nhà thiết kế Graphic & UX/UI luôn khao khát tìm kiếm sự giao thoa hoàn hảo giữa 
                  <strong> "năng lượng thị giác mạnh mẽ"</strong> và <strong>"hệ thống cấu trúc chặt chẽ"</strong>.
                </p>
                <p>
                  Lấy cảm hứng từ thẩm mỹ của thế giới Gaming và sự tinh gọn của công nghệ, tôi không chỉ tạo ra những sản phẩm bắt mắt, 
                  mà còn chú trọng vào việc xây dựng những trải nghiệm có chiến lược, mang tính kỹ thuật cao và chạm đến cảm xúc người dùng.
                </p>
                <p>
                  Đối với tôi, thiết kế không chỉ là về cái đẹp, mà là về cách chúng ta kể câu chuyện và giải quyết vấn đề một cách thông minh nhất.
                </p>
              </div>

              {/* Thanh ngăn cách hoặc chữ ký nhỏ cho nghệ */}
              <div className="about-footer-line">
                <motion.div 
                  className="line-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100px" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <span className="quote-small">"Good design is obvious. Great design is transparent."</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default About;