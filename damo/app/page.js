"use client"
import QuoteAnimation from "@/components/ui/Queto"; // Import the new component
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect, useState } from "react";
export default function Home() {

   useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
 

  return (
    <main>
        <QuoteAnimation/>
    </main>
  );
}