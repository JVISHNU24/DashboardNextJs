"use client";
import React, { useState } from "react";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import Sidebar from "../sidebar/page";
import LineGraph from "../linegraph/page";
import Footer1 from "../footer/page";
const Layout1 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <html lang="en">
      <body>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className={`content ${isSidebarOpen ? "shiftRight" : ""}`}>
          <LineGraph isOpen={isSidebarOpen} />
        </main>
        <Footer1 />
      </body>
    </html>
  );
};
export default Layout1;