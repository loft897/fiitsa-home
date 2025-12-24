import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseServer";

export async function POST(request: Request) {
  if (!supabaseAdmin) {
    return NextResponse.json({ message: "Service role non configure." }, { status: 500 });
  }

  const body = await request.json().catch(() => null);
  const slug = body?.slug as string | undefined;

  if (!slug) {
    return NextResponse.json({ message: "Slug manquant." }, { status: 400 });
  }

  const { error } = await supabaseAdmin.rpc("increment_post_view", {
    post_slug: slug,
  });

  if (error) {
    return NextResponse.json({ message: "Erreur serveur." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
