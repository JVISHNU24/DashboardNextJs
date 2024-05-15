import React from "react";
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Layout, Row, Col } from "antd";
const { Footer } = Layout;
const Footer1 = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        backgroundColor: "#333",
        color: "#fff",
        position: "fixed",
        bottom: 0,
        width: "100%",
        zIndex: 1000,
        height: "52px",
        padding: 0,
      }}
    >
      <Row justify="center" align="middle">
        <Col>
          <p>
            Copyright &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </Col>
        <Col>
          <div className="social-icons">
            <GithubOutlined className="mx-2 icon" />
            <LinkedinOutlined className="mx-2 icon" />
            <TwitterOutlined className="mx-2 icon" />
          </div>
        </Col>
      </Row>
    </Footer>
  );
};
export default Footer1;
