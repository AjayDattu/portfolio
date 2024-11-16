import React from "react";
import { Progress, Card, ConfigProvider } from "antd";

const dsaSkills = [
  { name: "Arrays", level: 85 },
  { name: "Trees", level: 70 },
  { name: "Graphs", level: 65 },
  { name: "Dynamic Programming", level: 60 },
  { name: "Recursion", level: 80 },
  { name: "Sorting & Searching", level: 90 },
];

const algoSkills = [
  { name: "Binary Search", level: 95 },
  { name: "Dijkstra's Algorithm", level: 70 },
  { name: "Kruskal's Algorithm", level: 60 },
  { name: "Divide and Conquer", level: 85 },
  { name: "Backtracking", level: 75 },
  { name: "Greedy Algorithms", level: 80 },
];

const SkillsProgressBar = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: "#1e1e1e", // Dark background
          colorTextBase: "#ffffff", // Light text
          colorPrimary: "#1890ff", // Ant Design blue
        },
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "24px",
          Width: "100%",
          padding:"10px",
        }}
      >
        {/* DSA Skills */}
        <Card
          title="DSA Skills Progress"
          style={{
            width: "100%",
            backgroundColor: "#2e2e2e",
            color: "#ffffff",
            boxShadow:"0 10 15 #fff"
          }}
        >
          {dsaSkills.map((skill, index) => (
            <div key={index} style={{ marginBottom: "16px" }}>
              <p style={{ color: "#ffffff" }}>{skill.name}</p>
              <Progress percent={skill.level} />
            </div>
          ))}
        </Card>

        {/* Algorithms Skills */}
        <Card
          title="Algorithm Skills Progress"
          style={{
            width: "100%",
            backgroundColor: "#2e2e2e",
            color: "#ffffff",
          }}
        >
          {algoSkills.map((skill, index) => (
            <div key={index} style={{ marginBottom: "16px" }}>
              <p style={{ color: "#ffffff" }}>{skill.name}</p>
              <Progress percent={skill.level} />
            </div>
          ))}
        </Card>
      </div>
    </ConfigProvider>
  );
};

export default SkillsProgressBar;
