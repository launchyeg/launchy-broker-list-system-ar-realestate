import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase environment variables. Check your .env.local file.",
  );
}

// ── Session-aware Supabase client for Server Components & Route Handlers ──
//
// Unlike `lib/supabase-admin.ts` (service role, bypasses RLS, no identity),
// this client reads the visitor's own auth cookies so we can find out *who*
// is making the request — this is what powers the admin login gate.
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(supabaseUrl!, supabaseAnonKey!, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        } catch {
          // Called from a Server Component during rendering, where cookies
          // can't be written. Safe to ignore — session refresh still happens
          // via the Route Handlers / proxy that can set cookies.
        }
      },
    },
  });
}

// ── Authoritative "is this an authenticated admin?" check ─────────────────
//
// Always use getUser() (not getSession()) for anything security-sensitive:
// getSession() just decodes the local cookie, while getUser() revalidates
// the token against Supabase's Auth server.
export async function getAuthedUser() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}
