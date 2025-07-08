import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navStyle = ({ isActive }) =>
    isActive
      ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
      : "hover:text-cyan-400";

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    setIsLoggedIn(auth === "true");
  }, [localStorage.getItem("isAuthenticated")]); // re-run when auth changes

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1c1c2bcc] backdrop-blur-md text-white px-6 sm:px-8 py-5 shadow-lg z-50">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">
          Mayur Pawar<span className="text-cyan-400">.</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li><NavLink to="/" className={navStyle}>Home</NavLink></li>
          <li><NavLink to="/about" className={navStyle}>About</NavLink></li>
          <li><NavLink to="/skills" className={navStyle}>Skills</NavLink></li>
          <li><NavLink to="/portfolio" className={navStyle}>Portfolio</NavLink></li>
          <li><NavLink to="/contact" className={navStyle}>Contact</NavLink></li>

          {isLoggedIn && <li><NavLink to="/notes" className={navStyle}>Notes</NavLink></li>}
          {isLoggedIn ? (
            <li>
              <button
                onClick={handleLogout}
                className="text-red-400 hover:text-red-600 font-semibold"
              >
                Logout
              </button>
            </li>
          ) : (
            <>
              <li><NavLink to="/signup" className={navStyle}>Signup</NavLink></li>
              <li><NavLink to="/login" className={navStyle}>Login</NavLink></li>
            </>
          )}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 text-lg font-medium bg-[#1c1c2b] border-t border-gray-600 pt-4 pb-2 px-2">
          <li><NavLink to="/" className={navStyle} onClick={toggleMenu}>Home</NavLink></li>
          <li><NavLink to="/about" className={navStyle} onClick={toggleMenu}>About</NavLink></li>
          <li><NavLink to="/skills" className={navStyle} onClick={toggleMenu}>Skills</NavLink></li>
          <li><NavLink to="/portfolio" className={navStyle} onClick={toggleMenu}>Portfolio</NavLink></li>
          <li><NavLink to="/contact" className={navStyle} onClick={toggleMenu}>Contact</NavLink></li>
          {isLoggedIn && (
            <li><NavLink to="/notes" className={navStyle} onClick={toggleMenu}>Notes</NavLink></li>
          )}
          {isLoggedIn ? (
            <li>
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="text-red-400 hover:text-red-600 font-semibold"
              >
                Logout
              </button>
            </li>
          ) : (
            <>
              <li><NavLink to="/signup" className={navStyle} onClick={toggleMenu}>Signup</NavLink></li>
              <li><NavLink to="/login" className={navStyle} onClick={toggleMenu}>Login</NavLink></li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
