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
    <div className="fixed inset-0 flex items-center justify-center bg-black " data-aos="zoom-out">
      {/* Particles Background with z-index lower than Spline */}
     
      <div className="absolute inset-0 z-5 text-white text-center">
        <Particles />
      </div>
      <div className="absolute inset-0 z-9 text-center mt-19">
        <span>AJAY</span>
      </div>
      {/* Spline Scene */}
      <div className="absolute inset-0 z-10">
        <Spline
          scene="https://prod.spline.design/su6zZK3bihWlIOZy/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Button for navigation */}
      {/* Heading positioned in the top-left corner */}
      <div className="absolute top-4 right-4 z-20">
        <div className="text-left">
          <h1 className="text-white text-2xl">Ajay Dattu Since'23</h1>
        </div>
      </div>

      {/* Dropping texts animation */}
      <div className="flex gap-2 mr-20 mb-20 text-white text-1.5xl z-20">
        <p className="text-1xl">Play with react is one my hobbies</p>
        <div>
          
        </div>
      </div>

      {/* Links to other pages (side links) */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white text-lg flex flex-col space-y-4">
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
