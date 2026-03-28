import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
        <div className="text-red-500">Hello</div>

        <div className="min-h-screen bg-slate-900 text-red flex items-center justify-center">
            <h1 className="text-red-700 font-bold">Tailwind is working!</h1>
        </div>
    </Router>
  );
}

export default App;
