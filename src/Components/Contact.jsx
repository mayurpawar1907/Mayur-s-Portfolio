import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS integration
    emailjs.send(
      "service_vn5tmti",     // Replace with your actual Service ID
      "template_gh8mkea",    // Replace with your actual Template ID
      formData,
      "IYEGKtO5QQu6w-khR"      // Replace with your actual Public Key
    )
    .then(() => {
      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error("Email send error:", error);
      alert("❌ Failed to send message. Please try again.");
    });
  };

  return (
    <motion.div
      className="min-h-screen w-full bg-gradient-to-br from-[#0f0f1b] via-[#1c1c2b] to-[#0f0f1b] text-white flex items-center justify-center px-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-[#1c1c2b]/60 backdrop-blur-md p-5 md:p-6 rounded-2xl shadow-[0_0_25px_#00f0ff66] w-full max-w-md border border-cyan-500/20"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6 text-center flex items-center justify-center gap-2"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
        >
          📬 Contact Me
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "email"].map((field, idx) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.05 }}
            >
              <input
                name={field}
                type={field === "email" ? "email" : "text"}
                value={formData[field]}
                onChange={handleChange}
                required
                placeholder={field === "email" ? "you@example.com" : "Your Name"}
                className="w-full bg-transparent border-b border-cyan-500/50 focus:border-cyan-400 focus:outline-none py-1.5 px-2 text-cyan-100 placeholder:text-cyan-400 text-sm"
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Your message..."
              className="w-full bg-transparent border-b border-cyan-500/50 focus:border-cyan-400 focus:outline-none py-1.5 px-2 text-cyan-100 placeholder:text-cyan-400 resize-none text-sm"
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-cyan-500 text-black py-2 rounded-lg font-semibold text-base flex items-center justify-center gap-2 hover:bg-cyan-400 transition shadow-[0_0_10px_#00f0ff88]"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <FiSend className="text-lg" /> Send Message
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
