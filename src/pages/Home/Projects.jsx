import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { motion } from 'framer-motion'; // Thêm hiệu ứng cho card
import './Projects.css';

const Projects = () => {
  const navigate = useNavigate();

  const projectsData = [
    {
      id: 1,
      title: 'Coffee Packaging Box',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=500&q=80', 
    },
    {
      id: 2,
      title: 'Dreams',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80',
    },
    {
      id: 3,
      title: 'Student Book App',
      category: 'UX/UI',
      image: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?w=500&q=80',
    },
    {
      id: 4,
      title: 'EcoStep E-commerce',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80',
    },
    {
      id: 5,
      title: '3D Interactive Astronaut',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=500&q=80',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0); 
  const carouselRef = useRef(null);
  const isClickScrolling = useRef(false);

  // --- LOGIC SCROLL ---
  const handleContainerScroll = () => {
    if (!isClickScrolling.current && carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10) {
        setCurrentIndex(projectsData.length - 1);
        return;
      }
      const itemWidth = 350; 
      const newIndex = Math.round(scrollLeft / itemWidth);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    }
  };

  const handleScroll = (index) => {
    if (carouselRef.current) {
      isClickScrolling.current = true;
      setCurrentIndex(index);
      setActiveCardIndex(index); 
      const { scrollWidth, clientWidth } = carouselRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;
      const targetScroll = Math.min(index * 350, maxScrollLeft);

      carouselRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });

      setTimeout(() => {
        isClickScrolling.current = false;
      }, 600);
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : 0;
    handleScroll(newIndex);
  };

  const handleNext = () => {
    const maxIndex = projectsData.length - 1;
    const newIndex = currentIndex < maxIndex ? currentIndex + 1 : maxIndex;
    handleScroll(newIndex);
  };

  // Hàm xử lý điều hướng sang trang Detail
  const handleViewProject = (e, id) => {
    e.stopPropagation(); 
    // Chuyển sang trang detail kèm theo ID dự án
    navigate(`/project/${id}`); 
  };

  return (
    <section className="projects-section" id="projects">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        My projects
      </motion.h2>
      
      <div 
        className="projects-carousel" 
        ref={carouselRef}
        onScroll={handleContainerScroll}
      >
        <div className="projects-track">
          {projectsData.map((project, index) => (
            <motion.div 
              className={`project-card ${activeCardIndex === index ? 'active-card' : ''}`} 
              key={project.id}
              onClick={() => handleScroll(index)}
              whileHover={{ y: -10 }} // Nhấc nhẹ card khi hover
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <span className="project-category">{project.category}</span>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <button 
                  className="view-btn"
                  onClick={(e) => handleViewProject(e, project.id)}
                >
                  View
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="slider-controls">
        <span className="arrow" onClick={handlePrev}>‹</span>
        <div className="dots">
          {projectsData.map((_, index) => (
            <span 
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleScroll(index)}
            ></span>
          ))}
        </div>
        <span className="arrow" onClick={handleNext}>›</span>
      </div>
      
      <div className="decor-zigzag"></div>
    </section>
  );
};

export default Projects;