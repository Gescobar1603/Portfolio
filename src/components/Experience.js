import '../assets/css/Expericence.css';
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export const Experience = () => {
    useEffect(() => {
        const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 1000,
          reset: true,
        });
    
        sr.reveal('.timeline-item', { interval: 200 });
      }, []);
      const experiences = [
        {
        n:1,
        title: 'Software Engineer',
        company: 'Tech Company',
        duration: 'Jan 2021 - Present',
        description: 'Working on full-stack development with MERN stack...',
      },
      {
        n:2,
        title: 'Frontend Developer',
        company: 'Web Agency',
        duration: 'Jun 2019 - Dec 2020',
        description: 'Focused on creating responsive websites using React...',
      },
      {
        n:3,
        title: 'Intern',
        company: 'Startup Inc.',
        duration: 'Jan 2019 - May 2019',
        description: 'Gained experience in frontend technologies and agile...',
      },
            {
        n:4,
        title: 'Frontend Developer',
        company: 'Web Agency',
        duration: 'Jun 2019 - Dec 2020',
        description: 'Focused on creating responsive websites using React...',
      },
      // Más experiencias...
    ];
  
    return (
      <section className="experience-section">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={exp.n}>
              <div className="timeline-item-content">
                <span className="tag">{exp.title}</span>
                <h3>{exp.company}</h3>
                <span className="duration">{exp.duration}</span>
                <p>{exp.description}</p>
                <span className="circle"></span>
              </div>
            </div>
          ))}
        </div>
        
      </section>
    );
  };
  
  export default Experience;