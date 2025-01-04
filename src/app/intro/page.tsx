"use client";

import React from "react";
import Typewriter from "typewriter-effect";

const Intro = () => {
    return (
        <section
            id="intro"
            className="flex flex-col justify-start items-center pt-10 text-center"
        >
            <h1 className="text-7xl font-extrabold leading-none text-gray-900 ">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString(
                                `Hello, I'm <span class="bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text">Tomin Jessil</span>`
                            )
                            .changeDelay(50)
                            .pauseFor(1000)
                            .start();
                    }}
                />
            </h1>
            <div className="w-2/3 mt-10 text-center">
                <p className="text-black">
                {/* <p className="text-black dark:text-white"> */}
                    {" "}
                    I am a Software Engineering student from Wellington, New Zealand.
                    During my time at{" "}
                    <a
                        href="https://www.wgtn.ac.nz/"
                        className="font-bold from-blue-400 to-blue-700"
                    >
                        Victoria University
                    </a>
                    , I was able to develop a range of skills and work on a variety of
                    projects. My interests range all the way from software development to machine
                    learning. I am always seeking to improve my current skillset and
                    discover new ones.  
                </p>
                <p className="text-black mt-5">
                    Some things that I am familiar with include: Python (SciKit), Java,
                    HTML, CSS, Javascript, C++, Docker, React, Tailwind
                </p>
            </div>
        </section>
    );
};

export default Intro;
