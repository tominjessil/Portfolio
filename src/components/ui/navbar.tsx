"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center text-black top-0 h-16 px-8">
      <ul className="hidden sm:flex items-center justify-center gap-12 font-bold w-full">
        <li><a href="#intro" className="hover:text-blue-500 cursor-pointer text-lg">Intro</a></li>
        <li><a href="#projects" className="hover:text-blue-500 cursor-pointer text-lg">Projects</a></li>
        <li><a href="#experience" className="hover:text-blue-500 cursor-pointer text-lg">Experience</a></li>
        <li><a href="#contact" className="hover:text-blue-500 cursor-pointer text-lg">Contact</a></li>
      </ul>

      <button onClick={toggleNavbar} className="sm:hidden block text-3xl cursor-pointer ml-auto">
        <FaBars size={25} color="black" />
      </button>

      {isOpen && (
        <ul className="absolute font-bold top-16 left-0 bg-white w-full flex flex-col items-center justify-center gap-4 shadow-md py-4 sm:hidden z-50">
          <li><a href="#intro" className="hover:text-blue-500 text-lg">Intro</a></li>
          <li><a href="#projects" className="hover:text-blue-500 text-lg">Projects</a></li>
          <li><a href="#experience" className="hover:text-blue-500 text-lg">Experience</a></li>
          <li><a href="#contact" className="hover:text-blue-500 text-lg">Contact</a></li>
        </ul>
      )}
      
    </nav>
  );
};

export default Navbar;
