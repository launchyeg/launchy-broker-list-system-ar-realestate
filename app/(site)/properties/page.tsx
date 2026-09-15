import { Suspense } from "react";
import { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import { mapUnit } from "@/lib/mapUnit";
import siteConfig from "@/siteConfig";
import PropertiesClient from "./PropertiesClient";

// Unit data changes roughly once a month; on-demand revalidation
// (see app/api/dashboard/units/**) refreshes this immediately on an
// admin edit, so this is just the outer safety-net ceiling.
export const revalidate = 2592000; // 30 days

export const metadata: Metadata = {
  title: `All Properties |  ${siteConfig.brokerName}`,
  description:
    "Browse all available exclusive properties, beachfront villas, and resort apartments across the Red Sea's top destinations.",
  alternates: { canonical: "/properties" },
  openGraph: {
    title: `All Properties |  ${siteConfig.brokerName}`,
    description:
      "Browse all available properties across Egypt's top Red Sea destinations.",
    url: "/properties",
  },
};

export default async function PropertiesPage() {
  const { data: rawUnits } = await supabase
    .from("units")
    .select("*")
    .order("created_at", { ascending: false });

  const units = (rawUnits || []).map(mapUnit);

  return (
    <main>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-brand-bg">
            <div className="w-8 h-8 border-2 border-brand-accent border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <PropertiesClient
          units={units}
          destinations={siteConfig.destinations as any[]}
          projects={siteConfig.projects as any[]}
        />
      </Suspense>
    </main>
  );
}
