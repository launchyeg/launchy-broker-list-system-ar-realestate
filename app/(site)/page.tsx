import Link from "next/link";
import { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import { mapUnit } from "@/lib/mapUnit";
import { ChevronRight } from "lucide-react";
import siteConfig from "@/siteConfig";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import PropertyCard from "@/components/ui/PropertyCard";
import CeoSection from "@/components/sections/CeoSection";
import DestinationSlider from "@/components/ui/DestinationSlider";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GeneralFormSection from "@/components/sections/GeneralFormSection";
import FaqSection from "@/components/sections/FaqSection";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

// Unit data changes roughly once a month; on-demand revalidation
// (see app/api/dashboard/units/**) refreshes this immediately on an
// admin edit, so this is just the outer safety-net ceiling.
export const revalidate = 2592000; // 30 days

export const metadata: Metadata = {
  title: `${siteConfig.brokerName} | Buy & Invest in Coastal Properties`,
  description:
    "Browse luxury villas, apartments, and penthouses across Hurghada, Sahl Hasheesh, El Gouna, and the Red Sea coast with AR Real Estate.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.brokerName} | Buy & Invest in Coastal Properties`,
    description:
      "Browse luxury villas, apartments, and penthouses across Egypt's stunning Red Sea coast.",
    url: "/",
  },
};

export default async function HomePage() {
  const { data: rawUnits } = await supabase
    .from("units")
    .select("*")
    .order("created_at", { ascending: false });

  const allUnits = (rawUnits || []).map(mapUnit);

  const destination = (siteConfig.destinations as any[]).filter((p) => p.slug);

  return (
    <main>
      <HeroSection />

      <TrustBar />

      <section className="max-w-[1380px] mx-auto px-6 md:px-8 py-[50px] md:py-[70px] lg:py-[120px] flex flex-col gap-10 md:gap-16">
        <AnimateOnScroll type="fade-up">
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-5xl leading-11 md:leading-16 text-brand-text">
              Exclusive properties by {siteConfig.brokerName}
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {allUnits.slice(0, 6).map((unit, i) => (
            <AnimateOnScroll key={unit.id} type="fade-up" delay={i * 100}>
              <PropertyCard unit={unit} />
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll type="fade-up" delay={200}>
          <div className="text-center mt-[18px]">
            <Link
              href="/properties"
              className="bg-brand-primary text-white text-base font-medium px-8 py-[18px] rounded-xl hover:bg-brand-primaryLight transition-colors"
            >
              Explore All Properties
            </Link>
          </div>
        </AnimateOnScroll>
      </section>

      <CeoSection />

      <section className="relative -mt-6">
        <div
          className="absolute inset-0 bg-cover bg-bottom rounded-t-3xl"
          style={{
            backgroundImage:
              "url(https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/pensee-royal-azur-tourist-resort-pools-1-min-2048x1367.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-black/50 rounded-t-3xl" />
        <AnimateOnScroll
          type="fade-up"
          delay={100}
          className="max-w-[1380px] mx-auto px-6 md:px-8 pt-[50px] md:pt-[70px] pb-20 md:pb-[170px]"
        >
          <div className="relative max-w-xl bg-white p-5 md:px-10 md:py-12 rounded-2xl shadow-2xl">
            <h2 className="font-display text-4xl md:text-5xl leading-11 md:leading-16 text-brand-text mb-4">
              Unlocking your Red Sea coastal lifestyle!
            </h2>
            <p className="text-brand-muted text-lg leading-7 mt-5 mb-10">
              Looking for expert guidance or ready to invest? Whether you are
              buying, selling, or exploring properties.
            </p>
            <Link
              href="/about"
              className="bg-transparent text-brand-accent border border-[#1629321a] text-base font-medium px-6 py-4 rounded-full hover:border-[#16293237] transition-colors"
            >
              Explore More
            </Link>
            <h3 className="font-display text-2xl text-brand-text mt-12 md:mt-24 mb-3">
              Guiding your investments across Redsea.
            </h3>
            <p className="text-brand-muted text-base leading-7">
              Need expert assistance or ready for your next chapter? Whether you
              are buying, selling, or reviewing market options.
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      <section className="relative bg-brand-surface z-10 -mt-6 rounded-t-3xl">
        <div className="max-w-[1380px] mx-auto px-6 md:px-8 pt-[50px] pb-[60px] md:py-[70px] lg:py-[120px] flex flex-col gap-10 md:gap-16">
          <AnimateOnScroll type="fade-up">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <h2 className="font-display text-4xl md:text-5xl leading-11 md:leading-16 text-brand-text">
                Prime locations for your home
              </h2>
              <Link
                href="/destinations"
                className="text-brand-text/60 hover:text-brand-text text-base font-medium transition-colors flex gap-2"
              >
                View all destinations
                <ChevronRight />
              </Link>
            </div>
          </AnimateOnScroll>

          <DestinationSlider destinations={destination} />
        </div>
      </section>

      <TestimonialsSection />

      <GeneralFormSection />

      <FaqSection />
    </main>
  );
}
