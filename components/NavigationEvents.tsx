"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function NavigationEvents() {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsNavigating(true);
    const timeout = setTimeout(() => setIsNavigating(false), 1000);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <AnimatePresence>
      {isNavigating && (
        <>
          {/* Top progress bar */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 1, opacity: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-soft to-gold z-[10000] origin-left"
            style={{
              boxShadow: "0 0 20px rgba(201, 168, 76, 0.5)",
            }}
          />

          {/* Bottom accent line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 1, opacity: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent z-[10000] origin-right"
          />
        </>
      )}
    </AnimatePresence>
  );
}
