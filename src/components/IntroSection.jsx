// components/IntroSection.jsx
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import {
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFilePdf,
} from 'react-icons/fa';
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiDocker,
  SiJira,
  SiSlack,
} from 'react-icons/si';

const SKILL_ICONS = [
  // AI + ML
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiScikitlearn,

  // Full-Stack
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,

  // DevOps + Tools
  SiGit,
  SiGithub,
  SiDocker,
  SiJira,
  SiSlack,
].filter(Boolean);

const IntroSection = ({ currentTheme }) => {
  const iconColor = currentTheme.colors.icon || currentTheme.colors.text;
  const fgColor = currentTheme.colors.text;
  const accent = currentTheme.colors.accent;

  return (
    <section
      className="relative flex items-center justify-center bg-cover min-h-[90vh]"
      style={{ backgroundColor: currentTheme.colors.background }}
      aria-label="Introduction section"
      role="banner"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-0">

        {/* Text Column */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center md:pr-10">
          
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center md:text-left"
            style={{ color: fgColor }}
          >
            Hello, I’m <span style={{ color: accent }}>Gurmanpreet</span>
            <br />
            <span className="block">
              AI Developer & Machine Learning Engineer
            </span>
          </h1>

          <p
            className="text-base sm:text-lg mb-6 text-center md:text-left"
            style={{ color: fgColor }}
          >
            I build intelligent systems using <strong>Deep Learning, NLP, Computer Vision,
            Multi-Modal SLAM, and Quantum-inspired models</strong>.  
            I also develop scalable full-stack applications with React, Next.js, and Node.js.
          </p>

          {/* Contact Icons */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mb-4">
            <Link href="tel:+447553189857" aria-label="Call me">
              <FaPhone
                className="text-2xl transition-colors duration-300 hover:text-accent"
                style={{ color: iconColor }}
              />
            </Link>

            <Link href="mailto:gsingh07@outlook.in" aria-label="Email me">
              <FaEnvelope
                className="text-2xl transition-colors duration-300 hover:text-accent"
                style={{ color: iconColor }}
              />
            </Link>

            <Link href="https://github.com/gsingh2001" target="_blank" rel="noopener noreferrer">
              <FaGithub
                className="text-2xl transition-colors duration-300 hover:text-accent"
                style={{ color: iconColor }}
              />
            </Link>

            <Link href="https://linkedin.com/in/gsingh07" target="_blank" rel="noopener noreferrer">
              <FaLinkedin
                className="text-2xl transition-colors duration-300 hover:text-accent"
                style={{ color: iconColor }}
              />
            </Link>

            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <FaFilePdf
                className="text-2xl transition-colors duration-300 hover:text-accent"
                style={{ color: iconColor }}
              />
            </Link>
          </div>

          {/* Skill Icons Marquee */}
          <div className="w-full mt-3">
            <Marquee gradient={false} speed={40} pauseOnHover className="py-2 mt-5">
              {SKILL_ICONS.map((Icon, i) => (
                <Icon key={i} size={32} color={iconColor} className="mx-4" />
              ))}
            </Marquee>
          </div>
        </div>

        {/* Image Column */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
          <div className="w-60 h-60 sm:w-80 sm:h-80 md:w-[480px] md:h-[480px] flex items-center justify-center rounded-2xl overflow-hidden shadow-lg bg-white/5">
            <Image
              src="/img/IMG-20250520-WA0020~2.jpg"
              alt="Gurmanpreet - AI & ML Developer"
              className="w-full h-full object-cover"
              loading="lazy"
              width={480}
              height={480}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default IntroSection;
