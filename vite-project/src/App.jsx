import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RocketLaunchPage from './pages/RocketLaunchPage';
import MainLandingPage from './pages/MainLandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RocketLaunchPage />} />
        <Route path="/main-landing" element={<MainLandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
