"use client";

import { useState } from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Thank you for the perfect service that helped me a lot. Mr. Ahmed and his agency did a good job and always acted seriously and professionally.",
    name: "Radek Stastny",
    role: "Customer",
    image:
      "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/197288651_589956258649077_6173886624752901071_n.jpg",
  },
  {
    id: 2,
    quote:
      "Ich gebe allen Deutschen nur den guten Rat sich an einen Spezialisten wie Ahmed Rashad zu wenden, weil nur er als Einheimischer kennt die Gesetze hier.",
    name: "Guido Reinhardt",
    role: "Customer",
    image:
      "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/372989717_2060461857626177_5564945090310234871_n.jpg",
  },
  {
    id: 3,
    quote:
      "Very reliable agency. They look after you from the beginning to the end of the contract. They sell villas and apartments with reputable companies.",
    name: "Antonella",
    role: "Customer",
    image:
      "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/WhatsApp-Image-2023-10-11-at-4.34.09-PM.jpeg",
  },
  {
    id: 4,
    quote:
      "The team found us a stunning apartment in El Gouna that perfectly matched our budget and lifestyle. We couldn't be happier.",
    name: "Maria Hoffmann",
    role: "Customer",
    image:
      "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/somabayhero.jpeg",
  },
  {
    id: 5,
    quote:
      "Exceptional service from start to finish. They handled everything — from viewings to legal paperwork — with complete professionalism.",
    name: "Mahmoud Menefie",
    role: "Customer",
    image:
      "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/WhatsApp-Image-2023-10-30-at-6.15.28-PM.jpeg",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((i) => (i === 0 ? TESTIMONIALS.length - 3 : i - 1));
  const next = () =>
    setCurrent((i) => (i >= TESTIMONIALS.length - 3 ? 0 : i + 1));

  // Show 3 visible cards
  const visible = [
    TESTIMONIALS[current % TESTIMONIALS.length],
    TESTIMONIALS[(current + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(current + 2) % TESTIMONIALS.length],
  ];

  return (
    <section className="relative bg-white z-10 -mt-6 rounded-t-3xl">
      <div className="max-w-[1380px] mx-auto px-6 md:px-8 py-[60px] md:py-[70px] lg:py-[120px]">
        <AnimateOnScroll
          type="fade-up"
          className="mb-10 md:mb-[60px] lg:mb-[74px]"
        >
          <h2 className="font-display text-4xl md:text-5xl leading-11 md:leading-16 text-brand-text">
            Our Testimonials
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 md:mb-14">
          {visible.map((t, i) => (
            <AnimateOnScroll
              key={`${t.id}-${i}`}
              type="fade-up"
              delay={i * 100}
              // ── Hide 2nd and 3rd on mobile ─────────────────
              className={i > 0 ? "hidden md:block" : ""}
            >
              <div
                className={`
                bg-brand-surface rounded-3xl p-7 flex flex-col justify-between min-h-[450px]
                transition-transform duration-300
                ${i === 1 ? "md:translate-y-4" : ""}
              `}
              >
                <div className="mb-14">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-stone-200">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <p className="text-brand-muted text-xl leading-relaxed flex-1">
                  “{t.quote}”
                </p>

                <div>
                  <p className="font-display font-semibold text-brand-text text-xl leading-7">
                    {t.name}
                  </p>
                  <p className="text-brand-muted text-base leading-7">
                    {t.role}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll type="fade-in" delay={100}>
          <div className="flex justify-center gap-4">
            <button onClick={prev} className="text-brand-text cursor-pointer">
              <ChevronLeft size={32} />
            </button>
            <button onClick={next} className="text-brand-text cursor-pointer">
              <ChevronRight size={32} />
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
