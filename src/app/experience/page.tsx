"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import ExpCard from "@/components/ui/expCard";
import Resume from "@/components/ui/resume";

const experiences = [
  {
    id: 1,
    title: "Bachelor of Engineering (Honours)",
    description:
      "Majored in Software Engineering and concentrated in AI.",
    date: "2021-2024",
  },
];

const work = [
  {
    id: 2,
    title: "Team Member at Bunnings",
    description: "Retail and customer service",
    date: "Since September 2020",
  },
];

const certifications = [
  {
    id: 3,
    title: "AWS Certified Cloud Practitioner",
    description: "",
    date: "Received on June 2024",
    link: {
      url: "https://www.credly.com/badges/658b4dca-b7af-4f4c-997b-80ba0cda2dbb/public_url",
      text: "View on Credly 🔗",
    },
  },
  {
    id: 4,
    title: "AWS Academy Cloud Foundations",
    description: "",
    date: "Received on September 2024",
    link: {
      url: "https://www.credly.com/badges/487dc950-b404-48b7-bde3-65d592d086fc/public_url",
      text: "View on Credly 🔗",
    },
  },
];

const Experiences = () => {
  // Define fade animations
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
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
      id="experience"
      className="mt-16 px-6 md:px-16 lg:px-48 text-black"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        className="text-4xl font-semibold text-center mb-10"
      >
        My Experiences
      </motion.h1>

      <motion.div variants={container} className="space-y-12">
        {/* Education */}
        <motion.div id="education" variants={fadeUp}>
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="space-y-4">
            {experiences.map((exp) => (
              <motion.div key={exp.id} variants={fadeUp}>
                <ExpCard
                  title={exp.title}
                  description={exp.description}
                  date={exp.date}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div id="certifications" variants={fadeUp}>
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <motion.div key={cert.id} variants={fadeUp}>
                <ExpCard
                  title={cert.title}
                  description={cert.description}
                  date={cert.date}
                  link={cert.link}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work */}
        <motion.div id="work" variants={fadeUp}>
          <h2 className="text-3xl font-bold mb-4">Work</h2>
          <div className="space-y-4">
            {work.map((job) => (
              <motion.div key={job.id} variants={fadeUp}>
                <ExpCard
                  title={job.title}
                  description={job.description}
                  date={job.date}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Experiences;