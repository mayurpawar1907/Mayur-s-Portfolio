'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BsPatchCheckFill } from 'react-icons/bs';

const projectDetails = [
  {
    title: "Front-End Development",
    text: "Created dynamic and responsive user interfaces using React.js, Redux, Tailwind, Bootstrap, and Framer Motion.",
  },
  {
    title: "Back-End Development",
    text: "Built and maintained robust APIs with Node.js and Express.js, handling data processing and business logic efficiently.",
  },
  {
    title: "Database Management",
    text: "Worked with MongoDB & SQL to ensure high performance and data integrity.",
  },
  {
    title: "API Integration",
    text: "Developed and consumed RESTful APIs for seamless front-end and back-end communication.",
  },
  {
    title: "Testing and Quality Assurance",
    text: "Implemented Postman tests, reducing bugs by 20% and ensuring high code quality.",
  },
  {
    title: "Collaboration",
    text: "Worked in Agile teams, participating in daily stand-ups and sprint planning to deliver features on time.",
  },
  {
    title: "Problem Solving",
    text: "Resolved critical bugs, improving app stability and user satisfaction.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectOverview = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      style={{ width: '100%', paddingTop: '100px' }}
      className="overflow-x-hidden rounded-2xl shadow-[0_0_40px_#00f0ff33] p-6 md:p-10 bg-gradient-to-br from-[#0f0f1b] to-[#121223] border border-cyan-500/20"
    >
      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-cyan-400 mb-6 text-center"
      >
        Identity and Access Management Platform
      </motion.h3>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-gray-100 text-center text-base mb-8"
      >
        Responsibilities and Achievements:
      </motion.p>

      {/* List */}
      <motion.ul
        variants={containerVariants}
        className="space-y-6"
      >
        {projectDetails.map((item, i) => (
          <motion.li
            key={i}
            variants={itemVariants}
            className="flex items-start gap-4 bg-[#1a1a2b] hover:bg-[#23233a] p-5 rounded-lg transition-all duration-300 border border-cyan-400/10"
          >
            <span className="text-cyan-400 mt-1 animate-pulse">
              <BsPatchCheckFill size={20} />
            </span>
            <div>
              <h4 className="text-cyan-300 font-semibold text-lg mb-1">
                {item.title}
              </h4>
              <p className="text-gray-300 text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default ProjectOverview;
