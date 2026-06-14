"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Stats() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 },
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="px-[5%] pb-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#c9a84c]/20 border-t border-b border-[#c9a84c]/20"
    >
      <StatCard
        delay={0}
        value={4.8}
        suffix="B"
        prefix="$"
        label="Daily trading volume"
        visible={visible}
      />
      <StatCard
        delay={0.1}
        value={2.4}
        suffix="M"
        label="Active traders globally"
        visible={visible}
      />
      <StatCard
        delay={0.2}
        value={350}
        suffix="+"
        label="Digital assets listed"
        visible={visible}
      />
      <StatCard
        delay={0.3}
        value={99.98}
        suffix="%"
        label="Platform uptime"
        visible={visible}
        decimal
      />
    </div>
  );
}

function StatCard({
  value,
  prefix = "",
  suffix = "",
  label,
  delay,
  visible,
  decimal,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  delay: number;
  visible: boolean;
  decimal?: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const duration = 1800;
    const steps = 60;
    const inc = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += inc;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [visible, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      className="bg-bg p-9 text-center"
    >
      <div className="font-serif text-[40px] font-light text-gold-soft leading-none tracking-tight">
        {prefix}
        {decimal ? count.toFixed(2) : Math.round(count)}
        <span className="text-[20px] text-gold">{suffix}</span>
      </div>
      <div className="text-[11px] tracking-[0.14em] uppercase text-muted mt-2">
        {label}
      </div>
    </motion.div>
  );
}
