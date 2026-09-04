import { NextRequest, NextResponse } from "next/server";
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
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Add unit error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
