"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[68px] bg-[#050508]/70 backdrop-blur-[18px] border-b border-[#c9a84c]/20"
    >
      <Link
        href="/"
        className="font-serif text-[22px] font-semibold tracking-wide text-gold"
      >
        NEX<span className="text-text">US</span>
      </Link>

      <ul className="hidden md:flex gap-9 list-none">
        {["Markets", "Features", "How it works", "Company"].map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-muted text-[13px] font-normal tracking-widest uppercase transition-colors hover:text-gold-soft"
            >
              {item}
            </Link>
          </motion.li>
        ))}
      </ul>

      <div className="flex gap-3 items-center">
        <Link
          href="#"
          className="bg-transparent border border-[#c9a84c]/20 text-gold-soft px-[22px] py-[9px] rounded-lg text-[13px] font-medium tracking-wide transition-all hover:border-gold hover:bg-[#c9a84c]/10"
        >
          Sign in
        </Link>
        <Link
          href="#"
          className="bg-gold text-[#060508] px-[22px] py-[9px] rounded-lg text-[13px] font-semibold tracking-wide transition-all hover:opacity-90 hover:-translate-y-px"
        >
          Get started
        </Link>
      </div>
    </motion.nav>
  );
}
