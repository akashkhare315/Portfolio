import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import "./Skills.css"; // make sure Skills.css exists in the same folder

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Express.js", icon: <FaDatabase className="text-yellow-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
];

const Skills = () => {
  return (
    <div className="w-full text-center">
      <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse">
        My Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-700 p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-neon transition"
          >
            <div className="text-6xl mb-4">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
