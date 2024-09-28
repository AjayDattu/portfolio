import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RocketLaunchPage from './pages/RocketLaunchPage';
import MainLandingPage from './pages/MainLandingPage';
import MyWorks from './pages/MyWorks';
import Navbar from './components/Navbar';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RocketLaunchPage />} />
        <Route path="/main-landing" element={<MainLandingPage />} />
        <Route path="/MyWork" element={<MyWorks />} />
        <Route path="/Resume" element={<Resume/>} />
      </Routes>
    </Router>
  );
}

export default App;
