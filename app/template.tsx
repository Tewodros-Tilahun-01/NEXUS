"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showTransition, setShowTransition] = useState(true);

  useEffect(() => {
    setShowTransition(true);

    // Remove overlay after animations complete (slower timing)
    const timer = setTimeout(() => {
      setShowTransition(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {showTransition && (
        <div
          className="fixed inset-0 pointer-events-none"
          style={{ zIndex: 9999 }}
        >
          {/* First Curtain - Elegant panel slides LEFT to RIGHT */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 0.9,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="absolute inset-0 overflow-hidden"
          >
            {/* Elegant gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#050508] via-[#0a0a12] to-[#0f0f1a]" />

            {/* Subtle animated grid pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(rgba(201, 168, 76, 0.1) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(201, 168, 76, 0.1) 1px, transparent 1px)`,
                  backgroundSize: "50px 50px",
                }}
              />
            </div>

            {/* Gold accent border on leading edge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0.8, 0] }}
              transition={{ duration: 1.8, times: [0, 0.2, 0.8, 1] }}
              className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent"
              style={{ boxShadow: "0 0 30px rgba(201, 168, 76, 0.5)" }}
            />

            {/* Brand reveal in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{
                  opacity: [0, 1, 1, 1, 0],
                  scale: [0.85, 1, 1, 1, 0.85],
                  y: [30, 0, 0, 0, -30],
                }}
                transition={{
                  duration: 1.8,
                  times: [0, 0.2, 0.5, 0.8, 1],
                  ease: "easeInOut",
                }}
                className="text-center"
              >
                <div className="font-serif text-8xl font-light tracking-[0.2em]">
                  <span className="text-gold">NEX</span>
                  <span className="text-gold-soft">US</span>
                </div>
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{
                    opacity: [0, 0.6, 0.6, 0],
                    width: ["0%", "100%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 1.8,
                    times: [0, 0.3, 0.7, 1],
                  }}
                  className="h-px bg-gradient-to-r from-transparent via-gold to-transparent mt-6 mx-auto"
                  style={{ maxWidth: "300px" }}
                />
              </motion.div>
            </div>

            {/* Elegant floating particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gold"
                style={{
                  width: i % 2 === 0 ? "2px" : "3px",
                  height: i % 2 === 0 ? "2px" : "3px",
                  left: `${10 + i * 11}%`,
                  top: `${20 + ((i * 7) % 50)}%`,
                  boxShadow: "0 0 10px rgba(201, 168, 76, 0.6)",
                }}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{
                  opacity: [0, 0.6, 0.3, 0],
                  scale: [0, 1.2, 1, 0],
                  y: [20, -10, -20, -30],
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.2 + i * 0.1,
                  ease: "easeOut",
                }}
              />
            ))}

            {/* Subtle corner accents */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.3, 0], scale: [0, 1, 1] }}
              transition={{ duration: 1.5 }}
              className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-gold/30 rounded-tr-3xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.3, 0], scale: [0, 1, 1] }}
              transition={{ duration: 1.5 }}
              className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-gold/30 rounded-bl-3xl"
            />
          </motion.div>

          {/* Second Curtain - Elegant reveal RIGHT to LEFT */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 0.9,
              delay: 1.1,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="absolute inset-0"
          >
            {/* Elegant gradient background */}
            <div className="absolute inset-0 bg-gradient-to-bl from-[#0f0f1a] via-[#0a0a12] to-[#050508]" />

            {/* Gold accent border on trailing edge */}
            <motion.div
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent"
              style={{ boxShadow: "0 0 30px rgba(201, 168, 76, 0.5)" }}
            />
          </motion.div>
        </div>
      )}

      {/* Page Content */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        {children}
      </motion.div>
    </>
  );
}
