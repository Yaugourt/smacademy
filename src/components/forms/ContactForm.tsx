"use client";

import { useEffect, useState } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const schema = z
  .object({
    name: z.string().min(2),
    email: z.string().email().optional(),
    phone: z.string().min(6),
    bestTime: z.enum(["ASAP", "Matin", "Après-midi", "Soir"]).optional(),
    message: z.string().optional(),
    consent: z.literal(true),
  })
  .refine((v) => Boolean(v.phone || v.email), {
    message: "Renseignez un téléphone ou un email",
    path: ["phone"],
  });

export default function ContactForm({ context }: { context?: string }) {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(
    null
  );
  const [utm, setUtm] = useState<Record<string, string>>({});

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const captured: Record<string, string> = {};
      for (const key of ["utm_source", "utm_medium", "utm_campaign", "gclid"]) {
        const v = params.get(key);
        if (v) captured[key] = v;
      }
      captured.referrer = document.referrer || "";
      captured.path = window.location.pathname;
      captured.title = document.title;
      setUtm(captured);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("smacademy_contact") || "{}");
      for (const [k, v] of Object.entries(saved)) {
        const el = document.querySelector<HTMLInputElement | HTMLTextAreaElement>(`[name="${k}"]`);
        if (el && !el.value) el.value = String(v);
      }
    } catch {}
  }, []);

  async function onSubmit(formData: FormData) {
    setStatus(null);
    setPending(true);
    try {
      const payload = {
        name: String(formData.get("name") || ""),
        email: String(formData.get("email") || ""),
        phone: String(formData.get("phone") || ""),
        bestTime: String(formData.get("bestTime") || "ASAP"),
        message: String(formData.get("message") || ""),
        page: context || (typeof window !== "undefined" ? window.location.pathname : ""),
        source: "website",
        company: String(formData.get("company") || ""),
        ...utm,
      };
      const parsed = schema.safeParse({ ...payload, consent: Boolean(formData.get("consent")) });
      if (!parsed.success) {
        setStatus({ ok: false, msg: "Veuillez vérifier les champs." });
        return;
      }
      try {
        localStorage.setItem(
          "smacademy_contact",
          JSON.stringify({ name: payload.name, email: payload.email, phone: payload.phone })
        );
      } catch {}
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: "Erreur" }));
        throw new Error(error || "Échec de l'envoi");
      }
      setStatus({ ok: true, msg: "Message envoyé ✅" });
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "form_submit",
          form_context: context || "Accueil",
          ...utm,
        });
      }
    } catch (e: any) {
      setStatus({ ok: false, msg: e.message || "Impossible d'envoyer" });
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      id="contact-form"
      className="mt-4 grid gap-5 sm:grid-cols-2"
      action={async (formData: FormData) => onSubmit(formData)}
    >
      <div className="sm:col-span-1 space-y-2">
        <Label htmlFor="name">Nom</Label>
        <Input id="name" name="name" required placeholder="Nom Prénom" />
      </div>
      <div className="sm:col-span-1 space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="vous@exemple.com" />
      </div>
      <div className="sm:col-span-1 space-y-2">
        <Label htmlFor="phone">Téléphone</Label>
        <Input id="phone" name="phone" required inputMode="tel" placeholder="06 12 34 56 78" />
      </div>
      <div className="sm:col-span-1 space-y-2">
        <Label htmlFor="bestTime">Meilleur moment pour vous appeler</Label>
        <select id="bestTime" name="bestTime" className="h-9 w-full rounded-md border bg-background px-3 text-sm">
          <option value="ASAP">Dès que possible</option>
          <option value="Matin">Matin</option>
          <option value="Après-midi">Après-midi</option>
          <option value="Soir">Soir</option>
        </select>
      </div>
      <div className="sm:col-span-2 space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={5} placeholder="Votre besoin, dates souhaitées, nombre de participants, etc." />
      </div>
      {/* Honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      {/* Consent */}
      <div className="sm:col-span-2 mt-1 flex items-start gap-2 text-xs">
        <input id="consent" name="consent" type="checkbox" required className="h-4 w-4" />
        <label htmlFor="consent">J’accepte d’être contacté(e) par SM Academy au sujet de ma demande.</label>
      </div>

      {/* Hidden UTM fields */}
      {Object.entries(utm).map(([k, v]) => (
        <input key={k} type="hidden" name={k} value={v} />
      ))}
      <div className="sm:col-span-2 mt-1 flex flex-wrap items-center gap-3">
        <Button type="submit" disabled={pending} className="rounded-full" variant="cta">
          {pending ? "Envoi..." : "Envoyer"}
        </Button>
        <Button asChild variant="outline" className="rounded-full">
          <a
            href={`https://wa.me/33668997436?text=${encodeURIComponent(
              `Bonjour, je souhaite des infos sur la formation ${context || "SM Academy"}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </Button>
        {status && (
          <p
            className={status.ok ? "text-sm text-emerald-600" : "text-sm text-destructive"}
            role="status"
          >
            {status.msg}
          </p>
        )}
      </div>
    </form>
  );
}


