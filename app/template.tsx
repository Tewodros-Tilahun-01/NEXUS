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
    }, 2400);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {showTransition && (
        <div
          className="fixed inset-0 pointer-events-none"
          style={{ zIndex: 9999 }}
        >
          {/* First Curtain - Elegant slide LEFT to RIGHT */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 0.9,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="absolute inset-0 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #050508 0%, #0a0a12 40%, #0f0f1a 100%)",
            }}
          >
            {/* Elegant overlay pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 50%, rgba(201, 168, 76, 0.15) 0%, transparent 50%)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 80% 50%, rgba(201, 168, 76, 0.1) 0%, transparent 50%)",
                }}
              />
            </div>

            {/* Vertical accent lines */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`line-${i}`}
                className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent"
                style={{ left: `${30 + i * 20}%` }}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: [0, 0.3, 0], scaleY: [0, 1, 0] }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Brand reveal in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{
                  opacity: [0, 1, 1, 1, 0],
                  scale: [0.85, 1.02, 1, 1, 0.85],
                  y: [30, -5, 0, 0, -30],
                }}
                transition={{
                  duration: 2,
                  times: [0, 0.2, 0.3, 0.8, 1],
                  ease: [0.65, 0, 0.35, 1],
                }}
                className="font-serif text-8xl font-light tracking-[0.15em]"
              >
                <span className="text-gold">NEX</span>
                <span className="text-gold-soft">US</span>
              </motion.div>
            </div>

            {/* Elegant decorative elements */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: [0, 1, 1, 0],
                opacity: [0, 0.5, 0.5, 0],
              }}
              transition={{
                duration: 1.8,
                times: [0, 0.3, 0.7, 1],
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-[15%] right-[15%] h-px origin-center"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(201, 168, 76, 0.6) 50%, transparent 100%)",
              }}
            />

            {/* Floating particles with glow */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${10 + i * 10}%`,
                  top: `${20 + (i % 3) * 20}%`,
                  width: i % 2 === 0 ? "2px" : "3px",
                  height: i % 2 === 0 ? "2px" : "3px",
                  background:
                    "radial-gradient(circle, rgba(201, 168, 76, 0.8) 0%, transparent 70%)",
                  boxShadow: "0 0 8px rgba(201, 168, 76, 0.4)",
                }}
                initial={{ opacity: 0, scale: 0, y: 0 }}
                animate={{
                  opacity: [0, 0.6, 0],
                  scale: [0, 1.5, 0],
                  y: [0, -20, -40],
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.3 + i * 0.1,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>

          {/* Second Curtain - Elegant slide RIGHT to LEFT */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 1,
              delay: 1.2,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #0f0f1a 0%, #0a0a12 60%, #050508 100%)",
            }}
          />
        </div>
      )}

      {/* Page Content */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}
