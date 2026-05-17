import React from 'react';

const Header = ({ theme, toggleTheme, activeSection }) => {
  const navItems = [
    { id: 'Home', icon: 'bx-home-alt', label: 'Home' },
    { id: 'about', icon: 'bx-user', label: 'About' },
    { id: 'services', icon: 'bx-briefcase-alt-2', label: 'Services' },
    { id: 'projects', icon: 'bx-laptop', label: 'Projects' },
    { id: 'contact', icon: 'bx-envelope', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-light-border dark:border-dark-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 text-2xl font-bold">
          <img src="/photos/Screenshot_from_2024-05-01_14-19-29-removebg-preview(1).png" alt="Logo" className="h-10 rounded-full" />
          <span>Fitsum Teka</span>
        </a>
        
        <ul className="hidden md:flex gap-8 items-center font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`} 
                className={`nav-link relative flex items-center gap-2 transition-colors ${activeSection === item.id ? 'text-primary dark:text-primary active' : 'hover:text-primary'}`}
              >
                <i className={`bx ${item.icon}`}></i> {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button onClick={toggleTheme} className="text-2xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors" aria-label="Toggle Dark Mode">
          <i className={`bx ${theme === 'light' ? 'bx-moon' : 'bx-sun'}`}></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
