"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ConstellationBg from "@/components/ConstellationBg";

export default function SignupPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    password: "",
    confirmPassword: "",
    terms: false,
    marketing: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });

    if (name === "password") {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (val: string) => {
    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val) && val.length >= 10) score++;
    setPasswordStrength(score);
  };

  const strengthLabels = ["", "Weak", "Fair", "Strong", "Great"];
  const strengthColors = [
    "",
    "text-red",
    "text-[#E8A23A]",
    "text-gold",
    "text-green",
  ];

  return (
    <main className="min-h-screen flex">
      <ConstellationBg />

      {/* Left Panel */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex-[0_0_46%] hidden lg:flex flex-col justify-center px-16 py-16 border-r border-gold/20 bg-bg/55"
      >
        <Link
          href="/"
          className="font-serif text-xl font-semibold text-gold tracking-wider mb-20"
        >
          NEX<span className="text-text">US</span>
        </Link>

        <div className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-gold mb-5">
          Join Nexus
          <div className="w-10 h-px bg-gold opacity-40" />
        </div>

        <h2 className="font-serif text-[clamp(38px,3.5vw,52px)] font-light leading-[1.1] tracking-tight mb-5">
          Start your
          <br />
          <em className="italic text-gold">wealth journey</em>
          <br />
          today.
        </h2>

        <p className="text-sm text-muted leading-relaxed max-w-[320px] mb-12">
          Thousands of investors open a Nexus account every day. Set up in under
          3 minutes — no minimum deposit required.
        </p>

        <div className="space-y-5 mb-12">
          {[
            {
              icon: (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              ),
              title: "350+ assets, one account",
              desc: "Trade Bitcoin, Ethereum, altcoins, and derivatives all from a single, unified dashboard.",
            },
            {
              icon: (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              ),
              title: "Institutional-grade security",
              desc: "Cold storage, two-factor auth, and a $650M insurance policy protect your assets 24/7.",
            },
            {
              icon: (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              ),
              title: "Zero fees for 30 days",
              desc: "New accounts trade commission-free for the first month. No catches, no minimums.",
            },
          ].map((perk, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 mt-0.5 text-gold">
                {perk.icon}
              </div>
              <div>
                <div className="text-sm font-medium text-text mb-0.5">
                  {perk.title}
                </div>
                <div className="text-xs text-muted leading-relaxed">
                  {perk.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right Panel */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 lg:px-12 py-16 overflow-y-auto">
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
          className="w-full max-w-[420px]"
        >
          {/* Step Indicator */}
          {step < 3 && (
            <>
              <div className="flex gap-5 mb-8">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`flex items-center gap-2 text-[11px] tracking-wider uppercase transition-colors ${
                      s < step
                        ? "text-green"
                        : s === step
                          ? "text-gold"
                          : "text-muted"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] transition-all ${
                        s < step
                          ? "border-green bg-green/10 text-green"
                          : s === step
                            ? "border-gold bg-gold/10 text-gold"
                            : "border-dim"
                      }`}
                    >
                      {s < step ? "✓" : s}
                    </div>
                    {s === 1 ? "Account" : s === 2 ? "Security" : "Done"}
                  </div>
                ))}
              </div>
              <div className="h-0.5 bg-dim rounded-full overflow-hidden mb-8">
                <div
                  className="h-full bg-gradient-to-r from-gold to-gold-soft transition-all duration-400"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </>
          )}

          {step < 3 && (
            <div className="mb-8">
              <h1 className="font-serif text-[30px] font-light mb-1.5">
                Create <em className="italic text-gold">account</em>
              </h1>
              <p className="text-[13px] text-muted">
                Already a member?{" "}
                <Link
                  href="/login"
                  className="text-gold hover:opacity-75 transition-opacity"
                >
                  Sign in →
                </Link>
              </p>
            </div>
          )}

          {/* Step 1 */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button className="flex items-center justify-center gap-2 px-3 py-3 bg-transparent border border-dim rounded-lg text-[13px] text-text hover:border-gold/20 hover:bg-gold/10 transition-all">
                  Google
                </button>
                <button className="flex items-center justify-center gap-2 px-3 py-3 bg-transparent border border-dim rounded-lg text-[13px] text-text hover:border-gold/20 hover:bg-gold/10 transition-all">
                  Apple
                </button>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-dim" />
                <span className="text-[11px] text-muted tracking-widest uppercase">
                  or fill in the form
                </span>
                <div className="flex-1 h-px bg-dim" />
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep(2);
                }}
                className="space-y-3.5"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-muted tracking-wider uppercase mb-1.5">
                      First name
                    </label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-bg2 border border-dim rounded-lg text-text text-sm placeholder-muted/55 focus:outline-none focus:border-gold focus:bg-gold/5 transition-all"
                      placeholder="Amir"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-muted tracking-wider uppercase mb-1.5">
                      Last name
                    </label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-bg2 border border-dim rounded-lg text-text text-sm placeholder-muted/55 focus:outline-none focus:border-gold focus:bg-gold/5 transition-all"
                      placeholder="Tessema"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-muted tracking-wider uppercase mb-1.5">
                    Email address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg2 border border-dim rounded-lg text-text text-sm placeholder-muted/55 focus:outline-none focus:border-gold focus:bg-gold/5 transition-all"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-muted tracking-wider uppercase mb-1.5">
                    Country of residence
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg2 border border-dim rounded-lg text-text text-sm focus:outline-none focus:border-gold focus:bg-gold/5 transition-all appearance-none"
                    required
                  >
                    <option value="">Select country…</option>
                    <option value="ET">Ethiopia</option>
                    <option value="NG">Nigeria</option>
                    <option value="US">United States</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-[#060508] py-3.5 rounded-lg text-sm font-semibold tracking-wide hover:opacity-90 hover:-translate-y-px transition-all"
                >
                  Continue →
                </button>
              </form>
            </motion.div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (formData.terms) setStep(3);
                }}
                className="space-y-3.5"
              >
                <div>
                  <label className="block text-[11px] font-medium text-muted tracking-wider uppercase mb-1.5">
                    Create password
                  </label>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pr-12 bg-bg2 border border-dim rounded-lg text-text text-sm placeholder-muted/55 focus:outline-none focus:border-gold focus:bg-gold/5 transition-all"
                      placeholder="At least 8 characters"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-gold-soft transition-colors"
                    >
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
                    </button>
                  </div>
                  {formData.password && (
                    <>
                      <div className="flex gap-1 mt-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className={`flex-1 h-0.5 rounded-full transition-colors ${
                              i <= passwordStrength
                                ? passwordStrength === 1
                                  ? "bg-red"
                                  : passwordStrength === 2
                                    ? "bg-[#E8A23A]"
                                    : passwordStrength === 3
                                      ? "bg-gold"
                                      : "bg-green"
                                : "bg-dim"
                            }`}
                          />
                        ))}
                      </div>
                      <div
                        className={`text-[11px] mt-1 ${strengthColors[passwordStrength]}`}
                      >
                        {strengthLabels[passwordStrength]}
                      </div>
                    </>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-muted tracking-wider uppercase mb-1.5">
                    Confirm password
                  </label>
                  <input
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg2 border border-dim rounded-lg text-text text-sm placeholder-muted/55 focus:outline-none focus:border-gold focus:bg-gold/5 transition-all"
                    placeholder="Repeat password"
                    required
                  />
                </div>

                <div className="flex items-start gap-2.5 pt-1.5">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="w-4 h-4 mt-0.5 accent-gold cursor-pointer"
                    required
                  />
                  <label className="text-xs text-muted leading-relaxed cursor-pointer">
                    I agree to Nexus's{" "}
                    <Link href="#" className="text-gold hover:opacity-75">
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-gold hover:opacity-75">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-[#060508] py-3.5 rounded-lg text-sm font-semibold tracking-wide hover:opacity-90 hover:-translate-y-px transition-all"
                >
                  Create my account
                </button>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-muted hover:text-gold transition-colors"
                  >
                    ← Back
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-5"
            >
              <div className="w-16 h-16 rounded-full bg-green/10 border border-green/35 flex items-center justify-center mx-auto mb-6">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-green"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="font-serif text-[28px] font-light mb-2.5">
                Welcome to <em className="italic text-gold">Nexus.</em>
              </h2>
              <p className="text-sm text-muted leading-relaxed max-w-[300px] mx-auto mb-8">
                Your account has been created. Check your email to verify your
                address, then start trading.
              </p>
              <Link
                href="/login"
                className="inline-block bg-gold text-[#060508] px-9 py-3 rounded-lg text-sm font-semibold tracking-wide hover:opacity-90 transition-all"
              >
                Go to sign in →
              </Link>
            </motion.div>
          )}

          {step < 3 && (
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-muted tracking-wide mt-6">
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
              256-bit SSL · Your data is never sold
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
