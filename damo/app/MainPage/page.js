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
import { VelocityText } from './Bento';
import TextRevealByWord from '@/components/ui/text-reveal';
import { AnimatedTestimonialsDemo, StickyScrollRevealDemo } from '@/components/ui/WorkExperience';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
function Page() {
  const words = ["Frontend Developer", "Coder", "Youtuber", "Designer"];
  const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
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
      <VelocityText/>
      </div>
       <StickyScroll/>
    </div>
  );
}

export default Page;
