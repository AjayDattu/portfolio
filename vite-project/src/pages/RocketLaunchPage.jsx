import React, { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Spline from '@splinetool/react-spline';
import Aos from 'aos';
import 'aos/dist/aos.css'

const RocketLaunchPage = () => {
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();
   useEffect(()=>{
        Aos.init({duration:500})
    },[])
  const handleClick = () => {
    setShowVideo(true);
    setTimeout(() => {
      navigate("/main-landing");
    }, 3500);  // Transition to the landing page after 5 seconds
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black">
      {!showVideo ? (
        <button
          onClick={handleClick}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition ease-in-out duration-500 transform hover:scale-105"
        >
          Launch Rocket
        </button>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center w-100" data-aos = "fade-up">
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
