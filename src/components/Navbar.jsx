import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-6 p-4 bg-gray-900 text-white justify-center">
      <Link to="/" className="hover:text-blue-400">
        Home
      </Link>
      <Link to="/about" className="hover:text-blue-400">
        About
      </Link>
      <Link to="/projects" className="hover:text-blue-400">
        Projects
      </Link>
      <Link to="/contact" className="hover:text-blue-400">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
