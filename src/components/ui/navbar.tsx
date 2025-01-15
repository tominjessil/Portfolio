import React from "react";

const Navbar = () => {
  return (
    <nav className="text-black top-0 z-50 w-full h-16 flex justify-center items-center px-8">
      <ul className="flex space-x-8 font-bold ">
        <li><a href="#intro" className="hover:text-blue-500 cursor-pointer text-lg">Intro</a></li>
        <li><a href="#projects" className="hover:text-blue-500 cursor-pointer text-lg">Projects</a></li>
        <li><a href="#experience" className="hover:text-blue-500 cursor-pointer text-lg">Experience</a></li>
        <li><a href="#education" className="hover:text-blue-500 cursor-pointer text-lg">Education</a></li>
        <li><a href="#contact" className="hover:text-blue-500 cursor-pointer text-lg">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
