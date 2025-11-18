import Link from "next/link";
import type { Metadata } from "next";
import { formations } from "@/data/formations";

export const metadata: Metadata = {
  title: "Centre de formation à Nîmes (Gard) | SM Academy",
  description:
    "SM Academy – centre de formation Qualiopi à Nîmes. SST, IRVE, Fibre optique D3, Gestes & Postures, Excel, Formateur. Sessions courtes, finançables CPF/OPCO.",
  alternates: { canonical: "/nimes" },
};

export default function NimesPage() {
  const citySlug = (slug: string) => `/nimes/formations/${slug}`;
  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 py-12">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "SM Academy",
            url: "https://smacademy.fr/nimes",
            telephone: "+33982774444",
            address: {
              "@type": "PostalAddress",
              streetAddress: "94 Avenue du Docteur Fleming",
              addressLocality: "Nîmes",
              addressRegion: "Occitanie",
              postalCode: "30900",
              addressCountry: "FR",
            },
            hasMap:
              "https://www.google.com/maps?q=94%20Av.%20du%20Dr%20Fleming%2C%2030900%20N%C3%AEmes",
            areaServed: { "@type": "AdministrativeArea", name: "Gard" },
          }),
        }}
      />
      <h1 className="text-3xl font-semibold tracking-tight">
        Centre de formation à Nîmes (Gard)
      </h1>
      <p className="mt-2 text-sm text-foreground">
        SM Academy forme à Nîmes sur des parcours courts et professionnalisants :
        SST, IRVE, Fibre optique D3, Gestes &amp; Postures, Excel et Formation de
        formateur. Centre certifié Qualiopi. Financements CPF/OPCO possibles.
      </p>
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Formations disponibles à Nîmes</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {formations.map((f) => (
            <li key={f.slug} className="rounded-xl border p-4">
              <div className="text-sm font-semibold">{f.title}</div>
              <p className="mt-2 line-clamp-3 text-xs text-foreground/80">
                {f.summary}
              </p>
              <div className="mt-3">
                <Link
                  href={citySlug(f.slug)}
                  className="text-sm text-[var(--brand-orange)] underline-offset-4 hover:underline"
                >
                  Formation {f.title} à Nîmes
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}


