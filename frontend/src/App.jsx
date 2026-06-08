import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <ParticlesBackground />
      <div className="bg-blob"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Dhanush M M. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;