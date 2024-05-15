"use client";
import React, { useState } from "react";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import Sidebar from "./sidebar/page";
import "./globals.css";
import Sidebar2 from "./sidebar2/page";
import Navbar2 from "./navbar2/page";
import Sidebar3 from "./sidebar3/page";
import Footer2 from "./footer2/page";
import Layout1 from "./layout1/page";
import Layout2 from "./layout2/page";
import Layout3 from "./layout3/page";
import Layout4 from "./layout4/page";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Layout, Menu, Dropdown, Tooltip } from "antd";
import { useRouter, usePathname } from "next/navigation";
const RootLayout = ({ children, isSidebarOpen, toggleSidebar }) => {
  const router = useRouter();
  const pathName = usePathname();
  const [layout1, setLayout1] = useState(true);
  const [layout2, setLayout2] = useState(false);
  const [layout3, setLayout3] = useState(false);
  const [layout4, setLayout4] = useState(false);
  let unprotectedRoutes = pathName == "/";
  const menu = (
    <Menu>
      <Menu.Item
        key="1"
        onClick={() => {
          setLayout1(true);
          setLayout2(false);
          setLayout3(false);
          setLayout4(false);
        }}
      >
        Layout 1
      </Menu.Item>
      <Menu.Item
        key="2"
        onClick={() => {
          setLayout1(false);
          setLayout2(true);
          setLayout3(false);
          setLayout4(false);
        }}
      >
        Layout 2
      </Menu.Item>
      <Menu.Item
        key="3"
        onClick={() => {
          setLayout1(false);
          setLayout2(false);
          setLayout3(true);
          setLayout4(false);
        }}
      >
        Layout 3
      </Menu.Item>
      <Menu.Item
        key="4"
        onClick={() => {
          setLayout1(false);
          setLayout2(false);
          setLayout3(false);
          setLayout4(true);
        }}
      >
        Layout 4
      </Menu.Item>
    </Menu>
  );
  if (unprotectedRoutes) {
    return (
      <html>
        <head>
          <meta></meta>
        </head>
        <body>{children}</body>
      </html>
    );
  }
  return (
    <html lang="en">
      <body>
        <>
          {layout1 ? (
            <Layout1 children={children} />
          ) : layout2 ? (
            <Layout2 children={children} />
          ) : layout3 ? (
            <Layout3 children={children} />
          ) : (
            <Layout4 children={children} />
          )}
        </>

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
