import React from 'react';

const Hero = () => {
  const socialLinks = [
    { url: 'https://github.com/Fetse12', icon: 'bxl-github' },
    { url: 'https://www.linkedin.com/in/fitsum-teka12', icon: 'bxl-linkedin' },
    { url: 'https://x.com/fitsum49', icon: 'bxl-twitter' },
    { url: 'https://t.me/Sheer32', icon: 'bxl-telegram' },
    { url: 'https://www.instagram.com/__fitsum_teka_12', icon: 'bxl-instagram' }
  ];

  return (
    <section id="Home" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-32 pb-16 gap-12">
      <div className="flex-1 text-center md:text-left reveal">
        <h3 className="text-2xl font-medium text-light-muted dark:text-dark-muted mb-2">Hello, I'm</h3>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">Fitsum <span className="text-primary">Teka</span></h1>
        <h3 className="text-xl md:text-2xl font-semibold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Software Engineer</span> | Web Developer | Digital Marketer
        </h3>
        <p className="text-lg text-light-muted dark:text-dark-muted mb-8 max-w-2xl mx-auto md:mx-0">
          I specialize in building innovative digital solutions, crafting user-centric websites, and driving growth through strategic social media marketing. Let's create something extraordinary together!
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
          <a href="/photos/Fitsum_Teka_Resume.pdf" download className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-primary to-secondary hover:-translate-y-1 shadow-lg shadow-primary/30 transition-all duration-300 flex items-center gap-2">
            Download Resume <i className='bx bx-download'></i>
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full font-semibold text-primary border-2 border-primary hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300">
            Let's Talk
          </a>
        </div>
        <div className="flex justify-center md:justify-start gap-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-light-surface dark:bg-dark-surface shadow-md hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:-translate-y-1 transition-all text-xl">
              <i className={`bx ${link.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
      
      <div className="flex-1 flex justify-center items-center reveal">
        <div className="relative w-72 h-72 md:w-96 md:h-96 morph-img-box">
          <img src="/photos/photo_2023-12-20_23-09-26.jpg" alt="Fitsum Teka" className="w-full h-full object-cover morph-img border-8 border-light-surface dark:border-dark-surface shadow-xl relative rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
