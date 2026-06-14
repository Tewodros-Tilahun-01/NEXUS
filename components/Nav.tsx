"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

export default function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Markets", href: "/markets" },
    { name: "Features", href: "/features" },
    { name: "How it works", href: "/how-it-works" },
    { name: "Company", href: "/company" },
  ];

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[68px] bg-bg/70 backdrop-blur-[18px] border-b border-gold/20"
      >
        <Link
          href="/"
          className="font-serif text-[22px] font-semibold tracking-wide text-gold"
        >
          NEX<span className="text-text">US</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-9 list-none">
          {navItems.map((item, i) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-muted text-[13px] font-normal tracking-widest uppercase transition-colors hover:text-gold-soft"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex gap-3 items-center">
          <Link
            href="/login"
            className="bg-transparent border border-gold/20 text-gold-soft px-[22px] py-[9px] rounded-lg text-[13px] font-medium tracking-wide transition-all hover:border-gold hover:bg-gold/10"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="bg-gold text-[#060508] px-[22px] py-[9px] rounded-lg text-[13px] font-semibold tracking-wide transition-all hover:opacity-90 hover:-translate-y-px"
          >
            Get started
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex lg:hidden flex-col justify-center gap-[5px] w-9 h-9 z-[200] p-1"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <motion.span
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 6 : 0,
            }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="block h-px w-full bg-gold-soft rounded-sm origin-center"
          />
          <motion.span
            animate={{
              opacity: isMenuOpen ? 0 : 1,
              scaleX: isMenuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
            className="block h-px w-[65%] ml-auto bg-gold-soft rounded-sm"
          />
          <motion.span
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -6 : 0,
            }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="block h-px w-full bg-gold-soft rounded-sm origin-center"
          />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
