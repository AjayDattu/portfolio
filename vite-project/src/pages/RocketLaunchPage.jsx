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
      navigate("/main-landing"); 
  };

  return (
    <div className="relative flex items-center justify-center h-screen w-screen bg-black overflow-hidden">
     
      
        <button className="btn" onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>Explore(Damo)</span>
        </button>
      </div>
  );
};

export default RocketLaunchPage;
