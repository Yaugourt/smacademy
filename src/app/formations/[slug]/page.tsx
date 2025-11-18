import { notFound } from "next/navigation";
import { getFormationBySlug } from "@/data/formations";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/forms/ContactForm";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import Link from "next/link";
import Image from "next/image";
import MapEmbed from "@/components/site/MapEmbed";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  // Keep static for SSG; dynamic admin will revalidate later
  const { formations } = require("@/data/formations");
  return formations.map((f: any) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const formation = getFormationBySlug(slug);
  if (!formation) return {};
  return {
    title: `${formation.title} – Nîmes (Gard) | SM Academy`,
    description:
      formation.summary ||
      `${formation.title} à Nîmes (Gard): programme, objectifs, prérequis, durée et financement CPF/OPCO.`,
    alternates: {
      canonical: `/formations/${slug}`,
    },
    openGraph: {
      title: formation.title,
      description:
        formation.summary ||
        `${formation.title} à Nîmes (Gard): programme, objectifs, prérequis, durée et financement CPF/OPCO.`,
      type: "article",
      url: `https://smacademy.fr/formations/${slug}`,
      images: formation.heroImage ? [formation.heroImage] : undefined,
    },
  };
}

export default async function FormationPage({ params }: PageProps) {
  const { slug } = await params;
  const formation = getFormationBySlug(slug);
  if (!formation) return notFound();

  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 py-12">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: formation.title,
            description: formation.summary,
            provider: {
              "@type": "Organization",
              name: "SM Academy",
              sameAs: "https://smacademy.fr",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://smacademy.fr/" },
              { "@type": "ListItem", position: 2, name: "Formations", item: "https://smacademy.fr/formations" },
              { "@type": "ListItem", position: 3, name: formation.title, item: `https://smacademy.fr/formations/${formation.slug}` },
            ],
          }),
        }}
      />
      {formation.faqs?.length ? (
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: formation.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      ) : null}
      <Breadcrumbs
        items={[
          { href: "/", label: "Accueil" },
          { href: "/formations", label: "Formations" },
          { label: formation.title },
        ]}
      />

      <header className="mt-4 flex flex-col gap-3">
        {formation.heroImage ? (
          <div className="overflow-hidden rounded-xl border bg-secondary/40">
            <div className="relative h-40 w-full sm:h-56">
              <Image
                src={formation.heroImage}
                alt={formation.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        ) : null}
        <h1 className="text-3xl font-semibold tracking-tight">{formation.title}</h1>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{formation.city}</Badge>
          {formation.tags?.map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </div>
        <p className="max-w-prose text-muted-foreground">{formation.summary}</p>
      </header>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
        <article className="space-y-8">
          <nav aria-label="Sommaire" className="sticky top-16 z-10 -mx-1 overflow-x-auto pb-2 pt-1 lg:static lg:mx-0">
            <ul className="flex gap-2 text-xs text-muted-foreground">
              {[
                { id: "objectifs", label: "Objectifs", show: Boolean(formation.objectives?.length) },
                { id: "programme", label: "Programme", show: Boolean(formation.program?.length) },
                { id: "prerequis", label: "Prérequis", show: Boolean(formation.prerequisites?.length) },
                { id: "public-vise", label: "Public visé", show: Boolean(formation.audience) },
                { id: "infos-pratiques", label: "Infos pratiques", show: true },
                { id: "financements", label: "Financements", show: Boolean(formation.financingNotes) },
                { id: "faq", label: "FAQ", show: Boolean(formation.faqs?.length) },
              ]
                .filter((x) => x.show)
                .map((x) => (
                  <li key={x.id}>
                    <a href={`#${x.id}`} className="rounded-full border px-3 py-1 hover:bg-secondary">
                      {x.label}
                    </a>
                  </li>
                ))}
            </ul>
          </nav>
          {formation.objectives?.length ? (
            <section id="objectifs">
              <h2 className="text-xl font-semibold">Objectifs</h2>
              <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground">
                {formation.objectives.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {formation.program?.length ? (
            <section id="programme">
              <h2 className="text-xl font-semibold">Programme</h2>
              <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground">
                {formation.program.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {formation.prerequisites?.length ? (
            <section id="prerequis">
              <h2 className="text-xl font-semibold">Prérequis</h2>
              <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground">
                {formation.prerequisites.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {formation.audience ? (
            <section id="public-vise">
              <h2 className="text-xl font-semibold">Public visé</h2>
              <p className="mt-3 text-sm text-muted-foreground">{formation.audience}</p>
            </section>
          ) : null}

          <section id="infos-pratiques">
            <h2 className="text-xl font-semibold">Infos pratiques</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {formation.duration && (
                <Info label="Durée" value={formation.duration} />
              )}
              {formation.price && <Info label="Tarif" value={formation.price} />}
              {formation.location && (
                <Info label="Lieu" value={formation.location} />
              )}
              {formation.certification && (
                <Info label="Certification" value={formation.certification} />
              )}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Formation disponible dans notre centre à Nîmes (Gard) ou en intra-entreprise (sur site). Financements possibles: CPF/OPCO/France Travail selon situation.
            </p>
          </section>

          {formation.financingNotes ? (
            <section id="financements">
              <h2 className="text-xl font-semibold">Financements</h2>
              <p className="mt-3 text-sm text-muted-foreground">{formation.financingNotes}</p>
              <p className="mt-2 text-xs">
                Voir aussi <Link className="text-primary underline-offset-4 hover:underline" href="/">les dispositifs de financement</Link>.
              </p>
            </section>
          ) : null}

          {formation.faqs?.length ? (
            <section id="faq">
              <h2 className="text-xl font-semibold">FAQ</h2>
              <div className="mt-3 space-y-2">
                {formation.faqs.map((f) => (
                  <details key={f.q} className="group rounded-md border p-3 open:shadow-sm">
                    <summary className="cursor-pointer list-none text-sm font-medium">
                      {f.q}
                    </summary>
                    <div className="mt-2 text-sm text-muted-foreground">{f.a}</div>
                  </details>
                ))}
              </div>
            </section>
          ) : null}
        </article>

        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-xl border p-5">
            <h3 className="text-base font-semibold">Intéressé(e) ? On vous rappelle</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Réponse rapide, du lundi au vendredi 8h–18h.
            </p>
            <div className="mt-4">
              <ContactForm context={formation.title} />
            </div>
          </div>
          <MapEmbed className="mt-4" query="94 Av. du Dr Fleming Nimes" height={240} />
          <div className="mt-4 rounded-xl border p-5 text-sm">
            <div className="font-semibold">Besoin d’une autre formation ?</div>
            <Link href="/formations" className="text-primary underline-offset-4 hover:underline">
              Voir toutes les formations
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border p-3 text-sm">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
}


