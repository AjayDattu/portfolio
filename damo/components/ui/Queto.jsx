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
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);


  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/Entry");
    }, 2000);
    return () => clearTimeout(timeout);
  }, []); 

  return (
    <div className="bg-black h-screen text-center align-middle justify-center items-center p-40">
      <WordPullUp
        className="text-4xl font-bold text-white bg-black"
        words="Passion  Perseverance  Excellence"
       />
    </div>
  );
};

export default QuoteAnimation;