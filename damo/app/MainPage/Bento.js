import Particles from "@/components/ui/particles";
import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";
import React, { useRef } from "react";
export const VelocityText = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  const skewXRaw = useTransform(
    scrollVelocity,
    [-0.5, 0.5],
    ["45deg", "-45deg"]
  );
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -4000]);
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

  return (
    <section
      ref={targetRef}
      className="h-[1000vh] text-[yellow]"
    >
      <div className="sticky relative top-0 flex h-screen items-center overflow-hidden">
        
        
        <motion.p
          style={{ skewX, x }}
          className="origin-bottom-left whitespace-nowrap text-3xl font-black uppercase leading-[0.85] md:text-7xl md:leading-[0.85]"
        >
           SIH'23 Finalist | Prajwala Hackathon Best Impactful Solution | ECET 79th Rank | Solved 500+ Problems on LeetCode
        </motion.p>

      <iframe className="absolute top-6 w-[40%] h-[50%] inset-0" src="https://lottie.host/embed/0cffc084-e2a2-4187-8f47-34d5950473a8/dfqzii7Ut5.json"/>

      </div>
    </section>
  );
};