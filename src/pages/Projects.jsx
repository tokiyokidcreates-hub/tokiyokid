import React from 'react';
import '../styles/pages/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'Description of your first project',
      technologies: ['React', 'CSS', 'JavaScript'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Description of your second project',
      technologies: ['Node.js', 'MongoDB', 'Express'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Description of your third project',
      technologies: ['Python', 'Flask', 'SQL'],
      link: '#',
      github: '#'
    }
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;