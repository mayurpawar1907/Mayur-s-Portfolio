import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      className="min-h-screen bg-[#0f0f1b] text-white flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-[#1c1c2b] p-8 rounded-3xl shadow-[0_0_30px_#00f0ff66] w-full max-w-2xl"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
      >
        <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">📬 Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col">
            <label className="text-cyan-300 mb-1">Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-[#2e2e3f] px-4 py-2 rounded-lg outline-none text-cyan-200"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-cyan-300 mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-[#2e2e3f] px-4 py-2 rounded-lg outline-none text-cyan-200"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-cyan-300 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="bg-[#2e2e3f] px-4 py-2 rounded-lg outline-none text-cyan-200 resize-none"
              placeholder="Your message..."
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg shadow-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
