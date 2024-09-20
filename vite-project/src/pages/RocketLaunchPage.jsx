import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spline from '@splinetool/react-spline';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../styles/button.css';
  // Import the Meteors component
  import Meteors from "../components/Meteros";
import { Cobe } from "../components/Coba";
import MyWorks from "./MyWorks";
import MainLandingPage from "./MainLandingPage";
import Welcome from "../components/Changetext";


const RocketLaunchPage = () => {
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const handleClick = () => {
    setShowVideo(true);
    setTimeout(() => {
      navigate("/main-landing");
    }, 3500);  // Transition to the landing page after 3.5 seconds
  };

  return (
    <div className="relative flex items-center justify-center h-screen w-screen bg-black overflow-hidden">
      {/* Meteors Background */}
        {/* You can adjust the number of meteors */}
       <Meteors number={20} />
      {!showVideo ? (
        <div>
        <Welcome/>
        <button className="btn" onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>Launch</span>
        </button>
        </div>
      ) : (
  
        <div className="absolute inset-0 flex items-center justify-center w-full h-full" data-aos="fade-up">
          <iframe
            src="https://lottie.host/embed/690163b8-d621-4234-8718-ea618616d463/cIDMYiYeod.json"
            className="w-full h-full"
            style={{ border: 'none' }}
            title="Rocket Animation"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default RocketLaunchPage;
