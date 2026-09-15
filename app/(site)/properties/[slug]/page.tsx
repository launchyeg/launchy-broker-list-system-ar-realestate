import { cache } from "react";
import type { Metadata } from "next";
import type { Unit } from "@/types/unit";
import { supabase } from "@/lib/supabase";
import { mapUnit } from "@/lib/mapUnit";
import { notFound } from "next/navigation";
import {
  LucideIcon,
  BedDouble,
  Bath,
  Scaling,
  CalendarDays,
  ChevronRight,
  House,
  Banknote,
  CircleCheckBig,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import siteConfig from "@/siteConfig";
import ImageSlider from "./ImageSlider";
import ContactForm from "./ContactForm";
import GeneralFormSection from "@/components/sections/GeneralFormSection";
import UnitsGrid from "@/components/ui/UnitsGrid";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

// Unit data changes roughly once a month; on-demand revalidation
// (see app/api/dashboard/units/**) refreshes this immediately on an
// admin edit, so this is just the outer safety-net ceiling.
export const revalidate = 2592000; // 30 days

// ── Data ──────────────────────────────────────────────────────────────────────

// generateMetadata and the page component both need the same unit row.
// Supabase calls aren't auto-memoized the way fetch() is, so wrap this in
// React's cache() to dedupe them into a single query per render pass.
const getUnitBySlug = cache(async (slug: string) => {
  const { data } = await supabase
    .from("units")
    .select("*")
    .eq("slug", slug)
    .single();
  return data;
});

// ── Static Params ─────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const { data } = await supabase.from("units").select("slug");
  return (data || []).map((u) => ({ slug: u.slug }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const unit = await getUnitBySlug(slug);

  if (!unit) return {};

  return {
    title: unit.name,
    description: unit.description?.slice(0, 160),
    alternates: { canonical: `/properties/${slug}` },
    openGraph: {
      title: `${unit.name} | ${unit.currency} ${unit.price?.toLocaleString("en-US")}`,
      description: unit.description?.slice(0, 160),
      url: `/properties/${slug}`,
      images: [
        { url: unit.cover_image, width: 1200, height: 630, alt: unit.name },
      ],
    },
  };
}

// ── Helper: Status Badge ──────────────────────────────────────────────────────

function StatusBadge({ status }: { status: Unit["status"] }) {
  const styles: Record<Unit["status"], string> = {
    available: "bg-emerald-50 text-emerald-700 border-emerald-200",
    sold: "bg-red-50 text-red-600 border-red-200",
    reserved: "bg-amber-50 text-amber-700 border-amber-200",
  };
  const labels: Record<Unit["status"], string> = {
    available: "Available",
    sold: "Sold",
    reserved: "Reserved",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border tracking-wide uppercase ${styles[status]}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          status === "available"
            ? "bg-emerald-500"
            : status === "sold"
              ? "bg-red-500"
              : "bg-amber-500"
        }`}
      />
      {labels[status]}
    </span>
  );
}

// ── Helper: Stat Pill ─────────────────────────────────────────────────────────

function StatPill({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-stone-50 border border-stone-200">
      <Icon size={20} className="text-brand-accent" />
      <span className="text-sm font-medium text-stone-700">{label}</span>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const raw = await getUnitBySlug(slug);

  if (!raw) notFound();

  const unit = mapUnit(raw);

  const { data: rawUnits } = await supabase
    .from("units")
    .select("*")
    .eq("destination", raw.destination)
    .neq("slug", slug)
    .order("created_at", { ascending: false });

  const availableUnits = (rawUnits || []).map(mapUnit);

  const STATS = [
    {
      icon: <House size={48} className="text-brand-accent" />,
      label: "Type",
      value: unit.type,
    },
    {
      icon: <BedDouble size={48} className="text-brand-accent" />,
      label: "Bedrooms",
      value: unit.beds,
    },
    {
      icon: <Bath size={48} className="text-brand-accent" />,
      label: "Bathrooms",
      value: unit.baths,
    },
    {
      icon: <Scaling size={48} className="text-brand-accent" />,
      label: "Size",
      value: `${unit.size} m²`,
    },
    ...(siteConfig.features.showPrices
      ? [
          {
            icon: <Banknote size={48} className="text-brand-accent" />,
            label: `Price ${unit.listingType === "rent" ? " / Per Night" : ""}`,
            value: `${unit.currency} ${unit.price.toLocaleString("en-US")}`,
          },
        ]
      : [
          {
            icon: <Banknote size={48} className="text-brand-accent" />,
            label: "Price",
            value: `Contact Sales`,
          },
        ]),
    {
      icon: <CalendarDays size={48} className="text-brand-accent" />,
      label: "Delivery",
      value: unit.deliveryYear ?? "TBA",
    },
  ];

  return (
    <main>
      <ImageSlider
        images={[unit.coverImage, ...(unit.gallery ?? [])]}
        destinationLabel={unit.destinationLabel}
        project={unit.projectLabel || unit.destinationLabel}
      />

      <section className="relative bg-white z-10 -mt-6 rounded-t-3xl">
        <div className="max-w-[1380px] mx-auto mx-auto px-6 md:px-8 pt-[50px] pb-[60px] md:py-[70px] lg:py-[120px] grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-[60px] md:space-y-20">
            <AnimateOnScroll type="fade-up">
              {siteConfig.features.showStatusBadge && (
                <StatusBadge status={unit.status as Unit["status"]} />
              )}
              <h2 className="font-display text-4xl md:text-5xl leading-11 md:leading-16 text-brand-text mt-3.5 mb-[30px] md:mb-[50px]">
                {unit.name}
              </h2>
              <p className="text-brand-text text-xl leading-8">
                {unit.description}
              </p>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {STATS.map((stat, i) => (
                <AnimateOnScroll key={i} type="fade-up" delay={i * 100}>
                  <div className="bg-white p-6 flex flex-col gap-8 border border-stone-200 rounded-2xl">
                    {stat.icon}
                    <div className="space-y-2">
                      <p className="text-brand-muted text-base leading-7">
                        {stat.label}
                      </p>
                      <h2 className="text-brand-text font-medium text-[28px] leading-11">
                        {stat.value}
                      </h2>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {unit.gallery && unit.gallery.length > 0 ? (
                unit.gallery.map((imgUrl, i) => (
                  <AnimateOnScroll key={i} type="fade-up" delay={i * 100}>
                    <Image
                      src={imgUrl}
                      width={500}
                      height={600}
                      alt={`Gallery image ${i + 1}`}
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </AnimateOnScroll>
                ))
              ) : (
                <p className="text-2xl text-brand-muted">No images available</p>
              )}
            </div>

            {(unit.highlights ?? []).length > 0 && (
              <div>
                <h2 className="font-display text-4xl md:text-5xl leading-11 md:leading-16 text-brand-text mb-[30px] md:mb-[50px]">
                  Property Highlights
                </h2>
                {(unit.highlights ?? []).map((highlight, i) => (
                  <div key={i} className="flex items-center gap-2.5 mb-2">
                    <CircleCheckBig size={22} className="text-brand-accent" />
                    <p className="text-brand-text text-xl leading-9">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <AnimateOnScroll type="fade-up">
                <ContactForm
                  unit={{
                    name: unit.name,
                    slug: unit.slug,
                    priceLabel: `${unit.currency} ${unit.price.toLocaleString("en-US")}`,
                  }}
                />
              </AnimateOnScroll>

              <div className="bg-brand-primary mt-5 md:mt-8 p-5 md:p-8 rounded-3xl text-center">
                <p className="text-sm text-[#fffc] tracking-widest mb-1">
                  Listed by
                </p>
                <p className="text-white font-medium text-base">
                  {siteConfig.brokerName}
                </p>
                <p className="text-xs text-[#fffc] mt-1">
                  License {siteConfig.brokerLicense}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GeneralFormSection />

      <section className="relative bg-white z-10 -mt-6 rounded-t-3xl">
        <div className="max-w-[1380px] mx-auto px-6 md:px-8 pt-[50px] pb-[60px] md:py-[70px] lg:py-[120px]">
          <AnimateOnScroll type="fade-up">
            <div className="flex items-center justify-between flex-wrap gap-6 mb-10 md:mb-16">
              <h2 className="font-display text-4xl md:text-5xl leading-11 md:leading-16 text-brand-text">
                Your Trusted Real Estate Partner
              </h2>
              <Link
                href="/properties"
                className="text-brand-text/60 hover:text-brand-text text-base font-medium transition-colors flex gap-2"
              >
                Read all stories
                <ChevronRight />
              </Link>
            </div>
          </AnimateOnScroll>

          {availableUnits.length === 0 ? (
            <AnimateOnScroll type="fade-up">
              <div className="text-center py-24">
                <h3 className="font-display text-3xl text-brand-text mb-3">
                  No properties found
                </h3>
                <p className="text-brand-muted text-sm mb-10">
                  We're adding new units soon. Contact us to be notified.
                </p>
                <Link
                  href="/contact"
                  className="bg-brand-primary text-white text-base font-medium px-8 py-[18px] rounded-xl hover:bg-brand-primaryLight transition-colors"
                >
                  Get in Quick
                </Link>
              </div>
            </AnimateOnScroll>
          ) : (
            <UnitsGrid units={availableUnits} />
          )}
        </div>
      </section>
    </main>
  );
}
