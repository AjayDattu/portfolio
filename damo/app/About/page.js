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

  return (
    <main className="root">
      <section id="id" data-color="#000" className="relative section min-h-screen flex items-center justify-center s-1">
      <div>
      <Particles
          className="absolute inset-0"
          quantity={1000}
          ease={80}
          color={"#ffffff"}
          refresh
        />
        <Meteors number={4} />
        <iframe className="absolute right-0 top-0 w-[50%] h-full" src="https://lottie.host/embed/d9d30006-a4b0-4134-84ec-c9ead95d03cb/vEe1dsNi31.json"></iframe>
          <div className="absolute left-10 bottom-28 flex flex-col">
              <div className="text-[#fff] text-1xl font-bold">
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <p className="text-xl font-semibold">
                      I am from India<span className="text-[#5046e6]">.</span>
                    </p>
                </BoxReveal>
              </div>
              <div className="text-[#455CE9] text-4xl font-bold">
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <p className="text-5xl font-semibold" id="h">
                    Everyone Call me Damu<span className="text-[#5046e6]">.</span>
                    </p>
                </BoxReveal>
              </div>
          </div>
         </div> 
      </section>
      <div className="relative section min-h-screen flex items-center justify-center s-2 bg-black">
      <Particles
        className="absolute inset-0"
        quantity={1000}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <Meteors number={4} />
         <div className=" text-[300px] w-full text-[yellow]" data-aos="zoom-in" id="h">
                <iframe className="absolute w-[30%] h-[50%] left-0 top-0" src="https://lottie.host/embed/2b86e896-558c-4255-9f53-16f715871ff8/lqLhvKteyP.json"/> 
                <div className='md:text-[100px] lg:text-[300px]'>Education</div>
         </div>
      </div>
     <div  className="relative section h-screen flex items-center justify-center s-3 italic bg-black" id='e'>
        <Particles
        className="absolute inset-0"
        quantity={500}
        ease={80}
        color={"#ffffff"}
        refresh
      />
        <iframe className="absolute w-[30%] h-[50%] left-0 top-0" src="https://lottie.host/embed/d97f9e0f-2597-4c14-aea3-e8515f3677ff/1bPvzvC4RV.json"></iframe>
        <div className="flex flex-col text-white h-full w-full justify-center items-center p-8 gap-7">
          <div className="text-5xl flex items-center mb-4 gap-6" data-aos="fade-right">
            <FaGraduationCap className="mr-2 text-6xl" />
            B.Tech in Computer Science
          </div>
          <div className="text-8xl flex items-center mb-2" data-aos="fade-left">
            <FaUniversity className="mr-2 text-6xl" />
            SRKR Engineering College
          </div>
          <div className="flex items-center" data-aos="fade-in">
            <FaMapMarkerAlt className="mr-2 text-4xl" />
            Bhimavaram 2022-2025
          </div>

        </div>
      </div>
      <div data-color="#000" className="relative section h-screen flex items-center justify-center s-4 gpa-10 bg-black  " id='e'>
       <Particles
        className="absolute inset-0"
        quantity={1000}
        ease={80}
        color={"#ffffff"}
        refresh
      />
        <iframe className="absolute w-[40%] h-[50%] right-0 top-0" src="https://lottie.host/embed/d3fb42eb-a3cc-48f5-a4bd-b48a76571464/2P4atuQkCZ.json"></iframe>
      
        <div className="flex flex-col text-white h-full w-full justify-center items-center p-8 gap-7">
          <div className="text-5xl flex items-center mb-4" data-aos="fade-left">
            <FaGraduationCap className="mr-2 text-6xl" />
            Diploma in Computer Science
          </div>
          <div className="text-8xl flex items-center mb-2" data-aos="fade-right">
            <FaUniversity className="mr-2 text-6xl" />
            AANM VVRSR POLYTECHNIC
          </div>
          <div className="flex  w-full text-center items-center justify-center">
            <FaMapMarkerAlt className="mr-2 text-4xl" />
            Gudlavalleru 2019-2022
          </div>
        </div>
      </div>
       <section data-color="#05377b" className="relative section h-screen flex items-center justify-center s-4 gpa-10" id='e'>
       <Particles
        className="absolute inset-0"
        quantity={10}
        ease={80}
        color={"#ffffff"}
        refresh
      />
        <div className="flex flex-col text-white h-full w-full justify-center items-center p-8 gap-7">
          <div className="text-5xl flex items-center mb-4" data-aos="fade-left">
            <FaGraduationCap className="mr-2 text-6xl" />
            Diploma in Computer Science
          </div>
          <div className="text-8xl flex items-center mb-2" data-aos="fade-right">
            <FaUniversity className="mr-2 text-6xl" />
            AANM VVRSR POLYTECHNIC
          </div>
          <div className="flex  w-full text-center items-center justify-center">
            <FaMapMarkerAlt className="mr-2 text-4xl" />
            Gudlavalleru 2019-2022
          </div>
        </div>
      </section>
    </main>
  );
};

export default ColorSections;