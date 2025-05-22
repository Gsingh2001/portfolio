"use client";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaGraduationCap,
  FaBriefcase,
  FaProjectDiagram,
  FaStar,
} from "react-icons/fa";
import { useTheme } from "@/app/assets/ThemeContext";

const Resume = () => {
  const { currentTheme } = useTheme();

  // Color palette per type
  const colors = {
    education: { bg: "#B794F4", text: "#fff" },
    experience: { bg: "#38A169", text: "#fff" },
    project: { bg: "#ED8936", text: "#fff" },
    star: { bg: "#38B2AC", text: "#fff" },
  };

  return (
    <div
      className="min-h-screen py-8 px-1 sm:px-4 md:px-10"
      style={{
        background: currentTheme.colors.background,
        color: currentTheme.colors.text,
      }}
    >
      
      <VerticalTimeline>
        {/* EDUCATION */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: colors.education.bg,
            color: colors.education.text,
          }}
          contentArrowStyle={{ borderRight: `7px solid ${colors.education.bg}` }}
          date="Jan 2025 – 2026"
          iconStyle={{ background: colors.education.bg, color: colors.education.text }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">MSc, Artificial Intelligence</h3>
          <h4 className="vertical-timeline-element-subtitle">Sheffield Hallam University, UK</h4>
          <p>
            Focus on machine learning, deep learning, and data science.<br />
            Hands-on projects involving AI model development and deployment.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: colors.education.bg,
            color: colors.education.text,
          }}
          contentArrowStyle={{ borderRight: `7px solid ${colors.education.bg}` }}
          date="Aug 2019 – May 2023"
          iconStyle={{ background: colors.education.bg, color: colors.education.text }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">BTech, Electronics & Communication Engineering</h3>
          <h4 className="vertical-timeline-element-subtitle">DAV Institute of Engineering and Technology</h4>
          <p>
            Specialized in embedded systems, signal processing, and IoT.<br />
            Developed projects integrating AI with communication technologies.
          </p>
        </VerticalTimelineElement>

        {/* EXPERIENCE */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: colors.experience.bg,
            color: colors.experience.text,
          }}
          contentArrowStyle={{ borderRight: `7px solid ${colors.experience.bg}` }}
          date="Jan 2024 – Sep 2024"
          iconStyle={{ background: colors.experience.bg, color: colors.experience.text }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">React.js Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Webapp Discovery Pvt Ltd, Panchkula, India</h4>
          <p>
            Developed and optimized React.js applications (responsive UIs).<br />
            Used Redux for state management and React Router for navigation.<br />
            Designed and integrated RESTful APIs with Node.js and Express.js.<br />
            Enhanced web performance, reducing load time by 40%.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: colors.experience.bg,
            color: colors.experience.text,
          }}
          contentArrowStyle={{ borderRight: `7px solid ${colors.experience.bg}` }}
          date="Jan 2023 – Jun 2023"
          iconStyle={{ background: colors.experience.bg, color: colors.experience.text }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">MERN Stack Developer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Netmax Technologies Pvt Ltd</h4>
          <p>
            Built MERN web apps with MongoDB, Express, React, Node.js.<br />
            Optimized UI with Tailwind CSS/Bootstrap, cutting load time by 30%.<br />
            Upgraded Strafetch site tech stack, boosting speed by 40%.<br />
            Collaborated with teams to deliver quality web solutions.
          </p>
        </VerticalTimelineElement>

        {/* PROJECTS */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: colors.project.bg,
            color: colors.project.text,
          }}
          contentArrowStyle={{ borderRight: `7px solid ${colors.project.bg}` }}
          date="Oct 2024 – Ongoing"
          iconStyle={{ background: colors.project.bg, color: colors.project.text }}
          icon={<FaProjectDiagram />}
        >
          <h3 className="vertical-timeline-element-title">Website Development || 24xdev.uk</h3>
          <p>
            Next.js, Firebase, Tailwind CSS, Vercel, Serverless Architecture.<br />
            Integrated client/server functionalities.<br />
            99.9% uptime via serverless architecture on Vercel.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: colors.project.bg,
            color: colors.project.text,
          }}
          contentArrowStyle={{ borderRight: `7px solid ${colors.project.bg}` }}
          date="Sept 2024"
          iconStyle={{ background: colors.project.bg, color: colors.project.text }}
          icon={<FaProjectDiagram />}
        >
          <h3 className="vertical-timeline-element-title">MASV File Upload Application</h3>
          <p>
            React.js, MASV API, Tailwind CSS, JavaScript.<br />
            Improved file transfer speed by 30% with MASV API.<br />
            Seamless uploads, progress tracking, serverless on Vercel (99.9% uptime).
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: colors.project.bg,
            color: colors.project.text,
          }}
          contentArrowStyle={{ borderRight: `7px solid ${colors.project.bg}` }}
          date="Aug 2024 – Sept 2024"
          iconStyle={{ background: colors.project.bg, color: colors.project.text }}
          icon={<FaProjectDiagram />}
        >
          <h3 className="vertical-timeline-element-title">Strafetch Site - Tech Stack Upgrade & Frontend Redesign</h3>
          <p>
            React.js, MASV API, Tailwind CSS, JavaScript.<br />
            Improved transfer speed by 30%, modernized UI.<br />
            Serverless deployment, 99.9% uptime.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: colors.project.bg,
            color: colors.project.text,
          }}
          contentArrowStyle={{ borderRight: `7px solid ${colors.project.bg}` }}
          date="Sept 2024"
          iconStyle={{ background: colors.project.bg, color: colors.project.text }}
          icon={<FaProjectDiagram />}
        >
          <h3 className="vertical-timeline-element-title">Secure Venture - Frontend Enhancements & Responsive Design</h3>
          <p>
            React.js, Tailwind CSS, API Integrations, JavaScript.<br />
            Optimized API integrations, enhanced UI.<br />
            Implemented fully responsive design.
          </p>
        </VerticalTimelineElement>

        {/* STAR/END */}
        <VerticalTimelineElement
          iconStyle={{ background: colors.star.bg, color: colors.star.text }}
          icon={<FaStar />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Resume;
