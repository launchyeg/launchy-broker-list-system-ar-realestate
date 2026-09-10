"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import siteConfig, { projects } from "@/siteConfig";
import CustomSelect from "@/components/dashboard/CustomSelect";
import ProjectsCard from "@/components/ui/ProjectsCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

interface Props {
  projects: any[];
}

const DOWNPAYMENT_OPTIONS = [
  { value: "0-10", label: "Up to 10%" },
  { value: "10-15", label: "10% – 15%" },
  { value: "15-20", label: "15% – 20%" },
  { value: "20-30", label: "20% – 30%" },
  { value: "30", label: "30% and above" },
];

export default function ProjectsClient({ projects }: Props) {
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [destination, setDestination] = useState(
    searchParams.get("destination") || "",
  );
  const [downpayment, setDownpayment] = useState(
    searchParams.get("downpayment") || "",
  );

  const filtered = useMemo(() => {
    return projects.filter((p: any) => {
      // Search
      if (
        search &&
        !p.label.toLowerCase().includes(search.toLowerCase()) &&
        !p.destinationLabel?.toLowerCase().includes(search.toLowerCase())
      ) {
        return false;
      }
      // Destination
      if (destination && p.destination !== destination) return false;
      // Down Payment — match last stat value
      if (downpayment) {
        const lastStat = p.stats?.[p.stats.length - 1];
        const statValue = parseInt(
          lastStat?.value?.toString().replace("%", "").trim(),
        );

        if (downpayment.includes("-")) {
          const [min, max] = downpayment.split("-").map(Number);
          if (statValue < min || statValue > max) return false;
        } else {
          if (statValue < parseInt(downpayment)) return false;
        }
      }
      return true;
    });
  }, [projects, search, destination, downpayment]);

  const hasFilters = !!search || !!destination || !!downpayment;

  function clearFilters() {
    setSearch("");
    setDestination("");
    setDownpayment("");
  }

  return (
    <>
      <section className="relative md:h-[90vh] min-h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/properties/1784164711844-feg8u9wo5d9.png)",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="max-w-[1380px] mx-auto px-6 md:px-8 py-[120px] md:pt-[150px] md:pb-[100px] lg:pt-[205px] lg:pb-[155px]">
          <AnimateOnScroll type="fade-up">
            <div className="max-w-2xl mx-auto text-center mb-10 md:mb-16">
              <h2 className="font-display text-4xl md:text-7xl lg:text-[80px] leading-11 md:leading-[92px] text-white">
                Choose Your Dream Red Sea Project
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="relative z-20" type="fade-up" delay={100}>
            <div className="bg-white p-5 md:px-10 md:py-12 rounded-2xl shadow-2xl">
              <div className="mb-5">
                <div className="relative">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35"
                    />
                  </svg>
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by project or destination..."
                    className="w-full pl-10 pr-5 py-3.5 border border-stone-200 rounded-[10px] text-sm focus:outline-none focus:border-brand-accent transition bg-stone-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <CustomSelect
                  value={downpayment}
                  placeholder="Down Payment"
                  onChange={setDownpayment}
                  options={DOWNPAYMENT_OPTIONS}
                />
              </div>

              {hasFilters && (
                <div className="flex items-center justify-between mt-5 pt-5 border-t border-[#52525a1a]">
                  <p className="text-sm font-medium text-brand-text/60">
                    <span className="text-brand-text">{filtered.length}</span>{" "}
                    {filtered.length === 1 ? "project" : "projects"} found
                  </p>
                  <button
                    onClick={clearFilters}
                    className="text-red-500 hover:text-red-600 text-sm font-medium transition-colors"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="relative z-10 -mt-6 rounded-t-3xl bg-white">
        <div className="max-w-[1380px] mx-auto px-6 md:px-8 py-10 md:py-[70px] lg:py-[120px]">
          <AnimateOnScroll type="fade-up">
            <h2 className="font-display text-brand-text text-4xl md:text-5xl leading-11 md:leading-16 md:text-4xl mb-10 md:mb-16">
              Discover signature developments
            </h2>
          </AnimateOnScroll>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {filtered.map((project, i) => (
                <AnimateOnScroll
                  key={project.slug}
                  type="fade-up"
                  delay={i * 100}
                >
                  <ProjectsCard projects={project} />
                </AnimateOnScroll>
              ))}
            </div>
          ) : (
            <AnimateOnScroll type="fade-up">
              <div className="text-center py-24">
                <h3 className="font-display text-3xl text-brand-text mb-3">
                  No properties found
                </h3>
                <p className="text-brand-muted text-sm mb-6">
                  Try adjusting your filters to see more results.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-brand-text/60 hover:text-brand-text text-base font-medium"
                >
                  Clear filters
                </button>
              </div>
            </AnimateOnScroll>
          )}
        </div>
      </section>
    </>
  );
}
