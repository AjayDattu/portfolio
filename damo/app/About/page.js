// import React from 'react'
// import Spline from '@splinetool/react-spline/next';
// import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
// import AboutMe from '@/components/ui/AboutQues';

// function page() {
//     const words = 'hello,This is Ajay,I am from India Here youll find me here scroll to know more'
//   return (
//     <div className='bg-black flex flex-col'>
//       <div className='justify-start w-full h-screen p-20 pt-60 flex flex-row'>
        
//         <div className='relative z-10'><TextGenerateEffect words={words} /></div>
//           <div className='absolute top-2'>
//       </div>
//       </div>
//       <div className='h-screen bg-white'></div>
//     </div>
//   )
// }

// export default page
// components/ScrollAnimation.js
"use client";
import Sections from "@/components/ui/Sections";
// pages/index.js

import { useEffect, useState } from "react";

const Page = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = () => {
    const sectionElements = document.querySelectorAll("section");
    sectionElements.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight) {
        setCurrentSection(index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Change the background color based on the current section
    const colors = ["bg-black", "bg-black", "bg-[#2E236C]", "bg-[#2E236C]","#000"];
    document.body.className = `transition-colors duration-500 ease-in-out ${colors[currentSection]}`;
  }, [currentSection]);

  return (
    <div>
      <Sections />
    </div>
  );
};

export default Page;