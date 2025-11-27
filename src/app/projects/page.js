"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/app/assets/ThemeContext";
import { FaRobot, FaBrain, FaSatellite, FaCode } from "react-icons/fa";

export default function ProjectsPage() {
  const { currentTheme } = useTheme();

  const accent = currentTheme?.colors?.accent || "#00A3FF";
  const text = currentTheme?.colors?.text || "#ffffff";
  const bg = currentTheme?.colors?.background || "#0a0a0a";

  const projects = [
    {
      title: "LuSNAR Multi-Modal SLAM",
      description:
        "LiDAR + Camera + IMU fusion system with QCNN features for lunar rover autonomy.",
      href: "/projects/Multi-Modal-SLAM",
      icon: <FaRobot size={32} />,
      tags: ["SLAM", "LiDAR", "QCNN", "IMU"],
    },
    {
      title: "QCNN Odometry Model",
      description:
        "Quantum-inspired convolutional network for robust visual odometry in low-texture environments.",
      href: "/projects/qcnn-odometry",
      icon: <FaBrain size={32} />,
      tags: ["QCNN", "Deep Learning", "PyTorch"],
    },
    {
      title: "IMU Fusion Engine",
      description:
        "Gyro + accelerometer time-window encoder for micro-motion prediction and sensor fusion.",
      href: "/projects/imu-fusion",
      icon: <FaSatellite size={32} />,
      tags: ["IMU", "Motion", "Fusion"],
    },
    {
      title: "AI Medical Dashboard",
      description:
        "NLP-powered patient report generator and data insights dashboard built with Next.js.",
      href: "/projects/ai-dashboard",
      icon: <FaCode size={32} />,
      tags: ["Next.js", "NLP", "AI"],
    },
    {
      title: "SLAM Dataset Recorder (Webots)",
      description:
        "Custom Webots supervisor system generating LiDAR, depth, stereo, IMU data for SLAM training.",
      href: "/projects/slam-recorder",
      icon: <FaRobot size={32} />,
      tags: ["Webots", "SLAM", "Simulation"],
    },
    {
      title: "Full-Stack Travel AI Website",
      description:
        "AI-powered destination assistant using Next.js, OpenAI, and dynamic travel planning.",
      href: "/projects/travel-ai",
      icon: <FaCode size={32} />,
      tags: ["Full-stack", "Next.js", "AI"],
    },
  ];

  return (
    <main style={{ backgroundColor: bg }} className="py-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ------------------------------------- */}
        {/* HEADER */}
        {/* ------------------------------------- */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-center mb-6"
          style={{ color: text }}
        >
          Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-center max-w-2xl mx-auto mb-14"
          style={{ color: text, opacity: 0.8 }}
        >
          A collection of my best work across AI, SLAM, computer vision,
          quantum-inspired models, and full-stack development.
        </motion.p>

        {/* ------------------------------------- */}
        {/* PROJECT GRID */}
        {/* ------------------------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="p-7 rounded-2xl shadow-xl border group cursor-pointer transition-all"
              style={{
                backgroundColor: `${accent}10`,
                borderColor: `${accent}40`,
              }}
            >
              <Link href={proj.href}>
                {/* Icon */}
                <div
                  className="flex justify-center mb-4"
                  style={{ color: accent }}
                >
                  {proj.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-center mb-2 group-hover:tracking-wider transition-all"
                  style={{ color: accent }}
                >
                  {proj.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm text-center mb-4"
                  style={{ color: text, opacity: 0.85 }}
                >
                  {proj.description}
                </p>

                {/* Tags */}
                <div className="flex justify-center flex-wrap gap-2 mt-3">
                  {proj.tags.map((tag, t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-semibold rounded-lg"
                      style={{
                        backgroundColor: `${accent}25`,
                        color: accent,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
