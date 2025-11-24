import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { formations } from "@/data/formations";
import ContactForm from "@/components/forms/ContactForm";
import MapEmbed from "@/components/site/MapEmbed";
import {
  Phone,
  Cable,
  HeartPulse,
  Zap,
  GraduationCap,
  Dumbbell,
  FlaskConical,
  CheckCircle2,
  Users,
  Trophy,
  CalendarCheck,
  ArrowRight,
  Star,
  Building2 as LucideBuilding2,
  Handshake as LucideHandshake,
  MapPin,
} from "lucide-react";
import ValuesAccordion from "@/components/sections/Values";
import ReviewsStrip from "@/components/site/ReviewsStrip";

export const metadata = {
  title: "Centre de formation à Nîmes (Qualiopi) | SM Academy",
  description:
    "Formations professionnelles à Nîmes (Gard) : SST, IRVE, Fibre optique D3, Gestes & Postures, Pack Office, Formation de formateur. Sessions courtes, finançables OPCO.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const featured = formations.slice(0, 6);
  const iconBySlug: Record<string, React.ReactNode> = {
    "fibre-optique-d3": <Cable className="h-5 w-5 text-[var(--brand-orange)]" />,
    sst: <HeartPulse className="h-5 w-5 text-[var(--brand-orange)]" />,
    irve: <Zap className="h-5 w-5 text-[var(--brand-orange)]" />,
    "aipr-encadrement-operateur": <HardHat className="h-5 w-5 text-[var(--brand-orange)]" />,
    formateur: <GraduationCap className="h-5 w-5 text-[var(--brand-orange)]" />,
    "gestes-et-postures": <Dumbbell className="h-5 w-5 text-[var(--brand-orange)]" />,
    "pack-office": <FlaskConical className="h-5 w-5 text-[var(--brand-orange)]" />,
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - More Immersive */}
      <section className="relative w-full bg-gradient-to-b from-muted/50 to-background pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="mx-auto w-full max-w-screen-xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border border-[var(--brand-orange)]/30 bg-[var(--brand-orange)]/10 px-3 py-1 text-sm font-medium text-[var(--brand-orange-700)] dark:text-[var(--brand-orange)]">
                  <span className="flex h-2 w-2 rounded-full bg-[var(--brand-orange)] mr-2 animate-pulse"></span>
                  Centre agréé Qualiopi à Nîmes
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none text-foreground">
                  Boostez votre carrière avec nos <span className="text-[var(--primary)]">formations certifiantes</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                  Des formations courtes et opérationnelles : IRVE, habilitations électriques, AIPR, Fibre Optique, SST, et plus.
                  Basés à Nîmes, nous accompagnons les professionnels et les particuliers dans tout le Gard (30).
                  Financez votre avenir via OPCO / France Travail.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-600)] text-white shadow-lg shadow-orange-200 dark:shadow-none text-base px-8 h-12">
                  <Link href="/formations">Découvrir les formations</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-muted-foreground/20 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white text-base px-8 h-12 transition-all">
                  <Link href="#contact">
                    <Phone className="mr-2 h-4 w-4" /> 06 68 99 74 36
                  </Link>
                </Button>
              </div>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground items-center pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Financement OPCO / France Travail</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Certification officielle</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Sessions fréquentes</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image Composition */}
            <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
              <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-background bg-muted">
                 <Image
                  src="https://smacademy.fr/wp-content/uploads/2025/02/IMG_3091-scaled-e1740573209118.jpg"
                  alt="Formation SM Academy"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-border flex items-center gap-4">
                  <div className="bg-[var(--primary)] rounded-full p-3 text-white">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">98% de réussite</div>
                    <div className="text-xs text-muted-foreground">Sur nos certifications techniques</div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-[-20px] right-[-20px] h-[200px] w-[200px] bg-[var(--brand-orange)]/10 rounded-full blur-3xl" />
              <div className="absolute -z-10 bottom-[-20px] left-[-20px] h-[200px] w-[200px] bg-[var(--primary)]/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-muted/30 py-12">
        <div className="mx-auto w-full max-w-screen-xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-[var(--primary)]">500+</div>
              <div className="text-sm font-medium text-muted-foreground">Stagiaires formés</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-[var(--primary)]">98%</div>
              <div className="text-sm font-medium text-muted-foreground">Taux de satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-[var(--primary)]">100%</div>
              <div className="text-sm font-medium text-muted-foreground">Accompagnement dossiers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-[var(--primary)]">30</div>
              <div className="text-sm font-medium text-muted-foreground">Sessions par an</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Strip */}
      <section className="py-12 bg-background">
        <div className="mx-auto w-full max-w-screen-xl px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Ils nous font confiance</h2>
            <div className="flex items-center gap-1">
               {[1, 2, 3, 4, 5].map((i) => (
                 <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
               ))}
            </div>
          </div>
          <ReviewsStrip />
        </div>
      </section>

      {/* Formations Grid - Modern Cards */}
      <section id="formations" className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto w-full max-w-screen-xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Nos formations à la une</h2>
              <p className="text-muted-foreground max-w-2xl">
                Des programmes conçus pour l'emploi, dispensés par des experts terrain.
              </p>
            </div>
            <Button variant="outline" asChild className="hidden md:flex">
              <Link href="/formations">Voir tout le catalogue <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((f) => (
              <div key={f.slug} className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm transition-all hover:shadow-md border border-border hover:border-[var(--brand-orange)]/30">
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  {f.heroImage ? (
                    <Image
                      src={f.heroImage}
                      alt={f.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-muted">
                      {iconBySlug[f.slug]}
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[var(--primary)] shadow-sm">
                    {f.city === "Nîmes (Gard)" ? "Nîmes" : f.city}
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-center gap-2 text-xs font-medium text-[var(--brand-orange)]">
                    {iconBySlug[f.slug]}
                    <span>{f.tags?.[0] || "Formation Pro"}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-foreground line-clamp-2 group-hover:text-[var(--primary)] transition-colors">
                    {f.title}
                  </h3>
                  <p className="mb-6 text-sm text-muted-foreground line-clamp-3 flex-1">
                    {f.summary}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                     <div className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                       <CalendarCheck className="h-3.5 w-3.5" /> Sessions fréquentes
                     </div>
                     <Link href={`/formations/${f.slug}`} className="text-sm font-semibold text-[var(--primary)] flex items-center gap-1 hover:text-[var(--brand-orange)] transition-colors">
                       Voir le programme <ArrowRight className="h-3.5 w-3.5" />
                     </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Button variant="outline" asChild className="w-full">
              <Link href="/formations">Voir tout le catalogue <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Publics & Financement */}
      <section className="py-16 lg:py-20 bg-background border-y">
        <div className="mx-auto w-full max-w-screen-xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            {/* À qui s'adressent nos formations ? */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  Pour qui ?
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground">
                  À qui s&apos;adressent nos formations ?
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Nos parcours sont pensés pour des profils variés, du salarié en poste au demandeur d&apos;emploi qui prépare
                  une reconversion, en passant par les indépendants et les entreprises qui veulent faire monter leurs équipes
                  en compétences.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-4">
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                    Salariés
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Développer vos compétences, sécuriser votre poste ou préparer une évolution de fonction avec des
                    formations courtes et opérationnelles.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-4">
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                    Demandeurs d&apos;emploi
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Acquérir une compétence recherchée (IRVE, Fibre, SST…) pour accélérer votre retour à l&apos;emploi
                    avec l&apos;aide de France Travail et des partenaires.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-4">
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                    Entreprises
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Mettre vos équipes à niveau sur les référentiels réglementaires et techniques, organiser des sessions
                    dédiées (intra) et sécuriser vos interventions.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-4">
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                    Indépendants / artisans
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Structurer votre activité avec des certifications reconnues et des habilitations à jour pour répondre
                    aux exigences de vos clients et donneurs d&apos;ordre.
                  </p>
                </div>
              </div>
            </div>

            {/* Comment financer sa formation ? */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="inline-flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium text-[var(--primary)]">
                  Financement
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground">
                  Comment financer votre formation ?
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  En fonction de votre situation, plusieurs dispositifs peuvent prendre en charge tout ou partie du coût
                  de la formation. Nous vous accompagnons pour trouver la solution la plus adaptée.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] text-xs font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-foreground">
                      OPCO – salariés
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Prise en charge possible via l&apos;OPCO de votre entreprise pour les formations liées à votre poste
                      ou à l&apos;évolution de vos missions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] text-xs font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-foreground">
                      France Travail – demandeurs d&apos;emploi
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Selon votre projet de retour à l&apos;emploi, des aides peuvent être mobilisées pour financer une
                      formation qualifiante ou certifiante.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] text-xs font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-foreground">
                      Financement entreprise / individuel
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      L&apos;entreprise ou le stagiaire peut aussi financer directement la formation pour gagner en
                      réactivité sur certains besoins urgents.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild variant="outline" size="sm" className="rounded-full">
                  <Link href="/formations">
                    Voir le catalogue complet
                  </Link>
                </Button>
                <Button asChild size="sm" className="rounded-full bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-600)] text-white">
                  <Link href="#contact">
                    Parler à un conseiller
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Features */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-screen-xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 mt-8">
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
                      <Image src="https://smacademy.fr/wp-content/uploads/2024/08/IMG_1326.jpg" width={400} height={500} alt="Formation technique" className="w-full h-auto object-cover" />
                    </div>
                    <div className="bg-[var(--primary)] p-6 rounded-2xl text-white text-center">
                      <div className="text-3xl font-bold mb-1">OPCO</div>
                      <div className="text-sm opacity-90">Prise en charge entreprise</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                     <div className="bg-muted p-6 rounded-2xl text-center border border-border">
                      <div className="text-3xl font-bold mb-1 text-[var(--brand-orange)]">100%</div>
                      <div className="text-sm text-muted-foreground">Accompagnement administratif</div>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
                      <Image src="https://smacademy.fr/wp-content/uploads/2024/08/IMG_1325-e1740574444704.png" width={400} height={500} alt="Formation IRVE" className="w-full h-auto object-cover" />
                    </div>
                  </div>
               </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-sm font-medium text-[var(--primary)]">
                   Pourquoi nous choisir ?
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  L'excellence de la formation professionnelle à Nîmes
                </h2>
                <p className="text-muted-foreground text-lg">
                  SM Academy est bien plus qu'un centre de formation. Nous sommes votre partenaire pour l'évolution de vos compétences et de votre carrière.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-[var(--brand-orange)] dark:bg-orange-900/30">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Formateurs Experts</h3>
                    <p className="text-muted-foreground">Tous nos formateurs sont des professionnels certifiés avec une solide expérience terrain.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-[var(--primary)] dark:bg-blue-900/30">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Certifié Qualiopi</h3>
                    <p className="text-muted-foreground">Un gage de qualité qui rend nos formations éligibles aux financements publics et mutualisés.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 dark:bg-green-900/30">
                    <Handshake className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Accompagnement Personnalisé</h3>
                    <p className="text-muted-foreground">Du montage de votre dossier de financement jusqu'à la remise de votre certification.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="py-16 lg:py-24 bg-[var(--primary)] text-white">
        <div className="mx-auto w-full max-w-screen-xl px-4">
           <div className="grid lg:grid-cols-2 gap-12">
             <div className="space-y-8">
               <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Prêt à lancer votre projet ?</h2>
               <p className="text-white/80 text-lg max-w-md">
                 Remplissez le formulaire, nous vous rappelons dans la journée pour étudier votre besoin et vos possibilités de financement.
               </p>
               
               <div className="space-y-6 pt-4">
                 <div className="flex items-center gap-4">
                   <div className="bg-white/10 p-3 rounded-full">
                     <Phone className="h-6 w-6" />
                   </div>
                   <div className="flex flex-col">
                     <div className="text-sm text-white/60">Par téléphone</div>
                     <a href="tel:+33982774444" className="text-xl font-bold hover:text-[var(--brand-orange)] transition-colors">09 82 77 44 44</a>
                     <a href="tel:+33668997436" className="text-lg font-bold hover:text-[var(--brand-orange)] transition-colors">06 68 99 74 36</a>
                   </div>
                 </div>
                 
                 <div className="flex items-center gap-4">
                   <div className="bg-white/10 p-3 rounded-full">
                     <MapPin className="h-6 w-6" />
                   </div>
                   <div>
                     <div className="text-sm text-white/60">Notre centre</div>
                     <div className="font-medium">94 Avenue du Docteur Fleming<br/>30900 Nîmes</div>
                   </div>
                 </div>
               </div>
             </div>
             
             <div className="bg-background text-foreground rounded-2xl p-6 shadow-2xl">
               <h3 className="text-xl font-bold mb-6">Demande de rappel gratuite</h3>
               <ContactForm context="Accueil-New" />
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}

function Handshake(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-1.42-1.42l.88-.89a5 5 0 0 1 7.07 0l3.89 3.89a3 3 0 0 1 0 4.24l-2.5 2.5a3 3 0 0 1-4.24 0l-2-2" />
      <path d="m5.85 11.15 2.5 2.5a1 1 0 1 0 3-3" />
      <path d="m11 11-3.88 3.88a3 3 0 0 1-4.24 0l-.88-.88a1 1 0 1 1 1.42-1.42l.88.89a5 5 0 0 0 7.07 0l2-2" />
    </svg>
  )
}

function Building2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  )
}
