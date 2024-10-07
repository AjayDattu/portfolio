import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, rotateY: 90, scaleX: 0.8 },
  animate: { opacity: 1, rotateY: 0, scaleX: 1 },
  exit: { opacity: 0, rotateY: -90, scaleX: 0.8 },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }} // Smooth curve for a natural feel
      style={{ transformOrigin: "center left" }} // Origin for a page-turn effect from the left
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
