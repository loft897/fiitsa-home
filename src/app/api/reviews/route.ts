import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rateLimit";
import { getSupabaseServer } from "@/lib/supabaseServer";
import { reviewSchema } from "@/lib/validators";

async function verifyRecaptcha(token: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return true;

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });

  const data = (await response.json()) as { success: boolean };
  return data.success;
}

export async function POST(request: Request) {
  const supabaseServer = getSupabaseServer();
  if (!supabaseServer) {
    return NextResponse.json({ message: "Supabase non configure." }, { status: 500 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "anonymous";
  const limit = rateLimit(`reviews:${ip}`, { windowMs: 60_000, max: 3 });

  if (!limit.allowed) {
    return NextResponse.json({ message: "Trop de tentatives." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const parsed = reviewSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ message: "Donnees invalides." }, { status: 400 });
  }

  const { website, recaptchaToken, ...review } = parsed.data;

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (recaptchaToken) {
    const ok = await verifyRecaptcha(recaptchaToken);
    if (!ok) {
      return NextResponse.json({ message: "reCAPTCHA invalide." }, { status: 400 });
    }
  }

  const { error } = await supabaseServer.from("post_reviews").insert([
    {
      post_id: review.postId,
      rating: review.rating,
      name: review.name || null,
      email: review.email || null,
      message: review.message,
      is_approved: false,
    },
  ]);

  if (error) {
    return NextResponse.json({ message: "Erreur serveur." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
