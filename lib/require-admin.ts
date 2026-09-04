import { NextResponse } from "next/server";
import { getAuthedUser } from "@/lib/supabase-server";

// ── Guard for admin-only Route Handlers ────────────────────────────────────
//
// Every /api/dashboard/* and /api/upload route mutates data with the
// Supabase service-role key (which bypasses RLS), so each one must verify
// the caller is a logged-in admin *itself* — the proxy is a first line of
// defense, not the only one (a matcher typo would otherwise silently strip
// protection). Returns a 401 response to short-circuit with, or null when
// the caller is authenticated.
export async function requireAdmin() {
  const user = await getAuthedUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}
