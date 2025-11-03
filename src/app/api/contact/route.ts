import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z
  .object({
    name: z.string().min(2).max(120),
    email: z.string().email().max(200).optional(),
    phone: z.string().min(6).max(30).optional(),
    message: z.string().max(2000).optional(),
    page: z.string().max(200).optional(),
    source: z.string().max(120).optional(),
    bestTime: z.enum(["ASAP", "Matin", "Après-midi", "Soir"]).optional(),
    utm_source: z.string().max(200).optional(),
    utm_medium: z.string().max(200).optional(),
    utm_campaign: z.string().max(200).optional(),
    gclid: z.string().max(200).optional(),
    referrer: z.string().max(500).optional(),
    title: z.string().max(300).optional(),
    company: z.string().max(0).optional(), // honeypot must be empty
  })
  .refine((v) => Boolean(v.phone || v.email), {
    message: "phone or email required",
    path: ["phone"],
  });

type RateKey = string;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5; // max requests per window
const rateStore = new Map<RateKey, { count: number; resetAt: number }>();

function rateLimit(key: RateKey) {
  const now = Date.now();
  const entry = rateStore.get(key);
  if (!entry || now > entry.resetAt) {
    rateStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return { allowed: false, resetAt: entry.resetAt } as const;
  }
  entry.count += 1;
  return { allowed: true };
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.ip ||
    "anonymous";
  const limit = rateLimit(`contact:${ip}`);
  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": Math.ceil(((limit as any).resetAt - Date.now()) / 1000).toString() } }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }
  const data = parsed.data;
  if (data.company !== undefined) {
    // Honeypot filled => silently accept
    return NextResponse.json({ ok: true });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO = process.env.CONTACT_TO_EMAIL;
  const FROM = process.env.CONTACT_FROM_EMAIL || "no-reply@smacademy.fr";
  if (!RESEND_API_KEY || !TO) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 503 }
    );
  }

  const subject = `Nouveau contact – ${data.title || data.page || "Site"}`;
  const html = `
    <h2>Demande de contact</h2>
    <p><strong>Nom:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email || "")} </p>
    <p><strong>Téléphone:</strong> ${escapeHtml(data.phone || "")} </p>
    <p><strong>Préférence d'appel:</strong> ${escapeHtml(data.bestTime || "ASAP")} </p>
    <p><strong>Page:</strong> ${escapeHtml(data.page || "")} </p>
    <p><strong>Titre:</strong> ${escapeHtml(data.title || "")} </p>
    <p><strong>Source:</strong> ${escapeHtml(data.source || "")} </p>
    <p><strong>UTM:</strong> ${escapeHtml(
      [data.utm_source, data.utm_medium, data.utm_campaign].filter(Boolean).join(" / ") || ""
    )} </p>
    <p><strong>gclid:</strong> ${escapeHtml(data.gclid || "")} </p>
    <p><strong>Referrer:</strong> ${escapeHtml(data.referrer || "")} </p>
    <hr />
    <p>${escapeHtml(data.message || "")}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json(
      { error: "Email send failed", detail: text },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


