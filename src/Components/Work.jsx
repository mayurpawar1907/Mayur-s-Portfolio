import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Chicken99',
    description: 'A full-stack MERN food delivery platform with cart, payment, and admin panel.',
    link: 'https://yourproject1.vercel.app',
    tech: ['Next', 'MongoDB', 'JWT'],
  },
  {
    title: 'E-commerce Store',
    description: 'Modern UI e-commerce app with filtering, cart, and user auth.',
    link: 'https://yourproject2.netlify.app',
    tech: ['Next.js', 'TypeScript', 'Stripe'],
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio to showcase projects and skills.',
    link: 'https://yourportfolio.vercel.app',
    tech: ['React', 'Framer Motion', 'Tailwind'],
  },
  {
    title: 'Blog Platform',
    description: 'CMS-powered blog with Markdown support and admin login.',
    link: 'https://yourproject4.vercel.app',
    tech: ['Next.js', 'MongoDB', 'Auth'],
  },
  {
    title: 'Task Manager',
    description: 'Organize daily tasks with filters, deadlines, and user sessions.',
    link: 'https://yourproject5.vercel.app',
    tech: ['React', 'Node.js', 'Express'],
  },
  {
    title: 'Weather App',
    description: 'Weather forecast app using OpenWeatherMap API.',
    link: 'https://yourproject6.netlify.app',
    tech: ['JavaScript', 'API', 'Bootstrap'],
  },
  {
    title: 'Movie Search App',
    description: 'Search movie info from OMDb API with light/dark theme.',
    link: 'https://yourproject7.vercel.app',
    tech: ['React', 'API', 'Tailwind CSS'],
  },
  {
    title: 'Chat App',
    description: 'Real-time chat app with socket.io and MongoDB.',
    link: 'https://yourproject8.vercel.app',
    tech: ['Node.js', 'Socket.io', 'React'],
  },
  {
    title: 'URL Shortener',
    description: 'Simple URL shortener with analytics and redirects.',
    link: 'https://yourproject9.vercel.app',
    tech: ['Express', 'MongoDB', 'EJS'],
  },
  {
    title: 'Expense Tracker',
    description: 'Track your monthly income/expense visually.',
    link: 'https://yourproject10.netlify.app',
    tech: ['React', 'Context API', 'Charts.js'],
  },
];

const Work = () => {
  return (
    <section className="min-h-screen bg-[#0f0f1b] text-white px-4 py-16 overflow-x-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 mt-6"
      >
        My <span className="text-cyan-400">Work</span>
      </motion.h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative bg-[#1c1c2b]/70 backdrop-blur-md border border-cyan-500/20 p-5 rounded-2xl shadow-[0_0_20px_#00f0ff33] hover:shadow-[0_0_40px_#00f0ff66] transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-cyan-400 rounded-2xl blur-2xl z-[-1]" />
            <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm md:text-base mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((tech, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="text-xs md:text-sm px-2 py-1 bg-cyan-500/10 text-cyan-300 rounded-md border border-cyan-500/20 backdrop-blur-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 text-sm text-white bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
            >
              View Project <FaExternalLinkAlt size={12} />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
