import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseServer";

export async function POST(request: Request) {
  const supabaseAdmin = getSupabaseAdmin();
  if (!supabaseAdmin) {
    return NextResponse.json({ ok: true }, { status: 204 });
  }

  const body = await request.json().catch(() => null);
  const postId = body?.postId as string | undefined;

  if (!postId) {
    return NextResponse.json({ message: "PostId manquant." }, { status: 400 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "0.0.0.0";
  const userAgent = request.headers.get("user-agent");
  const referrer = request.headers.get("referer");

  let locationData: Record<string, unknown> | null = null;
  if (supabaseUrl && supabaseAnonKey) {
    try {
      const response = await fetch(`${supabaseUrl}/functions/v1/get-ip-location`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${supabaseAnonKey}`,
          apikey: supabaseAnonKey,
        },
        body: JSON.stringify({ ip_address: ip }),
      });

      if (response.ok) {
        locationData = (await response.json()) as Record<string, unknown>;
      }
    } catch {
      locationData = null;
    }
  }

  const day = new Date().toISOString().slice(0, 10);
  const { count, error: countError } = await supabaseAdmin
    .from("post_views")
    .select("id", { count: "exact", head: true })
    .eq("post_id", postId)
    .eq("day", day)
    .eq("ip", ip);

  if (countError) {
    return NextResponse.json({ message: "Erreur serveur." }, { status: 500 });
  }

  const { error } = await supabaseAdmin.from("post_views").insert([
    {
      post_id: postId,
      day,
      views: (count || 0) + 1,
      ip,
      user_agent: userAgent,
      referrer,
      country: (locationData?.country as string) || null,
      region: (locationData?.regionName as string) || null,
      city: (locationData?.city as string) || null,
      timezone: (locationData?.timezone as string) || null,
      lat: (locationData?.lat as number) || null,
      lon: (locationData?.lon as number) || null,
      location: locationData,
    },
  ]);

  if (error) {
    return NextResponse.json({ message: "Erreur serveur." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
