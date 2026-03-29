import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  const activeLinkClass = "text-cyan-500 border-b-2 border-cyan-500 pb-1";
  const inactiveLinkClass = "text-slate-600 hover:text-slate-900 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-slate-100/50";

  return (
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm navbar">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
          <div className="text-xl font-bold tracking-tighter text-slate-900 font-headline">TechArch Consult</div>
          <div className="hidden md:flex items-center space-x-8 font-headline font-semibold tracking-tight">
            <NavLink className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
                  to="/about">About</NavLink>
            <NavLink className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
                  to="/team">Team</NavLink>
            <NavLink className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
                  to="/contact">Contact</NavLink>
          </div>
          <button
              className="bg-primary-container text-on-primary px-6 py-2.5 rounded-md font-headline font-semibold text-sm transition-all hover:opacity-90 active:scale-95">
            Get a Quote
          </button>
        </div>
      </nav>
  // <nav className="navbar">
  //   <ul>
  //     <li>
  //       <Link className="text-blue-500" to="/">Home</Link>
  //     </li>
  //     <li>
  //       <Link to="/about">About</Link>
  //     </li>
  //   </ul>
  // </nav>
)
  ;
}

export default Navbar;
