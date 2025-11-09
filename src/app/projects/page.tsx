"use client";

import { motion, Variants } from "framer-motion";
import PCard from "@/components/ui/pcard";
import { FaJava, FaPython, FaReact } from "react-icons/fa";
import { RiSvelteFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Chaps Challenge",
      description:
        "This was a group project where the retro game 'Chips Challenge' was recreated (with permission) with our own touches.",
      imgSrc: "/image1.png",
      icons: [FaJava],
    },
    {
      id: 2,
      title: "ML with IGP",
      description:
        "Growth rate classifiction for a marine species using Interval Genetic Programming.",
      imgSrc: "/image2.png",
      icons: [FaPython],
    },
    {
      id: 3,
      title: "Course Visualiser",
      description:
        "Designed to assist course advisors at Victoria University. Done as part of a group project.",
      imgSrc: "/image3.png",
      icons: [RiSvelteFill, SiTypescript],
    },
    {
      id: 4,
      title: "Wordle Clone",
      description:
        "A clone of the beloved Wordle game. Done as part of a group project.",
      imgSrc: "/image4.png",
      icons: [FaReact],
    },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <motion.section
      id="projects"
      className="flex flex-col justify-start items-center text-center min-h-screen px-4"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h1
        variants={fadeUp}
        className="text-center text-4xl font-semibold text-black mb-10"
      >
        Here are some things I have worked on
      </motion.h1>

      <motion.div
        variants={container}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl mx-auto justify-items-center"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={fadeUp}>
            <PCard
              title={project.title}
              description={project.description}
              imgSrc={project.imgSrc}
              icons={project.icons}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;