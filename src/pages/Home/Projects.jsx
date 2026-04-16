import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './Projects.css';

// Import ảnh thực tế của bạn để làm thumbnail cho card Dreams Concept
import dreamsThumbnail from '../../assets/Vo_FinalComposite.jpg';

const Projects = () => {
  const navigate = useNavigate();

  const projectsData = [
    { id: 1, title: 'Coffee Packaging', category: 'Design', image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=500&q=80' },
    { 
      id: 'creative-portrait', 
      title: 'Dreams Concept', 
      category: 'Design', 
      image: dreamsThumbnail 
    },
    {
      id: 'amv-typography',
      title: 'AMV Typography Anime',
      category: 'Motion',
      image: 'https://img.youtube.com/vi/Sg0D8jOaruQ/maxresdefault.jpg'
    },
    { id: 'student-book', title: 'Student Book App', category: 'UX/UI', image: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?w=500&q=80' },
    { id: 5, title: '3D Astronaut', category: 'Web Dev', image: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=500&q=80' }
  ];

  const rotationY = useMotionValue(0);
  const rotationSpring = useSpring(rotationY, { stiffness: 100, damping: 20 });

  const handlePan = (event, info) => {
    rotationY.set(rotationY.get() + info.delta.x * 0.4);
  };

  // Hàm xử lý điều hướng thông minh
  const handleExplore = (projectId) => {
    if (projectId === 'creative-portrait') {
      navigate('/project/creative-portrait');
    } else if (projectId === 'amv-typography') {
      navigate('/project/amv-typography');
    } else if (projectId === 'student-book') {
      navigate('/project/student-book');
    } else {
      navigate(`/project/${projectId}`);
    }
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Project Gallery</h2>
      
      <div className="carousel-3d-viewport">
        <motion.div 
          className="carousel-3d-container"
          style={{ rotateY: rotationSpring }}
          onPan={handlePan}
        >
          {projectsData.map((project, index) => {
            const angleStep = 360 / projectsData.length;
            const theta = index * angleStep;

            return (
              <motion.div 
                className="project-card-3d"
                key={project.id}
                style={{
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
                    {/* SỬ DỤNG HÀM ĐIỀU HƯỚNG MỚI */}
                    <button onClick={() => handleExplore(project.id)}>
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