import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Technology from './pages/Technology';
import Consulting from './pages/Consulting';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/technology/infrastructure" element={<Technology />} />
          <Route path="/technology/software" element={<Technology />} />
          <Route path="/technology/digital" element={<Technology />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/consulting/workforce" element={<Consulting />} />
          <Route path="/consulting/payroll" element={<Consulting />} />
          <Route path="/consulting/training" element={<Consulting />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;