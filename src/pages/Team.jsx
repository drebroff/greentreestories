import React from 'react';

function Team() {
  return (
    <div>
      <header className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <span className="text-on-tertiary-container font-label text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Experts</span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-primary leading-[1.1] mb-6">
              Architecting the future of <span className="text-gradient-primary">digital enterprise.</span>
            </h1>
          </div>
          <div className="md:col-span-5 pb-2">
            <p className="text-body-lg text-on-primary-container leading-relaxed border-l-2 border-tertiary-fixed-dim pl-6 py-2">
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-dH2H7A59INwYaEt0JHZJuPUhamoGGsgVCQm65Kgj15h_E3KCjwR5BMNRHGv_s28GpWfcZAaPyUGcBnD7T7DazvWc3K5smvSol_5Jk0X7Z6NGDD4LnaR9vtAnBT5sQ8hBHDoKZPerIplFb4yFRJyesKQxjmtDGGknF__bCaVtMJJSGubc4jzYKSo1QhLnjNiiuXPOhuCmqTG4IpTf9661Ct8rLJPTNiyM4zHc-Qa_h_X4dA3DmB6McV-AjNF2IykAa4vNriJcVkjb" 
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-widest px-2 py-1 rounded">LEADERSHIP</span>
                  <span className="text-tertiary-fixed-dim material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>pulse_alert</span>
                </div>
                <h2 className="text-3xl font-headline font-bold text-primary-container mb-2">David Thorne</h2>
                <p className="text-on-tertiary-fixed-variant font-label text-sm font-semibold mb-6">Principal Infrastructure Architect</p>
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  With over 20 years in enterprise architecture, David specializes in translating complex business objectives into scalable cloud-native infrastructure.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container text-on-primary-fixed-variant text-xs px-3 py-1.5 rounded-full">Cloud Strategy</span>
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3_9oMe4sLwxDrA3wJbkth5RIlfSAgb5zO3o1TOaB0l1TE2kJLsG46kcoWfuWxr9udb-cI7yD-nrIg1zVHQx9Jfu1Q2rW7pOxdcn6NhqZ_ZtpGzAc0uDp_dZhNXi2XHCzguUUoIwI_0M3YVAWq-y7VGQTNM4sv6hkE5xyk3MHBd-wpJnc8pnAN2-9g60kAbFFINMWcAH0Bjct7v9EzLJJIR_XjLT_ZtObMt3l3ND5fCk2tN_KYOe6RsGJKj4cewfQYXkv544WnK0Ri" 
                />
              </div>
              <h3 className="text-xl font-headline font-bold text-primary-container mb-1">Elena Rodriguez</h3>
              <p className="text-on-tertiary-fixed-variant font-label text-xs font-semibold mb-4">Cybersecurity Specialist</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Expert in threat modeling and zero-trust implementation for Fortune 500 financial institutions.
              </p>
            </div>
            <div className="mt-8">
              <span className="text-on-tertiary-container text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                VIEW PROFILE <span className="material-symbols-outlined text-sm">arrow_forward</span>
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
                <span className="font-label text-sm">Hybrid Cloud Management</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 group">
                <span className="w-1.5 h-1.5 bg-tertiary-fixed-dim rounded-full group-hover:scale-150 transition-transform"></span>
                <span className="font-label text-sm">DevSecOps Automation</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 group">
                <span className="w-1.5 h-1.5 bg-tertiary-fixed-dim rounded-full group-hover:scale-150 transition-transform"></span>
                <span className="font-label text-sm">Data Governance & BI</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 group">
                <span className="w-1.5 h-1.5 bg-tertiary-fixed-dim rounded-full group-hover:scale-150 transition-transform"></span>
                <span className="font-label text-sm">Network Modernization</span>
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcAzz-46NjyLcmah-oHmpy5ZS26jFwxL1Kay9SJOGDNv3oR2IpO9kRovxeWmJHb0CFTUL6-1W9VzaI0_p4WHlSXYUVlMM0Izhlvj2i_Czz5iI0jYdBeBKPayZYkM3Vfk0zxh27WBoJ4gE7d6IKzIFqnMjolht47Jw3o0x9xiK821x15_i-LhQVY2A5OH-ULoDHs3SKZQ3hdpdPy7psXbdTviy6G4CuPXuWaB85IglUW9YBK7tqEbUW251uw0OO-DmJSNq5xAOAtQBo" 
                />
              </div>
              <h3 className="text-xl font-headline font-bold text-primary-container mb-1">Marcus Chen</h3>
              <p className="text-on-tertiary-fixed-variant font-label text-xs font-semibold mb-4">Senior Data Systems Engineer</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Specializes in high-throughput data pipelines and real-time analytics infrastructure.
              </p>
            </div>
            <div className="mt-8">
              <span className="text-on-tertiary-container text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                VIEW PROFILE <span className="material-symbols-outlined text-sm">arrow_forward</span>
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnepDFsQNWfHm1C8_JJ8nvvUkvFYrDdUA6BxIlXY6n3U4lKvmEXERLUUHeNykYgeC5hSnewjj1tb5EM93iWqzlffQvb9AgQjYfr2_benD11CLFNDSC8k4wcfnlkUDhgXtgvcffmRyuQhN4s98KYULsr9A6XZCFlB5sdXaSxmLDkdE9qRctYYzaVQoTWKhCZHYiI-0q1BCWFGyAzc9ehW9dArvGQ-vthjpvVAhytyXJp9OqAcMfgWkgxHxxoPa6Bif17TJlcpGN2VZu" 
                />
              </div>
              <h3 className="text-xl font-headline font-bold text-primary-container mb-1">Sarah Jenkins</h3>
              <p className="text-on-tertiary-fixed-variant font-label text-xs font-semibold mb-4">Solutions Architect</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Designing resilient SaaS architectures and leading digital transformation roadmaps.
              </p>
            </div>
            <div className="mt-8">
              <span className="text-on-tertiary-container text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                VIEW PROFILE <span className="material-symbols-outlined text-sm">arrow_forward</span>
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
              <div className="text-5xl font-headline font-extrabold text-primary-container mb-2">150+</div>
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
