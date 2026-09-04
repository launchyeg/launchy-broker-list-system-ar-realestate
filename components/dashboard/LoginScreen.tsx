"use client";

import { useState } from "react";
import Image from "next/image";
import siteConfig from "@/siteConfig";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        // The session cookie is now set — reload so the server-rendered
        // dashboard layout picks it up and renders the real content.
        window.location.reload();
      } else {
        setError("Invalid email or password.");
      }
    } catch {
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#111] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/ARLogo-2n.png"
            alt={siteConfig.brokerName}
            width={140}
            height={40}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 shadow-2xl space-y-4 mb-4"
        >
          <div>
            <label className="block text-xs font-medium text-stone-500 mb-1.5 uppercase tracking-wide">
              Email
            </label>
            <input
              required
              type="email"
              value={email}
              autoComplete="username"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/40 focus:border-[#C9A96E] transition"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-stone-500 mb-1.5 uppercase tracking-wide">
              Password
            </label>
            <input
              required
              type="password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/40 focus:border-[#C9A96E] transition"
            />
          </div>

          {error && <p className="text-red-500 text-xs text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#1B2B3A] text-white text-xs font-medium tracking-widest uppercase rounded-xl hover:bg-[#2D4258] transition-colors disabled:opacity-60 mt-2"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Signing in...
              </span>
            ) : (
              "Sign In"
            )}
          </button>

          <div className="flex justify-center">
            <p>
              <a
                href="https://aaaportfolio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-muted hover:text-brand-text transition-colors font-medium"
              >
                Forgot password or username
              </a>
            </p>
          </div>
        </form>

        <div className="flex items-center pt-2">
          <p className="text-xs text-white/20">
            Developed by{" "}
            <a
              href="https://aaaportfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A96E]/60 hover:text-[#C9A96E] transition-colors font-medium"
            >
              Launchy
            </a>
          </p>
          <span className="ml-auto text-right text-xs text-slate-500 font-medium">
            v 1.0.0
          </span>
        </div>
      </div>
    </div>
  );
}
