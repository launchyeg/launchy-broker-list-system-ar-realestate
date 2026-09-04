import type { Metadata } from "next";
import DashboardShell from "@/components/dashboard/DashboardShell";
import LoginScreen from "@/components/dashboard/LoginScreen";
import { getAuthedUser } from "@/lib/supabase-server";
import siteConfig from "@/siteConfig";

export const metadata: Metadata = {
  title: {
    default: "Admin Dashboard",
    template: `%s | ${siteConfig.brokerName} Admin`,
  },
};

// This layout is the authoritative auth gate for the whole /dashboard tree.
// It's a Server Component, so when there's no session it renders only
// <LoginScreen /> and never evaluates `children` — meaning the nested pages
// (which fetch real unit/customer data with the service-role client) are
// never invoked for a signed-out visitor. Gating this in the client-side
// DashboardShell instead would still leak that data: a Server Component's
// children are rendered and sent to the browser as part of the page payload
// before a Client Component ever gets to decide whether to display them.
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getAuthedUser();

  if (!user) {
    return <LoginScreen />;
  }

  return <DashboardShell>{children}</DashboardShell>;
}
