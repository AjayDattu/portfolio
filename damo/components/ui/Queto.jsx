// components/QuoteAnimation.js
"use client"
import { useEffect, useState } from 'react';
import styles from './QuoteAnimation.module.scss'; // Create this file for your styles
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const quotes = ["Passion", "Hardwork", "Success"];

const QuoteAnimation = ({ onAnimationEnd }) => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [quoteIndex, setQuoteIndex] = useState(0);
   useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  useEffect(() => {
    
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      setCurrentQuote(quotes[(quoteIndex + 1) % quotes.length]);
    }, 2000); // Change quote every 2 seconds

    return () => clearInterval(interval);
  }, [quoteIndex]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onAnimationEnd();
    }, 6000); // 5 seconds for quotes + 1 second for transition

    return () => clearTimeout(timeout);
  }, [onAnimationEnd]);

  return (
    <div className={styles.quoteContainer} >
      <h1 data-aos="fade-left">{currentQuote}</h1>
    </div>
  );
};

export default QuoteAnimation;