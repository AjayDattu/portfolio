import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring"; // For smooth animations
import Spline from '@splinetool/react-spline'; // 3D Graphics
import '../styles/Welcome.css'; // For additional styling

const translations = [
  { lang: "English", text: "Welcome" },
  { lang: "French", text: "Bienvenue" },
  { lang: "Spanish", text: "Bienvenido" },
  { lang: "German", text: "Willkommen" },
  { lang: "Telugu", text: "స్వాగతం" },
  // Add more languages as needed
];

const Welcome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % translations.length);
    }, 500); // Change language every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // React Spring animation for smooth scaling and opacity
  const animationProps = useSpring({
    opacity: 1,
    transform: "scale(1)",
    from: { opacity: 1, transform: "scale(1.5)" },
    reset: true,
    config: { duration: 800 },
  });

  return (
    <div className="welcome-container">
      {/* Spline 3D background or object */}

      {/* Animated Text */}
      <animated.h1 className="welcome-text" style={animationProps}>
        {translations[currentIndex].text}
      </animated.h1>
    </div>
  );
};

export default Welcome;
