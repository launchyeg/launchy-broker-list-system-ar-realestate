"use client";

// Map section. The map starts full width; when a destination is hovered or
// clicked it shrinks (lg+) to make room for that destination's project
// slider on the right, and a units slider appears across the bottom.
//
// page.tsx stays a Server Component; this holds the hover/selected-region
// state. Hover previews a region and click pins it; the panels stay
// clickable either way.
//
// Shrinking the map moves regions out from under the cursor, which would
// fire "mouse left" and re-expand it in a loop. So a hovered region stays
// shown (lastHovered) until the pointer leaves the section or the user
// clicks outside a region/panel.

import { useEffect, useState } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import InteractiveMap from "@/components/ui/InteractiveMap";
import MapSlider from "@/components/ui/MapSlider";
import ProjectsCard, { Project } from "@/components/ui/ProjectsCard";
import PropertyCard from "@/components/ui/PropertyCard";
import type { Unit } from "@/types/unit";
import { regions } from "@/lib/mapRegions";

export type MapProject = Project & { destination: string };

type MapSectionProps = {
  projects: MapProject[];
  units: Unit[];
};

export default function MapSection({ projects, units }: MapSectionProps) {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [lastHovered, setLastHovered] = useState<string | null>(null);

  const handleRegionHover = (location: string | null) => {
    setHoveredLocation(location);
    if (location) setLastHovered(location);
  };

  const handleRegionClick = (location: string) => {
    setActiveLocation((prev) => (prev === location ? null : location));
  };

  const shownLocation = hoveredLocation ?? activeLocation ?? lastHovered;
  const region = regions.find((r) => r.location === shownLocation);
  const regionProjects = region
    ? projects.filter((p) => p.destination === region.id)
    : [];
  const regionUnits = region
    ? units.filter((u) => u.destinationLabel === region.location)
    : [];
  const open = region !== undefined;

  // Clicking anywhere other than a region or the panels clears the
  // selection, so the last destination is not left highlighted.
  useEffect(() => {
    if (!activeLocation && !lastHovered) return;
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Element | null;
      if (target?.closest("[data-map-region], [data-map-panel]")) return;
      setActiveLocation(null);
      setLastHovered(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [activeLocation, lastHovered]);

  return (
    <section className="max-w-[1380px] mx-auto px-6 md:px-8 pb-[50px] md:pb-[70px] lg:pb-[120px]">
      <AnimateOnScroll type="fade-up">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl leading-11 md:leading-16 text-brand-text mb-4">
            Browse by location
          </h2>
          <p className="text-brand-muted text-base font-medium leading-relaxed">
            From El Gouna to Ras Soma — click the map to filter listings.
          </p>
        </div>
      </AnimateOnScroll>

      <div
        onMouseLeave={() => {
          setHoveredLocation(null);
          setLastHovered(null);
        }}
      >
        <AnimateOnScroll type="fade-up" delay={100}>
          <div className="flex flex-col lg:flex-row items-start">
            <div
              className={`w-full transition-[width] duration-500 ease-out ${
                open ? "lg:w-2/3" : "lg:w-full"
              }`}
            >
              <InteractiveMap
                activeLocation={activeLocation}
                onRegionClick={handleRegionClick}
                onRegionHover={handleRegionHover}
              />
            </div>

            {/* Always mounted on lg so the width can animate; collapsed to 0
                until a destination is shown. Hidden below lg until then. */}
            <div
              data-map-panel
              className={`overflow-hidden transition-all duration-500 ease-out ${
                open
                  ? "w-full mt-6 lg:mt-0 lg:w-1/3 lg:pl-6 opacity-100"
                  : "hidden lg:block lg:w-0 lg:pl-0 opacity-0"
              }`}
            >
              <div className="lg:min-w-[24rem]">
                {region && (
                  <div key={`p-${region.id}`}>
                    {regionProjects.length === 0 ? (
                      <p className="text-brand-muted">
                        No projects listed here yet.
                      </p>
                    ) : (
                      <MapSlider
                        items={regionProjects}
                        getKey={(p) => p.slug}
                        renderItem={(p) => <ProjectsCard projects={p} />}
                        perView={1}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {region && (
          <div data-map-panel className="mt-6">
            <div key={`u-${region.id}`}>
              {regionUnits.length === 0 ? (
                <p className="text-brand-muted">
                  No properties listed here yet.
                </p>
              ) : (
                <MapSlider
                  items={regionUnits}
                  getKey={(u) => u.id}
                  renderItem={(u) => <PropertyCard unit={u} />}
                  perView={3}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
