"use client";

// Map section. Layout (lg+): the map on the left, a project slider on the
// right, and a units slider across the bottom. Everything follows the hovered / selected region.
//
// page.tsx stays a Server Component; this holds the hover/selected-region
// state. Hover previews a region (the panels are not clickable and revert
// when the cursor leaves); click pins it so the sliders and links work.

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

export default function MapSection({
  projects,
  units,
}: MapSectionProps) {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const handleRegionClick = (location: string) => {
    setActiveLocation((prev) => (prev === location ? null : location));
  };

  const shownLocation = hoveredLocation ?? activeLocation;
  const region = regions.find((r) => r.location === shownLocation);
  const regionProjects = region
    ? projects.filter((p) => p.destination === region.id)
    : [];
  const regionUnits = region
    ? units.filter((u) => u.destinationLabel === region.location)
    : [];
  const pinned = shownLocation !== null && shownLocation === activeLocation;

  // Clicking anywhere other than a region or the panels clears the
  // selection, so the last destination is not left highlighted.
  useEffect(() => {
    if (!activeLocation) return;
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Element | null;
      if (target?.closest("[data-map-region], [data-map-panel]")) return;
      setActiveLocation(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [activeLocation]);

  const lockedClass = pinned ? "" : "pointer-events-none";

  return (
    <section className="max-w-[1380px] mx-auto px-6 md:px-8 pb-[50px] md:pb-[70px] lg:pb-[120px] flex flex-col gap-6">
      <AnimateOnScroll type="fade-up" delay={100}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2">
            <InteractiveMap
              activeLocation={activeLocation}
              onRegionClick={handleRegionClick}
              onRegionHover={setHoveredLocation}
            />
          </div>

          <div data-map-panel className={`flex flex-col gap-6 ${lockedClass}`}>
            {!region ? (
              <p className="text-brand-muted lg:pt-10">
                Hover or click a destination to see its details.
              </p>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </AnimateOnScroll>

      {/* Always rendered so the page does not jump as the cursor moves. */}
      <div data-map-panel className={`min-h-112 ${lockedClass}`}>
        {region && (
          <div key={`u-${region.id}`}>
            {regionUnits.length === 0 ? (
              <p className="text-brand-muted">No properties listed here yet.</p>
            ) : (
              <MapSlider
                items={regionUnits}
                getKey={(u) => u.id}
                renderItem={(u) => <PropertyCard unit={u} />}
                perView={3}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
