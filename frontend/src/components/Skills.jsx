import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Layout } from 'lucide-react';
import { portfolioData } from '../data';
import './Skills.css';

const getIconForCategory = (category) => {
  switch (category) {
    case 'Languages': return <Code2 size={24} className="text-gradient" />;
    case 'Front-End': return <Layout size={24} className="text-gradient" />;
    case 'Back-End': return <Server size={24} className="text-gradient" />;
    case 'Databases': return <Database size={24} className="text-gradient" />;
    default: return <Code2 size={24} className="text-gradient" />;
  }
};

const getSkillLogo = (skillName) => {
  const normalized = skillName.toLowerCase().replace(/ /g, '');
  const iconMap = {
    'java': 'java/java-original.svg',
    'javascript': 'javascript/javascript-original.svg',
    'html5': 'html5/html5-original.svg',
    'css': 'css3/css3-original.svg',
    'react': 'react/react-original.svg',
    'tailwindcss': 'tailwindcss/tailwindcss-original.svg',
    'springboot': 'spring/spring-original.svg',
    'hibernate': 'hibernate/hibernate-original.svg',
    'mysql': 'mysql/mysql-original.svg'
  };
  
  const path = iconMap[normalized];
  if (path) return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;
  return null;
};

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <motion.section 
      id="skills" 
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="skills-grid">
        {skills.map((skillGroup, index) => (
          <div key={index} className="skill-card glass-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="skill-header">
              {getIconForCategory(skillGroup.category)}
              <h3>{skillGroup.category}</h3>
            </div>
            <div className="skill-tags">
              {skillGroup.items.map((item, i) => {
                const logo = getSkillLogo(item);
                return (
                  <div key={i} className="skill-tag">
                    {logo && <img src={logo} alt={item} style={{ width: '20px', height: '20px', marginRight: '8px', verticalAlign: 'middle' }} />}
                    <span style={{ verticalAlign: 'middle' }}>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
