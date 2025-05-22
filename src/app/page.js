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

export default function Home() {
  const { currentTheme } = useTheme();

  return (

    <>

      <IntroSection currentTheme={currentTheme} />
      <Resume />

    </>
  );
}
