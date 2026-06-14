"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-[5%] py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-bg via-bg2 to-bg3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(201,168,76,0.08)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-block font-serif text-3xl font-semibold tracking-wide text-gold mb-2"
          >
            NEX<span className="text-text">US</span>
          </Link>
          <h1 className="font-serif text-4xl font-light mt-6 mb-2">
            Start <em className="italic text-gold">trading</em>
          </h1>
          <p className="text-muted text-sm">
            Create your account in under 3 minutes
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-bg2 border border-gold/20 rounded-xl p-8 backdrop-blur-sm"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-5">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-text mb-2"
              >
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-bg3 border border-dim rounded-lg text-text placeholder-muted focus:outline-none focus:border-gold/50 transition-colors"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text mb-2"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-bg3 border border-dim rounded-lg text-text placeholder-muted focus:outline-none focus:border-gold/50 transition-colors"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-text mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-bg3 border border-dim rounded-lg text-text placeholder-muted focus:outline-none focus:border-gold/50 transition-colors"
                placeholder="••••••••"
                required
              />
              <p className="text-xs text-muted mt-1">Minimum 8 characters</p>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-text mb-2"
              >
                Confirm password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-bg3 border border-dim rounded-lg text-text placeholder-muted focus:outline-none focus:border-gold/50 transition-colors"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 mt-0.5 rounded border-dim bg-bg3 text-gold focus:ring-gold/50"
                required
              />
              <label
                htmlFor="terms"
                className="text-xs text-muted leading-relaxed"
              >
                I agree to the{" "}
                <Link href="#" className="text-gold hover:text-gold-soft">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-gold hover:text-gold-soft">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gold text-[#060508] py-3 rounded-lg font-semibold transition-all hover:opacity-90 hover:-translate-y-0.5"
            >
              Create account
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-gold hover:text-gold-soft transition-colors font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-muted mb-4">Or continue with</p>
          <div className="flex gap-3 justify-center">
            {["Google", "Apple", "GitHub"].map((provider) => (
              <button
                key={provider}
                className="flex-1 max-w-[140px] px-4 py-2 bg-bg2 border border-dim rounded-lg text-sm text-muted hover:border-gold/50 hover:text-text transition-all"
              >
                {provider}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 p-4 bg-gold/5 border border-gold/20 rounded-lg"
        >
          <div className="flex gap-3">
            <div className="text-gold text-lg">🔒</div>
            <div>
              <p className="text-xs text-muted leading-relaxed">
                Your data is encrypted and protected with bank-level security.
                We never share your information with third parties.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
