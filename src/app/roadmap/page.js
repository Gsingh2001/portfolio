"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaGraduationCap,
  FaBriefcase,
  FaProjectDiagram,
  FaTools,
} from "react-icons/fa";
import { useTheme } from "@/app/assets/ThemeContext";

const roadmapData = [
  {
    type: "education",
    icon: FaGraduationCap,
    title: "MSc, Artificial Intelligence",
    institution: "Sheffield Hallam University, UK",
    date: "Jan 2025 – 2026",
    details: [
      "Focus on machine learning, deep learning, and data science.",
      "Hands-on projects involving AI model development and deployment.",
    ],
    color: "#B794F4",
  },
  {
    type: "education",
    icon: FaGraduationCap,
    title: "BTech, Electronics & Communication Engineering",
    institution: "DAV Institute of Engineering and Technology",
    date: "Aug 2019 – May 2023",
    details: [
      "Specialized in embedded systems, signal processing, and IoT.",
      "Developed projects integrating AI with communication technologies.",
    ],
    color: "#B794F4",
  },
  {
    type: "experience",
    icon: FaBriefcase,
    title: "React.js Developer",
    institution: "Webapp Discovery Pvt Ltd, Panchkula, India",
    date: "Jan 2024 – Sep 2024",
    details: [
      "Developed and optimized React.js applications with a focus on responsive and dynamic UIs.",
      "Implemented Redux for state management and React Router for navigation.",
      "Designed and integrated RESTful APIs with Node.js and Express.js.",
      "Enhanced web performance, reducing load time by 40%.",
    ],
    color: "#38A169",
  },
  {
    type: "experience",
    icon: FaBriefcase,
    title: "MERN Stack Developer Intern",
    institution: "Netmax Technologies Pvt Ltd",
    date: "Jan 2023 – Jun 2023",
    details: [
      "Built web applications using MongoDB, Express.js, React.js, and Node.js.",
      "Optimized UI responsiveness with Tailwind CSS and Bootstrap, cutting load time by 30%.",
      "Upgraded tech stack for Strafetch, boosting speed by 40%.",
      "Collaborated with teams to deliver quality web solutions.",
    ],
    color: "#38A169",
  },
  {
    type: "project",
    icon: FaProjectDiagram,
    title: "24xdev.uk Website",
    date: "Oct 2024 – Ongoing",
    details: [
      "Next.js, Firebase, Tailwind CSS, Vercel, Serverless Architecture",
      "Integrated client-side and server-side functionalities.",
      "Implemented serverless architecture with 99.9% uptime.",
    ],
    color: "#ED8936",
  },
  {
    type: "project",
    icon: FaProjectDiagram,
    title: "MASV File Upload Application",
    date: "Sept 2024",
    details: [
      "React.js, MASV API, Tailwind CSS, JavaScript",
      "Improved file transfer speed by 30% with MASV API.",
      "Seamless uploads with progress tracking & metadata.",
      "Serverless deployment, 99.9% uptime.",
    ],
    color: "#ED8936",
  },
  {
    type: "project",
    icon: FaProjectDiagram,
    title: "Strafetch Site - Tech Stack Upgrade",
    date: "Aug 2024 – Sept 2024",
    details: [
      "React.js, MASV API, Tailwind CSS, JavaScript",
      "Upgraded frontend, improved transfer speed by 30%.",
      "Serverless deployment, 99.9% uptime.",
    ],
    color: "#ED8936",
  },
  {
    type: "project",
    icon: FaProjectDiagram,
    title: "Secure Venture - Frontend Enhancements",
    date: "Sept 2024",
    details: [
      "React.js, Tailwind CSS, API Integrations, JavaScript",
      "Optimized API integrations & enhanced UI.",
      "Implemented fully responsive design.",
    ],
    color: "#ED8936",
  },
  {
    type: "skills",
    icon: FaTools,
    title: "Key Skills",
    details: [
      "Frontend: React.js, Next.js, JavaScript, Tailwind CSS, Bootstrap, Material UI, HTML5, CSS3, Sass",
      "Backend: Node.js, Express.js, RESTful APIs",
      "Databases: MongoDB, MySQL, Firebase (Firestore & Realtime)",
      "Tools: Git, GitHub, Vercel, Docker, Jira, Slack",
      "Authentication: Firebase Auth, JWT, OAuth",
    ],
    color: "#B794F4",
  },
];

const Roadmap = () => {
  const { currentTheme } = useTheme();

  // Use theme colors
  const bg = currentTheme.colors.background || "#fff";
  const text = currentTheme.colors.text || "#222";
  const border = currentTheme.colors.accent || "#B794F4";
  const shadow = currentTheme.colors.shadow || "rgba(0,0,0,0.07)";
  const lineColor = border + "cc"; // semi-transparent accent

  return (
    <section
      className="py-12 px-2 md:px-8 transition-colors duration-500"
      style={{ background: bg, color: text }}
    >
      <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: text }}>
        My Roadmap
      </h2>
      <VerticalTimeline lineColor={lineColor}>
        {roadmapData.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <VerticalTimelineElement
              key={idx}
              contentStyle={{
                background: bg,
                color: text,
                borderTop: `4px solid ${item.color}`,
                boxShadow: `0 2px 20px ${shadow}`,
                transition: "all 0.4s",
              }}
              contentArrowStyle={{ borderRight: `7px solid ${item.color}` }}
              date={item.date}
              iconStyle={{
                background: item.color,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                border: `2px solid ${border}`,
                boxShadow: `0 1px 5px ${shadow}`,
              }}
              icon={
                <IconComponent style={{
                  fontSize: "2.2rem",
                  color: "#fff",
                  margin: "auto",
                  display: "block",
                }} />
              }
            >
              <h3 className="vertical-timeline-element-title text-xl font-bold" style={{ color: text }}>{item.title}</h3>
              {item.institution && (
                <h4 className="vertical-timeline-element-subtitle text-base mb-1" style={{ color: text, opacity: 0.7 }}>{item.institution}</h4>
              )}
              <ul className="list-disc pl-5" style={{ color: text, opacity: 0.85 }}>
                {item.details.map((d, i) => (
                  <li key={i} className="mb-1">{d}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

export default Roadmap;