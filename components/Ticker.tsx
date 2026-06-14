"use client";

const coins = [
  { sym: "BTC", price: "$67,420", change: "+2.34%", up: true },
  { sym: "ETH", price: "$3,512", change: "+1.82%", up: true },
  { sym: "BNB", price: "$589", change: "-0.47%", up: false },
  { sym: "SOL", price: "$178", change: "+5.11%", up: true },
  { sym: "XRP", price: "$0.614", change: "-1.23%", up: false },
  { sym: "ADA", price: "$0.448", change: "+0.88%", up: true },
  { sym: "AVAX", price: "$36.7", change: "+3.20%", up: true },
  { sym: "DOT", price: "$7.12", change: "-2.04%", up: false },
  { sym: "MATIC", price: "$0.92", change: "+1.44%", up: true },
  { sym: "LINK", price: "$14.38", change: "+2.91%", up: true },
];

export default function Ticker() {
  return (
    <div className="fixed top-[68px] left-0 right-0 z-40 bg-bg2 border-b border-[#c9a84c]/20 overflow-hidden h-9 flex items-center">
      <div className="flex gap-0 animate-ticker whitespace-nowrap">
        {[...coins, ...coins].map((c, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2 px-7 text-xs font-mono border-r border-dim"
          >
            <span className="text-gold-soft font-medium">{c.sym}</span>
            <span className="text-text">{c.price}</span>
            <span className={c.up ? "text-green" : "text-red"}>{c.change}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
