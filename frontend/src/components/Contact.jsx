import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { portfolioData } from '../data';
import './Contact.css';

const Contact = () => {
  const { email, phone, location } = portfolioData.personalInfo;

  return (
    <motion.section 
      id="contact" 
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-content glass-card animate-fade-in">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          
          <div className="info-items">
            <div className="info-item">
              <div className="info-icon">
                <Mail size={20} className="text-gradient" />
              </div>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <Phone size={20} className="text-gradient" />
              </div>
              <div>
                <h4>Phone</h4>
                <a href={`tel:${phone}`}>{phone}</a>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <MapPin size={20} className="text-gradient" />
              </div>
              <div>
                <h4>Location</h4>
                <p>{location}</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Hello Dhanush..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary submit-btn">
            Send Message <Send size={18} />
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
