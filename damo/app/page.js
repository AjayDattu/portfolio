'use client'
import styles from './page.module.scss'
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from './utils/useMousePosition';
import MainText from "@/components/MainText";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";
import "./button.css";
import Image from "next/image";
import Button from '@/components/ui/button';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    // <div className="flex flex-col justify-center items-center h-screen bg-black px-4 sm:px-6 lg:px-8">
    //     <div className="w-full flex flex-col p-4 sm:p-6 md:w-3/4 lg:w-2/3 xl:w-1/2 gap-8">
        
         
    //       <div className="flex justify-end mt-4">
            
    //       </div>
    //     </div>
       
    // </div>
     <main className={styles.main}>
       <div className="fixed">
            {/* Lottie iframe embedded animation with responsive width */}
            <iframe
              src="https://lottie.host/embed/3094c793-7b33-45d2-a3f5-2dd35c73bf63/M9xs6DUtv8.json"
              className="w-full h-[200px] sm:h-[200px] md:h-[200px] lg:h-[200px] rounded-lg"
              frameBorder="0"
              allow="fullscreen"
            ></iframe>
          </div>
      <motion.div 
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >
          <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
            A Frontend Developer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
          </p>
      </motion.div>

      <div className={styles.body}>
        <p>I'm a <span>selectively skilled</span> Frontend Developer with strong focus on producing high quality & impactful digital experience.</p>
      </div>
      <Link href="/MainPage" passHref className='fixed z-10 bottom-10 right-60'>
              <Button/>
      </Link>
    </main>
  );
}
