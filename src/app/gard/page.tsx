import type { Metadata } from "next";
import Link from "next/link";
import { formations } from "@/data/formations";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/forms/ContactForm";
import MapEmbed from "@/components/site/MapEmbed";
import { MapPin, CheckCircle2, ArrowRight, Building2, Globe2, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Centre de formation dans le Gard (30) | SM Academy",
  description:
    "SM Academy, centre de formation Qualiopi basé à Nîmes, accompagne les entreprises et stagiaires dans tout le Gard (Alès, Bagnols-sur-Cèze, Beaucaire...). Formations IRVE, habilitations électriques, AIPR, SST, Fibre optique, Gestes & Postures, bureautique et plus.",
  alternates: { canonical: "/gard" },
};

export default function GardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* LocalBusiness / zone desservie Gard */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "SM Academy",
            url: "https://smacademy.fr/gard",
            telephone: "+33982774444",
            address: {
              "@type": "PostalAddress",
              streetAddress: "94 Avenue du Docteur Fleming",
              addressLocality: "Nîmes",
              addressRegion: "Occitanie",
              postalCode: "30900",
              addressCountry: "FR",
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Gard",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 43.837,
              longitude: 4.360,
            },
          }),
        }}
      />

      {/* Hero Gard */}
      <section className="relative py-16 lg:py-24 bg-slate-50 overflow-hidden">
        <div className="mx-auto w-full max-w-screen-xl px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-bold">
                <Globe2 className="h-4 w-4 mr-2" />
                Interventions dans tout le Gard (30)
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                Centre de formation dans le Gard
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Basée à Nîmes, SM Academy forme vos équipes dans tout le Gard&nbsp;: Alès, Bagnols-sur-Cèze, Beaucaire,
                Villeneuve-lès-Avignon, Grau-du-Roi et alentours. Formations techniques, sécurité et tertiaire,
                en inter à Nîmes ou en intra dans vos locaux.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild size="lg" className="rounded-full bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-600)]">
                  <Link href="/formations">Voir le catalogue complet</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link href="#contact">Obtenir un devis pour le Gard</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
              <MapEmbed className="h-[320px] w-full" query="Gard France" height={320} />
              <div className="p-4 flex items-start gap-3 text-sm text-slate-600">
                <div className="p-2 rounded-full bg-emerald-100 text-emerald-700">
                  <Building2 className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    Centre basé à Nîmes – interventions dans tout le Gard
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Formations en inter dans notre centre à Nîmes ou en intra dans vos établissements (sites industriels,
                    agences, commerces, collectivités...).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Villes desservies */}
      <section className="py-14 bg-white border-y">
        <div className="mx-auto w-full max-w-screen-xl px-4">
          <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 items-start">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-slate-900">
                Nous formons vos équipes dans tout le département
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mb-4 max-w-2xl">
                Que vous soyez une PME industrielle, une entreprise de services, une collectivité ou un artisan,
                nous pouvons organiser vos formations dans l&apos;ensemble du Gard. Les principaux bassins d&apos;emploi sont couverts.
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-slate-700 mt-4">
                {[
                  "Nîmes",
                  "Alès",
                  "Bagnols-sur-Cèze",
                  "Beaucaire",
                  "Villeneuve-lès-Avignon",
                  "Le Grau-du-Roi",
                  "Uzès",
                  "Pont-Saint-Esprit",
                  "Vauvert",
                ].map((city) => (
                  <li key={city} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-orange)]" />
                    {city}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Types d&apos;interventions dans le Gard
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" />
                  <span>Sessions inter-entreprises à Nîmes (inscriptions individuelles).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" />
                  <span>Formations intra-entreprise directement sur vos sites dans le Gard.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" />
                  <span>Adaptation des horaires et contenus en fonction de vos contraintes de production.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Domaines de formation */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="mx-auto w-full max-w-screen-xl px-4">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold mb-3">Domaines de formation dans le Gard</h2>
            <p className="text-blue-100 text-sm sm:text-base">
              Nos principaux axes de formation couvrent les besoins réglementaires et opérationnels des entreprises du Gard&nbsp;:
              réseaux électriques, IRVE, fibre optique, sécurité au travail et bureautique.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/70 rounded-2xl p-5 border border-white/10">
              <h3 className="font-semibold mb-2">Électricité &amp; IRVE</h3>
              <ul className="text-sm text-blue-100 space-y-1">
                <li>Habilitation électrique (H0 / B0 / BS / BE / B1 / B2 / BC)</li>
                <li>IRVE – installation de bornes de recharge</li>
                <li>Mise en conformité des installations</li>
              </ul>
            </div>
            <div className="bg-slate-800/70 rounded-2xl p-5 border border-white/10">
              <h3 className="font-semibold mb-2">Fibre &amp; réseaux</h3>
              <ul className="text-sm text-blue-100 space-y-1">
                <li>Fibre optique D3 – raccordement abonné</li>
                <li>Travaux sur réseaux cuivre / fibre</li>
                <li>Interventions terrain et qualité de service</li>
              </ul>
            </div>
            <div className="bg-slate-800/70 rounded-2xl p-5 border border-white/10">
              <h3 className="font-semibold mb-2">Prévention &amp; tertiaire</h3>
              <ul className="text-sm text-blue-100 space-y-1">
                <li>Sauveteur Secouriste du Travail (SST)</li>
                <li>Gestes &amp; Postures / prévention TMS</li>
                <li>Pack Office / bureautique</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rappel formations + CTA */}
      <section className="py-16 bg-background" id="formations">
        <div className="mx-auto w-full max-w-screen-xl px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Quelques formations phares</h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
                Une sélection de formations parmi notre catalogue, toutes réalisables pour des entreprises basées dans le Gard.
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/formations">
                Voir toutes les formations <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {formations.slice(0, 3).map((f) => (
              <Link
                key={f.slug}
                href={`/formations/${f.slug}`}
                className="group rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-md hover:border-[var(--brand-orange)]/40 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <BadgeLike>{f.city || "Nîmes (Gard)"}</BadgeLike>
                  <span className="text-xs text-muted-foreground">
                    {f.duration || "Durée variable"}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 group-hover:text-[var(--primary)]">
                  {f.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 mb-3">
                  {f.summary}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1 text-green-600">
                    <CheckCircle2 className="h-3 w-3" /> Financement possible
                  </span>
                  <span className="inline-flex items-center gap-1 text-[var(--brand-orange)] font-medium">
                    Détails <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Gard */}
      <section id="contact" className="py-16 bg-slate-50 border-t">
        <div className="mx-auto w-full max-w-screen-xl px-4 max-w-4xl">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 items-start">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-slate-900">
                Discutons de votre projet dans le Gard
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mb-4">
                Décrivez-nous votre besoin (sites concernés, effectifs, contraintes) et nous revenons vers vous
                rapidement avec un calendrier et un devis adapté à votre situation dans le Gard.
              </p>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[var(--brand-orange)]" />
                  <span>
                    Par téléphone&nbsp;:{" "}
                    <a href="tel:+33982774444" className="font-semibold">
                      09 82 77 44 44
                    </a>{" "}
                    /{" "}
                    <a href="tel:+33668997436" className="font-semibold">
                      06 68 99 74 36
                    </a>
                  </span>
                </div>
                <div className="text-xs text-slate-500">
                  Du lundi au vendredi, de 8h à 18h.
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-sm font-semibold mb-4 text-slate-900">
                Être rappelé pour un projet dans le Gard
              </h3>
              <ContactForm context="Page Gard" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BadgeLike({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-[10px] sm:text-xs font-medium text-muted-foreground">
      <MapPin className="h-3 w-3 mr-1" />
      {children}
    </span>
  );
}


