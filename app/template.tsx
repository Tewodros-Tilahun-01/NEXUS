"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Curtain Overlay - Closes from right to left, opens left to right */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
          times: [0, 0.5, 1],
        }}
        style={{
          background:
            "linear-gradient(90deg, #050508 0%, #0a0a12 50%, #0f0f1a 100%)",
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
              duration: 1,
              times: [0, 0.3, 0.7, 1],
              ease: "easeInOut",
            }}
            className="font-serif text-7xl font-light tracking-wider"
          >
            <span className="text-gold">NEX</span>
            <span className="text-gold-soft">US</span>
          </motion.div>
        </div>

        {/* Decorative gold accent */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: [0, 1, 1, 0],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: 1,
            times: [0, 0.3, 0.7, 1],
          }}
          className="absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gold to-transparent origin-center"
        />

        {/* Subtle particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: `${20 + i * 15}%`,
              y: `${30 + i * 10}%`,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 1,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 rounded-full bg-gold"
          />
        ))}
      </motion.div>

      {/* Page Content - Fades in after transition */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}
