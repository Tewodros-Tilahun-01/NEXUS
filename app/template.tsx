"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 1200);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Stage 1: Curtain closes (right to left) - covers old page */}
      <motion.div
        key={`curtain-close-${pathname}`}
        initial={{ x: "100%" }}
        animate={{ x: isTransitioning ? "0%" : "0%" }}
        transition={{
          duration: 0.5,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{
          background:
            "linear-gradient(90deg, #0f0f1a 0%, #0a0a12 50%, #050508 100%)",
        }}
        className="fixed inset-0 z-[9999] pointer-events-none"
      >
        {/* Brand reveal in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1, 1, 0.8],
              y: [20, 0, 0, -20],
            }}
            transition={{
              duration: 1.2,
              times: [0, 0.25, 0.75, 1],
              ease: "easeInOut",
            }}
            className="font-serif text-7xl font-light tracking-wider"
          >
            <span className="text-gold">NEX</span>
            <span className="text-gold-soft">US</span>
          </motion.div>
        </div>

        {/* Decorative gold line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: [0, 1, 1, 0],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: 1.2,
            times: [0, 0.3, 0.7, 1],
          }}
          className="absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gold to-transparent origin-center"
        />

        {/* Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: `${15 + i * 12}%`,
              y: `${25 + i * 8}%`,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 1,
              delay: i * 0.08,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 rounded-full bg-gold"
          />
        ))}
      </motion.div>

      {/* Stage 2: Curtain opens (left to right) - reveals new page */}
      <motion.div
        key={`curtain-open-${pathname}`}
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 0.6,
          delay: 0.6,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{
          background:
            "linear-gradient(90deg, #050508 0%, #0a0a12 50%, #0f0f1a 100%)",
        }}
        className="fixed inset-0 z-[9998] pointer-events-none"
      />

      {/* Page Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        {children}
      </motion.div>
    </>
  );
}
