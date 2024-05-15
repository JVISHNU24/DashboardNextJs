"use client";
import React, { useState } from "react";
import Navbar from "./navbar/page";
import Layout1 from "./layout1/page";
import Layout2 from "./layout2/page";
import Layout3 from "./layout3/page";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./page.module.css";
const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedLayout, setSelectedLayout] = useState("Layout 1");
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleLayoutChange = (layout) => {
    setSelectedLayout(layout);
  };
  return (
    <>
      <Layout1 />
      
    </>
  );
};
export default HomePage;
