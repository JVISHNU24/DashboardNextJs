"use client"
import React from "react";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import Sidebar from "./sidebar/page";
import "./globals.css";
import Sidebar2 from "./sidebar2/page";
import Navbar2 from "./navbar2/page";
import Sidebar3 from "./sidebar3/page";
import Footer2 from "./footer2/page";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Layout, Menu, Dropdown, Tooltip } from "antd";
import { useRouter } from "next/navigation";

const RootLayout = ({ children, isSidebarOpen, toggleSidebar }) => {
  const router=useRouter();
  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={() => router.push("/layout1")}>
        Layout 1
      </Menu.Item>
      <Menu.Item key="2" onClick={() => router.push("/layout2")}>
        Layout 2
      </Menu.Item>
      <Menu.Item key="3" onClick={() => router.push("/layout3")}>
        Layout 3
      </Menu.Item>
    </Menu>
  );
  return (
    <html lang="en">
      <body>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className={`content ${isSidebarOpen ? "shiftRight" : ""}`}>
          {children}
        </main>
        {/* <button class="layout-config-button config-link" type="button">
          <FaArrowCircleLeft size={40} />
        </button> */}
        <Dropdown overlay={menu} trigger={["click"]}>
          <div className="layout-config-button config-link">
            <button
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <FaArrowCircleLeft size={40} />
            </button>
          </div>
        </Dropdown>
      </body>
    </html>
  );
};

export default RootLayout;
