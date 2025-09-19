import React from "react";
import logo from "../assets/logo.jpg"; // import image

function Navbar() {
  return (
    <div className="w-full h-[20%] bg- flex items-center justify-between pr-50">
      <img
        href="#home"
        src={logo}
        alt="logo"
        className="w-20 h-10 object-contain rounded-full"
      />

      <ul className="flex space-x-6 list-none">
        <li>
          <a
            href="#home"
            className="hover:underline hover:text-white font-normal"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="hover:underline hover:text-white font-normal"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:underline hover:text-white font-normal"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:underline hover:text-white font-normal"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
