import Home from "../Home";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import { Route, Routes } from "react-router-dom";
import Hero from "../Hero";

const NavRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default NavRoute;
