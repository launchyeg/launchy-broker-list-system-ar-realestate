"use client";

import { useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type MapSliderProps<T> = {
  items: T[];
  getKey: (item: T) => string;
  renderItem: (item: T) => ReactNode;
  // Cards shown at once on md+ (always 1 on mobile). Never repeats a card
  // when there are fewer items than perView.
  perView?: 1 | 3;
};

export default function MapSlider<T>({
  items,
  getKey,
  renderItem,
  perView = 3,
}: MapSliderProps<T>) {
  const [current, setCurrent] = useState(0);

  const total = items.length;
  const prev = () => setCurrent((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setCurrent((i) => (i === total - 1 ? 0 : i + 1));

  const visible = Array.from({ length: Math.min(perView, total) }, (_, i) => {
    return items[(current + i) % total];
  });

  return (
    <div>
      <div
        className={`grid grid-cols-1 gap-6 ${
          perView === 3 ? "md:grid-cols-3" : ""
        }`}
      >
        {visible.map((item, i) => (
          <div
            key={getKey(item)}
            className={i > 0 ? "hidden md:block" : ""}
            style={{
              opacity: 0,
              animation: `fadeUp 0.6s ease ${i * 100}ms forwards`,
            }}
          >
            {renderItem(item)}
          </div>
        ))}
      </div>

      {total > 1 && (
        <div
          className={`flex justify-center gap-4 mt-6 ${
            perView > 1 && total <= perView ? "md:hidden" : ""
          }`}
        >
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="text-brand-text cursor-pointer"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="text-brand-text cursor-pointer"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
}
