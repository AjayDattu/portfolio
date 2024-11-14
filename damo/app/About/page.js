// pages/index.js
'use client'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BoxReveal from '@/components/ui/box-reveal';
import './about.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
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
      <section id="id" data-color="#040D12" className="relative section min-h-screen flex items-center justify-center s-1">
        <iframe className="absolute right-0 top-0 w-[900px] h-[900px]" src="https://lottie.host/embed/28b481fe-a33e-42d0-bae4-57593b456d0d/rU3AlLfT4M.json"></iframe>
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
                   Every Call me Damu<span className="text-[#5046e6]">.</span>
                  </p>
              </BoxReveal>
            </div>
         </div>
      </section>
      <section data-color="#000" className="section min-h-screen flex items-center justify-center s-2">
         <div className=" text-[300px] w-full text-[yellow]" data-aos="zoom-in" id="h">Education</div>
      </section>
      <section data-color="#5046e6" className="section min-h-screen flex items-center justify-center s-3">
        <div className="flex flex-col text-white h-full w-full justify-center items-center">
            <h1 className="text-5xl" id="e" data-aos="fade-right">
            B.tech in Computer Science
            </h1>
            <h2 className="text-8xl" id="e" data-aos="fade-left">
              SRKR Engineering college
            </h2>
          </div>
      </section>
      <section data-color="#5046" className="section min-h-screen flex items-center justify-center s-4">
        <div className="flex flex-col text-white h-full w-full justify-center items-center">
            <h1 className="text-5xl" id="e">
            B.tech in Computer Science
            </h1>
            <h2 className="text-8xl" id="e">
              SRKR Engineering college
            </h2>
          </div>
      </section>
    </main>
  );
};

export default ColorSections;