"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "⚡",
    title: "Ultra-low latency",
    desc: "Our matching engine processes up to 1.4 million orders per second with sub-millisecond execution — no slippage on fast-moving assets.",
  },
  {
    icon: "🔒",
    title: "Cold storage security",
    desc: "95% of all assets are held in geographically distributed cold wallets. Multi-party computation keys. $650M insurance policy.",
  },
  {
    icon: "📊",
    title: "Advanced charting",
    desc: "TradingView-powered charts with 100+ technical indicators, custom drawing tools, and multi-timeframe analysis built in.",
  },
  {
    icon: "🌐",
    title: "Deep liquidity",
    desc: "Connected to 18 global liquidity providers. Tight spreads even on altcoins. Smart order routing finds the best price automatically.",
  },
];

export default function Features() {
  return (
    <section
      className="relative z-10 px-[5%] py-24 bg-bg2 border-t border-b border-[#c9a84c]/20"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-2">
          Why Nexus
        </div>
        <h2 className="font-serif text-[38px] font-light leading-tight tracking-tight">
          Built for the <em className="italic text-gold">disciplined</em>{" "}
          investor
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px mt-14 bg-dim border border-dim rounded-[14px] overflow-hidden">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-bg2 p-10 transition-colors hover:bg-bg3"
          >
            <div className="w-11 h-11 rounded-[10px] bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center mb-6 text-xl">
              {f.icon}
            </div>
            <h3 className="font-serif text-[22px] font-normal mb-3 text-text">
              {f.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
