"use client";
import React, { useState } from "react";
import { Layout, Menu, Dropdown, Tooltip } from "antd";
import { FaBars, FaBell, FaEnvelope, FaUserCircle } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { useRouter } from "next/navigation";
import { RiArrowDropDownLine } from "react-icons/ri";
import Navbar3 from "../navbar3/page";
const { Header } = Layout;
const Navbar = ({ toggleSidebar, onLayoutChange }) => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
  const handleLayoutChange = (layout) => {
    onLayoutChange(layout);
    setShowDropdown(false);
  };
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
    <Header className={`${styles.navbar} ${styles.fixed}`}>
      <div className={`${styles.logo} ${styles.flexCenter}`}>
        <FaBars className={`mr-2 ${styles.menuIcon}`} onClick={toggleSidebar} />
        <span className={styles.title}>Dashboard</span>
      </div>
      <div className={`${styles.navItems} `}>
        <FaBell className={` ${styles.icon} ${styles.marginLeft}`} />
        <FaEnvelope className={` ${styles.icon} ${styles.marginLeft}`} />
        <FaUserCircle className={`${styles.userIcon} ${styles.marginLeft}`} />
        <span className={styles.username}>Vishnu</span>
      </div>
    </Header>
  );
};
export default Navbar;
