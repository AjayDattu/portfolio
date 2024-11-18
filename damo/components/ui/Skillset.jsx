import { motion } from "framer-motion";
import React from "react";

export const HoverImageLinks = () => {
  return (
    <section className="p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <HoverItem
          heading="Frontend"
          subheading="React.js, Next.js, Tailwind CSS, SCSS, Redux"
        />
        <HoverItem
          heading="Backend"
          subheading="MongoDB, Node.js, Express.js, SQL"
        />
        <HoverItem
          heading="Libraries"
          subheading="GSAP, Shadecn, Ant Design, Material UI, Chakra UI"
        />
        <HoverItem
          heading="DSA"
          subheading="Trees, Arrays, Graphs, Linked Lists, Stacks"
        />
        <HoverItem
          heading="Interests"
          subheading="Reading Books, Space, Sci-Fi, Thriller Movies"
        />
      </div>
    </section>
  );
};

const HoverItem = ({ heading, subheading }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-light text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      ></motion.div>
    </motion.div>
  );
};
