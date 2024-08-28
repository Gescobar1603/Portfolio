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
        title: 'Asistente de TI',
        company: 'AGP GLASS PERU S.A.C',
        duration: '01/2023 - 08/2023',
        description: 'Asistente de Jefatura de sistemas, SAP y sistema de Tickets en JIRA, Bases de Datos SQL',
      },
      {
        n:2,
        title: 'Practicante Porfesional de Sistemas',
        company: 'Summagold Corporation',
        duration: '01/2022 - 12/2022',
        description: 'Encargado del area de Sistemas realizando Desarrollo de aplicaciones Web, Soportes, Mentenimientos y Administracion de servicios de Red',
      },
            {
        n:3,
        title: 'Practicante Pre-Profesional de Sistemas',
        company: 'Pc Express S.A.C.',
        duration: '01/2021 - 07/2021',
        description: 'Diseño de E-commerce para empresa de la ciudad de Trujillo',
      },
      // Más experiencias...
    ];
  
    return (
      <section className="experience-section">
        <h2 className="section-title">Experiencia</h2>
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

        <a href="#more" className="view-all">View All</a>
        
      </section>
    );
  };
  
  export default Experience;