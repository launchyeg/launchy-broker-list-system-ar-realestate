"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronRight, CircleUserRound, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import siteConfig from "@/siteConfig";

// ── Dropdown ──────────────────────────────────────────────────────────────────

function NavDropdown({
  label,
  items,
  onClose,
  scrolled,
  vewAllCta,
}: {
  label: string;
  items: { href: string; label: string }[];
  onClose: () => void;
  scrolled: boolean;
  vewAllCta: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`flex items-center gap-1 text-base font-medium transition-colors ${
          scrolled
            ? "text-brand-text/70 hover:text-brand-text"
            : "text-white hover:text-white/80"
        }`}
      >
        {label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Panel */}
      <div
        className={`
        absolute top-full left-1/2 -translate-x-1/2 mt-4 w-52
        bg-white rounded-2xl shadow-xl border border-[#52525a1a]
        transition-all duration-200 origin-top z-50
        ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }
      `}
      >
        {/* Invisible bridge — prevents gap between button and panel */}
        <div className="absolute -top-4 left-0 right-0 h-4" />

        <div className="py-2">
          <div className="max-h-[210px] overflow-y-auto">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  setOpen(false);
                  onClose();
                }}
                className="flex items-center gap-3 px-4 py-2.5 text-brand-muted hover:text-brand-text transition-colors text-sm"
              >
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
          <div className="border-t border-[#52525a1a] mt-1 pt-1">
            <Link
              href={vewAllCta}
              onClick={() => {
                setOpen(false);
                onClose();
              }}
              className="flex items-center justify-between px-4 py-2.5 text-brand-accent hover:text-brand-accentLight transition-colors text-xs font-semibold uppercase tracking-widest"
            >
              View all
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
// ── Mobile Accordion ──────────────────────────────────────────────────────────

