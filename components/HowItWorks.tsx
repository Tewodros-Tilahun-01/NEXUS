"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Create your account",
    desc: "Sign up with just an email. Identity verification takes under three minutes with our AI-powered KYC system.",
  },
  {
    num: "02",
    title: "Fund your wallet",
    desc: "Deposit via bank transfer, card, or crypto. Instant funding available in 40+ currencies across 120 countries.",
  },
  {
    num: "03",
    title: "Start trading",
    desc: "Access spot, margin, and derivatives markets. Set alerts, automate strategies, and track your portfolio in real time.",
  },
  {
    num: "04",
    title: "Grow your wealth",
    desc: "Earn yield on idle assets, participate in token launches, and access exclusive research from our analyst team.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative z-10 px-[5%] py-24" id="how">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-2">
          Getting started
        </div>
        <h2 className="font-serif text-[38px] font-light leading-tight tracking-tight">
          Up and running <em className="italic text-gold">in minutes</em>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-14 relative">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            <div className="font-serif text-[72px] font-light text-[#c9a84c]/10 leading-none mb-4 tracking-tight">
              {s.num}
            </div>
            <h3 className="text-base font-medium mb-2 text-text">{s.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
            {i < 3 && (
              <div className="hidden lg:block absolute top-9 -right-5 w-10 h-px bg-[#c9a84c]/20" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
