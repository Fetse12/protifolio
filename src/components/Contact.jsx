import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3 reveal">
        <i className='bx bx-envelope-open text-primary'></i> Get In Touch
      </h2>
      <div className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-3xl shadow-lg p-8 md:p-12 grid md:grid-cols-5 gap-12 reveal">
        
        <div className="md:col-span-2">
          <h3 className="text-3xl font-bold mb-4">Let's work together!</h3>
          <p className="text-light-muted dark:text-dark-muted mb-8 text-lg">Whether you have a coding project, need marketing advice, or just want to say hi, my inbox is always open.</p>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-light-bg dark:bg-dark-bg rounded-full flex items-center justify-center text-primary text-2xl shrink-0">
                <i className='bx bx-envelope'></i>
              </div>
              <div>
                <h4 className="font-bold text-lg">Email</h4>
                <span className="text-light-muted dark:text-dark-muted">Fitsumteka2019@gmail.com</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-light-bg dark:bg-dark-bg rounded-full flex items-center justify-center text-primary text-2xl shrink-0">
                <i className='bx bx-phone'></i>
              </div>
              <div>
                <h4 className="font-bold text-lg">Phone</h4>
                <span className="text-light-muted dark:text-dark-muted">+251 92 369 7449</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-light-bg dark:bg-dark-bg rounded-full flex items-center justify-center text-primary text-2xl shrink-0">
                <i className='bx bx-map'></i>
              </div>
              <div>
                <h4 className="font-bold text-lg">Location</h4>
                <span className="text-light-muted dark:text-dark-muted">Adama, Ethiopia</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-3">
          <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-6">
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
            
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" name="name" placeholder="Your Name" required className="w-full bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text p-4 rounded-xl outline-none focus:border-primary transition-colors" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text p-4 rounded-xl outline-none focus:border-primary transition-colors" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" name="phone" placeholder="Phone Number" className="w-full bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text p-4 rounded-xl outline-none focus:border-primary transition-colors" />
              <input type="text" name="subject" placeholder="Subject" required className="w-full bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text p-4 rounded-xl outline-none focus:border-primary transition-colors" />
            </div>
            <textarea name="message" placeholder="Your Message" rows="5" required className="w-full bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text p-4 rounded-xl outline-none focus:border-primary transition-colors resize-y"></textarea>
            
            <button type="submit" className="self-start px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-primary to-secondary hover:-translate-y-1 shadow-lg shadow-primary/30 transition-all duration-300 flex items-center gap-2">
              Send Message <i className='bx bx-send'></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
