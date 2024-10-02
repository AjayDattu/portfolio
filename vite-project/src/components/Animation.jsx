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
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{ transformOrigin: "center right" }} // Origin for the page-turn effect
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
