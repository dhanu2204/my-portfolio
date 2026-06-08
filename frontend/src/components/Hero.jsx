import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data';
import './Hero.css';

const Hero = () => {
  const { name, role, summary, resumePath, profilePicture, email, linkedin } = portfolioData.personalInfo;

  return (
    <motion.section 
      id="home" 
      className="hero-section section"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-content">
        <div className="hero-text animate-fade-in">
          <h2 className="greeting">Hello, I'm</h2>
          <h1 className="name">{name}</h1>
          <h3 className="role text-gradient">{role}</h3>
          <p className="summary">{summary}</p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={20} />
            </a>
            <a href={resumePath} download="Dhanush_MM_Resume.pdf" className="btn btn-secondary">
              Download Resume <Download size={20} />
            </a>
          </div>

          <div className="social-links">
            <a href={`mailto:${email}`} aria-label="Email" className="social-icon">
              <Mail size={24} />
            </a>
            <a href={`https://linkedin.com/in/${linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
              <LinkedinIcon size={24} />
            </a>
            {/* Add GitHub here if available */}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
              <GithubIcon size={24} />
            </a>
          </div>
        </div>

        <div className="hero-image-container animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="image-wrapper">
            <img src={profilePicture} alt={name} className="profile-img" />
            <div className="glow-effect"></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
