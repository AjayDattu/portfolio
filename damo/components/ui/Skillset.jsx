import { motion } from "framer-motion";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

export const HoverImageLinks = () => {
  return (
    <section className="p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <Link
          heading="Frontend"
          subheading="React.js, Next.js, Tailwind CSS, SCSS, Redux"
          href="#"
        />
        <Link
          heading="Backend"
          subheading="MongoDB, Node.js, Express.js, SQL"
          href="#"
        />
        <Link
          heading="Libraries"
          subheading="GSAP, Shadecn, Ant Design, Material UI, Chakra UI"
          href="#"
        />
        <Link
          heading="DSA"
          subheading="Trees, Arrays, Graphs, Linked Lists, Stacks"
          href="#"
        />
        <Link
          heading="Interests"
          subheading="Reading Books, Space, Sci-Fi, Thriller Movies"
          href="#"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, subheading, href }) => {
  return (
    <motion.a
      href={href}
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
      >
    
      </motion.div>
    </motion.a>
  );
};
