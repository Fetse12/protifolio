import React from 'react';

const Footer = () => {
  const socialLinks = [
    { url: 'https://github.com/Fetse12', icon: 'bxl-github' },
    { url: 'https://www.linkedin.com/in/fitsum-teka12', icon: 'bxl-linkedin' },
    { url: 'https://www.facebook.com/profile.php?id=100027601682822', icon: 'bxl-facebook' },
    { url: 'https://t.me/Sheer32', icon: 'bxl-telegram' },
    { url: 'https://www.instagram.com/__fitsum_teka_12', icon: 'bxl-instagram' },
    { url: 'https://x.com/fitsum49', icon: 'bxl-twitter' }
  ];

  return (
    <footer className="bg-light-surface dark:bg-dark-surface border-t border-light-border dark:border-dark-border py-12 text-center mt-10">
      <div className="flex justify-center gap-6 mb-8">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noreferrer" className="text-3xl text-light-muted dark:text-dark-muted hover:text-primary dark:hover:text-primary transition-all hover:-translate-y-1">
            <i className={`bx ${link.icon}`}></i>
          </a>
        ))}
      </div>
      <p className="text-light-muted dark:text-dark-muted text-sm font-medium">
        &copy; 2024 Fitsum Teka. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
