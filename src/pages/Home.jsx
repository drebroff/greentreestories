import { useEffect, useState } from "react";

function Home() {
    const [textData, setTextData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadTextData = async () => {
            try {
                const response = await fetch(
                    "https://69cd04efddc3cabb7bd1ee9e.mockapi.io/api/v1/Text"
                );

                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }

                const data = await response.json();
                setTextData(data);
            } catch (err) {
                setError(err.message || "Failed to load data");
            } finally {
                setLoading(false);
            }
        };

        loadTextData();
    }, []);
    useEffect(() => {
        console.log("textData changed:", textData[0]?.Catchphrase);
    }, [textData]);
  return (
    <div>
      <section className="relative min-h-[870px] flex items-center overflow-hidden bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10">
              <div className="md:col-span-7 space-y-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-label uppercase tracking-widest font-semibold">
                      <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
                      Precision Engineering
                  </div>
                  <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-primary leading-[1.1]">
                      Architectural <br/>
                      <span className="text-primary-container opacity-90">IT Solutions</span> <br/>
                      for Growth
                  </h1>
                  <p className="body-lg text-on-surface-variant max-w-xl leading-relaxed">
                      We don't just fix systems; we design digital foundations. Our consultants build scalable, secure infrastructure tailored to the architectural integrity of your business goals.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                      <button className="px-8 py-4 bg-primary-container text-on-primary rounded-md font-headline font-bold flex items-center gap-2 shadow-xl shadow-primary-container/20">
                          Partner With Us
                          <span className="material-symbols-outlined">arrow_forward</span>
                      </button>
                      <button className="px-8 py-4 bg-surface-container-high text-primary-container rounded-md font-headline font-bold">
                          Our Methodology
                      </button>
                  </div>
              </div>
              <div className="md:col-span-5 relative hidden md:block">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative group">
                      <img alt="Green tree lithuania" className="w-full h-full object-cover brightness-100 transition-transform duration-700 group-hover:scale-105" data-alt="Monochromatic modern glass architectural skyscraper" src="https://images.pexels.com/photos/6025818/pexels-photo-6025818.jpeg"/>
                      <div className="absolute inset-0 bg-primary-container/20 mix-blend-multiply"></div>
                      <div className="absolute bottom-6 left-6 right-6 p-6 glass-nav bg-white/10 rounded-lg border border-white/20">
                          <div className="flex items-center justify-between">
                              <div>
                                  <div className="text-white text-2xl font-bold font-headline">99.9%</div>
                                  <div className="text-white/70 text-xs font-label">System Reliability</div>
                              </div>
                                  <span className="material-symbols-outlined text-tertiary-fixed-dim" style={{fontVariationSettings: "'FILL' 1"}}>analytics</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-highest -skew-x-12 translate-x-1/2 -z-0"></div>
      </section>
    <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
                <h2 className="font-headline text-4xl font-extrabold tracking-tight text-primary mb-6">Core Consulting Disciplines</h2>
                <p className="text-on-surface-variant leading-relaxed">Systemic excellence requires more than software. We focus on the structural integrity of your digital assets through three primary pillars.</p>
            </div>
            <div className="mt-6 md:mt-0">
                <a className="text-on-tertiary-container font-headline font-bold flex items-center gap-2 group" href="#">
                    Explore Full Catalog
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_right_alt</span>
                    <div className="h-[2px] bg-on-tertiary-container/30 absolute bottom-0 left-0 w-full group-hover:bg-on-tertiary-container transition-all"></div>
                </a>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Cloud Service */}
            <div className="md:col-span-8 bg-surface-container-high rounded-xl p-10 flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
                <div className="relative z-10">
                    <span className="material-symbols-outlined text-4xl text-primary-container mb-8" data-icon="cloud">cloud</span>
                    <h3 className="font-headline text-3xl font-bold mb-4">Cloud Infrastructure</h3>
                    <p className="text-on-surface-variant max-w-md"></p>
                </div>
                <div className="mt-8 relative z-10">
                    <div className="flex gap-2">
                        <span className="px-3 py-1 bg-white/50 rounded-full text-xs font-semibold text-on-secondary-container">AWS</span>
                        <span className="px-3 py-1 bg-white/50 rounded-full text-xs font-semibold text-on-secondary-container">Azure</span>
                        <span className="px-3 py-1 bg-white/50 rounded-full text-xs font-semibold text-on-secondary-container">Hybrid</span>
                    </div>
                </div>
                <img alt="Abstract digital cloud networking" className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-10 grayscale group-hover:opacity-20 transition-opacity" data-alt="Blue and white digital fiber optic network lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDexG36Stp9clBXVA89TwY0MWVjSndiItP16ypA4-K7cLrtvuH9O8-vSNbIOu2gcn7C2LO4aOWPO3md7P7xfWCfH5Omtz0YJyp2JiKRopbA5-G4cFM-xK2rn4pecaU63jkdD2m-d41OCah1pEoFHNtuQv345Ub8UPdKtz9enw5ogpmiPmXD3srFKJu5WSoj1OwO5Qrh2U0ycDZD7ITJrTYW8DaqBBzvPIvq1kjiQ8H6w23hr-5kXi2i7XV2DBDNYXlyHXRHVXz7tQ3e"/>
            </div>
            {/* Security Service */}
            <div className="md:col-span-4 bg-primary-container text-on-primary rounded-xl p-10 flex flex-col justify-between min-h-[400px]">
                <div>
                    <span className="material-symbols-outlined text-4xl text-tertiary-fixed-dim mb-8" data-icon="shield">shield</span>
                    <h3 className="font-headline text-2xl font-bold mb-4">Fortified Security</h3>
                    <p className="text-on-primary-container leading-relaxed">{textData[0]?.Catchphrase || "Loading..."}</p>
                </div>
                <button className="w-full py-4 bg-surface-container-lowest/10 border border-white/20 rounded-md font-headline font-bold text-sm hover:bg-white/10 transition-colors">
                    Security Audit
                </button>
            </div>
            {/* Networking Service */}
            <div className="md:col-span-4 bg-white shadow-xl shadow-slate-200/50 rounded-xl p-10 flex flex-col justify-between min-h-[400px]">
                <div>
                    <span className="material-symbols-outlined text-4xl text-primary-container mb-8" data-icon="settings_ethernet">settings_ethernet</span>
                    <h3 className="font-headline text-2xl font-bold mb-4">Enterprise Networking</h3>
                    <p className="text-on-surface-variant">Low-latency, high-availability networks that serve as the nervous system for global operations.</p>
                </div>
                <div className="space-y-4">
                    <div className="h-1 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-tertiary-fixed-dim w-[85%]"></div>
                    </div>
                    <div className="flex justify-between text-xs font-label font-bold text-on-surface-variant">
                        <span>NETWORK LOAD</span>
                        <span>OPTIMIZED</span>
                    </div>
                </div>
            </div>
            {/* Data Visualization/KPI Service */}
            <div className="md:col-span-8 bg-surface-dim rounded-xl p-10 flex items-center justify-between overflow-hidden">
                <div className="max-w-xs">
                    <h3 className="font-headline text-2xl font-bold mb-4">Performance Metrics</h3>
                    <p className="text-on-surface-variant text-sm">Real-time infrastructure monitoring and predictive analytics to prevent downtime before it happens.</p>
                </div>
                <div className="flex gap-6 items-end">
                    <div className="w-12 bg-primary-container h-32 rounded-t-sm"></div>
                    <div className="w-12 bg-primary-container/80 h-48 rounded-t-sm"></div>
                    <div className="w-12 bg-tertiary-fixed-dim h-64 rounded-t-sm flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary-container" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Testimonials */}
    <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="font-headline text-4xl font-extrabold text-primary mb-4">The Consultant's Impact</h2>
                <p className="text-on-surface-variant">Trusted by CTOs from the world's most innovative engineering firms.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div className="p-8 rounded-lg bg-surface-container-low border-l-4 border-tertiary-fixed-dim">
                    <div className="mb-6 flex text-tertiary-fixed-dim">
                        <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    </div>
                    <p className="italic text-on-surface mb-8 leading-relaxed">"TechArch restructured our entire server cluster. The ROI was visible within the first quarter due to zero downtime during peak loads."</p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary-container overflow-hidden">
                            <img alt="Marcus Chen portrait" className="w-full h-full object-cover" data-alt="Professional headshot of a male executive" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1zodW3DNbUcyjaJsuczevYYhrAYGp8K3zcM8XjRSEBQLpdYIYyYspblJo3wAtvEKnWhw0VLwIPLJ762S10qAofZMtPbAiaEcsQsaJMe5u-arxMcO1VpNEP0KTJnh5xhFxhwqUKDm5e4d7Qb6iZ6283bCRxJWkJeMCmJZXwg2883amHJa34EqA109O2xi1A93f6v3KZjFVAJjkXTVcDf6ctRZOfdrKADIybHwwxO1o3QEbKjKhs_miz8sV8_jrWeGtvpIaS2O90Klf"/>
                        </div>
                        <div>
                            <div className="font-headline font-bold text-sm">Marcus Chen</div>
                            <div className="text-xs text-on-surface-variant">CTO, Vertex Dynamics</div>
                        </div>
                    </div>
                </div>
                {/* Testimonial 2 */}
                <div className="p-8 rounded-lg bg-surface-container-low border-l-4 border-primary-container">
                    <div className="mb-6 flex text-tertiary-fixed-dim">
                        <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    </div>
                    <p className="italic text-on-surface mb-8 leading-relaxed">"Their security audit was terrifyingly thorough. We've never felt more protected. They treat our data as if it were their own."</p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary-container overflow-hidden">
                            <img alt="Sarah Jenkins portrait" className="w-full h-full object-cover" data-alt="Professional headshot of a female executive" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgD9bt3BVmJAI8nXEquMz3Pm08bttIrO5EF-tgpGQCsaUWmBZqhvGYJBj9988Egp3hnBGoX77p6HOjgCVZ10e3tvx7XpVYHHNpFKPgz8iixGcx1bnpZYPEKIJmIOFRBjSBEb9Oyxmw3BVMCE-fJWtZOfhqmYqL19DTcdCb2eXkDCSHkwqquJd0_nO7Qw99d51d53nV_q_hVaQ0M_9HSlHgDBGx2otOvxkDWEGoS6NGh2DmUQ-A6QXpZqw-DHJpLEOYB6TITjR-Y1nh"/>
                        </div>
                        <div>
                            <div className="font-headline font-bold text-sm">Sarah Jenkins</div>
                            <div className="text-xs text-on-surface-variant">Director of IT, Meridian Global</div>
                        </div>
                    </div>
                </div>
                {/* Testimonial 3 */}
                <div className="p-8 rounded-lg bg-surface-container-low border-l-4 border-tertiary-fixed-dim">
                    <div className="mb-6 flex text-tertiary-fixed-dim">
                        <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    </div>
                    <p className="italic text-on-surface mb-8 leading-relaxed">"Architectural excellence is the only way to describe their networking approach. Truly the digital blueprint specialists."</p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary-container overflow-hidden">
                            <img alt="David Okoro portrait" className="w-full h-full object-cover" data-alt="Professional headshot of a smiling male professional" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiJkJDOUEZbKpC2T6a0Ojo1B99asGh8x7qrax75wYcEMWuJDk9n2pKxqvz8pLytgitCGb8LrMIYf2-TM7ls4M4rRwbjFZYxO83gqFVPnR8XeIB4LBd9urQKRzyV1d1zK7CFC-8jxH-MkwNlNUwboYYjYhH9USai3jyImfPWtWpGQt0nGOew3j-Q4V1YKYc-0VKv6FAXZoYK0jm7POtEBUWWhUY8p6YJXZIvObvFJl_Yefa3FfWNZUL28Wwe4C3ZpOKcu8CFhx3xh7e"/>
                        </div>
                        <div>
                            <div className="font-headline font-bold text-sm">David Okoro</div>
                            <div className="text-xs text-on-surface-variant">Infrastructure Lead, NexaGen</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* CTA Section */}
    <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="hero-gradient rounded-xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tighter">Ready to Build Your Digital Legacy?</h2>
                <p className="text-white/70 text-lg mb-12">Start your technical consultation today and discover the architectural possibilities of your infrastructure.</p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <button className="bg-tertiary-fixed-dim text-primary-container px-10 py-4 rounded-md font-headline font-extrabold">Schedule Discovery Call</button>
                    <button className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-md font-headline font-extrabold backdrop-blur-sm">View Case Studies</button>
                </div>
            </div>
            {/* Abstract Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0 100 L100 0 L100 100 Z" fill="white"></path>
                </svg>
            </div>
        </div>
    </section>
    </div>
  );
}

export default Home;
