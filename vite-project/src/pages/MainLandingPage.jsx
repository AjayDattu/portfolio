import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Spline from '@splinetool/react-spline';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // For LinkedIn and GitHub icons

const MainLandingPage = () => {
  const navigate = useNavigate(); // Import and create an instance of navigate
  const [currentText, setCurrentText] = useState(0); // Track the current text index

  // Array of dynamic texts for the portfolio
  const texts = [
    "They call me Damo.",
    "I research, I code, I create.",
    "Every line solves a problem.",
    "Ideas to reality, that’s my job.",
  ];

  useEffect(() => {
    Aos.init({ duration: 2000 });

    // Change the text dynamically every 3 seconds
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 3010);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const handleClick = () => {
    navigate("/MyWork");
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-black">
      {/* Main Landing Page Section */}
      <div className="fixed inset-0 w-full h-full">
        <Spline
          scene="https://prod.spline.design/su6zZK3bihWlIOZy/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      
      {/* Content on top of the Spline object */}
      <div className="h-screen flex flex-col items-center mb-4 text-white">
        <div className="flex flex-col space-y-4">
          {/* AJAY Text */}
          <div>
            <span>DAB</span>
          </div>

          {/* Dropping dynamic texts */}
          <div className="text-white text-xl">
            <p>{texts[currentText]}</p>
          </div>
        </div>

        {/* Social media icons */}
        <div className="mt-8 z-10 flex space-x-4">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-2xl hover:text-blue-500" />
          </a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-2xl hover:text-gray-500" />
          </a>
        </div>
        
        <div className="mt-8 text-center">
          <button
            onClick={handleClick}
            className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-800 transition-all"
          >
            Explore My Work
          </button>
        </div>
      </div>

      {/* Additional Section */}
      <div className="h-screen flex flex-col justify-center items-center text-white">
        <h2 className="text-4xl mb-4">Welcome to the Next Section</h2>
        <p className="text-lg">Scroll to explore more content.</p>
      </div>
    </div>
  );
};

export default MainLandingPage;
