"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import { motion, Variants, easeOut } from "framer-motion";
import { Button } from "@/components/ui/button";
import SocialMediaButton from "@/components/socialMediaButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Intro = () => {
  const container = {
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
        transition: { duration: 0.6, ease: easeOut },
    },
    };

  return (
    <motion.section
      id="intro"
      className="
        flex flex-col justify-start items-start
        text-left min-h-screen h-fit
        px-8 sm:px-16 lg:px-24 pt-20 
      "
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        variants={fadeUp}
        className="text-9xl sm:text-7xl font-extrabold leading-none text-gray-900 mb-6"
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `Hello, I'm <span class='bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text'>Tomin Jessil</span>`
              )
              .changeDelay(50)
              .pauseFor(1000)
              .start();
          }}
        />
      </motion.h1>

      <motion.div variants={fadeUp} className="max-w-2xl text-lg">
        <motion.p variants={fadeUp} className="text-black mb-5">
          I am a recent Software Engineering graduate from Wellington, New Zealand. During my time
          at{" "}
          <a
            href="https://www.wgtn.ac.nz/"
            className="font-bold text-blue-600 hover:underline"
          >
            Victoria University
          </a>
          , I had the opportunity to develop a range of skills and work on a variety of projects.
        </motion.p>

        <motion.p variants={fadeUp} className="text-black mb-5">
          Some things that I am familiar with include: Python (SciKit), Java, HTML, CSS, Javascript,
          C++, Docker, React, Tailwind.
        </motion.p>

        <motion.p variants={fadeUp} className="text-black">
          In my spare time, I like to keep up with my favourite shows 📺, learn about the latest in
          tech news 💻, and go on hikes ⛰️.
        </motion.p>
      </motion.div>
      <motion.div variants={fadeUp} className="flex max-w-2xl text-lg mt-8 items-start gap-4">
        <SocialMediaButton name="GitHub" url="https://github.com/tominjessil" icon={FaGithub} />
        <SocialMediaButton name="LinkedIn" url="https://www.linkedin.com/in/tomin-jessil-9494ba26a/" icon={FaLinkedin} iconColor="text-linkedin-blue"/>
      </motion.div>
    </motion.section>
  );
};

export default Intro;