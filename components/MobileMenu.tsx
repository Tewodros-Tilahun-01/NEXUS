"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  const menuItems = [
    { name: "Markets", href: "/markets" },
    { name: "Features", href: "/features" },
    { name: "How it works", href: "/how-it-works" },
    { name: "Company", href: "/company" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ maxHeight: 0, opacity: 0 }}
          animate={{ maxHeight: 480, opacity: 1 }}
          exit={{ maxHeight: 0, opacity: 0 }}
          transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
          className="fixed top-[68px] left-0 right-0 z-[99] bg-bg/97 backdrop-blur-[24px] border-b border-gold/20 px-[5%] overflow-hidden lg:hidden"
        >
          <nav className="py-5">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center justify-between py-4 border-b border-dim/50 last:border-b-0 text-[15px] font-normal tracking-wider uppercase transition-colors ${
                    pathname === item.href
                      ? "text-gold-soft"
                      : "text-muted hover:text-gold-soft"
                  }`}
                >
                  {item.name}
                  <span className="text-[13px] opacity-40">→</span>
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-2.5 mt-6"
            >
              <Link
                href="/login"
                onClick={onClose}
                className="flex-1 text-center bg-transparent border border-gold/20 text-gold-soft px-[22px] py-[9px] rounded-lg text-[13px] font-medium tracking-wide transition-all hover:border-gold hover:bg-gold/10"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                onClick={onClose}
                className="flex-1 text-center bg-gold text-[#060508] px-[22px] py-[9px] rounded-lg text-[13px] font-semibold tracking-wide transition-all hover:opacity-90"
              >
                Get started
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
