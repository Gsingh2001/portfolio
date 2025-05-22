"use client";
import React from "react";
import { useTheme } from "@/app/assets/ThemeContext";

const Footer = () => {
  const { currentTheme } = useTheme();

  const footerBg = currentTheme?.colors?.background || "#fff";
  const footerText = currentTheme?.colors?.text || "#222";
  const accent = currentTheme?.colors?.accent || "#2563eb";

  return (
    <footer
      className="w-full py-2 text-center"
      style={{
        backgroundColor: footerBg,
        color: footerText,
        fontSize: "0.95rem",
        borderTop: `1px solid ${accent}22`,
        letterSpacing: "0.5px",
        position: "fixed",
        left: 0,
        bottom: 0,
        zIndex: 40,
      }}
    >
      &copy; {new Date().getFullYear()} Gurmanpreet Singh
    </footer>
  );
};

export default Footer;
