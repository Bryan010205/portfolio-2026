import React from 'react';
import './CoreValues.css';

const CoreValues = () => {
  // Array of data for the core values to keep the JSX clean
  const valuesData = [
    {
      id: 1,
      title: 'Responsibility',
      description: 'If any words can describe about me, responsibility is one of first key which I always choose to stand for.',
      icon: '☐' // Placeholder for icon
    },
    {
      id: 2,
      title: 'Proactive Growth',
      description: 'I never wait the chance, I always looking for it by being active to learn, get feedback from teachers/friends or family.',
      icon: '☰' // Placeholder for icon
    },
    {
      id: 3,
      title: 'Structured Creativity',
      description: 'Creativity is something very hard to describe about it only 1 word. I believe every creativity also has reason behind it.',
      icon: '○' // Placeholder for icon
    },
    {
      id: 4,
      title: 'Continuous Learning',
      description: 'Knowledge from school never enough in the real world. That\'s why my mindset always keep going on even though after graduation.',
      icon: '△' // Placeholder for icon
    },
    {
      id: 5,
      title: 'Never make my teammates down',
      description: 'When someone assigns me the project or deadline, I always prioritize doing and submitting deadline on time.',
      icon: '◎' // Placeholder for icon
    },
    {
      id: 6,
      title: 'Competitive Mindset',
      description: 'I realized that continuously improving myself every day serves as a guiding principle that motivates me to grow and stay competitive in a highly demanding job market.',
      icon: '◇' // Placeholder for icon
    }
  ];

  return (
    <section className="core-values-section">
      {/* Decorative elements */}
      <div className="decor-triangle-left"></div>
      <h2 className="section-title">Core values</h2>
      <div className="decor-cross-right">✕</div>

      <div className="values-grid">
        {valuesData.map((value) => (
          <div className="value-card" key={value.id}>
            <div className="icon-wrapper">
              {/* Replace with actual SVG icons later */}
              <span className="icon-placeholder">{value.icon}</span>
            </div>
            <h3 className="value-title">{value.title}</h3>
            <p className="value-description">{value.description}</p>
          </div>
        ))}
      </div>
      
      {/* Decorative circles bottom right */}
      <div className="decor-circles-bottom">
        <div className="circle-outline"></div>
        <div className="circle-outline offset"></div>
      </div>
    </section>
  );
};

export default CoreValues;