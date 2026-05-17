import React from 'react';

const About = () => {
  const skills = [
    { name: 'HTML/CSS', icon: 'bxl-html5' },
    { name: 'JavaScript', icon: 'bxl-javascript' },
    { name: 'React', icon: 'bxl-react' },
    { name: 'Node.js', icon: 'bxl-nodejs' },
    { name: 'Python', icon: 'bxl-python' },
    { name: 'Database', icon: 'bx-data' },
    { name: 'Java', icon: 'bxl-java' },
    { name: 'Marketing', icon: 'bx-line-chart' }
  ];

  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3 reveal">
        <i className='bx bx-user-circle text-primary'></i> About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 reveal w-full">
          <img src="/photos/photo_2023-12-20_23-09-26.jpg" alt="About Fitsum" className="w-full rounded-2xl shadow-lg border border-light-border dark:border-dark-border" />
        </div>
        <div className="flex-1 reveal">
          <h3 className="text-2xl font-semibold mb-6">Bridging the gap between <span className="text-primary">Technology</span> & <span className="text-secondary">Marketing</span></h3>
          <p className="text-light-muted dark:text-dark-muted mb-4 text-lg leading-relaxed">
            I am a passionate <strong className="text-light-text dark:text-dark-text">Software Engineering student</strong> at Adama Science and Technology University. I thrive on the intersection of solid backend logic, beautiful frontend design, and impactful digital marketing. 
          </p>
          <p className="text-light-muted dark:text-dark-muted mb-8 text-lg leading-relaxed">
            As the co-founder of <strong className="text-light-text dark:text-dark-text">Nova Digitals</strong>, a social media marketing agency, I bring a unique perspective to my development work. I don't just build applications; I engineer solutions that are designed to convert, engage, and grow businesses online.
          </p>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Technical Arsenal</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-2 p-4 bg-light-surface dark:bg-dark-surface rounded-xl border border-light-border dark:border-dark-border shadow-sm hover:-translate-y-1 hover:border-primary transition-all">
                  <i className={`bx ${skill.icon} text-4xl text-primary`}></i>
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
