"use client";
import React, { useEffect, useRef } from "react";
import { Card } from "antd";
import Chart from "chart.js/auto";
import styles from "./LineGraph.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Layout, Menu, Dropdown, Tooltip } from "antd";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
const LineGraph = ({ isOpen }) => {
  const lineChartRef = useRef(null);
  const router = useRouter();
  const doughnutChartRef = useRef(null);
  useEffect(() => {
    let lineChart;
    let doughnutChart;
    if (lineChartRef.current) {
      lineChart = new Chart(lineChartRef.current, {
        type: "line",
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Sales",
              data: [
                100, 200, 150, 250, 300, 350, 123, 345, 567, 789, 132, 423,
              ],
              borderColor: "blue",
              borderWidth: 1,
            },
          ],
        },
      });
      if (isOpen) {
        document.body.style.marginLeft = "200px";
      } else {
        document.body.style.marginLeft = "0";
      }
    }
    if (doughnutChartRef.current) {
      doughnutChart = new Chart(doughnutChartRef.current, {
        type: "doughnut",
        data: {
          labels: [
            "Men's Clothing",
            "Women's Clothing",
            "Accessories",
            "Electronics",
          ],
          datasets: [
            {
              label: "Category",
              data: [25, 35, 20, 20],
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
            },
          ],
        },
      });
    }
    return () => {
      if (lineChart) {
        lineChart.destroy();
      }
      if (doughnutChart) {
        doughnutChart.destroy();
      }
    };
  }, [isOpen]);
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
    <div className={styles.lineGraphContainer}>
      <div className={styles.cardContainer}>
        <Card className={styles.chartCard}>
          <div className={styles.chartTitle}>Line Graph</div>
          <canvas ref={lineChartRef}></canvas>
        </Card>
        <Card className={styles.chartCard}>
          <div className={styles.chartTitle}>Doughnut Graph</div>
          <canvas ref={doughnutChartRef}></canvas>
        </Card>
      </div>
    </div>
  );
};
export default LineGraph;
