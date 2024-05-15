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
const Layout3 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <html lang="en">
      <body>
        <Navbar2 toggleSidebar={toggleSidebar} />
        <Sidebar3 isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className={`content ${isSidebarOpen ? "shiftRight" : ""}`}>
          <LineGraph isOpen={isSidebarOpen} />
        </main>
        <Footer2 />
        {/* <Navbar1 toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className={`content ${isSidebarOpen ? "shiftRight" : ""}`}>
          <LineGraph isOpen={isSidebarOpen} />
        </main>
        <Footer2 /> */}
      </body>
    </html>
  );
};
export default Layout3;
