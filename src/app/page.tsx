import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { formations } from "@/data/formations";
import ContactForm from "@/components/forms/ContactForm";
import MapEmbed from "@/components/site/MapEmbed";
import { Phone, Sparkles, Users, BookOpen, BadgeCheck, Handshake, Coins, Building2, IdCard, Trophy, Cable, HeartPulse, Zap, GraduationCap, Dumbbell, FlaskConical, HardHat } from "lucide-react";
import ValuesAccordion from "@/components/sections/Values";
import ReviewsStrip from "@/components/site/ReviewsStrip";

export const metadata = {
  title: "Centre de formation à Nîmes (Qualiopi) | SM Academy",
  description:
    "Formations professionnelles à Nîmes (Gard) : SST, IRVE, Fibre optique D3, Gestes & Postures, Pack Office, Formation de formateur. Sessions courtes, finançables CPF/OPCO.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const featured = formations.slice(0, 6);
  const iconBySlug: Record<string, React.ReactNode> = {
    "fibre-optique-d3": <Cable className="h-4 w-4 text-[var(--brand-orange)]" />,
    sst: <HeartPulse className="h-4 w-4 text-[var(--brand-orange)]" />,
    irve: <Zap className="h-4 w-4 text-[var(--brand-orange)]" />,
    formateur: <GraduationCap className="h-4 w-4 text-[var(--brand-orange)]" />,
    "gestes-et-postures": <Dumbbell className="h-4 w-4 text-[var(--brand-orange)]" />,
    "pack-office": <FlaskConical className="h-4 w-4 text-[var(--brand-orange)]" />,
  };
  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 py-12 sm:py-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border bg-gradient-to-b from-[oklch(0.98_0_0)] to-secondary/60 p-6 sm:p-8">
        <div className="pointer-events-none absolute inset-0 opacity-20" style={{backgroundImage:"radial-gradient(1200px 600px at 0% -20%, var(--primary)/.25 0%, transparent 60%), radial-gradient(1200px 600px at 100% 0%, var(--brand-orange)/.25 0%, transparent 60%)"}} />
        <div className="relative grid gap-6 pt-4 md:grid-cols-2">
          <div className="flex flex-col items-start gap-5">
            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
                <BadgeCheck className="h-3.5 w-3.5" /> Qualiopi
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
                Formation Nîmes (Gard)
              </div>
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              SM ACADEMY
              <span className="block text-foreground/70">Centre de formation Qualiopi à Nîmes (Gard)</span>
            </h1>
            <p className="max-w-2xl text-lg text-foreground">
              Formations professionnelles courtes (SST, IRVE, Fibre D3, Gestes &amp; Postures, Excel, Formateur) à Nîmes. Sessions finançables via CPF/OPCO – accompagnement dossier inclus.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full" variant="default">
                <Link href="/formations">Voir les formations</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-[var(--brand-orange)] text-[var(--brand-orange)] hover:bg-[var(--brand-orange)] hover:text-white"
              >
                <Link href="#contact">Être rappelé</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-[var(--brand-orange)] text-[var(--brand-orange)] hover:bg-[var(--brand-orange)] hover:text-white">
                <a href="tel:+33982774444"><Phone className="mr-1 h-4 w-4" /> Nous appeler</a>
              </Button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2 text-sm">
              <Link href="/formations/sst" className="rounded-full border px-3 py-1 text-foreground/80 hover:bg-secondary hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)]">Formation SST</Link>
              <Link href="/formations/irve" className="rounded-full border px-3 py-1 text-foreground/80 hover:bg-secondary hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)]">Formation IRVE (Nîmes)</Link>
              <Link href="/formations/formateur" className="rounded-full border px-3 py-1 text-foreground/80 hover:bg-secondary hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)]">Formation de formateur</Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-40 w-full overflow-hidden rounded-lg border sm:h-48">
                <Image
                  src="https://smacademy.fr/wp-content/uploads/2024/08/IMG_1325-e1740574444704.png"
                  alt="Formation SST"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative h-40 w-full overflow-hidden rounded-lg border sm:h-48">
                <Image
                  src="https://smacademy.fr/wp-content/uploads/2025/02/IMG_3091-scaled-e1740573209118.jpg"
                  alt="Formation IRVE"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative h-32 w-full overflow-hidden rounded-lg border sm:h-40">
                <Image
                  src="https://smacademy.fr/wp-content/uploads/2024/08/technicien-1-1.jpg"
                  alt="Fibre optique D3"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 w-full overflow-hidden rounded-lg border sm:h-40">
                <Image
                  src="https://smacademy.fr/wp-content/uploads/2024/08/IMG_0212-1024x768.jpg"
                  alt="Formation de formateur"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avis Google (solution maison SSR) */}
      <section className="mt-8">
        <ReviewsStrip />
      </section>

      {/* Formations highlights */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight">Nos formations à Nîmes (Gard)</h2>
        <p className="mt-1 text-sm text-foreground">Des parcours courts et professionnalisants, adaptés à vos besoins.</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((f) => (
            <div key={f.slug} className="group rounded-xl border p-5 transition-all hover:shadow-md hover:border-[var(--brand-orange)]">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold inline-flex items-center gap-2">
                  {iconBySlug[f.slug] || <HardHat className="h-4 w-4 text-[var(--brand-orange)]" />}{f.title}
                </h3>
                <span className="text-xs text-muted-foreground">{f.city}</span>
              </div>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{f.summary}</p>
              <div className="mt-4">
                <Link href={`/formations/${f.slug}`} className="text-sm font-medium text-[var(--brand-orange)] underline-offset-4 hover:underline">
                  En savoir plus
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Qui sommes-nous */}
      <section className="mt-16 grid gap-8 rounded-2xl border bg-primary/5 p-6 md:grid-cols-2 sm:p-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Qui sommes-nous ?</h2>
          <p className="mt-3 text-sm text-foreground">
            SM Academy – Centre de formation basé à Nîmes dans le Gard. SM Academy est un organisme de formation certifié Qualiopi, reconnu pour son excellence dans l’enseignement et l’accompagnement professionnel. Nos formations sont animées par un formateur expérimenté, diplômé et certifié, garantissant une pédagogie de qualité.
          </p>
          <p className="mt-3 text-sm text-foreground">
            Nous proposons une gamme variée de formations: Gestes et Postures, Sauveteur Secouriste du Travail (SST), Installation et Raccordement Fibre Optique, Infrastructure de Recharge de Véhicule Électrique (IRVE), Pack Office, et Formation de Formateur.
          </p>
          <p className="mt-3 text-xs italic text-foreground">
            Formation disponible dans notre centre de formation mais il est également possible d’intervenir dans vos locaux.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold tracking-tight">Nos valeurs</h3>
          <div className="mt-4">
            <ValuesAccordion />
          </div>
        </div>
      </section>

      {/* Vues du centre et des formations (images actuelles) */}
      <section className="mt-12">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative h-40 overflow-hidden rounded-lg border sm:h-48">
            <Image
              src="https://smacademy.fr/wp-content/uploads/2024/08/technicien-1-1.jpg"
              alt="Installation fibre optique"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-40 overflow-hidden rounded-lg border sm:h-48">
            <Image
              src="https://smacademy.fr/wp-content/uploads/2024/08/irvee.jpg"
              alt="IRVE bornes de recharge"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-40 overflow-hidden rounded-lg border sm:h-48">
            <Image
              src="https://smacademy.fr/wp-content/uploads/2024/08/gg.jpg"
              alt="Gestes et postures"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-40 overflow-hidden rounded-lg border sm:h-48">
            <Image
              src="https://smacademy.fr/wp-content/uploads/2024/08/IMG_0212-1024x768.jpg"
              alt="Formation de formateur"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Financements */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">Financements</h2>
        <p className="mt-1 text-sm text-muted-foreground">Plusieurs dispositifs pour financer votre formation.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FinanceCard icon={<IdCard className="h-5 w-5" />} title="France Travail" desc="AIF, POE dans le cadre du PPAE pour demandeurs d’emploi." />
          <FinanceCard icon={<Building2 className="h-5 w-5" />} title="OPCO" desc="Prise en charge des coûts de formation pour les salariés." />
          <FinanceCard icon={<Coins className="h-5 w-5" />} title="Aides régionales" desc="Dispositifs locaux selon votre région." />
          <FinanceCard icon={<BookOpen className="h-5 w-5" />} title="CPF" desc="Mobilisez votre Compte Personnel de Formation." />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-16 rounded-xl border p-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">On vous rappelle</h2>
          <p className="text-sm text-muted-foreground">Lun–Ven 8h–18h. Tél: <a className="font-medium" href="tel:+33982774444">09 82 77 44 44</a> / <a className="font-medium" href="tel:+33767891970">07 67 89 19 70</a> · Email: <a className="font-medium" href="mailto:contact@smtechnologie.fr">contact@smtechnologie.fr</a></p>
        </div>
        <div className="mt-4">
          <ContactForm context="Accueil" />
        </div>
        <MapEmbed className="mt-6" query="94 Av. du Dr Fleming Nimes" height={320} />
      </section>

      {/* Notre équipe */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">Notre équipe</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <TeamCard name="Khalid" role="Président et Formateur" />
          <TeamCard name="Hicham" role="Directeur général" />
          <TeamCard name="Sofiane" role="RRH & Responsable pédagogique" />
        </div>
      </section>
    </div>
  );
}

function Feature({ index, icon, title, desc }: { index?: number; icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-xl border p-4">
      <div className="flex items-center gap-2 text-sm font-semibold">
        {typeof index === "number" ? (
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-foreground/80">{index}</span>
        ) : (
          <span className="rounded-md bg-secondary p-2 text-foreground/80">{icon}</span>
        )}
        <span className="flex items-center gap-2">
          {!index && <span className="rounded-md bg-secondary p-2 text-foreground/80">{icon}</span>}
          {title}
        </span>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">{desc}</p>
    </div>
  );
}

function FinanceCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-xl border p-4">
      <div className="flex items-center gap-2 text-sm font-semibold">
        <span className="rounded-md bg-secondary p-2 text-foreground/80">{icon}</span>
        {title}
      </div>
      <p className="mt-2 text-xs text-muted-foreground">{desc}</p>
    </div>
  );
}

function TeamCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="rounded-xl border p-4">
      <div className="text-sm font-semibold">{name}</div>
      <div className="text-xs text-muted-foreground">{role}</div>
    </div>
  );
}
