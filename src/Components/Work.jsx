import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsPatchCheckFill } from "react-icons/bs";
import { FiArrowUpRight, FiLayers, FiCalendar, FiMapPin } from "react-icons/fi";

/* ── data from resume ── */
const projects = [
  {
    name: "Donorly",
    company: "Senwell",
    role: "Software Developer",
    duration: "Oct 2024 – Present",
    period: "~8 Months",
    location: "Pune, India · USA Client",
    type: "Donor Management Platform",
    url: "https://donorly.ai/en",
    description:
      "Developed and deployed a scalable donor management platform for a USA-based client, focused on managing institutional and organisational funds efficiently. The application includes secure fund tracking, donor and organisation management, role-based authentication, real-time data handling, and responsive dashboards built using React.js, Next.js, Node.js, Express.js, SQL, and MySQL.",
    tags: ["React.js", "Next.js", "Node.js", "Express.js", "SQL", "MySQL", "Tailwind CSS", "JWT"],
    responsibilities: [
      "Developed responsive and dynamic user interfaces using React.js, Next.js, JavaScript, HTML, CSS, and Tailwind CSS.",
      "Built scalable backend APIs and server-side functionalities using Node.js and Express.js.",
      "Designed and managed SQL/MySQL databases for secure fund, donor, and organisation data management.",
      "Implemented authentication and role-based access control for secure user management.",
      "Developed dashboards and reporting modules for tracking institutional and organisational funds.",
      "Integrated REST APIs and optimised application performance for scalability and responsiveness.",
      "Collaborated with cross-functional teams and clients to deliver business-focused solutions.",
    ],
    accent: "cyan",
  },
  {
    name: "Skyfall",
    company: "Datapro",
    role: "Full-Stack Developer",
    duration: "July 2024 – Aug 2025",
    period: "~13 Months",
    location: "Pune, India",
    type: "Event Management Platform",
    url: null,
    description:
      "An event management platform where administrators can create and manage events for customers. The platform features high-performance dashboards, secure authentication, real-time event tracking, and scalable event management functionalities built with React.js, Next.js, Node.js, Express.js, SQL, and MySQL, delivering seamless user experiences and efficient administrative control.",
    tags: ["React.js", "Next.js", "Node.js", "Express.js", "SQL", "MySQL", "Tailwind CSS"],
    responsibilities: [
      "Developed responsive and interactive frontend interfaces using React.js, Next.js, HTML, CSS, JavaScript, and Tailwind CSS.",
      "Built scalable backend APIs and server-side functionalities using Node.js and Express.js.",
      "Designed and managed relational databases using SQL and MySQL for efficient data handling and storage.",
      "Implemented authentication, authorisation, and CRUD operations for event and user management.",
      "Integrated real-time functionalities and live data updates to enhance user experience and system responsiveness.",
      "Optimised application performance, API handling, and database queries for better scalability and maintainability.",
      "Collaborated with team members to deliver high-quality and user-friendly web solutions within project timelines.",
    ],
    accent: "purple",
  },
  {
    name: "chicken99",
    company: "Personal Project",
    role: "Frontend Developer",
    duration: "2024",
    period: "~3 Months",
    location: "Remote",
    type: "Food Ordering App (Frontend)",
    url: "https://www.chicken99.in/",
    description:
      "Built the frontend for Chicken99, a food ordering application. Implemented responsive UI, menus, cart interactions, and client-side routing using HTML, CSS, JavaScript, React.js, and Next.js.",
    tags: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"],
    responsibilities: [
      "Implemented responsive layouts and design using HTML and CSS.",
      "Built interactive UI components with JavaScript and React.js.",
      "Implemented client-side routing and page structure using Next.js.",
      "Integrated menu listing, cart functionality, and form validation on the frontend.",
      "Optimized UI for mobile and desktop and improved frontend performance.",
    ],
    accent: "cyan",
  },
];

const overviewPoints = [
  "Frontend development with React.js, Next.js, JavaScript, HTML, CSS, Tailwind CSS, and Bootstrap.",
  "Backend development with Node.js, Express.js, REST APIs, authentication, authorisation, and CRUD operations.",
  "Database work with SQL and MySQL for donor, fund, organisation, event, customer, and user data.",
  "Dashboard and reporting modules for fund tracking, event tracking, admin control, and live data updates.",
  "Performance optimisation for API handling, database queries, scalability, responsiveness, and maintainability.",
  "Team collaboration, client communication, Git/GitHub workflow, debugging, and delivery within timelines.",
];

const accentMap = {
  cyan: {
    border: "border-cyan-300/18",
    glow: "hover:shadow-[0_0_50px_rgba(0,240,255,0.13)]",
    badge: "bg-cyan-300/10 text-cyan-200 border-cyan-300/18",
    tag: "border-cyan-300/18 bg-cyan-300/6 text-cyan-100 hover:border-cyan-300/45 hover:bg-cyan-300/12",
    icon: "bg-cyan-300/10 text-cyan-200",
    corner: "bg-cyan-300/6",
    check: "text-cyan-300",
  },
  purple: {
    border: "border-purple-300/18",
    glow: "hover:shadow-[0_0_50px_rgba(168,85,247,0.13)]",
    badge: "bg-purple-300/10 text-purple-200 border-purple-300/18",
    tag: "border-purple-300/18 bg-purple-300/6 text-purple-100 hover:border-purple-300/45 hover:bg-purple-300/12",
    icon: "bg-purple-300/10 text-purple-200",
    corner: "bg-purple-300/6",
    check: "text-purple-300",
  },
};

