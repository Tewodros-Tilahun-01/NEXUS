"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={`transition-${pathname}`}
          className="fixed inset-0 pointer-events-none"
          style={{ zIndex: 9999 }}
        >
          {/* Closing Curtain - slides from right to left */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 0.5,
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{
              background:
                "linear-gradient(90deg, #0f0f1a 0%, #0a0a12 50%, #050508 100%)",
            }}
            className="absolute inset-0"
          >
            {/* Brand reveal in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{
                  opacity: [0, 1, 1, 1, 0],
                  scale: [0.8, 1, 1, 1, 0.8],
                  y: [20, 0, 0, 0, -20],
                }}
                transition={{
                  duration: 1,
                  times: [0, 0.2, 0.5, 0.8, 1],
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
                duration: 1,
                times: [0, 0.3, 0.7, 1],
              }}
              className="absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
            />

            {/* Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-gold"
                style={{
                  left: `${15 + i * 12}%`,
                  top: `${25 + i * 8}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.4, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.08,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Opening Curtain - slides from center to left */}
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{
              background:
                "linear-gradient(90deg, #050508 0%, #0a0a12 50%, #0f0f1a 100%)",
            }}
            className="absolute inset-0"
          />
        </motion.div>
      </AnimatePresence>

      {/* Page Content */}
      <motion.div
        key={`content-${pathname}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        {children}
      </motion.div>
    </>
  );
}
