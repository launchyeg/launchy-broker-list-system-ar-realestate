import Link from "next/link";
import { Bath, BedDouble, Scaling } from "lucide-react";
import type { Unit } from "@/types/unit";

const PropertyCard = ({ unit }: { unit: Unit }) => {
  const badgeMap: Record<string, { label: string; style: string }> = {
    primary: { label: "Primary", style: "bg-[#f7f6f4] text-brand-text" },
    resale: { label: "Resale", style: "bg-[#D90000] text-white" },
    rent: { label: "Rent", style: "bg-emerald-700 text-white" },
  };

  const badge = badgeMap[unit.listingType] ?? badgeMap["primary"];

  return (
    <Link href={`/properties/${unit.slug}`}>
      <div className="relative overflow-hidden h-[315px] md:h-[337px]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 rounded-2xl"
          style={{ backgroundImage: `url(${unit.coverImage})` }}
        />
        <span
          className={`absolute ${badge.style} top-3 left-3 text-base leading-7 px-3 py-1 rounded-[10px] shadow-sm`}
        >
          For {badge.label}
        </span>
      </div>
      <p className="text-brand-muted text-base font-medium leading-7 mt-6 mb-2">
        {unit.currency} {unit.price.toLocaleString("en-US")}
        {unit.listingType === "rent" && <span> / Per Night</span>}
      </p>
      <h3 className="font-display text-2xl md:text-3xl font-medium truncate text-brand-text leading-9 mb-1">
        {unit.name}
      </h3>
      <p className="text-brand-muted text-base font-medium leading-7">
        {unit.destinationLabel}, {unit.projectLabel}
      </p>
      <div className="flex items-center gap-4 text-brand-muted text-base font-medium mt-4">
        <span className="flex items-center gap-1.5">
          <Scaling size={18} className="text-brand-icon" />
          {unit.size} m²
        </span>

        <span className="flex items-center gap-1.5">
          <BedDouble size={18} className="text-brand-icon" />
          {unit.beds} Bed
        </span>

        <span className="flex items-center gap-1.5">
          <Bath size={18} className="text-brand-icon" />
          {unit.baths} Bath
        </span>
      </div>
    </Link>
  );
};

export default PropertyCard;
