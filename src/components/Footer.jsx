import React from 'react';

function Footer() {
  return (
    <footer className="w-full py-12 px-6 bg-slate-100 mt-20 font-body text-sm leading-relaxed">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto border-t border-slate-200/50 pt-12">
        <div className="space-y-4">
          <div className="text-lg font-bold text-slate-900 font-headline">TechArch Consult</div>
          <p className="text-slate-500">Architectural IT Solutions for the modern enterprise. We build the future on solid foundations.</p>
        </div>
        <div className="space-y-4">
          <h4 className="font-headline font-bold text-slate-900">Company</h4>
          <ul className="space-y-2">
            <li><a className="text-slate-500 hover:text-cyan-500 transition-colors underline-offset-4 hover:underline" href="#">About Us</a></li>
            <li><a className="text-slate-500 hover:text-cyan-500 transition-colors underline-offset-4 hover:underline" href="#">Our Team</a></li>
            <li><a className="text-slate-500 hover:text-cyan-500 transition-colors underline-offset-4 hover:underline" href="#">Global Offices</a></li>
            <li><a className="text-slate-500 hover:text-cyan-500 transition-colors underline-offset-4 hover:underline" href="#">Service Status</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-headline font-bold text-slate-900">Services</h4>
          <ul className="space-y-2">
            <li><a className="text-slate-500 hover:text-cyan-500 transition-colors underline-offset-4 hover:underline" href="#">Cloud Migration</a></li>
            <li><a className="text-slate-500 hover:text-cyan-500 transition-colors underline-offset-4 hover:underline" href="#">Security Hardening</a></li>
            <li><a className="text-slate-500 hover:text-cyan-500 transition-colors underline-offset-4 hover:underline" href="#">Network Design</a></li>
            <li><a className="text-slate-500 hover:text-cyan-500 transition-colors underline-offset-4 hover:underline" href="#">IT Management</a></li>
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
              <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-cyan-500 transition-colors">public</span>
              <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-cyan-500 transition-colors">hub</span>
              <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-cyan-500 transition-colors">shield_person</span>
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
