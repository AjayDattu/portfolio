"use client";
import MainText from '@/components/MainText';
import Svg from '@/components/ui/Svg';
import React, { useEffect } from 'react';
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
import VerticalTimelineComponent, { AnimatedTestimonialsDemo, StickyScrollRevealDemo } from '@/components/ui/WorkExperience';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import IconCloud from "@/components/ui/icon-cloud";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



 
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
function Page() {
   useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  
  useEffect(() => {
    const sections = gsap.utils.toArray('.section');

    sections.forEach((elem) => {
      const color = elem.getAttribute('data-color');
      ScrollTrigger.create({
        trigger: elem,
        start: 'top 5%',
        end: 'bottom 5%',
        markers: false,
        onEnter: () => gsap.to('main', {
          backgroundColor: color,
          duration: 1.4,
        }),
        onLeave: () => gsap.to('main', {
          backgroundColor: '#fef9ef',
          duration: 1.4,
        }),
        onLeaveBack: () => gsap.to('main', {
          backgroundColor: '#fef9ef',
          duration: 1.4,
        }),
        onEnterBack: () => gsap.to('main', {
          backgroundColor: color,
          duration: 1.4,
        }),
      });
    });

    // Cleanup ScrollTrigger instances on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const changeColor = () => {
    const section = document.getElementById('id');
    section.setAttribute('data-color', '#000000');
    console.log('change dark-mode');
    ScrollTrigger.refresh();
  };
  const words = ["Frontend Developer", "Coder", "Youtuber", "Designer"];
  return (
    <main className=" h-full flex flex-col items-center justify-center " data-aos="fade-in">
     <section data-color="#000" className="section flex flex-col items-center justify-center s-1">
      <CustomCursor/>
      <BackgroundBeamsWithCollision className="flex flex-col gap-6 text-left items-center px-4">
        <Svg />
        <div className="w-full flex flex-col px-[400px] sm:flex-row items-center sm:items-start text-red-500 gap-3 sm:gap-6 md:gap-9">
          <span className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl">a</span>
          <FlipWords 
            words={words} 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold "
          />
        </div>
      </BackgroundBeamsWithCollision>
      <div className='w-full font-sans'>
      <SmoothScrollHero/>
      </div>
      </section>
      <section data-color="#fff" className=" flex flex-col">
          <VelocityText/>
          <VerticalTimelineComponent/>
        </section>
    </main>
  );
}

export default Page;
