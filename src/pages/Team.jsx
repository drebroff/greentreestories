import React from 'react';
import artMuseumImg from '../assets/team/art_museum_1x1.jpg';
import catImg from '../assets/team/cat_1x1.jpg';
import olgaImg from '../assets/team/Olga_1x1.jpg';
import publicImg from '../assets/team/public_1x1.jpg';

function Team() {
  return (
    <div>
      <header className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <span className="text-on-tertiary-container font-label text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Experts</span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-primary leading-[1.1] mb-6">
              Architecting the future of <span className="text-gradient-primary">analog workflow.</span>
            </h1>
          </div>
          <div className="md:col-span-5 pb-2">
            <p className="text-body-lg text-blue-900 leading-relaxed border-l-2 border-b-emerald-900 pl-6 py-2">
              We don't just solve tickets; we design robust technical foundations. Meet the architects behind our global IT consultation success.
            </p>
          </div>
        </div>
      </header>

      {/* Team Bento Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Principal Consultant (Large Card) */}
          <div className="md:col-span-2 group relative overflow-hidden bg-surface-container-highest rounded-xl p-8 flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 aspect-square md:aspect-auto h-full rounded-lg overflow-hidden relative">
              <img 
                alt="David Thorne" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                data-alt="Professional portrait of a male senior technology consultant" 
                src={artMuseumImg} 
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-widest px-2 py-1 rounded">LEADERSHIP</span>
                  <span className="text-tertiary-fixed-dim material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>📄</span>
                </div>
                <h2 className="text-3xl font-headline font-bold text-primary-container mb-2">Dmitrij Rebrov</h2>
                <p className="text-on-tertiary-fixed-variant font-label text-sm font-semibold mb-6">Principal Software</p>
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  With over 15 years in fintech business, Dmitrij specializes in translating complex software objectives into scalable production-ready solutions.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container text-on-primary-fixed-variant text-xs px-3 py-1.5 rounded-full">Drupal Development</span>
                <span className="bg-surface-container text-on-primary-fixed-variant text-xs px-3 py-1.5 rounded-full">Legacy Migration</span>
              </div>
            </div>
          </div>

          {/* Secondary Consultant */}
          <div className="group bg-surface-container-low rounded-xl p-6 flex flex-col justify-between hover:bg-surface-container-highest transition-colors">
            <div>
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 ring-4 ring-white/50">
                <img 
                  alt="Elena Rodriguez" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  data-alt="Portrait of a female cybersecurity expert" 
                  src={catImg} 
                />
              </div>
              <h3 className="text-xl font-headline font-bold text-primary-container mb-1">Ekatirina Kotov</h3>
              <p className="text-on-tertiary-fixed-variant font-label text-xs font-semibold mb-4">Office manager</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Expert in threat modeling and zero-trust implementation for homestead financial institutions.
              </p>
            </div>
            <div className="mt-8">
              <span className="text-on-tertiary-container text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                VIEW PROFILE <span className="material-symbols-outlined text-sm">→</span>
              </span>
            </div>
          </div>

          {/* Expertise Section (Asymmetric) */}
          <div className="bg-primary-container rounded-xl p-8 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-9xl text-white">architecture</span>
            </div>
            <h3 className="text-2xl font-headline font-bold text-white mb-6 relative z-10">Core Technical Domains</h3>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-center gap-3 text-white/80 group">
                <span className="w-1.5 h-1.5 bg-tertiary-fixed-dim rounded-full group-hover:scale-150 transition-transform"></span>
                <span className="font-label text-sm">Drupal development Solutions</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 group">
                <span className="w-1.5 h-1.5 bg-tertiary-fixed-dim rounded-full group-hover:scale-150 transition-transform"></span>
                <span className="font-label text-sm">Adobe Commerce Development Solutions</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 group">
                <span className="w-1.5 h-1.5 bg-tertiary-fixed-dim rounded-full group-hover:scale-150 transition-transform"></span>
                <span className="font-label text-sm">QA and tdd</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 group">
                <span className="w-1.5 h-1.5 bg-tertiary-fixed-dim rounded-full group-hover:scale-150 transition-transform"></span>
                <span className="font-label text-sm">Affiliate network development</span>
              </li>
            </ul>
          </div>

          {/* Consultant Card */}
          <div className="group bg-surface-container-low rounded-xl p-6 flex flex-col justify-between hover:bg-surface-container-highest transition-colors">
            <div>
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 ring-4 ring-white/50">
                <img 
                  alt="Marcus Chen" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  data-alt="Portrait of a male data systems engineer" 
                  src={olgaImg} 
                />
              </div>
              <h3 className="text-xl font-headline font-bold text-primary-container mb-1">Olga Beliajeva</h3>
              <p className="text-on-tertiary-fixed-variant font-label text-xs font-semibold mb-4">Senior QA specialist</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Specializes in high-throughput application testing and real-time quality analytics.
              </p>
            </div>
            <div className="mt-8">
              <span className="text-on-tertiary-container text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                VIEW PROFILE <span className="material-symbols-outlined text-sm">→</span>
              </span>
            </div>
          </div>

          {/* Consultant Card */}
          <div className="group bg-surface-container-low rounded-xl p-6 flex flex-col justify-between hover:bg-surface-container-highest transition-colors">
            <div>
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 ring-4 ring-white/50">
                <img 
                  alt="Sarah Jenkins" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  data-alt="Portrait of a female IT solutions architect" 
                  src={publicImg} 
                />
              </div>
              <h3 className="text-xl font-headline font-bold text-primary-container mb-1">Natalja Grigorjeva</h3>
              <p className="text-on-tertiary-fixed-variant font-label text-xs font-semibold mb-4">Public relations specialist</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Designing resilient communication architectures and leading analog transformation roadmaps.
              </p>
            </div>
            <div className="mt-8">
              <span className="text-on-tertiary-container text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                VIEW PROFILE <span className="material-symbols-outlined text-sm">→</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Section (Custom Infrastructure Metric) */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-surface-container-highest rounded-xl p-12 overflow-hidden relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-tertiary-fixed-dim rounded-full animate-pulse"></span>
                <span className="font-label text-xs font-bold text-on-primary-fixed-variant uppercase tracking-widest">Global Experience</span>
              </div>
              <div className="text-5xl font-headline font-extrabold text-primary-container mb-2">110+</div>
              <p className="text-on-surface-variant text-sm">Successful enterprise-level deployments across 4 continents.</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-tertiary-fixed-dim rounded-full animate-pulse"></span>
                <span className="font-label text-xs font-bold text-on-primary-fixed-variant uppercase tracking-widest">Client Retention</span>
              </div>
              <div className="text-5xl font-headline font-extrabold text-primary-container mb-2">98%</div>
              <p className="text-on-surface-variant text-sm">Partnering with long-term clients for continuous optimization.</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-tertiary-fixed-dim rounded-full animate-pulse"></span>
                <span className="font-label text-xs font-bold text-on-primary-fixed-variant uppercase tracking-widest">Average Expertise</span>
              </div>
              <div className="text-5xl font-headline font-extrabold text-primary-container mb-2">12yr</div>
              <p className="text-on-surface-variant text-sm">Average industry experience across our consulting team.</p>
            </div>
          </div>
          {/* Subtle decorative graphic */}
          <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-[300px]">hub</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
