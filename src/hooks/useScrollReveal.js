import { useEffect, useState } from 'react';

export const useScrollReveal = () => {
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      // Reveal Logic
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });

      // Active Section Logic
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id');
        }
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial trigger

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { activeSection };
};
