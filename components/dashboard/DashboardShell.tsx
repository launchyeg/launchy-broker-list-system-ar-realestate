"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import siteConfig from "@/siteConfig";
import Image from "next/image";

// ── Nav items ─────────────────────────────────────────────────────────────────

const navItems = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    label: "Units",
    href: "/dashboard/units",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    label: "Add Unit",
    href: "/dashboard/add-unit",
    icon: "M12 4v16m8-8H4",
  },
  {
    label: "Requests",
    href: "/dashboard/requests",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
];

// ── SVG Icon helper ───────────────────────────────────────────────────────────

function NavIcon({ d }: { d: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="flex-shrink-0"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

// ── Dashboard Shell ───────────────────────────────────────────────────────────
//
// The login gate no longer lives here — app/dashboard/layout.tsx checks the
// Supabase session server-side and only renders this component (with real
// data already fetched by the page underneath it) once that check passes.
// See components/dashboard/LoginScreen.tsx for the signed-out view.

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth", { method: "DELETE" });
    // Force a fresh request so the server layout re-checks the (now cleared)
    // session and renders the login screen instead of this shell.
    router.push("/dashboard");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-stone-100 flex">
      {/* ── SIDEBAR ──────────────────────────────────────────── */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[#111] flex flex-col transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:relative lg:translate-x-0
      `}
      >
        {/* Logo */}
        <div className="px-6 py-6 border-b border-white/10">
          <Link href="/dashboard" onClick={() => setSidebarOpen(false)}>
            <Image
              src="/ARLogo-2n.png"
              alt={siteConfig.brokerName}
              width={140}
              height={40}
              className="h-8 md:h-10 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? "bg-[#C9A96E]/15 text-[#C9A96E]"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                <NavIcon d={item.icon} />
                {item.label}
                {active && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="ml-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-4 py-5 border-t border-white/10 space-y-1">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-3 py-2.5 text-white/40 hover:text-white text-sm transition-colors rounded-lg hover:bg-white/5"
          >
            <NavIcon d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            View Site
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 w-full text-white/40 hover:text-red-400 text-sm transition-colors rounded-lg hover:bg-white/5"
          >
            <NavIcon d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            Sign Out
          </button>
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
      </aside>

      {/* Mobile overlay */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          sidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── MAIN ─────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 bg-white border-b border-stone-200 flex items-center px-4 sm:px-6 gap-4 shadow-sm sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-lg transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {sidebarOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>

          {/* Page title */}
          <div>
            <h1 className="font-medium text-stone-800 text-sm">
              {navItems.find((n) => n.href === pathname)?.label || "Dashboard"}
            </h1>
          </div>

          {/* Admin avatar */}
          <div className="ml-auto flex items-center gap-3">
            <div className="w-8 h-8 bg-[#1B2B3A] rounded-full flex items-center justify-center text-[#C9A96E] font-bold text-xs">
              A
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
