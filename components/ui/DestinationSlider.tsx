"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import DestinationCard, { Destination } from "@/components/ui/DestinationCard";

export default function DestinationSlider({
  destinations,
}: {
  destinations: Destination[];
}) {
  const [current, setCurrent] = useState(0);

  const total = destinations.length;
  const prev = () => setCurrent((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setCurrent((i) => (i === total - 1 ? 0 : i + 1));

  const visible = [
    destinations[current % total],
    destinations[(current + 1) % total],
    destinations[(current + 2) % total],
  ];

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 md:mb-14">
        {visible.map((destination, i) => (
          <AnimateOnScroll
            key={`${destination.slug}-${i}`}
            type="fade-up"
            delay={i * 100}
            // ── Hide 2nd and 3rd on mobile ─────────────────
            className={`min-w-full ${i > 0 ? "hidden md:block" : ""}`}
          >
            <DestinationCard destinations={destination} />
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll type="fade-in" delay={100}>
        <div className="flex justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous destination"
            className="text-brand-text cursor-pointer"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={next}
            aria-label="Next destination"
            className="text-brand-text cursor-pointer"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
