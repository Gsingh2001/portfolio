// components/CardGrid.jsx
"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const CardGrid = ({ items, currentTheme }) => {
  const accent = currentTheme.colors.accent;
  const text = currentTheme.colors.text;
  const bg = currentTheme.colors.cardBackground || currentTheme.colors.background;

  return (
    <section
      className="py-16"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          style={{ color: text }}
        >
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden border shadow-xl cursor-pointer group"
              style={{
                backgroundColor: bg,
                borderColor: `${accent}40`,
              }}
            >
              {/* Image */}
              {item.image && (
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-5">
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: accent }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-sm mb-4 leading-relaxed"
                  style={{ color: text, opacity: 0.9 }}
                >
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold rounded-xl"
                      style={{
                        backgroundColor: `${accent}25`,
                        color: accent,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer / link */}
                {item.link && (
                  <Link
                    href={item.link}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-semibold"
                    style={{ color: accent }}
                  >
                    View Project <FaExternalLinkAlt size={14} />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
