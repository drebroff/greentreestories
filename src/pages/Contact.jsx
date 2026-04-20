import {useState, useEffect} from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in Leaflet with React/Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

function InvalidateMap() {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [map]);
  return null;
}

function Contact() {
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [serviceInterest, setServiceInterest] = useState("Cloud Infrastructure");
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (workEmail.length > 64) {
      setErrorMessage("Work Email must be less than 64 characters.");
      setIsErrorModalOpen(true);
      return;
    }
    if (serviceInterest.length > 128) {
      setErrorMessage("Service Interest must be less than 128 characters.");
      setIsErrorModalOpen(true);
      return;
    }
    if (message.length > 1024) {
      setErrorMessage("Message must be less than 1024 characters.");
      setIsErrorModalOpen(true);
      return;
    }

    try {
      const response = await fetch(
        "https://69cd04efddc3cabb7bd1ee9e.mockapi.io/api/v1/Team",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            Name: fullName,
            work_email: workEmail,
            service_interest: serviceInterest,
            message: message,
          }),
        }
      );

      if (response.ok) {
        setIsModalOpen(true);
        setFullName("");
        setWorkEmail("");
        setServiceInterest("Cloud Infrastructure");
        setMessage("");
      } else {
        console.error("Failed to send inquiry.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface-variant">Full Name</label>
                    <input className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-tertiary-fixed-dim rounded-md px-4 py-3 placeholder:text-on-surface-variant/40" placeholder="John Doe" value={fullName} type="text" onChange={(e) => setFullName(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface-variant">Work Email</label>
                    <input className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-tertiary-fixed-dim rounded-md px-4 py-3 placeholder:text-on-surface-variant/40" placeholder="john@company.com" type="email" value={workEmail} onChange={(e) => setWorkEmail(e.target.value)} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant">Service Interest</label>
                  <select className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-tertiary-fixed-dim rounded-md px-4 py-3 text-on-surface-variant" value={serviceInterest} onChange={(e) => setServiceInterest(e.target.value)}>
                    <option>Drupal Infrastructure</option>
                    <option>Magento 2 Audit</option>
                    <option>Powershell Scripts</option>
                    <option>Managed IT Services</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant">Message</label>
                  <textarea className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-tertiary-fixed-dim rounded-md px-4 py-3 placeholder:text-on-surface-variant/40" placeholder="Tell us about your project..." rows="4" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <button className="w-full bg-primary-container text-on-primary font-bold py-4 rounded-md shadow-lg hover:shadow-cyan-900/10 transition-all flex items-center justify-center gap-2 group cursor-pointer" type="submit">
                  Send Inquiry
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">📧</span>
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
                      <p className="font-semibold text-white">Klaipeda Office</p>
                      <p className="text-on-primary-container text-sm leading-relaxed">Beržų g. 12, Klaipėda<br/>LT-92259, Lithuania</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-tertiary-fixed-dim">call</span>
                    <p className="text-sm">+370 (650) 28 101</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-tertiary-fixed-dim">mail</span>
                    <p className="text-sm">dmitrij.rebrov@inbox.lt</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 opacity-10">
                <span className="material-symbols-outlined text-[160px]" style={{fontVariationSettings: "'FILL' 1"}}>architecture</span>
              </div>
            </div>
            {/* Map Placeholder */}
            <div className={`rounded-xl overflow-hidden relative group border border-outline-variant/15 transition-all duration-500 ${isModalOpen || isErrorModalOpen ? 'blur-sm grayscale' : ''}`} style={{ height: '400px' }}>
              <MapContainer center={[55.7068, 21.13912]} zoom={13} style={{ height: '100%', width: '100%' }}>
                <InvalidateMap />
                <TileLayer
                  // attribution='&copy; <a href="https://www.seznam.cz/">Seznam.cz, a.s.</a>'
                  url="https://api.mapy.com/v1/maptiles/basic/256/{z}/{x}/{y}?apikey=MbVDroiESgIhbZJZ5BvnTwkmfmR8tu0xUDLNhx2kQ0g"
                />
                <Marker position={[55.7068, 21.13912]}>
                  <Popup>
                    Greentreestories Klaipėda Office
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            {/* Quick Links/Socials Card */}
            <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/15">
              <h4 className="font-headline font-bold mb-4">Follow Technical Updates</h4>
              <div className="flex gap-4"><a
                  className="w-10 h-10 rounded-md bg-white flex items-center justify-center hover:bg-tertiary-fixed-dim transition-colors shadow-sm group"
                  href="https://www.linkedin.com/in/dmitrij-rebrov-0465378b/"
                  aria-label="LinkedIn"
                  title="LinkedIn"
              >
                  <svg
                      className="w-5 h-5 text-primary-container group-hover:text-white transition-colors"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                  >
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.98H4.8V24H.22V8.98zM8.83 8.98h4.39v2.05h.06c.61-1.16 2.1-2.39 4.32-2.39 4.62 0 5.47 3.04 5.47 6.99V24h-4.58v-6.71c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.54V24H8.83V8.98z" />
                  </svg>
              </a>
                  <a
                      className="w-10 h-10 rounded-md bg-white flex items-center justify-center hover:bg-tertiary-fixed-dim transition-colors shadow-sm group"
                      href="https://github.com/drebroff"
                      aria-label="GitHub"
                      title="GitHub"
                  >
                      <svg
                          className="w-5 h-5 text-primary-container group-hover:text-white transition-colors"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                      >
                          <path d="M12 .5C5.73.5.9 5.47.9 11.82c0 5.08 3.29 9.38 7.86 10.89.58.11.79-.26.79-.57v-2.1c-3.2.71-3.88-1.37-3.88-1.37-.52-1.36-1.27-1.73-1.27-1.73-1.04-.73.08-.72.08-.72 1.15.08 1.76 1.19 1.76 1.19 1.02 1.78 2.68 1.26 3.34.96.1-.76.4-1.26.72-1.55-2.56-.3-5.25-1.32-5.25-5.88 0-1.3.46-2.36 1.22-3.19-.12-.3-.53-1.52.12-3.16 0 0 1-.33 3.28 1.22a11.1 11.1 0 0 1 5.97 0c2.28-1.55 3.28-1.22 3.28-1.22.65 1.64.24 2.86.12 3.16.76.83 1.22 1.89 1.22 3.19 0 4.57-2.69 5.58-5.26 5.87.41.36.77 1.08.77 2.18v3.23c0 .31.21.69.8.57 4.56-1.51 7.85-5.81 7.85-10.89C23.1 5.47 18.27.5 12 .5z" />
                      </svg>
                  </a>
                  <a
                      className="w-10 h-10 rounded-md bg-white flex items-center justify-center hover:bg-tertiary-fixed-dim transition-colors shadow-sm group"
                      href="https://rekvizitai.vz.lt/en/company/majestic_solutions/"
                      aria-label="Rekvezitai.lt"
                      title="Rekvezitai.lt"
                  >
                      <svg
                          className="w-5 h-5 text-primary-container group-hover:text-white transition-colors"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                      >
                          <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm2 4v2h10V7H7zm0 4v2h10v-2H7zm0 4v2h6v-2H7z" />
                      </svg>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-2xl border border-outline-variant/15 max-w-sm w-full text-center space-y-6 animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 bg-tertiary-fixed-dim/20 rounded-full flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl">check_circle</span>
            </div>
            <div>
              <h3 className="font-headline text-2xl font-bold text-primary-container">Success!</h3>
              <p className="text-on-surface-variant mt-2 leading-relaxed">Your information sent sucessfully</p>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-primary-container text-on-primary font-bold py-3 rounded-md shadow-lg hover:shadow-cyan-900/10 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Error Modal */}
      {isErrorModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-2xl border border-error/20 max-w-sm w-full text-center space-y-6 animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-error text-4xl">error</span>
            </div>
            <div>
              <h3 className="font-headline text-2xl font-bold text-error">Validation Error</h3>
              <p className="text-on-surface-variant mt-2 leading-relaxed">{errorMessage}</p>
            </div>
            <button
              onClick={() => setIsErrorModalOpen(false)}
              className="w-full bg-error text-on-error font-bold py-3 rounded-md shadow-lg hover:shadow-red-900/10 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
