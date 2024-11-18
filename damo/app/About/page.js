// pages/index.js
'use client'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BoxReveal from '@/components/ui/box-reveal';
import './about.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import QuoteFrame from '@/components/ui/ImageFrame';
import { FaGraduationCap, FaUniversity, FaMapMarkerAlt } from 'react-icons/fa';
import Meteors from '@/components/ui/meteors';
import Particles from '@/components/ui/particles';
import { SmoothScrollHero } from '@/components/ui/Skills';
import Entry from '../Entry/page';
import HeroVideoDialog from '@/components/ui/hero-video-dialog';

gsap.registerPlugin(ScrollTrigger);

const ColorSections = () => {
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
          duration: 1,
        }),
        onLeave: () => gsap.to('main', {
          backgroundColor: '#fef9ef',
          duration: 1,
        }),
        onLeaveBack: () => gsap.to('main', {
          backgroundColor: '#fef9ef',
          duration: 1,
        }),
        onEnterBack: () => gsap.to('main', {
          backgroundColor: color,
          duration: 1,
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

  return (
    <main className="root">
      <section data-color="#000" className="section flex flex-col items-center justify-center w-full h-full">
         <div className='w-full'><Entry/></div>
         <SmoothScrollHero/> 
      </section>
       <section data-color="#fff" className="relative section h-screen flex items-center justify-center s-4  p-20" id='e'>
         <div className="relative">
          <HeroVideoDialog
            className="dark:hidden block"
            animationStyle="from-center"
            videoSrc="https://youtu.be/Rpb-2Agwu0o?si=QkuklUoROi9BBmGh"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="https://youtu.be/Rpb-2Agwu0o?si=QkuklUoROi9BBmGh"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
            thumbnailAlt="Hero Video"
          />
        </div>
      </section>
    </main>
  );
};

export default ColorSections;