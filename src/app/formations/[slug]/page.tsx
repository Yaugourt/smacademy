import { notFound } from "next/navigation";
import { getFormationBySlug } from "@/data/formations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/forms/ContactForm";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import Link from "next/link";
import Image from "next/image";
import MapEmbed from "@/components/site/MapEmbed";
import {
  Clock,
  MapPin,
  Award,
  Euro,
  CheckCircle2,
  Calendar,
  FileText,
  Target,
  BookOpen,
  Users,
  HelpCircle,
  Phone,
  Download
} from "lucide-react";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
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
      `${formation.title} à Nîmes (Gard): programme, objectifs, prérequis, durée et financement OPCO / Entreprise.`,
    alternates: {
      canonical: `/formations/${slug}`,
    },
    openGraph: {
      title: formation.title,
      description:
        formation.summary ||
        `${formation.title} à Nîmes (Gard): programme, objectifs, prérequis, durée et financement OPCO / Entreprise.`,
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
    <div className="min-h-screen bg-background pb-12">
      {/* Structured Data */}
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
              address: {
                "@type": "PostalAddress",
                streetAddress: "94 Avenue du Docteur Fleming",
                addressLocality: "Nîmes",
                addressRegion: "Occitanie",
                postalCode: "30900",
                addressCountry: "FR",
              },
            },
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "in-person",
              courseWorkload: formation.duration || "2-3 jours",
              instructor: {
                "@type": "Person",
                name: "Formateurs certifiés SM Academy",
              },
              location: {
                "@type": "Place",
                name: "SM Academy Nîmes",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "94 Avenue du Docteur Fleming",
                  addressLocality: "Nîmes",
                  addressRegion: "Gard",
                  postalCode: "30900",
                  addressCountry: "FR",
                },
              },
            },
            offers: {
              "@type": "Offer",
              category: "Formation professionnelle",
              availability: "https://schema.org/InStock",
              priceCurrency: "EUR",
              price: "0",
              priceValidUntil: "2025-12-31",
              description: "Financement OPCO, France Travail ou Entreprise possible",
            },
            coursePrerequisites: formation.prerequisites?.join(", ") || "Aucun prérequis spécifique",
            educationalLevel: "Professionnel",
            inLanguage: "fr",
            isAccessibleForFree: false,
            image: formation.heroImage || "https://smacademy.fr/Logo_SMACADEMY.png",
          }),
        }}
      />

      {/* Hero Header */}
      <header className="relative bg-card border-b">
        <div className="mx-auto w-full max-w-screen-xl px-4 py-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Accueil" },
              { href: "/formations", label: "Formations" },
              { label: formation.title },
            ]}
          />
          <div className="mt-6 grid lg:grid-cols-[1fr_400px] gap-8 items-start">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-[var(--brand-orange)]/10 text-[var(--brand-orange-700)] dark:text-[var(--brand-orange)] hover:bg-[var(--brand-orange)]/20 border-0">
                  {formation.city}
                </Badge>
                {formation.tags?.map((t) => (
                  <Badge key={t} variant="outline" className="text-muted-foreground">
                    {t}
                  </Badge>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {formation.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {formation.summary}
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground pt-2">
                {formation.duration && (
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-muted rounded-full"><Clock className="h-4 w-4" /></div>
                    <span className="font-medium">{formation.duration}</span>
                  </div>
                )}
                {formation.certification && (
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-muted rounded-full"><Award className="h-4 w-4" /></div>
                    <span className="font-medium">{formation.certification}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-muted rounded-full"><CheckCircle2 className="h-4 w-4 text-green-600" /></div>
                  <span className="font-medium text-green-700">Financement possible (OPCO / France Travail / Entreprise)</span>
                </div>
              </div>
            </div>

            {/* Hero Image (Desktop) */}
            <div className="hidden lg:block relative h-64 w-full rounded-2xl overflow-hidden shadow-lg">
              {formation.heroImage ? (
                <Image
                  src={formation.heroImage}
                  alt={formation.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <Award className="h-12 w-12 text-muted-foreground" />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-screen-xl px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">

          {/* Main Content */}
          <main className="space-y-12">

            {/* Sticky Nav */}
            <nav className="sticky top-16 z-20 bg-background/80 backdrop-blur-md border border-border rounded-full px-4 py-2 shadow-sm overflow-x-auto no-scrollbar">
              <ul className="flex items-center gap-1 text-sm font-medium min-w-max">
                {[
                  { id: "objectifs", label: "Objectifs", show: Boolean(formation.objectives?.length) },
                  { id: "programme", label: "Programme", show: Boolean(formation.program?.length) },
                  { id: "prerequis", label: "Prérequis", show: Boolean(formation.prerequisites?.length) },
                  { id: "infos", label: "Infos", show: true },
                ].filter(x => x.show).map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="px-4 py-2 rounded-full hover:bg-muted hover:text-[var(--primary)] transition-colors block text-foreground">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {formation.objectives?.length && (
              <section id="objectifs" className="scroll-mt-32 bg-card rounded-2xl p-8 border border-border shadow-sm">
                <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 text-foreground">
                  <Target className="h-6 w-6 text-[var(--brand-orange)]" />
                  Objectifs pédagogiques
                </h2>
                <ul className="grid gap-3">
                  {formation.objectives.map((o, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {formation.program?.length && (
              <section id="programme" className="scroll-mt-32 bg-card rounded-2xl p-8 border border-border shadow-sm">
                <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 text-foreground">
                  <BookOpen className="h-6 w-6 text-[var(--brand-orange)]" />
                  Programme de la formation
                </h2>
                <div className="space-y-4">
                  {formation.program.map((p, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background border border-border font-bold text-muted-foreground text-sm">
                        {i + 1}
                      </span>
                      <p className="text-foreground font-medium pt-1">{p}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" /> Télécharger le programme PDF
                  </Button>
                </div>
              </section>
            )}

            <div className="grid md:grid-cols-2 gap-8">
              {formation.prerequisites?.length && (
                <section id="prerequis" className="bg-card rounded-2xl p-6 border border-border shadow-sm scroll-mt-32">
                  <h2 className="flex items-center gap-2 text-lg font-bold mb-4 text-foreground">
                    <FileText className="h-5 w-5 text-[var(--brand-orange)]" />
                    Prérequis
                  </h2>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm">
                    {formation.prerequisites.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </section>
              )}

              {formation.audience && (
                <section className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                  <h2 className="flex items-center gap-2 text-lg font-bold mb-4 text-foreground">
                    <Users className="h-5 w-5 text-[var(--brand-orange)]" />
                    Public visé
                  </h2>
                  <p className="text-muted-foreground text-sm">{formation.audience}</p>
                </section>
              )}
            </div>

            {formation.faqs?.length && (
              <section id="faq" className="scroll-mt-32">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Questions fréquentes</h2>
                <div className="grid gap-4">
                  {formation.faqs.map((f, i) => (
                    <details key={i} className="group bg-card rounded-xl border border-border open:border-[var(--brand-orange)] transition-colors">
                      <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-foreground list-none">
                        {f.q}
                        <span className="transition group-open:rotate-180 text-muted-foreground">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                      </summary>
                      <div className="px-6 pb-6 pt-0 text-muted-foreground text-sm leading-relaxed">
                        {f.a}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

          </main>

          {/* Sidebar Booking Card */}
          <aside className="lg:sticky lg:top-24 lg:h-fit space-y-6">

            {/* Booking Box */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xl shadow-black/5 dark:shadow-black/20">
              <div className="mb-6 pb-6 border-b border-border">
                <div className="text-sm text-muted-foreground mb-1">Tarif de la formation</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[var(--primary)]">
                    {formation.price === "Nous consulter" ? "Sur devis" : formation.price}
                  </span>
                </div>
                {formation.financingNotes && (
                  <div className="mt-2 text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2 py-1 rounded inline-block">
                    Financement possible
                  </div>
                )}
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-muted-foreground/70" />
                  <span>{formation.location || "Centre SM Academy, Nîmes"}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 text-muted-foreground/70" />
                  <span>Prochaines sessions : <span className="text-green-600 font-medium">Nous contacter</span></span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-sm text-foreground">Intéressé(e) ?</h3>
                <p className="text-xs text-muted-foreground mb-3">Remplissez le formulaire pour recevoir le programme détaillé et un devis.</p>
                <ContactForm context={`Page: ${formation.title}`} />
              </div>
            </div>

            {/* Map Box */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
              <MapEmbed query="94 Av. du Dr Fleming Nimes" height={200} />
              <div className="p-4 bg-card text-xs text-muted-foreground flex gap-2 items-center">
                <MapPin className="h-3 w-3" /> 94 Avenue du Docteur Fleming, Nîmes
              </div>
            </div>

            {/* Need Help Box */}
            <div className="rounded-2xl bg-slate-900 p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white/10 rounded-full">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="font-bold">Une question ?</div>
              </div>
              <p className="text-sm text-slate-300 mb-4">
                Nos conseillers sont là pour vous aider dans votre choix.
              </p>
              <div className="flex flex-col gap-1">
                <a href="tel:+33982774444" className="text-lg font-bold hover:text-[var(--brand-orange)] transition-colors">
                  09 82 77 44 44
                </a>
                <a href="tel:+33668997436" className="text-lg font-bold hover:text-[var(--brand-orange)] transition-colors">
                  06 68 99 74 36
                </a>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
