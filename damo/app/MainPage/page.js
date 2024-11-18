"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MainText from "@/components/MainText";
import Svg from "@/components/ui/Svg";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { FlipWords } from "@/components/ui/flip-words";
import { DragCards } from "@/components/ui/DragCards";
import { TimelineDemo } from "@/components/ui/Interships";
import TextRevealByWord from "@/components/ui/text-reveal";
import VerticalTimelineComponent, { AnimatedTestimonialsDemo, StickyScrollRevealDemo } from "@/components/ui/WorkExperience";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import AchievementsTable from "./Bento";
import HoverImage from "@/components/ui/Hoverme";
import { HoverImageLinks } from "@/components/ui/Skillset";
import Particles from "@/components/ui/particles";
import IconCloud from "@/components/ui/icon-cloud";
import Meteors from "@/components/ui/meteors";
gsap.registerPlugin(ScrollTrigger);
const slugs = [
  "typescript", "javascript", "dart", "java", "react", "flutter", "android", 
  "html5", "css3", "nodedotjs", "express", "nextdotjs", "prisma", "amazonaws", 
  "postgresql", "firebase", "nginx", "vercel", "testinglibrary", "jest", 
  "cypress", "docker", "git", "jira", "github", "gitlab", "visualstudiocode", 
  "androidstudio", "sonarqube", "figma",
];

function Page() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
    
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const words = ["Frontend Developer", "Coder", "Youtuber", "Designer"];

  return (
    <main className="h-full flex flex-col bg-black">
      <div className="fixed top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-80 animate-pulse filter blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-4 border-white opacity-40 animate-spin-slow"></div>
        <div className="absolute w-full h-full backdrop-blur-md"></div>
      </div>
      <div className="h-screen">
        <div className="flex flex-col lg:flex-row w-full h-screen pt-20" data-aos="fade-left">
          <iframe
            className="w-full h-full lg:w-1/2 md:w-full"
            src="https://lottie.host/embed/dce0b800-c131-45a8-b696-df2db655b752/ocTKs9ppjc.json"
            title="Lottie Animation"
          />
          <div className="flex flex-col gap-6 px-4 sm:px-6 md:px-8 lg:px-20 pt-32" data-aos="fade-right">
            <Svg />
            <div className="text-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-4xl font-light leading-tight">
                <FlipWords
                  words={words}
                  className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl font-light"
                />
              </h1>
              <div className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-400 max-w-3xl mx-auto">
                <p>
                  I specialize in building beautiful, interactive web applications using modern technologies like Nextjs, Reactjs, Animation Libraries, UI Libraries, and Tailwind CSS. I constantly explore new tools and frameworks to create optimized user experiences.
                </p>
                <a href="/resume.pdf" className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-600 cursor-pointer hover:underline">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full font-sans h-full">
        <div className="h-full" data-aos="zoom-in">
          <div className="flex flex-col gap-3 font-light text-white h-20 text-center text-5xl p-10 h-screen">
            SKILLS & INTERESTS
            <IconCloud iconSlugs={slugs} />
          </div>
          <HoverImageLinks />
        </div>
      </div>

      <AchievementsTable />

      <div data-aos="zoom-in"> 
        <div className="flex flex-col h-[50vh] justify-center items-center">
          <iframe
            className="w-[30%] h-[50%]"
            src="https://lottie.host/embed/d97f9e0f-2597-4c14-aea3-e8515f3677ff/1bPvzvC4RV.json"
            title="Lottie Animation 2"
          />
          <div className="text-blue-500">Want to know more..?</div>
          <div className="text-white">Navigate to About,Work</div>
        </div>
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-400 transition duration-300"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </main>
  );
}

export default Page;
