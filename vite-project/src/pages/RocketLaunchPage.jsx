import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/button.css";
import Meteors from "../components/Meteros"; // Import Meteors component
import { Cobe } from "../components/Coba"; // Import Cobe component
import Welcome from "../components/Changetext"; // Import Welcome (text change effect)
import { useAudio } from "../context/Audio"; // Custom hook for global audio
import sound from '../assets/button-124476.mp3'
const RocketLaunchPage = () => {
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef(null);

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  const [value,setvalue] = useState(0);
  useEffect(() => {
    Aos.init({ duration: 9000 });
  }, []);
  useEffect(()=>{
     new Audio(sound).play();
  },[value])

  const handleClick = () => {
    // Navigate to the main landing page and play the music
    setvalue(value+1);
    navigate("/main-landing");
  };

  return (
    <div className="relative h-screen g-20 w-screen p-20" data-aos="fade-in">
     <audio ref={audioRef}>
        <source src={sound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="text-2xl text-white">
        Ajay Dattu
      </div>
      <div className="text-1xl text-white">
        V-1.0
      </div>
      
      {/* Positioned enter button */}
      <div className="absolute hell">
        <button className="button-89 w-20" onClick={handleClick}>
          Enter
        </button>
      </div>
    </div>
  );
};

export default RocketLaunchPage;
