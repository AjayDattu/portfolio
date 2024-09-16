import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Spline from '@splinetool/react-spline';
import Particles from "../components/Particlesdemo";
import { SlightFlip } from "@/lib/components/core/default/slightflip";

const MainLandingPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

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

      {/* Heading centered with flex */}
      <div className="z-20">
        <SlightFlip>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Hello</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Additional description or content goes here.</p>
        </div>
      </SlightFlip>
      </div>
    </div>
  );
};

export default MainLandingPage;
