import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-6 p-4 bg-gray-900 text-white justify-center px-10 py-5">
      <NavLink to="/" className="hover:text-blue-400">
        Home
      </NavLink>
      <NavLink to="/about" className="hover:text-blue-400">
        About
      </NavLink>
      <NavLink to="/projects" className="hover:text-blue-400">
        Projects
      </NavLink>
      <NavLink to="/contact" className="hover:text-blue-400">
        Contact
      </NavLink>
      {/* <NavLink to="/hero" className="hover:text-blue-400">
        Hero
      </NavLink> */}
    </nav>
  );
};

export default Navbar;
