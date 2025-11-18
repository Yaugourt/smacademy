import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getFormationBySlug } from "@/data/formations";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import ContactForm from "@/components/forms/ContactForm";
import MapEmbed from "@/components/site/MapEmbed";
import Link from "next/link";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  const { formations } = require("@/data/formations");
  return formations.map((f: any) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const formation = getFormationBySlug(slug);
  if (!formation) return {};
  return {
    title: `Formation ${formation.title} à Nîmes (Gard) | SM Academy`,
    description:
      `${formation.title} à Nîmes: ${formation.summary} Financement CPF/OPCO possible. Sessions courtes, centre Qualiopi.`,
    alternates: { canonical: `/nimes/formations/${slug}` },
    openGraph: {
      title: `Formation ${formation.title} à Nîmes`,
      description: formation.summary,
      url: `https://smacademy.fr/nimes/formations/${slug}`,
      images: formation.heroImage ? [formation.heroImage] : undefined,
    },
  };
}

export default async function CityFormationPage({ params }: PageProps) {
  const { slug } = await params;
  const f = getFormationBySlug(slug);
  if (!f) return notFound();

  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 py-12">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: `Formation ${f.title} – Nîmes (Gard)`,
            description: f.summary,
            provider: { "@type": "Organization", name: "SM Academy", url: "https://smacademy.fr" },
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: ["in-person"],
              location: {
                "@type": "Place",
                name: "SM Academy – Nîmes",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "94 Avenue du Docteur Fleming",
                  addressLocality: "Nîmes",
                  addressRegion: "Occitanie",
                  postalCode: "30900",
                  addressCountry: "FR",
                },
              },
            },
          }),
        }}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Accueil" },
          { href: "/nimes", label: "Nîmes" },
          { label: `Formation ${f.title}` },
        ]}
      />
      <header className="mt-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          Formation {f.title} à Nîmes (Gard)
        </h1>
        <p className="mt-2 max-w-prose text-sm text-foreground">
          Sessions courtes et professionnalisantes à Nîmes. Financement CPF/OPCO possible. Centre certifié Qualiopi.
        </p>
      </header>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
        <article className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold">Objectifs principaux</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-foreground/90">
              {(f.objectives || []).slice(0, 4).map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Infos pratiques</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {f.duration && (
                <div className="rounded-md border p-3 text-sm">
                  <div className="text-xs text-muted-foreground">Durée</div>
                  <div className="font-medium">{f.duration}</div>
                </div>
              )}
              <div className="rounded-md border p-3 text-sm">
                <div className="text-xs text-muted-foreground">Lieu</div>
                <div className="font-medium">SM Academy – Nîmes (ou intra sur site)</div>
              </div>
              <div className="rounded-md border p-3 text-sm">
                <div className="text-xs text-muted-foreground">Financement</div>
                <div className="font-medium">CPF / OPCO / France Travail (selon profil)</div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Programme (aperçu)</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-foreground/90">
              {(f.program || []).slice(0, 6).map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="mt-2 text-xs">
              Détails complets sur la fiche formation{" "}
              <Link href={`/formations/${f.slug}`} className="text-primary underline-offset-4 hover:underline">
                {f.title}
              </Link>
              .
            </p>
          </section>
        </article>
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-xl border p-5">
            <h3 className="text-base font-semibold">Être rappelé par un conseiller</h3>
            <p className="mt-1 text-xs text-muted-foreground">Réponse rapide, du lundi au vendredi 8h–18h.</p>
            <div className="mt-4">
              <ContactForm context={`Nîmes – ${f.title}`} />
            </div>
          </div>
          <MapEmbed className="mt-4" query="94 Av. du Dr Fleming Nimes" height={240} />
        </aside>
      </div>
    </div>
  );
}


