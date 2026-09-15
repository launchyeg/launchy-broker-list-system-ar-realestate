import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { requireAdmin } from "@/lib/require-admin";

export async function POST(req: NextRequest) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  try {
    const { slug } = await req.json();

    // .select() on the delete returns the deleted row so we know which
    // destination/project page to bust without a separate read first.
    const { data: deleted, error } = await supabaseAdmin
      .from("units")
      .delete()
      .eq("slug", slug)
      .select("destination, project")
      .single();

    if (error) throw error;

    // Public pages are cached for up to 30 days (see the `revalidate`
    // exports on the site pages) — bust the affected ones now so the
    // removed unit disappears immediately instead of waiting for that
    // ceiling.
    revalidatePath("/");
    revalidatePath("/properties");
    revalidatePath(`/properties/${slug}`);
    if (deleted?.destination)
      revalidatePath(`/destinations/${deleted.destination}`);
    if (deleted?.project) revalidatePath(`/projects/${deleted.project}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete unit error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
