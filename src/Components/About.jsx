import React from "react";
import { motion } from "framer-motion";

// Section animation with custom direction
const sectionVariant = (direction = "left") => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.6,
    },
  },
});

const EducationInfo = () => {
  return (
    <div className="min-h-screen bg-[#0f0f1b] text-white px-6 py-16 font-sans">
      <div className="max-w-4xl mx-auto space-y-20">
        {/* Education Section - from left */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant("left")}
        >
          <h2 className="text-4xl font-bold text-cyan-400 mb-6 underline underline-offset-8">
            Education
          </h2>
          <div className="bg-[#1c1c2b] p-6 rounded-2xl shadow-[0_0_30px_#00f0ff44] inline-block">
            <h3 className="text-xl font-semibold mb-2">B.Sc in Computer Science</h3>
            <p className="text-gray-400">XYZ University • 2020 – 2023</p>
          </div>
        </motion.div>

        {/* Experience Section - from right */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant("right")}
        >
          <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center underline underline-offset-8">
            Experience
          </h2>
          <div className="space-y-8 border-l-4 border-cyan-500 pl-6 relative">
            <div className="before:absolute before:w-4 before:h-4 before:bg-cyan-500 before:rounded-full before:left-[-11px] before:top-1">
              <h3 className="text-xl font-semibold">Frontend Developer</h3>
              <span className="text-gray-400 text-sm block mb-1">
                TechKriti Solutions • 2023 – 2024
              </span>
              <p className="text-gray-400 text-sm">
                Developed responsive UIs using React + Tailwind, optimized performance,
                and built scalable front-end components.
              </p>
            </div>
            <div className="before:absolute before:w-4 before:h-4 before:bg-cyan-500 before:rounded-full before:left-[-11px] before:top-[calc(100%+10px)]">
              <h3 className="text-xl font-semibold">Full Stack Intern</h3>
              <span className="text-gray-400 text-sm block mb-1">
                Open Source • 2022 – 2023
              </span>
              <p className="text-gray-400 text-sm">
                Built MERN stack features, worked on API integration, database management, and deployed full stack apps.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Hobbies Section - from left */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant("left")}
        >
          <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center underline underline-offset-8">
            Hobbies & Interests
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              "Exploring UI/UX Design",
              "Learning New Tech",
              "Building Side Projects",
              "Open Source Contributions",
              "Mentoring Juniors",
              "Gaming",
              "Watching Tech Talks",
              "Debugging Challenges",
            ].map((hobby, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-[#24243c] text-cyan-300 rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow"
              >
                {hobby}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EducationInfo;
