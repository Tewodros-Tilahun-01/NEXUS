"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const data = [
  {
    name: "Bitcoin",
    sym: "BTC",
    price: "$67,420.00",
    change: "+2.34",
    mcap: "$1.32T",
    vol: "$28.4B",
    up: true,
    color: "#F7931A",
    spark: [40, 38, 45, 42, 50, 55, 52, 58, 60, 58],
  },
  {
    name: "Ethereum",
    sym: "ETH",
    price: "$3,512.80",
    change: "+1.82",
    mcap: "$422B",
    vol: "$14.2B",
    up: true,
    color: "#627EEA",
    spark: [40, 44, 42, 46, 44, 48, 50, 52, 50, 54],
  },
  {
    name: "Solana",
    sym: "SOL",
    price: "$178.44",
    change: "+5.11",
    mcap: "$78.2B",
    vol: "$3.8B",
    up: true,
    color: "#9945FF",
    spark: [30, 28, 32, 36, 34, 40, 44, 48, 46, 52],
  },
  {
    name: "BNB",
    sym: "BNB",
    price: "$589.12",
    change: "-0.47",
    mcap: "$86.1B",
    vol: "$1.9B",
    up: false,
    color: "#F3BA2F",
    spark: [52, 54, 50, 52, 48, 46, 48, 44, 46, 44],
  },
  {
    name: "XRP",
    sym: "XRP",
    price: "$0.6140",
    change: "-1.23",
    mcap: "$35.0B",
    vol: "$1.4B",
    up: false,
    color: "#00AAE4",
    spark: [55, 52, 50, 48, 46, 44, 46, 42, 44, 40],
  },
  {
    name: "Avalanche",
    sym: "AVAX",
    price: "$36.72",
    change: "+3.20",
    mcap: "$15.1B",
    vol: "$0.6B",
    up: true,
    color: "#E84142",
    spark: [35, 33, 36, 38, 40, 42, 40, 44, 46, 48],
  },
];

function SparkSVG({ pts, up }: { pts: number[]; up: boolean }) {
  const w = 70,
    h = 28;
  const min = Math.min(...pts),
    max = Math.max(...pts);
  const xs = pts.map((_, i) => (i / (pts.length - 1)) * w);
  const ys = pts.map((p) => h - ((p - min) / (max - min || 1)) * (h - 4) - 2);
  const d = xs
    .map((x, i) => `${i ? "L" : "M"}${x.toFixed(1)} ${ys[i].toFixed(1)}`)
    .join(" ");
  const col = up ? "#4CAF82" : "#E05555";

  return (
    <svg
      className="inline-block w-[70px] h-7 align-middle"
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
    >
      <path
        d={d}
        stroke={col}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Markets() {
  return (
    <section className="relative z-10 px-[5%] py-24" id="markets">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-end justify-between mb-10 flex-wrap gap-4"
      >
        <div>
          <div className="text-[11px] tracking-[0.2em] uppercase text-gold mb-2">
            Live markets
          </div>
          <h2 className="font-serif text-[38px] font-light leading-tight tracking-tight">
            Today's <em className="italic text-gold">movers</em>
          </h2>
        </div>
        <Link
          href="#"
          className="text-gold text-xs tracking-widest uppercase flex items-center gap-1 transition-all hover:gap-2"
        >
          View all assets →
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-x-auto"
      >
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-[11px] tracking-widest uppercase text-muted font-normal px-4 pb-3 border-b border-dim text-left">
                Asset
              </th>
              <th className="text-[11px] tracking-widest uppercase text-muted font-normal px-4 pb-3 border-b border-dim text-right">
                Price
              </th>
              <th className="text-[11px] tracking-widest uppercase text-muted font-normal px-4 pb-3 border-b border-dim text-right">
                24h change
              </th>
              <th className="text-[11px] tracking-widest uppercase text-muted font-normal px-4 pb-3 border-b border-dim text-right">
                Market cap
              </th>
              <th className="text-[11px] tracking-widest uppercase text-muted font-normal px-4 pb-3 border-b border-dim text-right">
                Volume
              </th>
              <th className="text-[11px] tracking-widest uppercase text-muted font-normal px-4 pb-3 border-b border-dim text-right">
                7d chart
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((c, i) => (
              <motion.tr
                key={c.sym}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-dim/50 transition-colors hover:bg-[#c9a84c]/5 cursor-pointer"
              >
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-[15px] font-semibold font-mono"
                      style={{
                        background: `${c.color}18`,
                        border: `0.5px solid ${c.color}44`,
                        color: c.color,
                      }}
                    >
                      {c.sym[0]}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text">
                        {c.name}
                      </div>
                      <div className="text-xs text-muted font-mono">
                        {c.sym}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-right font-mono text-[13px] text-text">
                  {c.price}
                </td>
                <td className="px-4 py-4 text-right">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs ${c.up ? "bg-green/10 text-green" : "bg-red/10 text-red"}`}
                  >
                    {c.up ? "▲" : "▼"} {c.change.replace("-", "")}%
                  </span>
                </td>
                <td className="px-4 py-4 text-right font-mono text-[13px] text-text">
                  {c.mcap}
                </td>
                <td className="px-4 py-4 text-right font-mono text-[13px] text-text">
                  {c.vol}
                </td>
                <td className="px-4 py-4 text-right">
                  <SparkSVG pts={c.spark} up={c.up} />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}
