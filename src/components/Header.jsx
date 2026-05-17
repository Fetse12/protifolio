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

        <button 
          onClick={toggleTheme} 
          className="relative w-14 h-8 rounded-full bg-slate-200 dark:bg-slate-800 transition-colors duration-300 focus:outline-none flex items-center justify-between px-1.5 cursor-pointer shadow-inner border border-light-border dark:border-dark-border"
          aria-label="Toggle Dark Mode"
        >
          {/* Sun icon on the left (light indicator) */}
          <i className={`bx bx-sun ${theme === 'light' ? 'text-amber-500' : 'text-slate-500'} text-sm z-10 transition-colors`}></i>
          
          {/* Moon icon on the right (dark indicator) */}
          <i className={`bx bx-moon ${theme === 'dark' ? 'text-indigo-400' : 'text-slate-400'} text-sm z-10 transition-colors`}></i>
          
          {/* Sliding Indicator Knob */}
          <span 
            className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-slate-900 shadow-md transform transition-transform duration-300 flex items-center justify-center ${
              theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
            }`}
          >
            <i className={`bx ${theme === 'light' ? 'bx-sun text-amber-500' : 'bx-moon text-indigo-400'} text-xs`}></i>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
