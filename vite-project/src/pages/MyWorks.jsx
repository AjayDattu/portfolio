import React from 'react';
import Spline from '@splinetool/react-spline';
import Navbar from '../components/Navbar';

function MyWorks() {
  return (
    <div className="felx flex-col relative w-full h-screen bg-black">
    <Navbar/>
      {/* Spline Scene */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/yK3pXCvApz7z5xpR/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default MyWorks;
