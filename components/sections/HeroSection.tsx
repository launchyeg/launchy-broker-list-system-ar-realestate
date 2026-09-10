"use client";

import siteConfig from "@/siteConfig";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CustomSelect from "@/components/dashboard/CustomSelect";

const SLIDES = [
  {
    image:
      "https://aqarproperty.com/wp-content/uploads/2025/08/The-View-Hurghada-residence-1.webp",
    title: "AR Real Estate Find Your Dream Home in Red Sea",
    subtitle:
      "Stop wasting time with complicated search filters and discover your perfect coastal retreat through our intuitive, lightning-fast discovery tool.",
  },
  {
    image:
      "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/Cam-05-copy-min-scaled.jpg",
    title: "Find Your Dream Home in the Red Sea",
    subtitle:
      "Skip the stress of navigating the market alone and let our sophisticated, modern platform guide you directly to the region's finest properties.",
  },
  {
    image:
      "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/Screenshot-2025-11-16-151702.png",
    title: "Find Your Dream Home in the Red Sea",
    subtitle:
      "Leave behind the cluttered and outdated listings; we provide a refined, user-centered experience that makes finding your ideal getaway simple.",
  },
  {
    image:
      "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/Screenshot-2026-03-10-145747.png",
    title: "Find Your Dream Home in the Red Sea",
    subtitle:
      "Replace manual browsing with an effortless digital experience designed to put the absolute best of the Red Sea coast right at your fingertips.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [destination, setDestination] = useState("");
  const [listingType, setListingType] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((i) => (i + 1) % SLIDES.length);
        setAnimating(false);
      }, 600);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  function goTo(i: number) {
    if (i === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(i);
      setAnimating(false);
    }, 400);
  }

  function handleSearch() {
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (listingType) params.set("listingType", listingType);
    if (price) params.set("price", price);
    router.push(`/properties?${params.toString()}`);
  }

  const slide = SLIDES[current];

  return (
    <section className="relative h-dvh min-h-[600px] flex items-center pb-16 pt-16 overflow-hidden">
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${s.image})`,
            opacity: i === current ? 1 : 0,
            transform: i === current ? "scale(1)" : "scale(1.05)",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <div className="relative z-20 max-w-[1380px] mx-auto px-6 md:px-8 w-full">
        {/* This content is always above the fold on first paint, so it
            renders immediately with a plain CSS entrance animation instead
            of AnimateOnScroll's IntersectionObserver — gating guaranteed-
            visible content behind "wait for JS to notice it's in view"
            only delays it for no benefit. */}
        <div className="animate-fade-up">
          <div
            className="transition-all duration-500 delay-75 max-w-[890px]"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(16px)" : "translateY(0)",
            }}
          >
            <h1 className="font-display text-[42px] md:text-[84px] text-white leading-tight mb-6 whitespace-pre-line">
              {slide.title}
            </h1>
          </div>

          <div
            className="transition-all duration-500 delay-100"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(16px)" : "translateY(0)",
            }}
          >
            <p className="text-white text-l md:text-xl leading-7 md:leading-10 max-w-[700px] mb-10">
              {slide.subtitle}
            </p>
          </div>

          <div
            className="transition-all duration-500 delay-150"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(16px)" : "translateY(0)",
            }}
          >
            <div className="max-w-3xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex flex-wrap md:flex-nowrap gap-3">
              <div className="flex-1 min-w-[140px]">
                <CustomSelect
                  value={destination}
                  placeholder="Destinations"
                  onChange={setDestination}
                  options={[
                    ...(siteConfig.destinations as any[]).map((d) => ({
                      value: d.slug,
                      label: d.label,
                    })),
                  ]}
                />
              </div>
              <div className="flex-1 min-w-[140px]">
                <CustomSelect
                  value={listingType}
                  placeholder="Listing"
                  onChange={setListingType}
                  options={[
                    { value: "primary", label: "Primary" },
                    { value: "resale", label: "Resale" },
                    { value: "rent", label: "Rent" },
                  ]}
                />
              </div>
              <div className="flex-1 min-w-[140px]">
                <CustomSelect
                  value={price}
                  placeholder="Prices"
                  onChange={setPrice}
                  options={[
                    { value: "0-2000000", label: "Under EGP 2M" },
                    { value: "2000000-5000000", label: "EGP 2M – 5M" },
                    { value: "5000000-10000000", label: "EGP 5M – 10M" },
                    { value: "10000000-999999999", label: "Above EGP 10M" },
                  ]}
                />
              </div>
              <div className="flex items-end">
                <button
                  onClick={handleSearch}
                  className="w-full md:w-auto px-6 py-3 bg-brand-accent text-white text-sm font-medium tracking-widest rounded-[10px] hover:bg-brand-accentLight transition-colors whitespace-nowrap"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-8">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === current}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-brand-accent"
                    : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
            <span className="ml-3 font-display text-white/30 text-xs">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(SLIDES.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
