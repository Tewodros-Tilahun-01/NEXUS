"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ConstellationBg from "@/components/ConstellationBg";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <main className="min-h-screen flex">
      <ConstellationBg />

      {/* Left Panel */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex-[0_0_52%] hidden lg:flex flex-col justify-center px-16 py-16 border-r border-gold/20 bg-bg/60"
      >
        <Link
          href="/"
          className="font-serif text-xl font-semibold text-gold tracking-wider mb-20"
        >
          NEX<span className="text-text">US</span>
        </Link>

        <div className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-gold mb-5">
          Welcome back
          <div className="w-12 h-px bg-gold opacity-40" />
        </div>

        <h2 className="font-serif text-[clamp(42px,4vw,58px)] font-light leading-[1.08] tracking-tight mb-6">
          Your portfolio
          <br />
          is <em className="italic text-gold">waiting.</em>
        </h2>

        <p className="text-sm text-muted leading-relaxed max-w-[340px] mb-16">
          Sign in to access real-time markets, your holdings, order history, and
          advanced trading tools.
        </p>

        <div className="border-l-2 border-gold pl-6 pr-6 py-5 bg-gold/10 rounded-r-lg mb-10">
          <p className="font-serif text-lg font-light italic text-gold-soft leading-relaxed mb-3">
            "Nexus changed how I think about managing digital assets. The
            interface is surgical."
          </p>
          <div className="text-xs text-muted tracking-wide">
            <strong className="text-text font-medium">Amara Osei</strong> —
            Portfolio manager, Lagos
          </div>
        </div>

        <div className="flex gap-9">
          <div>
            <div className="font-serif text-[28px] font-light text-gold-soft">
              $4.8B
            </div>
            <div className="text-[11px] text-muted tracking-wider mt-1">
              Daily volume
            </div>
          </div>
          <div>
            <div className="font-serif text-[28px] font-light text-gold-soft">
              2.4M
            </div>
            <div className="text-[11px] text-muted tracking-wider mt-1">
              Active traders
            </div>
          </div>
          <div>
            <div className="font-serif text-[28px] font-light text-gold-soft">
              350+
            </div>
            <div className="text-[11px] text-muted tracking-wider mt-1">
              Assets listed
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Panel */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 lg:px-12 py-16">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => router.back()}
          className="absolute top-8 left-8 lg:hidden flex items-center gap-2 text-muted hover:text-gold transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-[400px]"
        >
          <div className="text-center mb-9">
            <h1 className="font-serif text-[34px] font-light mb-2">
              Sign <em className="italic text-gold">in</em>
            </h1>
            <p className="text-[13px] text-muted">
              No account?{" "}
              <Link
                href="/signup"
                className="text-gold hover:opacity-75 transition-opacity"
              >
                Create one free →
              </Link>
            </p>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3 mb-7">
            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-transparent border border-dim rounded-lg text-[13px] text-text hover:border-gold/20 hover:bg-gold/10 transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-transparent border border-dim rounded-lg text-[13px] text-text hover:border-gold/20 hover:bg-gold/10 transition-all">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Apple
            </button>
          </div>

          <div className="flex items-center gap-4 mb-7">
            <div className="flex-1 h-px bg-dim" />
            <span className="text-[11px] text-muted tracking-widest uppercase">
              or continue with email
            </span>
            <div className="flex-1 h-px bg-dim" />
          </div>

          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-muted tracking-wider uppercase mb-2"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-bg2 border border-dim rounded-lg text-text text-sm placeholder-muted/60 focus:outline-none focus:border-gold focus:bg-gold/5 transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-medium text-muted tracking-wider uppercase mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 bg-bg2 border border-dim rounded-lg text-text text-sm placeholder-muted/60 focus:outline-none focus:border-gold focus:bg-gold/5 transition-all"
                  placeholder="Your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-gold-soft transition-colors"
                >
                  {showPassword ? (
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-end -mt-2">
              <Link
                href="#"
                className="text-xs text-muted hover:text-gold transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-gold text-[#060508] py-3.5 rounded-lg text-sm font-semibold tracking-wide hover:opacity-90 hover:-translate-y-px transition-all"
            >
              Sign in to Nexus
            </button>
          </form>

          <div className="flex items-center justify-center gap-2 text-[11px] text-muted tracking-wide mt-6">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            256-bit SSL encryption · Two-factor authentication available
          </div>
        </motion.div>
      </div>
    </main>
  );
}
