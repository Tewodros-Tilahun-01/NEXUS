"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="relative z-10 bg-bg border-t border-[#c9a84c]/20 px-[5%] py-14"
      id="footer"
    >
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="font-serif text-xl font-semibold tracking-wide text-gold mb-3">
            NEX<span className="text-text">US</span>
          </div>
          <p className="text-[13px] text-muted leading-relaxed max-w-[240px]">
            A new standard in digital asset trading. Built for professionals who
            demand more from their exchange.
          </p>
        </div>

        <div>
          <h4 className="text-[11px] tracking-[0.16em] uppercase text-gold mb-4 font-medium">
            Products
          </h4>
          <div className="flex flex-col gap-2">
            {["Spot trading", "Margin", "Derivatives", "Earn", "Launchpad"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[13px] text-muted transition-colors hover:text-text"
                >
                  {item}
                </Link>
              ),
            )}
          </div>
        </div>

        <div>
          <h4 className="text-[11px] tracking-[0.16em] uppercase text-gold mb-4 font-medium">
            Company
          </h4>
          <div className="flex flex-col gap-2">
            {["About us", "Careers", "Press", "Blog", "Contact"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[13px] text-muted transition-colors hover:text-text"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[11px] tracking-[0.16em] uppercase text-gold mb-4 font-medium">
            Support
          </h4>
          <div className="flex flex-col gap-2">
            {["Help center", "API docs", "Status", "Security", "Legal"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[13px] text-muted transition-colors hover:text-text"
                >
                  {item}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-dim pt-6 flex items-center justify-between flex-wrap gap-3">
        <span className="text-xs text-muted">
          © 2026 Nexus Digital Assets Ltd. All rights reserved.
        </span>
        <div className="flex gap-6">
          {["Privacy policy", "Terms of service", "Cookie settings"].map(
            (item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-muted hover:text-text"
              >
                {item}
              </Link>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}
