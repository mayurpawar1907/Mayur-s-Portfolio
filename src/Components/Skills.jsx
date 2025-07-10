import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiJsonwebtokens,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiRender,
} from "react-icons/si";

const skills = [
  // Frontend
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
  { name: "Redux", icon: <SiRedux />, color: "text-purple-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-400" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "text-indigo-400" },

  // Backend
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
   { name: "Sql", icon: <SiMysql />, color: "text-green-400" },
  { name: "JWT", icon: <SiJsonwebtokens />, color: "text-yellow-300" },

  // Tools
  { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
  { name: "Postman", icon: <SiPostman />, color: "text-orange-400" },

  // Deployment
  { name: "Vercel", icon: <SiVercel />, color: "text-white" },
  { name: "Netlify", icon: <SiNetlify />, color: "text-green-300" },
  { name: "Render", icon: <SiRender />, color: "text-indigo-300" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

function Skills() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0f1b] via-[#111122] to-[#161625] text-white px-6 py-16 overflow-hidden relative">
      {/* Floating Background Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500 opacity-20 blur-[200px] rounded-full pointer-events-none"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold text-center mb-16 tracking-wide mt-12"
      >
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-10">
          My Skills
        </span>
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="bg-[#1c1c2b] p-6 rounded-2xl shadow-[0_0_20px_#00f0ff22] text-center hover:shadow-[0_0_40px_#00f0ff66] hover:scale-105 transition-all duration-300 relative group"
          >
            <div
              className={`text-5xl mb-4 ${skill.color} group-hover:animate-pulse transition`}
            >
              {skill.icon}
            </div>
            <p className="text-xl font-semibold tracking-wide group-hover:text-cyan-400 transition-colors">
              {skill.name}
            </p>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-500 bg-cyan-400 rounded-2xl blur-2xl z-[-1]" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;