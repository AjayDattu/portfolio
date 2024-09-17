import React from 'react';
import Spline from '@splinetool/react-spline';

function MyWorks() {
  return (
    <div className="relative w-full h-screen bg-black">
      {/* Spline Scene */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/yK3pXCvApz7z5xpR/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Text overlay */}
      <div className="absolute inset-0 flex-row h-full items-center justify-center z-10 p-4 text-left">
        <b className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold">
          Building the future,
         while imagining worlds beyond the stars.
        </b>
        <b className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold ">
          Building the future,
         while imagining worlds beyond the stars.
        </b>
      </div>
    </div>
  );
}

export default MyWorks;
