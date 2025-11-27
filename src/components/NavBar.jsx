"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { useTheme } from "@/app/assets/ThemeContext";

const NavBar = () => {
  const { isDarkMode, toggleDarkMode, currentTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const [hasCheckedPreference, setHasCheckedPreference] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Apply dark mode preference on first load
  useEffect(() => {
    if (!hasCheckedPreference) {
      const userPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (userPreference !== isDarkMode) {
        toggleDarkMode();
      }
      setHasCheckedPreference(true);
    }
  }, [hasCheckedPreference, isDarkMode, toggleDarkMode]);

  // Close mobile menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (link) => pathname === link;

  const resumeButtonClasses = `
    inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow transition 
    font-medium
    ${isActive("/resume") ? "bg-blue-700 text-white" : isDarkMode ? "bg-gray-800 text-white hover:bg-blue-700" : "bg-blue-500 text-white hover:bg-blue-700"}
    focus:outline-none focus:ring-2 focus:ring-blue-300
  `;

  const mobileResumeButtonClasses = `
    w-full flex items-center gap-2 justify-center px-4 py-2 rounded-lg shadow transition font-medium
    ${isActive("/resume") ? "bg-blue-700 text-white" : isDarkMode ? "bg-gray-800 text-white hover:bg-blue-700" : "bg-blue-500 text-white hover:bg-blue-700"}
    focus:outline-none focus:ring-2 focus:ring-blue-300
  `;

  return (
    <nav
      style={{
        background: currentTheme.colors.background,
        color: currentTheme.colors.text,
      }}
      className="text-white shadow-lg sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:flex-row md:space-x-4">
          <Link href="/" className="flex items-center"></Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex flex-grow justify-end items-center">
            <div className="flex space-x-6 me-4">
              <Link
                href="/"
                className={`px-4 py-2 rounded-lg transition ${
                  isActive("/") ? "bg-blue-700 text-white" : isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className={`px-4 py-2 rounded-lg transition ${
                  isActive("/projects") ? "bg-blue-700 text-white" : isDarkMode ? "text-white" : "text-black"
                }`}
              >
                projects
              </Link>
              <a
                href="/resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume"
                className={resumeButtonClasses}
                style={{ minWidth: "125px" }}
              >
                <FiDownload className="text-lg" aria-hidden="true" />
                Resume
              </a>
            </div>
            {/* Dark Mode Toggle */}
            <label className="theme-switch cursor-pointer ml-4">
              <input
                type="checkbox"
                className="theme-switch__checkbox"
                onChange={toggleDarkMode}
                checked={isDarkMode}
              />
              <div className="theme-switch__container">
                <div className="theme-switch__clouds"></div>
                <div className="theme-switch__stars-container"></div>
                <div className="theme-switch__circle-container">
                  <div className="theme-switch__sun-moon-container">
                    <div className="theme-switch__moon">
                      <div className="theme-switch__spot"></div>
                    </div>
                  </div>
                </div>
              </div>
            </label>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className={`text-white focus:outline-none ${
                isDarkMode ? "bg-gray-600" : "bg-gray-800"
              } p-2 rounded-lg hover:bg-gray-700 transition`}
            >
              {mobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} ${currentTheme.colors.background}`}
      >
        <div className="px-4 py-3 space-y-2">
          <Link
            href="/"
            className={`block px-4 py-2 rounded-lg transition ${
              isActive("/") ? "bg-blue-700 text-white" : isDarkMode ? "text-white" : "text-black"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`block px-4 py-2 rounded-lg transition ${
              isActive("/projects") ? "bg-blue-700 text-white" : isDarkMode ? "text-white" : "text-black"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
            className={mobileResumeButtonClasses}
            onClick={() => setMobileMenuOpen(false)}
            style={{ minWidth: "125px" }}
          >
            <FiDownload className="text-lg" aria-hidden="true" />
            Resume
          </a>
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`block w-full text-left px-4 py-2 rounded-lg transition ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
