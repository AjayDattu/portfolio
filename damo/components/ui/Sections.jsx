// components/Sections.js
"use client"
import { DragCards } from "./DragCards";
import { EvervaultCard } from "./evervault-card";
import HoverImage from "./Hoverme";
import { TextGenerateEffect } from "./text-generate-effect";
import { WavyBackground } from "./wavy-background";
import "./Section.css"
import BoxReveal from "./box-reveal";
import TextRevealByWord from "./text-reveal";
import Particles from "./particles";
import GradualSpacing from "./gradual-spacing";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
const sections = [
  { id: 1, title: "Section 1", bgColor: "bg-red-500" },
  { id: 2, title: "Section 2", bgColor: "bg-green-500" },
  { id: 3, title: "Section 3", bgColor: "bg-blue-500" },
  { id: 4, title: "Section 4", bgColor: "bg-yellow-500" },
];

const Sections = () => {
   useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    // <div className="overflow-hidden">
        
        
    //     <section
    //       className={` h-screen flex items-center`}
    //     >
    //     <div className="z-10 flex min-h-64 w-full items-center justify-center rounded-lg border bg-white dark:bg-black">
    //       <TextRevealByWord text="Magic UI will change the way you design." />
    //     </div>
    //     </section>
    //     <section
    //       className={` h-screen flex items-center`}
    //     >
    //       <h1 className="text-white text-4xl"></h1>
    //     </section>
    //      <section
    //       className={` h-screen flex items-center`}
    //     >
    //       <h1 className="text-white text-4xl"></h1>
    //     </section>
    // </div>
    // components/Sections.js
    <div data-aos="zoom-in">
    <section
          className="relative h-screen flex items-center w-screen"
        >
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
                   Everyone Call me Damu<span className="text-[#5046e6]">.</span>
                  </p>
              </BoxReveal>
            </div>
         </div>
        </section>
         <section
          className="h-screen flex items-center w-screen text-center"
        >
              <div className=" text-[300px] w-full text-[yellow]" data-aos="zoom-in" id="h">Education</div>
        </section>
        <section className=" flex h-screen items-center justify-center items-center rounded-lg dark:bg-black font-mono"  >
         <div className="flex flex-col text-white h-full w-full">
           <img src="https://res.cloudinary.com/dxxics5nv/image/upload/v1731584036/srkr_q1edrj.jpg"/>
            <h1 className="text-5xl" id="e">
            B.tech in Computer Science
            </h1>
            <h2 className="text-8xl" id="e">
              SRKR Engineering college
            </h2>
          </div>
        </section>
        <section className="flex min-h-64 items-center justify-center rounded-lg dark:bg-black font-mono">
            
        </section>
        <section className=" flex h-screen items-center justify-center rounded-lg dark:bg-black font-mono">
          
        </section>
        <section className="flex h-screen items-center justify-center rounded-lg dark:bg-black font-mono">
          
        </section>
    </div>
  
  );
};

export default Sections;