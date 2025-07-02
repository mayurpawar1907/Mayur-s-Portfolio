import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-400" },
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express", icon: <SiExpress />, color: "text-gray-300" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
];

function Skills() {
  return (
    <section className="min-h-screen bg-[#0f0f1b] text-white px-6 py-10">
      <h2 className="text-4xl font-bold text-center mb-10">
        My <span className="text-cyan-400">Skills</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-[#1c1c2b] p-6 rounded-2xl shadow-[0_0_15px_#00f0ff22] text-center transform hover:scale-105 transition-all duration-300"
          >
            <div className={`text-5xl mb-4 ${skill.color}`}>{skill.icon}</div>
            <p className="text-xl font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