/* ── ProjectCard ── */
function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const a = accentMap[project.accent];

  const handleCardClick = () => {
    if (project.url) {
      window.open(project.url, '_blank');
    }
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      onClick={handleCardClick}
      className={`group relative overflow-hidden rounded-2xl border ${a.border} bg-[#0e0e1c]/85 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur transition sm:rounded-3xl sm:p-7 ${a.glow} ${project.url ? 'cursor-pointer' : ''}`}
    >
      <div className={`absolute right-0 top-0 h-32 w-32 rounded-bl-full ${a.corner}`} />

      {/* icon */}
      <div className={`mb-4 grid h-11 w-11 place-items-center rounded-xl ${a.icon} text-xl sm:h-12 sm:w-12 sm:text-2xl`}>
        <FiLayers />
      </div>

      {/* meta badges */}
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${a.badge}`}>
          <FiCalendar className="mr-1 inline" size={9} />{project.duration}
        </span>
        <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${a.badge}`}>
          {project.period}
        </span>
        <span className="flex items-center gap-1 text-xs text-slate-500">
          <FiMapPin size={9} /> {project.location}
        </span>
      </div>

      <h2 className="text-xl font-black text-white sm:text-2xl">{project.name}</h2>
      <p className="mt-1 text-sm font-semibold text-slate-300 sm:text-base">
        {project.company} · {project.role}
      </p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {project.type}
      </p>
      <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
        {project.description}
      </p>

      {/* tech tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <motion.span
            key={tag}
            whileHover={{ scale: 1.08, y: -2 }}
            className={`cursor-default rounded-full border px-2.5 py-1 text-xs font-semibold transition ${a.tag}`}
          >
            {tag}
          </motion.span>
        ))}
      </div>

      {/* responsibilities */}
      <h3 className="mt-7 text-base font-black text-white sm:text-lg">Key Responsibilities</h3>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {project.responsibilities.map((point, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -14 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35 + i * 0.07 }}
            whileHover={{ x: 5 }}
            className="flex items-start gap-3 rounded-xl border border-white/6 bg-white/[0.025] p-3 transition hover:border-white/15 sm:rounded-2xl sm:p-4"
          >
            <span className={`mt-0.5 shrink-0 ${a.check}`}>
              <BsPatchCheckFill size={16} />
            </span>
            <p className="text-xs leading-6 text-slate-300 sm:text-sm sm:leading-7">{point}</p>
          </motion.li>
        ))}
      </ul>

      {/* Visit Project Button */}
      {project.url && (
        <motion.button
          onClick={() => window.open(project.url, '_blank')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`mt-8 inline-flex items-center gap-2 rounded-full border ${a.badge} px-4 py-2 text-sm font-bold transition hover:${a.badge.split(' ')[1]} sm:mt-10`}
        >
          Visit Project <FiArrowUpRight size={16} />
        </motion.button>
      )}
    </motion.article>
  );
}

/* ── main ── */
export default function ProjectOverview() {
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [overviewRef, overviewInView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a14] px-4 pb-20 pt-28 text-white sm:px-6 md:px-10 lg:px-16">
      {/* bg grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="pointer-events-none absolute inset-x-0 top-[88px] h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      {/* ambient orbs */}
      <motion.div
        animate={{ y: [0, -22, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-16 top-48 h-72 w-72 rounded-full bg-cyan-500/7 blur-3xl sm:h-80 sm:w-80"
      />
      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="pointer-events-none absolute -right-16 bottom-32 h-60 w-60 rounded-full bg-purple-500/7 blur-3xl sm:h-72 sm:w-72"
      />

      <section className="relative mx-auto max-w-7xl">
        {/* header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 28 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 sm:gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-4xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 sm:text-sm">
              Work &amp; Projects
            </p>
            <h1 className="text-2xl font-black leading-tight sm:text-3xl lg:text-4xl xl:text-5xl">
              Production projects from{" "}
              <span className="text-cyan-400">1.8+ years</span> of full-stack development.
            </h1>
          </div>
          <motion.a
            href="/contact"
            whileHover={{ y: -4, boxShadow: "0 0 28px rgba(0,240,255,0.2)" }}
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2.5 text-sm font-bold text-cyan-100 backdrop-blur transition hover:border-cyan-300/45 sm:px-5 sm:py-3"
          >
            Contact Me <FiArrowUpRight />
          </motion.a>
        </motion.div>

        {/* project cards */}
        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        {/* overview */}
        <motion.section
          ref={overviewRef}
          initial={{ opacity: 0, y: 38 }}
          animate={overviewInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mt-12 rounded-2xl border border-cyan-300/12 bg-[#0e0e1c]/70 p-5 shadow-[0_24px_90px_rgba(8,145,178,0.08)] backdrop-blur sm:mt-14 sm:rounded-3xl sm:p-8 md:p-9"
        >
          <h2 className="text-lg font-black text-white sm:text-xl md:text-2xl">
            Full Responsibility Overview
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            A complete summary of all responsibility areas across 1.8+ years of full-stack development.
          </p>

          <ul className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
            {overviewPoints.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -14 }}
                animate={overviewInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.09 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 rounded-xl border border-white/6 bg-white/[0.025] p-4 transition hover:border-cyan-300/22 sm:rounded-2xl sm:p-5"
              >
                <span className="mt-0.5 shrink-0 text-cyan-300">
                  <BsPatchCheckFill size={16} />
                </span>
                <p className="text-xs leading-6 text-slate-300 sm:text-sm sm:leading-7">{point}</p>
              </motion.li>
            ))}
          </ul>
        </motion.section>
      </section>
    </main>
  );
}
