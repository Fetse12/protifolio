# Fitsum Teka - Portfolio

A modern, responsive, and elegant portfolio web application built with **React**, **Vite**, and **Tailwind CSS**. Designed for a Software Engineer, Web Developer, and Digital Marketer.

## 🚀 Features

- **Modern Tech Stack**: Built with React and Vite for blazing fast performance.
- **Tailwind CSS**: Fully styled with utility classes for rapid UI development.
- **Dark/Light Mode**: Integrated theme toggler that respects system preferences and persists user choice via `localStorage`.
- **Responsive Design**: Mobile-first architecture ensures the portfolio looks great on any screen size.
- **Scroll Animations**: Smooth scroll reveal effects using custom React hooks.
- **Contact Form**: Functional, backend-less contact form powered by [FormSubmit.co](https://formsubmit.co).

## 📁 Project Structure

This project follows senior-level React architectural patterns:

```text
├── src/
│   ├── components/         # Modular React components
│   │   ├── Header.jsx      # Navigation & Theme toggle
│   │   ├── Hero.jsx        # Introduction and CTA
│   │   ├── About.jsx       # Skills and background
│   │   ├── Services.jsx    # Offerings grid
│   │   ├── Projects.jsx    # Portfolio gallery
│   │   ├── Contact.jsx     # FormSubmit integration
│   │   └── Footer.jsx      # Social links
│   ├── hooks/              # Custom React hooks
│   │   ├── useTheme.js     # Dark/Light mode logic
│   │   └── useScrollReveal.js # Intersection observers
│   ├── App.jsx             # Main application layout
│   ├── main.jsx            # React root entry
│   └── index.css           # Global styles and Tailwind imports
├── photos/                 # Static media assets
├── tailwind.config.js      # Custom theme and colors
├── vite.config.js          # Build tool configuration
└── package.json            # Project dependencies
```

## 🛠️ Installation & Setup

1. **Install Dependencies**
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📬 Contact Form Configuration

The contact form is configured to send emails to `fitsumteka2019@gmail.com`.
*Note: The first time a message is submitted, FormSubmit will send a verification email. Click "Activate" in that email to enable silent forwarding for all future submissions.*

---
*Designed & Developed by Fitsum Teka*
