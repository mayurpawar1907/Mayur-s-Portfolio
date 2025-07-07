import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
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
    <section className="min-h-screen bg-[#0f0f1b] text-white px-6 py-16 overflow-hidden relative">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        My <span className="text-cyan-400">Skills</span>
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-[#1c1c2b] p-6 rounded-2xl shadow-[0_0_20px_#00f0ff22] text-center hover:shadow-[0_0_40px_#00f0ff55] hover:scale-105 transition-all duration-300 relative group"
          >
            <div
              className={`text-5xl mb-4 ${skill.color} group-hover:animate-pulse-slow transition`}
            >
              {skill.icon}
            </div>
            <p className="text-xl font-medium tracking-wide">{skill.name}</p>

            {/* Glow background */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-500 bg-cyan-400 rounded-2xl blur-2xl z-[-1]" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
