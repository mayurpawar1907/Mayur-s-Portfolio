import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar />  {/* ✅ Always shows */}
      <Outlet />  {/* ✅ Replaced by Firstpage, About, etc. */}
    </div>
  );
}

export default Layout;
