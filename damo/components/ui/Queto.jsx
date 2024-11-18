"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import styles from "./QuoteAnimation.module.scss"; // Create this file for your styles
import AOS from "aos";
import "aos/dist/aos.css";
import { animatePageOut } from "@/app/utils/Animation";
import WordPullUp from "./word-pull-up";

const quotes = ["Passion", "Hardwork", "Success"];

const QuoteAnimation = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const router = useRouter();
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);


  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("./MainPage");
    }, 3000);
    return () => clearTimeout(timeout);
  }, []); 

  return (
    <div className="bg-black h-screen text-center align-middle justify-center items-center p-40">
      <WordPullUp
        className="text-7xl md:text-4xl lg:text-9xl font-light text-white bg-black font-sourGummy"
        words="Simplicity  conveys  clarity."
       />
    </div>
  );
};

export default QuoteAnimation;