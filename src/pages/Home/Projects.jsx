import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const navigate = useNavigate();

  const projectsData = [
    { id: 1, title: 'Coffee Packaging', category: 'Design', image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=500&q=80' },
    { id: 2, title: 'Dreams Concept', category: 'Design', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80' },
    { id: 3, title: 'Student Book App', category: 'UX/UI', image: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?w=500&q=80' },
    { id: 4, title: 'EcoStep E-com', category: 'Web Dev', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80' },
    { id: 5, title: '3D Astronaut', category: 'Web Dev', image: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=500&q=80' }
  ];

  const rotationY = useMotionValue(0);
  const rotationSpring = useSpring(rotationY, { stiffness: 100, damping: 20 });

  // Dùng onPan thay vì drag để xoay tại chỗ mượt hơn
  const handlePan = (event, info) => {
    rotationY.set(rotationY.get() + info.delta.x * 0.4);
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Project Gallery</h2>
      
      <div className="carousel-3d-viewport">
        <motion.div 
          className="carousel-3d-container"
          style={{ rotateY: rotationSpring }}
          onPan={handlePan} // Lắng nghe cử động tay/chuột để xoay
        >
          {projectsData.map((project, index) => {
            const angleStep = 360 / projectsData.length;
            const theta = index * angleStep;

            return (
              <motion.div 
                className="project-card-3d"
                key={project.id}
                style={{
                  // Thu nhỏ bán kính vòng xoay xuống 380px để không bị tràn
                  transform: `rotateY(${theta}deg) translateZ(290px)` 
                }}
              >
                <div className="card-3d-inner">
                  <div className="card-3d-image">
                    <img src={project.image} alt={project.title} draggable="false" />
                    <span className="card-3d-tag">{project.category}</span>
                  </div>
                  <div className="card-3d-info">
                    <h3>{project.title}</h3>
                    <button onClick={() => navigate(`/project/${project.id}`)}>
                      Explore ↗
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

    </section>
  );
};

export default Projects;