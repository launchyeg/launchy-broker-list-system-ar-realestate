import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { mapUnit } from "@/lib/mapUnit";
import { ChevronRight, CircleCheckBig } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import siteConfig from "@/siteConfig";
import ProjectsSlider from "@/components/ui/ProjectsSlider";
import UnitsGrid from "@/components/ui/UnitsGrid";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

interface Stat {
  label: string;
  value: string;
}

interface Destination {
  slug: string;
  label: string;
  image: string;
  heroImage: string;
  tagline: string;
  description: string;
  stats: Stat[];
  highlights: string[];
  whyInvest: string;
}

// Units per destination change roughly once a month; on-demand
// revalidation (see app/api/dashboard/units/**) refreshes this
// immediately on an admin edit, so this is just the safety-net ceiling.
export const revalidate = 2592000; // 30 days

export async function generateStaticParams() {
  return siteConfig.destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = siteConfig.destinations.find((d) => d.slug === slug);
  if (!destination) return {};
  return {
    title: `Properties in ${destination.label}`,
    description: destination.description.slice(0, 160),
    alternates: { canonical: `/destinations/${slug}` },
    openGraph: {
      title: `Properties in ${destination.label} | ${siteConfig.brokerName}`,
      description: destination.description.slice(0, 160),
      url: `/destinations/${slug}`,
      images: [
        {
          url: destination.heroImage,
          width: 1200,
          height: 630,
          alt: destination.label,
        },
      ],
    },
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = siteConfig.destinations.find((d) => d.slug === slug) as
    | Destination
    | undefined;
  if (!destination) notFound();

  const { data: rawUnits } = await supabase
    .from("units")
    .select("*")
    .eq("destination", slug)
    .order("created_at", { ascending: false });

  const availableUnits = (rawUnits || []).map(mapUnit);

  const destinationProjects = (siteConfig.projects as any[]).filter(
    (p) => p.destination === slug,
  );

  return (
    <main>
      <section className="relative md:h-[90vh] min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${destination.heroImage})` }}
        />
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/75 via-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="relative max-w-[1380px] mx-auto text-center px-6 md:px-8 py-[80px] md:pt-[150px] md:pb-[100px] lg:pt-[205px] lg:pb-[155px] w-full">
          <AnimateOnScroll type="fade-up">
            <h1 className="font-display text-4xl md:text-7xl lg:text-[80px] leading-11 md:leading-[92px] text-white mb-4">
              {destination.label}
            </h1>
            <p className="text-white text-xl">{destination.tagline}</p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="relative bg-white z-10 -mt-6 rounded-t-3xl">
        <div className="max-w-[1380px] mx-auto px-6 md:px-8 py-10 md:py-[70px] lg:py-[120px]">
          <AnimateOnScroll type="fade-up" className="max-w-4xl mx-auto">
            <h2 className="max-w-4xl font-display text-4xl md:text-5xl leading-11 md:leading-16 text-brand-text">
              Life in {destination.label}
            </h2>
            <p className="text-brand-text text-lg leading-8 my-[30px] md:my-[50px]">
              {destination.description}
            </p>
            <Image
              src={destination.image}
              width={500}
              height={600}
              alt="Picture of the author"
              className="w-full bg-cover bg-center rounded-2xl"
            />
          </AnimateOnScroll>
        </div>
      </section>

      <section className="relative bg-brand-surface z-10 -mt-6 rounded-t-3xl">
        <div className="max-w-[1380px] mx-auto px-6 md:px-8 py-10 md:py-[70px] lg:py-[120px] flex flex-col gap-10 md:gap-16">
          <AnimateOnScroll type="fade-up">
            <div className="text-center">
              <h2 className="font-display text-4xl md:text-5xl leading-11 md:leading-16 text-brand-text">
                What makes it special
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destination.highlights.map((highl, i) => (
              <AnimateOnScroll key={i} type="fade-up" delay={i * 100}>
                <div className="bg-white p-8 flex flex-col gap-10  rounded-2xl">
                  <CircleCheckBig size={32} className="text-brand-accent" />
                  <p className="text-brand-muted text-base leading-7">
                    {highl}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white z-10 -mt-6 rounded-t-3xl">
        <div className="max-w-[1380px] mx-auto px-6 md:px-8 pt-[50px] pb-[60px] md:py-[70px] lg:py-[120px] flex flex-col gap-10 md:gap-16">
          <AnimateOnScroll type="fade-up">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <h2 className="font-display text-4xl md:text-5xl leading-11 md:leading-16 text-brand-text">
                Our Premium Portfolio Of Projects
              </h2>
              <Link
                href="/projects"
                className="text-brand-text/60 hover:text-brand-text text-base font-medium transition-colors flex gap-2"
              >
                View all projects
                <ChevronRight />
              </Link>
            </div>
          </AnimateOnScroll>

          <ProjectsSlider projects={destinationProjects} />
        </div>
      </section>

      <section className="relative -mt-6">
        <div
          className="absolute inset-0 bg-cover bg-bottom rounded-t-3xl"
          style={{
            backgroundImage: `url(${destination.heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-black/50 rounded-t-3xl" />
        <AnimateOnScroll
          type="fade-up"
          delay={100}
          className="max-w-[1380px] mx-auto px-6 md:px-8 pt-[60px] pb-[80px] md:pt-[80px] md:pb-[100px] lg:pt-[130px] lg:pb-[160px]"
        >
          <div className="relative max-w-4xl mx-auto bg-white p-5 md:p-8 rounded-2xl shadow-2xl">
            <h2 className="font-display text-4xl md:text-5xl leading-11 md:leading-16 text-brand-text mb-4">
              Why invest in {destination.label}
            </h2>
            <p className="text-brand-muted text-lg leading-7 mt-5 mb-10">
              {destination.whyInvest}
            </p>
            <Link
              href="/contact"
              className="bg-transparent text-brand-accent border border-[#1629321a] text-base font-medium px-6 py-4 rounded-full hover:border-[#16293237] transition-colors"
            >
              Talk to an advisor
            </Link>

            <div className="flex flex-wrap gap-4 mt-12 md:mt-24">
              {destination.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-brand-surface p-5 rounded-[10px]"
                >
                  <p className="font-display text-3xl text-brand-text">
                    {stat.value}
                  </p>
                  <p className="text-brand-muted text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      <section className="relative bg-brand-surface z-10 -mt-6 rounded-t-3xl">
        <div className="max-w-[1380px] mx-auto px-6 md:px-8 pt-[50px] pb-[60px] md:py-[70px] lg:py-[120px]">
          <AnimateOnScroll type="fade-up">
            <div className="flex items-end justify-between flex-wrap gap-6 mb-10 md:mb-16">
              <h2 className="font-display text-4xl md:text-5xl leading-11 md:leading-16 text-brand-text">
                Available in {destination.label}
              </h2>
              <span className="text-brand-muted text-base font-medium">
                {availableUnits.length} propert
                {availableUnits.length === 1 ? "y" : "ies"}
              </span>
            </div>
          </AnimateOnScroll>

          {availableUnits.length === 0 ? (
            <AnimateOnScroll type="fade-up">
              <div className="text-center py-24">
                <h3 className="font-display text-3xl text-brand-text mb-3">
                  No properties found
                </h3>
                <p className="text-brand-muted text-sm mb-6">
                  We're adding new units soon. Contact us to be notified.
                </p>
                <Link
                  href="/contact"
                  className="text-brand-text/60 hover:text-brand-text text-base font-medium"
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

      <TestimonialsSection />
    </main>
  );
}
