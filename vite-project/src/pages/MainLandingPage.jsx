import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Spline from '@splinetool/react-spline';
import Particles from "../components/Particlesdemo";
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // For LinkedIn and GitHub icons

const MainLandingPage = () => {
  const navigate = useNavigate(); // Import and create an instance of navigate

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleClick = () => {
    navigate("/MyWork");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black" data-aos="zoom-out">
      {/* Particles Background with z-index lower than Spline */}
      <div className="absolute inset-0 z-0">
        <Particles />
      </div>

      {/* Spline Scene */}
      <div className="absolute inset-0 z-10">
        <Spline
          scene="https://prod.spline.design/su6zZK3bihWlIOZy/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Button for navigation */}
      <button className="absolute bottom-2 z-20 text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded" onClick={handleClick}>
        Click Here
      </button>

      {/* Heading positioned in the top-left corner */}
      <div className="absolute top-4 left-4 z-20">
        <div className="text-left">
          <p className="text-white text-2xl">Ajay Dattu</p>
        </div>
      </div>

      {/* Dropping texts animation */}
      <div className="flex gap-2 text-center text-white text-5xl z-20">
        <h1 className="text-5xl">I am</h1>
        <div className="dropping-texts overflow-hidden h-12">
          <div className="text-5xl">Developer</div>
          <div className="text-5xl">Designer</div>
          <div className="text-5xl">Coder</div>
          <div className="text-5xl">Youtuber</div>
        </div>
      </div>

      {/* Links to other pages (side links) */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white text-lg space-y-4">
        <a href="#works" className="hover:underline">My Works</a>
        <a href="#resume" className="hover:underline">My Resume</a>
        <a href="#certificates" className="hover:underline">My Certificates</a>
      </div>

      {/* Social media icons (LinkedIn, GitHub) in bottom-left corner */}
      <div className="absolute bottom-4 left-4 z-20 flex space-x-4">
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white text-2xl hover:text-blue-500" />
        </a>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white text-2xl hover:text-gray-500" />
        </a>
      </div>
    </div>
  );
};

export default MainLandingPage;
