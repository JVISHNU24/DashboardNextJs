"use client";
import React, { useState } from "react";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import Sidebar2 from "../sidebar2/page";
import LineGraph2 from "../linegraph2/page";
import Navbar3 from "../navbar3/page";
const Layout2 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <html lang="en">
      <body>
        <Navbar3 toggleSidebar={toggleSidebar} />
        <Sidebar2 isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className={`content ${isSidebarOpen ? "shiftRight" : ""}`}>
          <LineGraph2 isOpen={isSidebarOpen} />
        </main>
        <Footer />
      </body>
    </html>
  );
};
export default Layout2;
