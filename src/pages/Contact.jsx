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
                    <option>Cloud Infrastructure</option>
                    <option>Cybersecurity Audit</option>
                    <option>Enterprise Architecture</option>
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