function MobileAccordion({
  label,
  items,
  onClose,
  vewAllCta,
}: {
  label: string;
  items: { href: string; label: string }[];
  vewAllCta: string;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-brand-text text-sm font-medium py-4 border-b border-[#52525a1a] hover:text-brand-accent transition-colors"
      >
        {label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}
      >
        <div className="py-2 pl-4">
          <div className="max-h-48 overflow-y-auto space-y-0.5">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3 py-2.5 text-brand-muted hover:text-brand-accent text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href={vewAllCta}
            onClick={onClose}
            className="flex items-center gap-2 py-2.5 text-brand-accent text-xs font-semibold uppercase tracking-widest hover:text-brand-accentLight transition-colors border-t border-[#52525a1a] mt-1 pt-3"
          >
            View all <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── Main Navbar ───────────────────────────────────────────────────────────────

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ── Scroll shadow ─────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const destinationItems = (siteConfig.destinations as any[]).map((d) => ({
    href: `/destinations/${d.slug}`,
    label: d.label,
  }));

  const listingItems = [
    { href: "/properties?listingType=primary", label: "Primary" },
    { href: "/properties?listingType=resale", label: "Resale" },
    { href: "/properties?listingType=rent", label: "Rent" },
  ];

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}
        `}
      >
        <div className="max-w-[1380px] mx-auto px-6 md:px-8 flex items-center justify-between h-[72px] md:h-[85px]">
          <Link href="/" className="flex-shrink-0">
            <Image
              src={scrolled ? "/ARLogo-3.png" : "/ARLogo-2n.png"}
              alt={siteConfig.brokerName}
              width={140}
              height={40}
              className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-base font-medium transition-colors ${
                scrolled
                  ? "text-brand-text/70 hover:text-brand-text"
                  : "text-white hover:text-white/80"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-base font-medium transition-colors ${
                scrolled
                  ? "text-brand-text/70 hover:text-brand-text"
                  : "text-white hover:text-white/80"
              }`}
            >
              About us
            </Link>
            <NavDropdown
              label="Destinations"
              items={destinationItems}
              onClose={() => {}}
              scrolled={scrolled}
              vewAllCta="/destinations"
            />
            <Link
              href="/projects"
              className={`text-base font-medium transition-colors ${
                scrolled
                  ? "text-brand-text/70 hover:text-brand-text"
                  : "text-white hover:text-white/80"
              }`}
            >
              Projects
            </Link>
            <NavDropdown
              label="Listing"
              items={listingItems}
              onClose={() => {}}
              scrolled={scrolled}
              vewAllCta="/properties"
            />
            <Link
              href="/contact"
              className={`text-base font-medium transition-colors ${
                scrolled
                  ? "text-brand-text/70 hover:text-brand-text"
                  : "text-white hover:text-white/80"
              }`}
            >
              Contact us
            </Link>
          </nav>
          <div className="flex items-center gap-5">
            <Link
              href="/dashboard"
              target="_blank"
              className={`hidden md:flex transition-colors ${
                scrolled
                  ? "text-brand-muted hover:text-brand-text"
                  : "text-white hover:text-white/80"
              }`}
              title="Admin"
            >
              <CircleUserRound />
            </Link>
            <Link
              href="/properties"
              className="hidden md:inline-flex bg-brand-accent text-white text-base font-medium px-6 py-3 rounded-full hover:bg-brand-accentLight transition-colors"
            >
              Explore Properties
            </Link>
            <button
              onClick={() => setSidebarOpen(true)}
              className={`md:hidden transition-colors ${
                scrolled ? "text-brand-text" : "text-white"
              }`}
              aria-label="Open menu"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE SIDEBAR ───────────────────────────────────── */}

      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300 ${
          sidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`
        fixed top-0 right-0 h-full w-80 bg-white z-50
        transform transition-transform duration-300 ease-in-out
        md:hidden flex flex-col shadow-2xl rounded-l-3xl
        ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-[#52525a1a]">
          <Link href="/" onClick={() => setSidebarOpen(false)}>
            <Image
              src="/ARLogo-3.png"
              alt={siteConfig.brokerName}
              width={120}
              height={36}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
            className="text-brand-muted hover:text-brand-text transition-colors"
          >
            <X size={28} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-6 py-4">
          <Link
            href="/"
            onClick={() => setSidebarOpen(false)}
            className="block text-brand-text text-sm font-medium py-4 border-b border-[#52525a1a] hover:text-brand-accent transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setSidebarOpen(false)}
            className="block text-brand-text text-sm font-medium py-4 border-b border-[#52525a1a] hover:text-brand-accent transition-colors"
          >
            About us
          </Link>
          <MobileAccordion
            label="Destinations"
            items={destinationItems}
            vewAllCta="/destinations"
            onClose={() => setSidebarOpen(false)}
          />
          <Link
            href="/projects"
            onClick={() => setSidebarOpen(false)}
            className="block text-brand-text text-sm font-medium py-4 border-b border-[#52525a1a] hover:text-brand-accent transition-colors"
          >
            Projects
          </Link>
          <MobileAccordion
            label="Listing"
            items={listingItems}
            vewAllCta="/properties"
            onClose={() => setSidebarOpen(false)}
          />
          <Link
            href="/contact"
            onClick={() => setSidebarOpen(false)}
            className="block text-brand-text text-sm font-medium py-4 border-b border-[#52525a1a] hover:text-brand-accent transition-colors"
          >
            Contact us
          </Link>
        </nav>
        <div className="px-6 py-6 border-t border-[#52525a1a] space-y-3">
          <Link
            href="/properties"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 bg-brand-primary text-white text-sm font-medium tracking-wider rounded-full hover:bg-brand-primaryLight transition-colors"
          >
            Explore Properties
          </Link>
          <Link
            href="/dashboard"
            target="_blank"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center justify-center gap-2 text-brand-muted hover:text-brand-text text-xs transition-colors py-2"
          >
            <CircleUserRound size={16} />
            Admin Dashboard
          </Link>
        </div>
      </div>
    </>
  );
}
