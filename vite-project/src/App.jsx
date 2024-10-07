import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RocketLaunchPage from './pages/RocketLaunchPage';
import MainLandingPage from './pages/MainLandingPage';
import MyWorks from './pages/MyWorks';
import Navbar from './components/Navbar';
import Resume from './pages/Resume';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Cursor from './components/cursor';
import { AudioProvider } from './context/Audio';
function App() {
  
  return (
    <Router>
      {/* Custom cursor component */}
      
      {/* Main content routed */}
      <Routes>
        <Route path="/" element={<RocketLaunchPage />} />
        <Route path="/main-landing" element={<MainLandingPage />} />
        <Route path="/MyWorks" element={<MyWorks />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
