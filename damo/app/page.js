'use client'

import styles from './page.module.scss'
import { useEffect, useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from './utils/useMousePosition';
import Link from "next/link";
import "./button.css";
import Button from '@/components/ui/button';
import QuoteAnimation from "@/components/ui/Queto"; // Import the new component
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Home() {

   useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  const [showAnimation, setShowAnimation] = useState(true);

  const handleAnimationEnd = () => {
    setShowAnimation(false);
  };

  return (
    <main className={`${styles.main} font-sans`}>
      {showAnimation ? (
        <QuoteAnimation onAnimationEnd={handleAnimationEnd} />
      ) : (
        <>
          <div className="fixed">
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
        </>
      )}
    </main>
  );
}