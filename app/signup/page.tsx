"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
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
    <main className="min-h-screen flex items-center justify-center px-[5%] py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg via-bg2 to-bg3" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.3, 1],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{ duration: 22, repeat: Infinity }}
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-gold rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1.3, 1, 1.3],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{ duration: 28, repeat: Infinity }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gold rounded-full blur-[130px]"
        />
      </div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => router.back()}
        className="absolute top-8 left-8 flex items-center gap-2 text-muted hover:text-gold transition-colors group"
      >
        <svg
          className="w-5 h-5 transition-transform group-hover:-translate-x-1"
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
        <span className="text-sm">Back</span>
      </motion.button>

      <div className="relative w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h1 className="font-serif text-5xl font-light mb-3">
            Start <em className="italic text-gold">trading</em>
          </h1>
          <p className="text-muted">Join 2.4M traders worldwide</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Decorative elements */}
          <div className="absolute -top-8 -right-8 w-28 h-28 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative bg-bg2/80 border border-gold/20 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-text mb-2"
                >
                  Full name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-muted"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-bg3/50 border border-dim rounded-xl text-text placeholder-muted focus:outline-none focus:border-gold/50 focus:bg-bg3 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text mb-2"
                >
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-muted"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-bg3/50 border border-dim rounded-xl text-text placeholder-muted focus:outline-none focus:border-gold/50 focus:bg-bg3 transition-all"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-text mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-muted"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-bg3/50 border border-dim rounded-xl text-text placeholder-muted focus:outline-none focus:border-gold/50 focus:bg-bg3 transition-all"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <p className="text-xs text-muted mt-1.5 ml-1">
                  Minimum 8 characters
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-text mb-2"
                >
                  Confirm password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-muted"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-bg3/50 border border-dim rounded-xl text-text placeholder-muted focus:outline-none focus:border-gold/50 focus:bg-bg3 transition-all"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-start gap-3 pt-2"
              >
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 mt-0.5 rounded border-dim bg-bg3 text-gold focus:ring-gold/50 cursor-pointer"
                  required
                />
                <label
                  htmlFor="terms"
                  className="text-xs text-muted leading-relaxed cursor-pointer"
                >
                  I agree to the{" "}
                  <Link
                    href="#"
                    className="text-gold hover:text-gold-soft transition-colors"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="#"
                    className="text-gold hover:text-gold-soft transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-gold to-gold-soft text-[#060508] py-3.5 rounded-xl font-semibold shadow-lg shadow-gold/20 hover:shadow-gold/30 transition-all"
              >
                Create account
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-6 text-center"
            >
              <p className="text-sm text-muted">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-gold hover:text-gold-soft transition-colors font-medium"
                >
                  Sign in instead
                </Link>
              </p>
            </motion.div>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8"
        >
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-dim"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-bg text-muted">Or sign up with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { name: "Google", icon: "G" },
              { name: "Apple", icon: "" },
              { name: "GitHub", icon: "" },
            ].map((provider, i) => (
              <motion.button
                key={provider.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-3 bg-bg2 border border-dim rounded-xl text-sm text-muted hover:border-gold/50 hover:text-text hover:bg-bg3 transition-all group"
              >
                <span className="group-hover:text-gold transition-colors">
                  {provider.name}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mt-8 p-4 bg-gold/5 border border-gold/20 rounded-xl backdrop-blur-sm"
        >
          <div className="flex gap-3">
            <div className="text-gold text-xl flex-shrink-0">🔒</div>
            <div>
              <p className="text-xs text-muted leading-relaxed">
                Bank-level encryption. Your data is protected and never shared
                with third parties.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
