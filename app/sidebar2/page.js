"use client";
import { Menu } from "antd";
import {
  FaBars,
  FaHome,
  FaCalendar,
  FaUser,
  FaListUl,
  FaWpforms,
} from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./Sidebar2.module.css";
const Sidebar2 = ({ isOpen = true, toggleSidebar }) => {
  const router = useRouter();
  const handleLinkClick = () => {
    if (window.innerWidth < 640) {
      toggleSidebar();
    }
  };
  return (
    <nav className={`${styles.sidebar} ${isOpen ? "" : styles.hidden}`}>
      <Menu
        className={styles.menu}
        mode="inline"
        selectedKeys={[router.pathname]}
        onClick={handleLinkClick}
      >
        <Menu.Item
          key="/dashboard"
          className={styles.menuItem}
          icon={<FaHome className={styles.icon} />}
        >
          <Link href="/linegraph">Dashboard</Link>
        </Menu.Item>
        <Menu.Item
          key="/calendar"
          className={styles.menuItem}
          icon={<FaCalendar className={styles.icon} />}
        >
          <Link href="/calendar">Calendar</Link>
        </Menu.Item>
        <Menu.Item
          key="/profile"
          className={styles.menuItem}
          icon={<FaUser className={styles.icon} />}
        >
          <Link href="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item
          key="/tasks"
          className={styles.menuItem}
          icon={<FaListUl className={styles.icon} />}
        >
          <Link href="/tasks">Tasks</Link>
        </Menu.Item>
        <Menu.Item
          key="/forms"
          className={styles.menuItem}
          icon={<FaWpforms className={styles.icon} />}
        >
          <Link href="/forms">Forms</Link>
        </Menu.Item>
      </Menu>
    </nav>
  );
};
export default Sidebar2;
