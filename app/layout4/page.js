"use client";
import React, { useState } from "react";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import Sidebar2 from "../sidebar2/page";
import LineGraph2 from "../linegraph2/page";
import LineGraph from "../linegraph/page";
import Navbar2 from "../navbar2/page";
import Sidebar3 from "../sidebar3/page";
import Footer2 from "../footer2/page";
import Sidebar from "../sidebar/page";
const Layout4 = ({ children }) => {
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
          {children}
        </main>
        <Footer2 />
      </body>
    </html>
  );
};
export default Layout4;
