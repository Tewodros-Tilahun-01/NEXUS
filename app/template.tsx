"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Transition Overlay - Slides in from left, then slides out to right */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="fixed inset-0 z-[9999] bg-gradient-to-r from-bg via-bg2 to-bg pointer-events-none"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, times: [0, 0.5, 1] }}
            className="font-serif text-6xl font-light text-gold"
          >
            NEX<span className="text-gold-soft">US</span>
          </motion.div>
        </div>

        {/* Decorative gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 0.8, times: [0, 0.4, 1] }}
          className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent origin-center"
        />
      </motion.div>

      {/* Page Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        {children}
      </motion.div>
    </>
  );
}
