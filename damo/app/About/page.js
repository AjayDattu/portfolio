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
      <Particles
        className="absolute inset-0"
        quantity={1500}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <Meteors number={4} />
      <iframe className="absolute w-[30%] h-[50%] left-0 top-0" src="https://lottie.host/embed/eb811b45-ddc8-4eb0-a7a2-a185ad84b070/671l90tNOg.json"></iframe>
        
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
      </section>
      <section data-color="#000" className="relative section min-h-screen flex items-center justify-center s-2">
      <Particles
        className="absolute inset-0"
        quantity={1000}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <Meteors number={4} />
         <div className=" text-[300px] w-full text-[yellow]" data-aos="zoom-in" id="h">Education</div>
      </section>
     <section data-color="#000" className="relative section h-screen flex items-center justify-center s-3 italic" id='e'>
        <Particles
        className="absolute inset-0"
        quantity={500}
        ease={80}
        color={"#ffffff"}
        refresh
      />
        <iframe className="absolute top-10 w-full h-full" src="https://lottie.host/embed/a5688871-357c-4012-b8b5-ca6e080cef6d/HtcTX1wUF8.json"></iframe>
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
      </section>
      <section data-color="#000" className="relative section h-screen flex items-center justify-center s-4 gpa-10" id='e'>
       <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
        <iframe className="absolute right-0 top-0 w-[900px] h-[900px]" src="https://lottie.host/embed/28b481fe-a33e-42d0-bae4-57593b456d0d/rU3AlLfT4M.json"></iframe>
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