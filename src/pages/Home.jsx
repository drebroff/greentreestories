import { useEffect, useState } from "react";
import helloKittyImage from "../assets/avatars/icons8-hello-kitty-80.png";
import marioImage from "../assets/avatars/icons8-super-mario-64.png";
import homerImage from "../assets/avatars/icons8-homer-simpson-80.png";

function Home() {
    const [textData, setTextData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadTextData = async () => {
            try {
                const response = await fetch(
                    "https://69cd04efddc3cabb7bd1ee9e.mockapi.io/api/v1/Home"
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
        console.log("textData changed:",  textData);
    }, [textData]);
  return (
    <div>

      <section className="relative min-h-[870px] flex items-center overflow-hidden bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10">
              <div className="md:col-span-7 space-y-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-label uppercase tracking-widest font-semibold">
                      <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
                      { textData[0]?.hero[0].badge}
                  </div>
                  <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-primary leading-[1.1]">
                      { textData[0]?.hero[0].title[0]} <br/>
                      <span className="text-primary-container opacity-90">{ textData[0]?.hero[0].title[1]}</span> <br/>
                      { textData[0]?.hero[0].title[2]}
                  </h1>
                  <p className="body-lg text-on-surface-variant max-w-xl leading-relaxed">
                      { textData[0]?.hero[0].description}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                      <button className="px-8 py-4 bg-primary-container text-on-primary rounded-md font-headline font-bold flex items-center gap-2 shadow-xl shadow-primary-container/20">
                          { textData[0]?.hero[0].buttons[0].label}
                          <span className="material-symbols-outlined">→</span>
                      </button>
                      <button className="px-8 py-4 bg-surface-container-high text-primary-container rounded-md font-headline font-bold">
                          { textData[0]?.hero[0].buttons[1].label}
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
                                  <div className="text-white text-2xl font-bold font-headline">{ textData[0]?.hero[0].stats[0].value}</div>
                                  <div className="text-white/70 text-xs font-label">{ textData[0]?.hero[0].stats[0].label}</div>
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
                <h2 className="font-headline text-4xl font-extrabold tracking-tight text-primary mb-6">{textData[0]?.["consulting-disciplines"]?.[0]?.title} </h2>
                <p className="text-on-surface-variant leading-relaxed">{textData[0]?.["consulting-disciplines"]?.[0]?.description}</p>
            </div>
            <div className="mt-6 md:mt-0">
                <a className="text-on-tertiary-container font-headline font-bold flex items-center gap-2 group" href="#">
                    {textData[0]?.["consulting-disciplines"]?.[0]?.link.label}
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">→</span>
                    <div className="h-[2px] bg-on-tertiary-container/30 absolute bottom-0 left-0 w-full group-hover:bg-on-tertiary-container transition-all"></div>
                </a>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Cloud Service */}
            <div className="md:col-span-8 bg-surface-container-high rounded-xl p-10 flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
                <div className="relative z-10">
                    <span className="material-symbols-outlined text-4xl text-primary-container mb-8" data-icon="cloud">{textData[0]?.["consulting-disciplines"]?.[0]?.services[0].key}</span>
                    <h3 className="font-headline text-3xl font-bold mb-4">{textData[0]?.["consulting-disciplines"]?.[0]?.services[0].title}</h3>
                    <p className="text-on-surface-variant max-w-md"></p>
                </div>
                <div className="mt-8 relative z-10">
                    <div className="flex gap-2">
                        <span className="px-3 py-1 bg-white/50 rounded-full text-xs font-semibold text-on-secondary-container">{textData[0]?.["consulting-disciplines"]?.[0]?.services[0].tags[0]}</span>
                        <span className="px-3 py-1 bg-white/50 rounded-full text-xs font-semibold text-on-secondary-container">{textData[0]?.["consulting-disciplines"]?.[0]?.services[0].tags[1]}</span>
                        <span className="px-3 py-1 bg-white/50 rounded-full text-xs font-semibold text-on-secondary-container">{textData[0]?.["consulting-disciplines"]?.[0]?.services[0].tags[2]}</span>
                    </div>
                </div>
                <img alt="Abstract digital cloud networking" className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-10 grayscale group-hover:opacity-20 transition-opacity" data-alt="Blue and white digital fiber optic network lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDexG36Stp9clBXVA89TwY0MWVjSndiItP16ypA4-K7cLrtvuH9O8-vSNbIOu2gcn7C2LO4aOWPO3md7P7xfWCfH5Omtz0YJyp2JiKRopbA5-G4cFM-xK2rn4pecaU63jkdD2m-d41OCah1pEoFHNtuQv345Ub8UPdKtz9enw5ogpmiPmXD3srFKJu5WSoj1OwO5Qrh2U0ycDZD7ITJrTYW8DaqBBzvPIvq1kjiQ8H6w23hr-5kXi2i7XV2DBDNYXlyHXRHVXz7tQ3e"/>
            </div>
            {/* Security Service */}
            <div className="md:col-span-4 bg-primary-container text-on-primary rounded-xl p-10 flex flex-col justify-between min-h-[400px]">
                <div>
                    <span className="material-symbols-outlined text-4xl text-tertiary-fixed-dim mb-8" data-icon="shield">{textData[0]?.["consulting-disciplines"]?.[0]?.services[1].key}</span>
                    <h3 className="font-headline text-2xl font-bold mb-4">{textData[0]?.["consulting-disciplines"]?.[0]?.services[1].title}</h3>
                    <p className="text-on-primary-container leading-relaxed">{textData[0]?.["consulting-disciplines"]?.[0]?.services[1].description}</p>
                </div>
                <button className="w-full py-4 bg-surface-container-lowest/10 border border-white/20 rounded-md font-headline font-bold text-sm hover:bg-white/10 transition-colors">
                    {textData[0]?.["consulting-disciplines"]?.[0]?.services[1].buttonLabel}
                </button>
            </div>
            {/* Networking Service */}
            <div className="md:col-span-4 bg-white shadow-xl shadow-slate-200/50 rounded-xl p-10 flex flex-col justify-between min-h-[400px]">
                <div>
                    <span className="material-symbols-outlined text-4xl text-primary-container mb-8" data-icon="settings_ethernet">{textData[0]?.["consulting-disciplines"]?.[2]?.services[1].key}</span>
                    <h3 className="font-headline text-2xl font-bold mb-4">{textData[0]?.["consulting-disciplines"]?.[0]?.services[2].title}</h3>
                    <p className="text-on-surface-variant">{textData[0]?.["consulting-disciplines"]?.[0]?.services[2].description}</p>
                </div>
                <div className="space-y-4">
                    <div className="h-1 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-tertiary-fixed-dim w-[85%]"></div>
                    </div>
                    <div className="flex justify-between text-xs font-label font-bold text-on-surface-variant">
                        <span>{textData[0]?.["consulting-disciplines"]?.[0]?.services[2].footer[0]}</span>
                        <span>{textData[0]?.["consulting-disciplines"]?.[0]?.services[2].footer[1]}</span>
                    </div>
                </div>
            </div>
            {/* Data Visualization/KPI Service */}
            <div className="md:col-span-8 bg-surface-dim rounded-xl p-10 flex items-center justify-between overflow-hidden">
                <div className="max-w-xs">
                    <h3 className="font-headline text-2xl font-bold mb-4">{textData[0]?.["consulting-disciplines"]?.[0]?.services[3].title}</h3>
                    <p className="text-on-surface-variant text-sm">{textData[0]?.["consulting-disciplines"]?.[0]?.services[3].description}</p>
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
                        <div className="w-12 h-12 rounded-full bg-blue-100 overflow-hidden">
                            <img alt="Marcus Chen portrait" className="w-full h-full object-cover" data-alt="Professional headshot of a male executive" src={homerImage}/>
                        </div>
                        <div>
                            <div className="font-headline font-bold text-sm">Homer Simpson</div>
                            <div className="text-xs text-on-surface-variant">Safety Inspector, Springfield Nuclear Power Plant </div>
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
                        <div className="w-12 h-12 rounded-full bg-blue-100 overflow-hidden">
                            <img alt="Hello Kitty portrait" className="w-full h-full object-cover" data-alt="Professional headshot of a cat" src={helloKittyImage}/>
                        </div>
                        <div>
                            <div className="font-headline font-bold text-sm">Kitty White</div>
                            <div className="text-xs text-on-surface-variant">Art Director, Sanrio Company, Ltd.</div>
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
                        <div className="w-12 h-12 rounded-full bg-blue-100 overflow-hidden">
                            <img alt="David Okoro portrait" className="w-full h-full object-cover" data-alt="Professional headshot of a plumber" src={marioImage}/>
                        </div>
                        <div>
                            <div className="font-headline font-bold text-sm">Mario Mario</div>
                            <div className="text-xs text-on-surface-variant">Self employed, Plumber</div>
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
