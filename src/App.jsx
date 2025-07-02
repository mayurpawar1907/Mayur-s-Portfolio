import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Firstpage from "./Components/Firstpage"; // Home
import About from "./Components/About"
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Notes from "./Components/Notes";

function App() {
  return (
    <Router>
      <Routes>
        {/* 👇 Parent route with Navbar + Outlet */}
        <Route path="/" element={<Layout />}>
          {/* 👇 This is your default (home) page inside Layout */}
          <Route index element={<Firstpage />} />

          {/* 👇 Other pages inside Layout */}
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="notes" element={<Notes />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
