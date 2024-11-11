// components/Sections.js
"use client"
import { DragCards } from "./DragCards";
import { EvervaultCard } from "./evervault-card";
import HoverImage from "./Hoverme";
import { TextGenerateEffect } from "./text-generate-effect";
import { WavyBackground } from "./wavy-background";

const sections = [
  { id: 1, title: "Section 1", bgColor: "bg-red-500" },
  { id: 2, title: "Section 2", bgColor: "bg-green-500" },
  { id: 3, title: "Section 3", bgColor: "bg-blue-500" },
  { id: 4, title: "Section 4", bgColor: "bg-yellow-500" },
];

const Sections = () => {
const words = "I am developer from India. Curious to know more? Scroll down and join me on this journey of creativity and code!";
  return (
    <div className="overflow-hidden">
         <WavyBackground className="max-w-4xl mx-auto pb-40">
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
                Developer from India
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
                Leverage the power of canvas to create a beautiful hero section
            </p>
        </WavyBackground>
        <section
          className={` h-screen flex items-center`}
        >
         
        </section>
        <section
          className={` h-screen flex items-center`}
        >
          <DragCards/>
        </section>
        <section
          className={` h-screen flex items-center`}
        >
          <h1 className="text-white text-4xl"></h1>
        </section>
         <section
          className={` h-screen flex items-center`}
        >
          <h1 className="text-white text-4xl"></h1>
        </section>
    </div>
  );
};

export default Sections;