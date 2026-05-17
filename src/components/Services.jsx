import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive, scalable, and high-performance websites and web applications tailored to your business needs using modern frameworks.',
      icon: 'bx-code-alt',
      delay: '0ms'
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies, content creation, and community management that amplify your brand\'s voice and drive conversions.',
      icon: 'bx-trending-up',
      delay: '100ms'
    },
    {
      title: 'Mobile Apps',
      description: 'Designing and developing intuitive mobile experiences that keep users engaged and solve real-world problems efficiently.',
      icon: 'bx-mobile-alt',
      delay: '200ms'
    }
  ];

  return (
    <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3 reveal">
        <i className='bx bx-cog text-primary'></i> My Services
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-light-surface dark:bg-dark-surface p-8 rounded-2xl border border-light-border dark:border-dark-border shadow-md hover:-translate-y-2 hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all text-center group relative overflow-hidden reveal z-10" style={{ transitionDelay: service.delay }}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
            <div className="w-20 h-20 mx-auto bg-light-bg dark:bg-dark-bg rounded-full flex items-center justify-center mb-6 shadow-sm">
              <i className={`bx ${service.icon} text-4xl text-primary`}></i>
            </div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-light-muted dark:text-dark-muted mb-6">{service.description}</p>
            <a href="#contact" className="inline-block px-6 py-2 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-colors">Discuss Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
