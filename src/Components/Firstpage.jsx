import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiJavascript, SiReact, SiMongodb, SiNodedotjs, SiTailwindcss } from 'react-icons/si';
import image from "../assets/Logo.png"

function Firstpage() {
  return (
    <div className="min-h-screen bg-[#0f0f1b] text-white font-sans p-4 md:p-8">
      
      {/* Hero Section */}
      <div className="bg-[#1c1c2b] rounded-[30px] w-full max-w-screen-xl mx-auto p-6 md:p-10 flex flex-col-reverse md:flex-row items-center justify-between shadow-[0_0_30px_#00f0ff99]">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h3 className="text-lg md:text-xl mb-2">Hello, It's Me</h3>
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Mayur Pawar</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-6">
            Frontend & MERN Stack Developer
          </h2>
          <p className="text-gray-400 mb-6 text-sm md:text-base">
            I specialize in building modern, high-performance web applications using the latest technologies. Passionate about clean code and beautiful UI/UX.
          </p>

          {/* Social Media */}
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            <a href="#" className="bg-[#24243c] hover:bg-cyan-500 p-3 rounded-full transition"><FaFacebookF /></a>
            <a href="#" className="bg-[#24243c] hover:bg-cyan-500 p-3 rounded-full transition"><FaTwitter /></a>
            <a href="#" className="bg-[#24243c] hover:bg-cyan-500 p-3 rounded-full transition"><FaGithub /></a>
            <a href="#" className="bg-[#24243c] hover:bg-cyan-500 p-3 rounded-full transition"><FaLinkedinIn /></a>
          </div>

          <button className="bg-cyan-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-cyan-300 transition">
            Download CV
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-48 h-48 sm:w-60 sm:h-60 bg-cyan-400 rounded-[30%] overflow-hidden shadow-[0_0_30px_#00f0ff99]">
            <img
              src={image}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="max-w-screen-xl mx-auto mt-12 text-center">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Tech Stack</h2>
        <div className="flex justify-center flex-wrap gap-8 text-4xl text-white">
          <SiJavascript className="hover:text-yellow-400 transition" />
          <SiReact className="hover:text-blue-400 transition" />
          <SiNodedotjs className="hover:text-green-400 transition" />
          <SiMongodb className="hover:text-green-600 transition" />
          <SiTailwindcss className="hover:text-cyan-400 transition" />
        </div>
      </div>

      {/* What I Do */}
      <div className="max-w-screen-xl mx-auto mt-16 text-center px-4">
        <h2 className="text-2xl font-bold mb-6 text-cyan-400">What I Do</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I build scalable and responsive web apps using React, Node.js, Express, and MongoDB. I focus on writing clean, maintainable code, and crafting stunning interfaces using Tailwind CSS and modern design principles.
        </p>
      </div>

      {/* Stats Section */}
      <div className="max-w-screen-xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center px-4">
        <div className="bg-[#1c1c2b] p-6 rounded-xl shadow-md hover:shadow-cyan-500/40 transition">
          <h3 className="text-3xl font-bold text-cyan-400">2+</h3>
          <p className="text-gray-300 mt-2">Years Experience</p>
        </div>
        <div className="bg-[#1c1c2b] p-6 rounded-xl shadow-md hover:shadow-cyan-500/40 transition">
          <h3 className="text-3xl font-bold text-cyan-400">20+</h3>
          <p className="text-gray-300 mt-2">Projects Completed</p>
        </div>
        <div className="bg-[#1c1c2b] p-6 rounded-xl shadow-md hover:shadow-cyan-500/40 transition">
          <h3 className="text-3xl font-bold text-cyan-400">10+</h3>
          <p className="text-gray-300 mt-2">Clients Worldwide</p>
        </div>
        <div className="bg-[#1c1c2b] p-6 rounded-xl shadow-md hover:shadow-cyan-500/40 transition">
          <h3 className="text-3xl font-bold text-cyan-400">100%</h3>
          <p className="text-gray-300 mt-2">Client Satisfaction</p>
        </div>
      </div>

    </div>
  );
}

export default Firstpage;
