import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data';
import './Projects.css';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <motion.section 
      id="projects" 
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card glass-card animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              
              <div className="project-description">
                {project.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
              
              <div className="project-tech">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-actions">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary action-btn">
                  View Live <ExternalLink size={18} />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary action-btn" aria-label="GitHub Repo">
                  <GithubIcon size={18} /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
