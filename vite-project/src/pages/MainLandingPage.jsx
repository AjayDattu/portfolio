import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Spline from '@splinetool/react-spline';

// Import the Orbitron font using @import in a CSS-in-JS block (optional)
const MainLandingPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="relative bg-black" style={{ height: '100vh' }} data-aos="zoom-out">
      <Spline
        scene="https://prod.spline.design/su6zZK3bihWlIOZy/scene.splinecode"
        className="fixed top-0 left-0 w-full h-full z-10"
      />
      <h1 className="font-orbitron text-5xl md:text-7xl text-teal-300 uppercase tracking-widest shadow-lg">
        Centauri – Futuristic
      </h1>
    </div>
  );
};

export default MainLandingPage;
