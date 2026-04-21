import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="w-full py-12 px-6 bg-slate-100 mt-20 font-body text-sm leading-relaxed">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto border-t border-slate-200/50 pt-12">
        <div className="space-y-4">
          <div className="text-lg font-bold text-slate-900 font-headline">Green Tree Stories</div>
          <p className="text-slate-500">Human software development for the new AI powered world. <br /> We build the future on solid foundations.</p>
        </div>
        <div className="space-y-4">
          <h4 className="font-headline font-bold text-slate-900">Company</h4>
          <ul className="space-y-2">
            <li><Link className="text-slate-500 hover:text-cyan-500 transition-colors underline-offset-4 hover:underline" to="/about">About Us</Link></li>
            <li><Link className="text-slate-500 hover:text-cyan-500 transition-colors underline-offset-4 hover:underline" to="/team">Our Team</Link></li>
            <li><a className="text-slate-500 hover:text-cyan-500 transition-colors underline-offset-4 hover:underline" href="#">Global Offices</a></li>
            <li><a className="text-slate-500 hover:text-cyan-500 transition-colors underline-offset-4 hover:underline" href="#">Service Status</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-headline font-bold text-slate-900">Contact</h4>
          <ul className="space-y-2">
            <li><Link className="text-slate-500 hover:text-cyan-500 transition-colors underline-offset-4 hover:underline" to="/contact">Contact Us</Link></li>
            <li><Link className="text-slate-500 hover:text-cyan-500 transition-colors underline-offset-4 hover:underline" to="/">Home</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-headline font-bold text-slate-900">Legal</h4>
          <ul className="space-y-2">
            <li><a className="text-slate-500 hover:text-cyan-500 transition-colors underline-offset-4 hover:underline" href="#">Privacy Policy</a></li>
            <li><a className="text-slate-500 hover:text-cyan-500 transition-colors underline-offset-4 hover:underline" href="#">Terms of Service</a></li>
          </ul>
          <div className="pt-4">
            <div className="flex gap-4">
              <a
                className="text-slate-400 hover:text-cyan-500 transition-colors"
                href="https://www.linkedin.com/in/dmitrij-rebrov-0465378b/"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.98H4.8V24H.22V8.98zM8.83 8.98h4.39v2.05h.06c.61-1.16 2.1-2.39 4.32-2.39 4.62 0 5.47 3.04 5.47 6.99V24h-4.58v-6.71c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.54V24H8.83V8.98z" />
                </svg>
              </a>
              <a
                className="text-slate-400 hover:text-cyan-500 transition-colors"
                href="https://github.com/drebroff"
                aria-label="GitHub"
                title="GitHub"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.73.5.9 5.47.9 11.82c0 5.08 3.29 9.38 7.86 10.89.58.11.79-.26.79-.57v-2.1c-3.2.71-3.88-1.37-3.88-1.37-.52-1.36-1.27-1.73-1.27-1.73-1.04-.73.08-.72.08-.72 1.15.08 1.76 1.19 1.76 1.19 1.02 1.78 2.68 1.26 3.34.96.1-.76.4-1.26.72-1.55-2.56-.3-5.25-1.32-5.25-5.88 0-1.3.46-2.36 1.22-3.19-.12-.3-.53-1.52.12-3.16 0 0 1-.33 3.28 1.22a11.1 11.1 0 0 1 5.97 0c2.28-1.55 3.28-1.22 3.28-1.22.65 1.64.24 2.86.12 3.16.76.83 1.22 1.89 1.22 3.19 0 4.57-2.69 5.58-5.26 5.87.41.36.77 1.08.77 2.18v3.23c0 .31.21.69.8.57 4.56-1.51 7.85-5.81 7.85-10.89C23.1 5.47 18.27.5 12 .5z" />
                </svg>
              </a>
              <a
                className="text-slate-400 hover:text-cyan-500 transition-colors"
                href="https://rekvizitai.vz.lt/en/company/majestic_solutions/"
                aria-label="Rekvezitai.lt"
                title="Rekvezitai.lt"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm2 4v2h10V7H7zm0 4v2h10v-2H7zm0 4v2h6v-2H7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center text-slate-500">
        <p>© 2026 Green Tree Stories. <br /> Crafted IT Solutions.</p>
        <p className="mt-4 md:mt-0">Headquarters: Klaipėda, Lithuania</p>
      </div>
    </footer>
  );
}

export default Footer;
