"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative z-10 px-[5%] py-28 text-center bg-bg2 border-t border-[#c9a84c]/20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(201,168,76,0.06)_0%,transparent_70%)] pointer-events-none" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative font-serif text-[clamp(38px,5vw,62px)] font-light tracking-tight mb-5 leading-tight"
      >
        Ready to start
        <br />
        trading <em className="text-gold italic">smarter?</em>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="relative text-muted max-w-[440px] mx-auto mb-12 text-[15px] leading-relaxed"
      >
        Join over 2.4 million traders who trust Nexus with their digital assets.
        No minimums. No lock-ups.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="relative flex gap-3 justify-center flex-wrap"
      >
        <Link
          href="#"
          className="bg-gold text-[#060508] px-9 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all hover:opacity-90 hover:-translate-y-0.5"
        >
          Open free account
        </Link>
        <Link
          href="#"
          className="bg-transparent text-gold-soft border border-[#c9a84c]/20 px-9 py-3 rounded-lg text-sm font-normal tracking-wide transition-all hover:bg-[#c9a84c]/10 hover:border-gold"
        >
          Read the docs
        </Link>
      </motion.div>
    </section>
  );
}
