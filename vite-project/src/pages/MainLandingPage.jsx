import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Spline from '@splinetool/react-spline';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // For LinkedIn and GitHub icons
import Navbar from "../components/Navbar";
import App, { HorizontalScrollCarousel } from "../components/Marquee";
import Example from "../components/Marquee";
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
    Aos.init({ duration: 3000 });

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
    <div className="relative flex flex-col min-h-screen">
      {/* Main Landing Page Section */}
      
      <div className="fixed inset-0 w-full h-full">
        <Spline scene="https://prod.spline.design/su6zZK3bihWlIOZy/scene.splinecode" />
      </div>
       <div className="mt-8 z-10 fixed flex gap-1 bottom-4 left-2">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-2xl hover:text-blue-500" />
          </a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-2xl hover:text-gray-500" />
          </a>
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
      <div className="z-20 w-full h-full mt-40 mr-30" data-aos="zoom-out">
            <iframe
              className=" w-60 h-60 "
              src="https://lottie.host/embed/a1a4a5eb-7c2e-48e4-a5af-55049d0c9a34/mW3cqk9SlK.json"
              title="Lottie Animation"
            ></iframe>
        </div>
        
      </div>

      {/* Additional Section */}
      <div className="h-screen flex flex-col gap-20 text-white">
        <span>Works</span>
        <div className="z-10 flex flex-col" data-aos="fade-in">
          <div id="inner-text">I Design</div>
          <div id="text">captivating UI interactions that enhance user experiences.</div>
        </div>
      </div>
      <div className="relative flex flex-col justify-bottom h-screen text-white" data-aos="fade-in" >
         <div id="text2" className="absolute text-6xl">Projects</div>
         <div id="inner-text2" className="absolute">Explore my projects, where I'm pushing boundaries and Below was my Work</div>
      </div>

      <div className="h-screen flex flex-col text-white">
         <Example/>
      </div>
      <div className="h-screen flex flex-col text-white">

      </div>
      <div className="h-screen flex flex-col text-white">

      </div>
      <div className="relative flex flex-col justify-bottom h-screen text-white" data-aos="fade-in" >
         <div id="text3" className="absolute text-6xl">Participations</div>
         <div id="inner-text3" className="absolute">Smart India Hackathon (SIH) 2023 | Noida
Participant Advanced to the finals, demonstrating strong problem-solving skills and the ability to deliver impactful solutions under pressure.
Gained valuable experience in cybersecurity, software development, and teamwork while networking with industry experts.</div>
      </div>
       <div className="h-screen flex flex-col text-white">
        <span>About</span>
      </div>
    </div>
  );
};

export default MainLandingPage;
