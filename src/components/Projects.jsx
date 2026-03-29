import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Coffee Packaging Box',
      category: 'Design',
      // Placeholder images - replace with your actual project assets
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
      image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80', // Placeholder for sustainable footwear
    },
    {
      id: 5,
      title: '3D Interactive Astronaut',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=500&q=80', // Placeholder for 3D web
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">My projects</h2>
      
      {/* Horizontal scrollable container */}
      <div className="projects-carousel">
        <div className="projects-track">
          {projectsData.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <span className="project-category">{project.category}</span>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <button className="view-btn">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative slider dots and arrows */}
      <div className="slider-controls">
        <span className="arrow">‹</span>
        <div className="dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <span className="arrow">›</span>
      </div>
      
      {/* Decorative zigzag line */}
      <div className="decor-zigzag"></div>
    </section>
  );
};

export default Projects;