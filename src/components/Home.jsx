import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white font-sans scroll-smooth">
      {/* Hero - landing banner */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center"
      >
        <Hero />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 md:px-20"
      >
        <About />
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center px-6 md:px-20 bg-gray-800"
      >
        <Skills />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-6 md:px-20 bg-gray-800"
      >
        <Projects />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-6 md:px-20 bg-gray-800"
      >
        <Contact />
      </section>
    </div>
  );
};

export default Home;
