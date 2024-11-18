'use client'

import styles from './page.module.scss'
import { useEffect, useState } from 'react';  
import { motion } from 'framer-motion';
import Link from "next/link";
import "./button.css";
import Button from '@/components/ui/button'; // Import the new component
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import useMousePosition from '../utils/useMousePosition';

export default function Entry() {

   useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  const [showAnimation, setShowAnimation] = useState(true);

  return (
    <main className={`${styles.main} font-sans`} data-aos="fade-in">
          <div className="fixed">
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
              <img className="w-[100%] h-[50%]" src="https://media.licdn.com/dms/image/v2/D5622AQFhdV8IDlDG9Q/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1709402884622?e=1733961600&v=beta&t=j2nVEMwjGt1W7timW0gIKSeHeTtQn2GlETpUdFpcY7k"/>
            </p>
          </motion.div>
          
          <div className={styles.body}> 
            <p  className='font-light'>Hi, I'm <span>Ajay Dattu</span>, but everyone calls me Damo. I'm from India.</p>
          </div>
    </main>
  );
}