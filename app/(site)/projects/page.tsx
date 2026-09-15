import { Suspense } from "react";
import { Metadata } from "next";
import siteConfig from "@/siteConfig";
import ProjectsClient from "./ProjectsClient";

// No Supabase data here — projects come entirely from siteConfig, which
// only changes via a code deploy, so this page is fully static (no
// revalidate needed, same as the /destinations list page).

export const metadata: Metadata = {
  title: `All Projects | ${siteConfig.brokerName}`,
  description:
    "Explore our exclusive real estate projects across Egypt's top destinations.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `All Projects | ${siteConfig.brokerName}`,
    description:
      "Explore our exclusive real estate projects across Egypt's top destinations.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  const projects = siteConfig.projects as any[];

  return (
    <main>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-brand-bg">
            <div className="w-8 h-8 border-2 border-brand-accent border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <ProjectsClient projects={projects} />
      </Suspense>
    </main>
  );
}
