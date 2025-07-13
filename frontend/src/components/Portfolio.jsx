import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Certifications from './Certifications';
import Contact from './Contact';
import Footer from './Footer';
import Navigation from './Navigation';
import AdminPanel from './AdminPanel';

const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation currentSection={currentSection} />
      <AdminPanel />
      <div className="pt-20">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;