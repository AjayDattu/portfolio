"use client";
import MainText from '@/components/MainText';
import Svg from '@/components/ui/Svg';
import React from 'react';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { FlipWords } from '@/components/ui/flip-words';
import { SmoothScrollHero } from '@/components/ui/Skills';
import Spline from '@splinetool/react-spline/next';
import CustomCursor from '@/components/ui/CustomCursor';
import "./style.css"
import { DragCards } from '@/components/ui/DragCards';
import { TimelineDemo } from '@/components/ui/Interships';
function Page() {
  const words = ["Frontend Developer", "Coder", "Youtuber", "Designer"];
  return (
    <div className="bg-black h-full flex flex-col items-center justify-center ">
      <CustomCursor/>
      <BackgroundBeamsWithCollision className="flex flex-col gap-6 text-left items-center px-4">
        <Svg />
        <div className="w-full flex flex-col px-[400px] sm:flex-row items-center sm:items-start text-red-500 gap-3 sm:gap-6 md:gap-9" id='h'>
          <span className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl">a</span>
          <FlipWords 
            words={words} 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
          />
        </div>
      </BackgroundBeamsWithCollision>
      <div className='w-full font-sans'>
      <SmoothScrollHero/>
      </div>
      <div className='w-full'>
        <DragCards/>
      </div>
    </div>
  );
}

export default Page;
