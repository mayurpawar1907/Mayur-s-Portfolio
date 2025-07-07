import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("⚠️ Please fill in both fields.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("currentUser", JSON.stringify(foundUser)); // ✅ Added
      alert("✅ Login successful!");
      navigate("/notes");
    } else {
      alert("❌ Invalid email or password.");
    }
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
          🔐 Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-cyan-300 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#2e2e3f] px-4 py-2 rounded-lg outline-none text-cyan-200"
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
              className="bg-[#2e2e3f] px-4 py-2 rounded-lg outline-none text-cyan-200"
              placeholder="••••••••"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg mt-4 shadow-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>

        <p className="text-sm text-cyan-300 mt-4 text-center">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-cyan-400 hover:underline cursor-pointer"
          >
            Signup here
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Login;
