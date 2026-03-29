
function Contact() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-semibold tracking-wider rounded-full mb-6">CONNECT WITH US</span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-primary leading-tight mb-8">
              Let's Architect Your <br/>
              <span className="text-on-tertiary-container">Digital Future.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Ready to optimize your technical infrastructure? Our consultants are standing by to help you scale efficiently and securely.
            </p>
          </div>
        </div>
      </section>
      {/* Main Content: Asymmetric Layout */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form Section (Bento Inspired) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm border border-outline-variant/15">
              <h2 className="font-headline text-2xl font-bold mb-8 text-primary-container">Send a Message</h2>
              <form action="#" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface-variant">Full Name</label>
                    <input className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-tertiary-fixed-dim rounded-md px-4 py-3 placeholder:text-on-surface-variant/40" placeholder="John Doe" type="text"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface-variant">Work Email</label>
                    <input className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-tertiary-fixed-dim rounded-md px-4 py-3 placeholder:text-on-surface-variant/40" placeholder="john@company.com" type="email"/>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant">Service Interest</label>
                  <select className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-tertiary-fixed-dim rounded-md px-4 py-3 text-on-surface-variant">
                    <option>Cloud Infrastructure</option>
                    <option>Cybersecurity Audit</option>
                    <option>Enterprise Architecture</option>
                    <option>Managed IT Services</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant">Message</label>
                  <textarea className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-tertiary-fixed-dim rounded-md px-4 py-3 placeholder:text-on-surface-variant/40" placeholder="Tell us about your project..." rows="4"></textarea>
                </div>
                <button className="w-full bg-primary-container text-on-primary font-bold py-4 rounded-md shadow-lg hover:shadow-cyan-900/10 transition-all flex items-center justify-center gap-2 group" type="submit">
                  Send Inquiry
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">send</span>
                </button>
              </form>
            </div>
            {/* Infrastructure Metric Pulse */}
            <div className="bg-surface-container-highest p-6 rounded-xl flex items-center justify-between border border-outline-variant/15">
              <div className="flex items-center gap-4">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed-dim opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary-fixed-dim"></span>
                </div>
                <span className="text-sm font-medium text-primary-container">Live Consultant Availability</span>
              </div>
              <p className="text-sm text-on-surface-variant">Average response time: <span className="font-bold text-primary-container">2.4 hours</span></p>
            </div>
          </div>
          {/* Contact Info & Map (Technical Sidebar) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Office Location */}
            <div className="bg-primary-container text-on-primary p-8 rounded-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-headline text-xl font-bold mb-6">Global Headquarters</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-tertiary-fixed-dim">location_on</span>
                    <div>
                      <p className="font-semibold text-white">Silicon Valley Office</p>
                      <p className="text-on-primary-container text-sm leading-relaxed">440 N Wolfe Rd, Sunnyvale, <br/>CA 94085, United States</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-tertiary-fixed-dim">call</span>
                    <p className="text-sm">+1 (555) ARCH-TECH</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-tertiary-fixed-dim">mail</span>
                    <p className="text-sm">consult@techarch.com</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 opacity-10">
                <span className="material-symbols-outlined text-[160px]" style={{fontVariationSettings: "'FILL' 1"}}>architecture</span>
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="rounded-xl overflow-hidden aspect-video relative group">
              <img alt="Map view" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700" data-alt="Minimal satellite map showing tech district" data-location="Sunnyvale, California" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXfpmJnCfGQ-o_2iP4A9xhaxiopwe9f21fYkhSZAGsVfV4Nts9iRCmBZ833k1wQkGVvvsc6VLZlkKz3RO1gW5pNNXCuEqvJI4pkbzm5GHT21KMNslD8D3TqkeWRTFhS66lkCCL6p-e4YpCnBtcwXxE6NxAj5uN-dFGdu7_qT-t8M6_SI2LbTWJpVJ0N_8tT5XcmzsixqWX5aaSU7A_a_xWU1qIbu6Ikm2zcxKz5d4IGHftvUCcS-mMzGs-YgzlYBnk-vHetiKQzpZ7"/>
              <div className="absolute inset-0 bg-primary-container/20 flex items-center justify-center">
                <div className="bg-white p-3 rounded-full shadow-2xl">
                  <span className="material-symbols-outlined text-primary-container text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>my_location</span>
                </div>
              </div>
            </div>
            {/* Quick Links/Socials Card */}
            <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/15">
              <h4 className="font-headline font-bold mb-4">Follow Technical Updates</h4>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-md bg-white flex items-center justify-center hover:bg-tertiary-fixed-dim transition-colors shadow-sm" href="#">
                  <span className="material-symbols-outlined text-primary-container">terminal</span>
                </a>
                <a className="w-10 h-10 rounded-md bg-white flex items-center justify-center hover:bg-tertiary-fixed-dim transition-colors shadow-sm" href="#">
                  <span className="material-symbols-outlined text-primary-container">hub</span>
                </a>
                <a className="w-10 h-10 rounded-md bg-white flex items-center justify-center hover:bg-tertiary-fixed-dim transition-colors shadow-sm" href="#">
                  <span className="material-symbols-outlined text-primary-container">code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
