"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-[5%] pt-40 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[11px] font-medium tracking-[0.22em] uppercase text-gold mb-7 flex items-center gap-3"
      >
        <span className="block w-10 h-px bg-gold opacity-50" />
        The future of digital wealth
        <span className="block w-10 h-px bg-gold opacity-50" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-serif text-[clamp(52px,7vw,88px)] font-light leading-[1.08] tracking-tight text-text max-w-[820px] mb-3"
      >
        Trade with <em className="italic text-gold">precision.</em>
        <br />
        Grow with confidence.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base text-muted max-w-[480px] my-6 font-light leading-relaxed"
      >
        Nexus gives serious investors access to 350+ digital assets, deep
        liquidity, and institutional-grade security — all in one place.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex gap-3 justify-center flex-wrap"
      >
        <Link
          href="#markets"
          className="bg-gold text-[#060508] px-9 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all hover:opacity-90 hover:-translate-y-0.5"
        >
          Explore markets
        </Link>
        <Link
          href="#how"
          className="bg-transparent text-gold-soft border border-[#c9a84c]/20 px-9 py-3 rounded-lg text-sm font-normal tracking-wide transition-all hover:bg-[#c9a84c]/10 hover:border-gold"
        >
          How it works
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dim text-[11px] tracking-[0.12em] uppercase animate-bob"
      >
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
      <style jsx>{`
        @keyframes bob {
          0%,
          100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(6px);
          }
        }
        .animate-bob {
          animation: bob 2.4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
