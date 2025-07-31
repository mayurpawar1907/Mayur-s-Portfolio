'use client';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
};

export default function AboutMe() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-[#0f0f1b] text-white px-6 py-16 md:px-20  font-[Poppins]"
    >
      {/* Section Heading */}
      <motion.h1
        variants={fadeUp}
        className="text-4xl md:text-6xl font-extrabold text-cyan-400 text-center mb-12 mt-12 tracking-wide leading-tight"
      >
        About Me
      </motion.h1>

      {/* Intro Section */}
      <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-gray-300">
        {[
          <>
            My name is <span className="text-cyan-400 font-semibold">Mayur Pawar</span>, a passionate{' '}
            <span className="text-cyan-400 font-semibold">Full-Stack  Developer</span> based in Pune
            with over 1 Year of experience. in Full-Stack Development.
          </>,
          <>
            At 22 years old, I thrive on building impactful digital solutions that help businesses
            strengthen their online presence. I bring ideas to life through top-notch web applications and
            websites.
          </>,
          <>
            With an <span className="text-cyan-400 font-semibold">entrepreneurial mindset</span>, I stay
            adaptable, goal-oriented, and always strive for excellence. I believe in focusing on specific
            domains to deliver exceptional results and achieve technical mastery.
          </>,
        ].map((text, i) => (
          <motion.p
            key={i}
            variants={i % 2 === 0 ? fadeLeft : fadeRight}
            className="text-[17px] md:text-[18px] text-gray-300 font-light tracking-wide"
          >
            {text}
          </motion.p>
        ))}
      </div>

      {/* Work Experience */}
      <motion.div variants={fadeUp} className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4 tracking-wider">Work Experience</h2>
        <p className="text-lg leading-relaxed text-gray-300 font-light">
        Over 1 year of experience as a MERN-stack developer, proficient in both frontend and backend development, with a solid foundation in modern web technologies and frameworks.
        </p>
        <motion.ul className="list-disc list-inside mt-6 space-y-3" variants={containerVariants}>
          {[
            'Built dynamic, responsive, and reusable user interfaces using React.js, modern JavaScript (ES6+), HTML5, Tailwind CSS, and component-driven development practices.',
            'Developed secure and scalable RESTful APIs using Node.js and Express, implementing best practices for middleware, error handling, and modular architecture.',
            'Designed and managed MongoDB schemas using Mongoose, optimizing data models for performance and implementing efficient CRUD operations with validations and indexing.',
            'Integrated frontend and backend in full-stack MERN applications, enabling smooth user experience with JWT-based authentication, role-based access control, and protected routes.',
            'Utilized React Hooks and Context API for state management and component logic reuse across multiple modules',
            'Implemented form validations and user input handling using libraries like Formik, React Hook Form, and Yup to ensure robust UX.',
            'Collaborated with cross-functional teams to gather requirements, design system architecture, and deliver high-quality software solutions.',  
            'Participated in code reviews, pair programming, and agile development practices to continuously improve code quality and team collaboration.',
          'Maintained version control using Git, managing branches, pull requests, and code merges in collaborative environments.',
          'Engaged in continuous learning and professional development to stay updated with the latest trends and technologies in web development.',
          




          ].map((text, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.02, x: 5 }}
              className="text-gray-300 tracking-wide"
            >
              {text}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Companies Worked At */}
      <motion.div variants={fadeUp} className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4 tracking-wider">Companies Worked At</h2>
        <motion.ul className="space-y-6 text-gray-300" variants={containerVariants}>
          {[
            {
              company: 'Datapro Information  Technology Pvt Ltd Pune',
              role: 'Full-Stack Developer',
              duration: 'July 2024 – Aug 2025',
            },
  
          ].map((item, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.02, x: 5 }}
              className="tracking-wide"
            >
              <span className="text-white font-semibold">{item.company}</span> – {item.role}
              <div className="text-sm text-gray-400">{item.duration}</div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Work Policy */}
      <motion.div variants={fadeRight} className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4 tracking-wider">Work Policy</h2>
        <p className="text-lg leading-relaxed text-gray-300 font-light tracking-wide">
          I spend most of my time in front of my laptop — learning, building, and evolving as a developer.
          I believe in continuous improvement and staying ahead with modern tech trends.
        </p>
      </motion.div>
    </motion.div>
  );
}
