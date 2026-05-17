import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Suit Shop E-commerce',
      tags: ['HTML', 'CSS', 'JS'],
      description: 'A modern e-commerce front-end designed for a high-end suit retailer. Focuses on premium aesthetics and smooth user interactions.',
      image: '/photos/work-1.png',
      link: 'https://github.com/Fetse12/Web-for-suit-shop',
      delay: '0ms'
    },
    {
      title: 'Student Management',
      tags: ['Java', 'OOP', 'GUI'],
      description: 'A robust desktop application built to streamline administrative tasks, manage student records, and optimize institutional workflows.',
      image: '/photos/work-2.png',
      link: 'https://github.com/Fetse12/student-management-system-using-java-',
      delay: '100ms'
    },
    {
      title: 'Bank Management',
      tags: ['Java', 'Architecture', 'Database'],
      description: 'A comprehensive system simulating real-world banking operations, focusing on secure transactions and object-oriented design principles.',
      image: '/photos/work-3.png',
      link: '#',
      delay: '200ms'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3 reveal">
        <i className='bx bx-layer text-primary'></i> Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-light-surface dark:bg-dark-surface rounded-2xl border border-light-border dark:border-dark-border shadow-md overflow-hidden group hover:-translate-y-2 hover:shadow-xl transition-all reveal" style={{ transitionDelay: project.delay }}>
            <div className="h-56 overflow-hidden relative">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a href={project.link} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary text-2xl hover:bg-primary hover:text-white transform translate-y-4 group-hover:translate-y-0 transition-all">
                  <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <div className="flex gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium px-3 py-1 bg-light-bg dark:bg-dark-bg text-primary rounded-full">{tag}</span>
                ))}
              </div>
              <p className="text-light-muted dark:text-dark-muted">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
