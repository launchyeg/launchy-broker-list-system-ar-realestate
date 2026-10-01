"use client";

// Renders the base map image and region polygons inside ONE <svg>, both
// addressed in the same coordinate space (mapConfig.viewBox). That's what
// keeps every region pinned to the coastline at any screen size — scaling
// the <svg> via CSS scales the image and the paths together, identically.

import { useState } from "react";
import { regions, mapConfig, type Region } from "@/lib/mapRegions";

type InteractiveMapProps = {
  activeLocation: string | null;
  onRegionClick: (location: string) => void;
  onRegionHover?: (location: string | null) => void;
};

export default function InteractiveMap({
  activeLocation,
  onRegionClick,
  onRegionHover,
}: InteractiveMapProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const hover = (region: Region | null) => {
    setHoveredId(region?.id ?? null);
    onRegionHover?.(region?.location ?? null);
  };

  const isActive = (region: Region) =>
    region.id === hoveredId || region.location === activeLocation;

  const isDimmed = (region: Region) =>
    Boolean(activeLocation) &&
    region.location !== activeLocation &&
    region.id !== hoveredId;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-brand-surface">
      <div
        className="relative w-full"
        style={{ aspectRatio: `${mapConfig.width} / ${mapConfig.height}` }}
      >
        <svg
          viewBox={mapConfig.viewBox}
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="Red Sea coast region map"
          className="block h-full w-full select-none"
        >
          <image
            href={mapConfig.image}
            x="0"
            y="0"
            width={mapConfig.width}
            height={mapConfig.height}
            preserveAspectRatio="none"
          />
          <g>
            {regions.map((region) => {
              const active = isActive(region);
              const dimmed = isDimmed(region);
              return (
                <path
                  key={region.id}
                  d={region.d}
                  tabIndex={0}
                  role="button"
                  data-map-region
                  aria-label={region.location}
                  onMouseEnter={() => hover(region)}
                  onMouseLeave={() => hover(null)}
                  onFocus={() => hover(region)}
                  onBlur={() => hover(null)}
                  onClick={() => onRegionClick(region.location)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onRegionClick(region.location);
                    }
                  }}
                  className="cursor-pointer outline-none transition-[fill-opacity,stroke-opacity] duration-300 ease-out"
                  style={{
                    fill: "#C9A227",
                    stroke: "#0B2A3D",
                    strokeWidth: 2,
                    fillOpacity: active ? 0.45 : dimmed ? 0.05 : 0.18,
                    strokeOpacity: active ? 1 : dimmed ? 0.2 : 0.7,
                  }}
                />
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
}
