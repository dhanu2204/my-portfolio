import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Heart } from 'lucide-react';
import { portfolioData } from '../data';
import './About.css';

const About = () => {
  const { education, certifications, hobbies } = portfolioData;

  return (
    <motion.section 
      id="about" 
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        <div className="about-column animate-fade-in">
          <div className="column-header">
            <BookOpen className="text-gradient" size={28} />
            <h3>Education</h3>
          </div>
          <div className="timeline">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item glass-card">
                <div className="timeline-dot"></div>
                <h4 className="degree">{edu.degree}</h4>
                <p className="institution">{edu.institution}</p>
                <div className="timeline-meta">
                  <span className="duration">{edu.duration}</span>
                  <span className="score">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-column animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="column-header">
            <Award className="text-gradient" size={28} />
            <h3>Certifications</h3>
          </div>
          <div className="cert-list">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card glass-card">
                <h4 className="cert-title">{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer} • {cert.year}</p>
              </div>
            ))}
          </div>

          <div className="column-header" style={{ marginTop: '3rem' }}>
            <Heart className="text-gradient" size={28} />
            <h3>Hobbies & Interests</h3>
          </div>
          <div className="hobbies-container glass-card">
            {hobbies.map((hobby, index) => (
              <span key={index} className="hobby-tag">{hobby}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
