import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { requireAdmin } from "@/lib/require-admin";

export async function POST(req: NextRequest) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  try {
    const unit = await req.json();

    const { error } = await supabaseAdmin.from("units").insert({
      id: unit.id,
      name: unit.name,
      slug: unit.slug,
      destination: unit.destination,
      destination_label: unit.destinationLabel,
      project: unit.project,
      project_label: unit.projectLabel,
      price: unit.price,
      currency: unit.currency,
      beds: unit.beds,
      baths: unit.baths,
      size: unit.size,
      type: unit.type,
      status: unit.status,
      listing_type: unit.listingType,
      featured: unit.featured,
      cover_image: unit.coverImage,
      gallery: unit.gallery,
      description: unit.description,
      highlights: unit.highlights,
      delivery_year: unit.deliveryYear || null,
    });

    if (error) throw error;

    // Public pages are cached for up to 30 days (see the `revalidate`
    // exports on the site pages) — bust the affected ones now so the new
    // unit shows up immediately instead of waiting for that ceiling.
    revalidatePath("/");
    revalidatePath("/properties");
    revalidatePath(`/properties/${unit.slug}`);
    if (unit.destination) revalidatePath(`/destinations/${unit.destination}`);
    if (unit.project) revalidatePath(`/projects/${unit.project}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Add unit error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
