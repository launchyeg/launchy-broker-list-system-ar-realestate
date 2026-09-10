"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

interface Props {
  images: string[];
  destinationLabel: string;
  project: string;
}

export default function ImageSlider({
  images,
  destinationLabel,
  project,
}: Props) {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!images || images.length === 0) return null;

  // ── 1 on mobile, 2 on desktop ─────────────────────────────
  const slideWidth = isMobile ? 100 : 100 / 2;

  const maxIndex = isMobile
    ? images.length - 1
    : Math.max(0, images.length - 2);

  const prev = () => setCurrent((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () => setCurrent((i) => (i >= maxIndex ? 0 : i + 1));

  return (
    <AnimateOnScroll type="fade-in">
      <div className="relative w-full h-96 md:h-[90vh] bg-stone-200 overflow-hidden group">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * slideWidth}%)` }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="min-w-full md:min-w-[50%] flex-shrink-0 relative h-[350px] md:h-[90vh]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/75 via-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

        <div className="absolute bottom-16 left-6 pointer-events-none">
          <p className="text-[#fffc] text-xs md:text-sm font-medium tracking-widest uppercase">
            {destinationLabel} · {project}
          </p>
        </div>

        <div className="absolute bottom-16 right-6 pointer-events-none">
          <span className="font-display text-[#fffc] text-xs md:text-sm font-medium">
            {current + 1} / {images.length}
          </span>
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/60 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/60 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 rounded-full"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === current}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 bg-white"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </AnimateOnScroll>
  );
}
