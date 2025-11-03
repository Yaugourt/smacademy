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
    title: formation.title,
    description: formation.summary,
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
              Formation disponible dans notre centre à Nîmes ou en intra-entreprise (sur site).
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
              <div className="mt-3 space-y-3">
                {formation.faqs.map((f) => (
                  <div key={f.q} className="rounded-md border p-3">
                    <div className="text-sm font-medium">{f.q}</div>
                    <div className="text-sm text-muted-foreground">{f.a}</div>
                  </div>
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


