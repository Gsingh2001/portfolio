"use client";

import IntroSection from "@/components/IntroSection";
import { useTheme } from "./assets/ThemeContext";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CallToAction from "@/components/CallToAction";
import Features from "@/components/Features";
import Portfolio from "@/components/Portolio";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import IntroductionToCEO from "@/components/IntroductionToCEO";
import { ToastContainer } from "react-toastify";
import Resume from "@/components/Resume";
import CardGrid from "@/components/CardGrip";

const projectItems = [
  {
    title: "LuSNAR Multi-Modal SLAM",
    description: "LiDAR-Camera-IMU fusion dataset pipeline for lunar rover autonomy.",
    image: "/img/slam.png",
    tags: ["SLAM", "LiDAR", "IMU", "Computer Vision"],
    link: "https://github.com/gsingh2001",
  },
  {
    title: "Quantum-Inspired CNN (QCNN)",
    description: "Hybrid quantum-classical CNN for odometry and feature extraction.",
    image: "/img/qcnn.png",
    tags: ["QCNN", "Deep Learning", "PyTorch"],
  },
  {
    title: "Next.js AI Dashboard",
    description: "Dynamic patient analytics dashboard powered by custom ML models.",
    image: "/img/dashboard.png",
    tags: ["Next.js", "AI", "ML", "Firebase"],
    link: "#",
  },
];

export default function Home() {
  const { currentTheme } = useTheme();

  return (

    <>

      <IntroSection currentTheme={currentTheme} />
      <CardGrid items={projectItems} currentTheme={currentTheme} />

      <Resume />

    </>
  );
}
