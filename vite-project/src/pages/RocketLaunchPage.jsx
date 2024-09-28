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
    Aos.init({ duration: 9000 });
  }, []);

  const handleClick = () => {
      navigate("/main-landing"); 
  };

  return (
    <div className="relative h-screen g-20 w-screen p-20" data-aos="fade-in">
      <div className="text-2xl text-white">
        Ajay Dattu
      </div>
      <div className="text-1xl text-white">
        V-1.0
      </div>
      <div className="absolute hell">
         <button className="button-89 w-20 " onClick={handleClick}>Enter</button>
      </div>
      </div>
  );
};

export default RocketLaunchPage;
