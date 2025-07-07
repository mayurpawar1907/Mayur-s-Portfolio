import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const exists = users.find((user) => user.email === email);
    if (exists) {
      alert("⚠️ User already exists with this email");
      return;
    }

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("✅ Signup successful! Please log in.");
    navigate("/login");
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-[#0f0f1b] text-white p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-[#1c1c2b] p-8 rounded-3xl shadow-[0_0_30px_#00f0ff66] w-full max-w-md"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
          📝 Signup
        </h2>

        <form onSubmit={handleSignup} className="space-y-4 transition-all duration-300">
          <div className="flex flex-col">
            <label className="text-cyan-300 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#2e2e3f] px-4 py-2 rounded-lg outline-none text-cyan-200 transition-all duration-300 focus:ring focus:ring-cyan-500"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-cyan-300 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#2e2e3f] px-4 py-2 rounded-lg outline-none text-cyan-200 transition-all duration-300 focus:ring focus:ring-cyan-500"
              placeholder="••••••••"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg mt-4 shadow-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            Signup
          </motion.button>
        </form>

        <p className="text-sm text-cyan-300 mt-4 text-center">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-cyan-400 hover:underline cursor-pointer"
          >
            Login here
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SignupPage;
