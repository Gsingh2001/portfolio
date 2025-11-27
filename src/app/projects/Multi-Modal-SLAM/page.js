"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaGithub,
  FaFilePdf,
  FaArrowLeft,
  FaRobot,
  FaMapMarkedAlt,
  FaSatellite,
  FaBrain,
} from "react-icons/fa";
import { useTheme } from "@/app/assets/ThemeContext";

export default function LuSNARPage() {
  const { currentTheme } = useTheme();

  const accent = currentTheme?.colors?.accent || "#00A3FF";
  const text = currentTheme?.colors?.text || "#ffffff";
  const bg = currentTheme?.colors?.background || "#0a0a0a";

  return (
    <main style={{ backgroundColor: bg }} className="pb-24">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">

          {/* BACK BUTTON */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold mb-6"
              style={{ color: accent }}
            >
              <FaArrowLeft size={14} /> Back to Projects
            </Link>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            style={{ color: text }}
          >
            LuSNAR Multi-Modal SLAM
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-lg md:text-xl max-w-3xl mt-5 leading-relaxed tracking-wide"
            style={{ color: text, opacity: 0.85 }}
          >
            A next-generation lunar navigation system fusing <strong>LiDAR, Stereo Cameras,
            IMU</strong> and <strong>Quantum-Inspired CNN (QCNN)</strong> features to achieve
            precision odometry in extreme low-light, low-texture environments.
          </motion.p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-10">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="https://github.com/gsingh2001"
                target="_blank"
                className="px-7 py-3 rounded-xl font-semibold flex items-center gap-3 shadow-xl"
                style={{
                  background: accent,
                  color: "#fff",
                }}
              >
                <FaGithub size={18} /> Source Code
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/files/lusnar-slam-report.pdf"
                className="px-7 py-3 rounded-xl font-semibold flex items-center gap-3 border shadow-xl"
                style={{
                  borderColor: accent,
                  color: accent,
                }}
                target="_blank"
              >
                <FaFilePdf size={16} /> Research Report
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-14"
            style={{ color: text }}
          >
            Multi-Modal SLAM & AI Fusion System
          </motion.h2>

          {/* -------- OVERVIEW -------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: accent }}>
                Project Overview
              </h3>

              <p className="text-base leading-relaxed tracking-wide" style={{ color: text }}>
                The LuSNAR AI system is engineered for <strong>lunar rover autonomy</strong>,
                handling difficult terrain where traditional visual SLAM fails.
                Using NASA-derived <strong>moon analogue datasets</strong>, we built a
                precision SLAM pipeline that fuses:
              </p>

              <ul className="mt-5 space-y-2 text-base" style={{ color: text }}>
                <li>• 3D LiDAR — geometry-based odometry via ICP</li>
                <li>• Stereo images — QCNN visual embeddings</li>
                <li>• IMU — short-window motion estimation</li>
                <li>• Hybrid fusion — residual BiLSTM + MLP</li>
              </ul>
            </div>

            <img
              src="/img/slam-overview.png"
              className="rounded-2xl shadow-2xl border border-white/10"
              alt="SLAM overview"
            />
          </motion.div>

          {/* -------- MODALITIES FEATURES GRID -------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-28">
            {[
              {
                icon: <FaRobot size={34} />,
                title: "3D LiDAR",
                desc: "360° point cloud scans for geometric ICP alignment.",
              },
              {
                icon: <FaMapMarkedAlt size={34} />,
                title: "Stereo Cameras",
                desc: "High-res lunar images processed with QCNN."
              },
              {
                icon: <FaSatellite size={34} />,
                title: "IMU Sensor",
                desc: "Gyro + accelerometer windowing for real-time motion."
              },
              {
                icon: <FaBrain size={34} />,
                title: "QCNN Features",
                desc: "Quantum-inspired perception under extreme low texture."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-2xl shadow-xl border backdrop-blur-lg"
                style={{
                  background: `${accent}15`,
                  borderColor: `${accent}40`,
                  color: text,
                }}
              >
                <div className="flex justify-center mb-4" style={{ color: accent }}>
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg mb-2" style={{ color: accent }}>
                  {item.title}
                </h4>
                <p className="text-sm opacity-90">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* -------- ARCHITECTURE -------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-28"
          >
            <h3
              className="text-2xl font-semibold mb-5 text-center"
              style={{ color: accent }}
            >
              Multi-Modal Fusion Architecture
            </h3>

            <img
              src="/img/fusion-architecture.png"
              alt="Fusion Architecture"
              className="rounded-2xl w-full shadow-2xl border border-white/10"
            />
          </motion.div>

          {/* -------- KEY RESULTS -------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h3
              className="text-2xl font-semibold mb-6 text-center"
              style={{ color: accent }}
            >
              Key Performance Results
            </h3>

            <ul className="space-y-4 text-base leading-relaxed" style={{ color: text }}>
              <li>✔ <strong>0.42 m RMSE</strong> — 89% improvement over LiDAR-only ICP</li>
              <li>✔ QCNN greatly improves depth feature stability</li>
              <li>✔ Fusion outperforms all single-sensor models across Moon_1–3</li>
              <li>✔ Real-time capable inference (PyTorch AMP optimised)</li>
            </ul>

            <img
              src="/img/error-plot.png"
              alt="Error Plot"
              className="mt-8 rounded-2xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>
      </section>

      {/* ---------------- RELATED PROJECTS ---------------- */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <h2
          className="text-3xl font-bold mb-10 text-center"
          style={{ color: text }}
        >
          Related AI Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "QCNN Odometry Model",
              desc: "Quantum-inspired CNN architecture for robust odometry.",
              link: "/projects/qcnn-odometry",
            },
            {
              title: "IMU Fusion Engine",
              desc: "Windowed IMU encoder for short-term motion stability.",
              link: "/projects/imu-fusion",
            },
            {
              title: "AI Patient Dashboard",
              desc: "NLP-powered medical intelligence system in Next.js.",
              link: "/projects/ai-dashboard",
            },
          ].map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl shadow-xl border transition"
              style={{
                background: `${accent}10`,
                borderColor: `${accent}40`,
              }}
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: accent }}>
                {proj.title}
              </h3>
              <p className="text-sm mb-4" style={{ color: text }}>
                {proj.desc}
              </p>

              <Link
                href={proj.link}
                style={{ color: accent }}
                className="font-semibold underline"
              >
                View Project →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
