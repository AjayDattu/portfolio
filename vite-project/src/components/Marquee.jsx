import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import malimg from '../assets/malwa.jpg'; // Importing the malware image
import net from '../assets/Network capture.png'
const Example = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div data-aos="fade-in">
      {/* Intro Text */}
     
      {/* Horizontal Scroll Carousel */}
      <HorizontalScrollCarousel />

      {/* Outro Text */}
    </div>
  );
};

export const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  
  // Scroll-based animation using Framer Motion
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  
  // Transform the horizontal scroll position
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  // Function to handle click events for navigating to specific URLs
  const handleCardClick = (url) => {
    if (url) {
      window.open(url, '_blank'); // Opens the link in a new tab
    }
  };

  return (
    <div
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 cursor-pointer"
      onClick={() => handleCardClick(card.link)} // Add onClick to open the link
    >
      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 glitch"
      ></div>

      {/* Title Text with Blur Effect */}
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

// Card data with images and GitHub link for the malware analysis
const cards = [
  {
    url: malimg, // Adding the malware image here
    title: "Malware Analysis",
    id: 1,
    link: "https://github.com/AjayDattu/Malware-Analysis.git", // Link to your GitHub repository
  },
  {
    url: net,
    title: "Network traffic Capture",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];

export default Example;
