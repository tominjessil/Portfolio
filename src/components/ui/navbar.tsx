import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 text-black top-0 z-50 w-full h-16 flex justify-end items-center px-8">
      <ul className="flex space-x-8">
        {["Intro", "Projects", "Experience", "Contact"].map((link, index) => (
          <li key={index} className="hover:text-blue-500 cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
