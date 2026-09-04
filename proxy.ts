import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

// ── Edge-layer guard for the admin area ────────────────────────────────────
//
// This is a first line of defense, not the only one: every /api/dashboard/*
// and /api/upload Route Handler also checks the session itself via
// lib/require-admin.ts, and /dashboard/* pages are gated server-side in
// app/dashboard/layout.tsx (so a proxy matcher mistake can't silently leak
// data — see node_modules/next/dist/docs/.../proxy.md's own warning about
// exactly that failure mode).
export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;
  const isApi = pathname.startsWith("/api/");

  if (!user) {
    if (isApi) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    // Non-API /dashboard/* pages: send back to the dashboard root, which
    // renders the login screen server-side when there's no session.
    if (pathname !== "/dashboard") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  return response;
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/dashboard/:path*", "/api/upload"],
};
