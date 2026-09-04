import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { requireAdmin } from "@/lib/require-admin";

export async function POST(req: NextRequest) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  try {
    const { slug } = await req.json();

    const { error } = await supabaseAdmin
      .from("units")
      .delete()
      .eq("slug", slug);

    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete unit error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
