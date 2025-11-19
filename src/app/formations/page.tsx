import Link from "next/link";
import Image from "next/image";
import { formations } from "@/data/formations";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/forms/ContactForm";
import { 
  Cable, 
  HeartPulse, 
  Zap, 
  GraduationCap, 
  Dumbbell, 
  FlaskConical, 
  HardHat, 
  CheckCircle2, 
  Clock, 
  MapPin,
  ArrowRight,
  Filter
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Catalogue des formations à Nîmes (Gard) | SM Academy",
  description:
    "Découvrez nos formations professionnelles à Nîmes : SST, IRVE, Fibre optique, et plus. Centre Qualiopi, financements OPCO et Entreprise acceptés.",
  alternates: {
    canonical: "/formations",
  },
};

export default function FormationsPage() {
  const iconBySlug: Record<string, React.ReactNode> = {
    "fibre-optique-d3": <Cable className="h-5 w-5" />,
    sst: <HeartPulse className="h-5 w-5" />,
    irve: <Zap className="h-5 w-5" />,
    formateur: <GraduationCap className="h-5 w-5" />,
    "gestes-et-postures": <Dumbbell className="h-5 w-5" />,
    "pack-office": <FlaskConical className="h-5 w-5" />,
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: formations.map((f, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              url: `https://smacademy.fr/formations/${f.slug}`,
              name: f.title,
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-[var(--primary)] text-white overflow-hidden">
        <div className="absolute inset-0">
           <Image
             src="https://smacademy.fr/wp-content/uploads/2024/08/FullSizeR1-1.jpg" 
             alt="Formations SM Academy"
             fill
             className="object-cover opacity-10 mix-blend-overlay"
             priority
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--primary)]/90 to-[var(--primary)]/80" />
        </div>

        <div className="mx-auto w-full max-w-screen-xl px-4 py-16 md:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="max-w-3xl">
                <div className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-3 py-1 text-sm font-medium text-white mb-6 backdrop-blur-sm">
                   <span className="flex h-2 w-2 rounded-full bg-[var(--brand-orange)] mr-2 animate-pulse"></span>
                   Centre certifié Qualiopi
                </div>
               <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                 Toutes nos formations professionnelles
               </h1>
            <p className="text-xl text-blue-100 max-w-2xl mb-8 leading-relaxed">
              Développez vos compétences avec nos parcours courts et certifiants à Nîmes. 
              Éligibles OPCO et France Travail.
            </p>
            <div className="flex flex-wrap gap-4">
               <div className="flex items-center gap-2 text-sm font-medium bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                 <CheckCircle2 className="h-4 w-4 text-[var(--brand-orange)]" />
                 <span>Financement garanti</span>
               </div>
                  <div className="flex items-center gap-2 text-sm font-medium bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-orange)]" />
                    <span>Formateurs experts</span>
                  </div>
               </div>
             </div>
             
             <div className="hidden lg:grid grid-cols-2 gap-4 opacity-80">
                <div className="space-y-4 mt-12">
                   <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg transform rotate-[-2deg] border-2 border-white/20">
                     <Image src="https://smacademy.fr/wp-content/uploads/2024/08/IMG_1324.png" alt="Formation IRVE" fill className="object-cover" />
                   </div>
                   <div className="relative h-32 rounded-2xl overflow-hidden shadow-lg transform rotate-[1deg] translate-x-4 border-2 border-white/20">
                     <Image src="https://smacademy.fr/wp-content/uploads/2024/08/IMG_0212-scaled.jpg" alt="Formation Gestes et Postures" fill className="object-cover" />
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="relative h-32 rounded-2xl overflow-hidden shadow-lg transform rotate-[3deg] translate-y-4 border-2 border-white/20">
                     <Image src="https://smacademy.fr/wp-content/uploads/2024/08/IMG_1326.jpg" alt="Formation Formateur" fill className="object-cover" />
                   </div>
                   <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg transform rotate-[-1deg] border-2 border-white/20">
                     <Image src="https://smacademy.fr/wp-content/uploads/2024/08/IMG_1325-e1740574444704.png" alt="Formation Fibre" fill className="object-cover" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="mx-auto w-full max-w-screen-xl px-4 py-12 -mt-8">
        <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-start">
          
          {/* Main Column: Formations List */}
          <div className="space-y-6">
             <div className="flex items-center justify-between mb-6">
               <h2 className="text-2xl font-bold text-foreground">Catalogue {new Date().getFullYear()}</h2>
               <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
                 <Filter className="h-4 w-4" />
                 <span>{formations.length} formations disponibles</span>
               </div>
             </div>

             <div className="grid gap-6">
               {formations.map((f) => (
                 <FormationCard key={f.slug} formation={f} icon={iconBySlug[f.slug]} />
               ))}
             </div>
          </div>

          {/* Sidebar: Quick Contact & Infos */}
          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className="bg-card rounded-xl border border-border shadow-sm p-6">
              <h3 className="text-lg font-bold mb-4 text-foreground">Besoin d'aide ?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Nos conseillers sont disponibles pour vous orienter vers la bonne formation et monter votre dossier.
              </p>
              <div className="space-y-4">
                <Button asChild className="w-full bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-600)] text-white">
                  <a href="tel:+33668997436">06 68 99 74 36</a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="#contact">Être rappelé</a>
                </Button>
              </div>
            </div>

            <div className="bg-[var(--primary)] text-white rounded-xl p-6 shadow-lg">
               <h3 className="font-bold mb-2">Financement Formation</h3>
               <p className="text-sm text-blue-100 mb-4">
                 Nos formations sont éligibles aux financements OPCO, France Travail et Entreprise.
               </p>
               <div className="text-xs font-mono bg-black/20 p-2 rounded text-center">
                 Code: QUALIOPI-SM
               </div>
            </div>
          </aside>

        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-background border-t">
        <div className="mx-auto w-full max-w-screen-xl px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Un projet de formation ?</h2>
            <p className="text-muted-foreground">
              Laissez-nous vos coordonnées, un conseiller pédagogique vous rappelle sous 24h.
            </p>
          </div>
          <div className="bg-muted/30 p-6 md:p-8 rounded-2xl border border-border">
             <ContactForm context="Page Formations" />
          </div>
        </div>
      </section>
    </div>
  );
}

function FormationCard({ formation, icon }: { formation: any; icon: React.ReactNode }) {
  return (
    <div className="group flex flex-col md:flex-row bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all hover:border-[var(--brand-orange)]/30">
      {/* Image */}
      <div className="relative w-full md:w-72 h-56 md:h-auto flex-shrink-0 overflow-hidden">
         {formation.heroImage ? (
            <Image
              src={formation.heroImage}
              alt={formation.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 300px"
            />
         ) : (
           <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
             <HardHat className="h-12 w-12" />
           </div>
         )}
         <div className="absolute top-3 left-3">
           <Badge className="bg-background/90 text-foreground hover:bg-background backdrop-blur-sm shadow-sm">
             {formation.city}
           </Badge>
         </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2 text-sm font-medium text-[var(--brand-orange)]">
            {icon || <HardHat className="h-4 w-4" />}
            <span>{formation.tags?.[0] || "Formation"}</span>
          </div>
          {formation.duration && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
              <Clock className="h-3 w-3" /> {formation.duration}
            </div>
          )}
        </div>

        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[var(--primary)] transition-colors">
          {formation.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">
          {formation.summary}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
           <div className="flex flex-col gap-1">
             {formation.price && (
                <span className="text-xs font-medium text-muted-foreground">
                   {formation.price === "Nous consulter" ? "Sur devis" : formation.price}
                </span>
             )}
             <span className="text-xs text-green-600 flex items-center gap-1">
               <CheckCircle2 className="h-3 w-3" /> Financement possible
             </span>
           </div>
           
           <Button asChild size="sm" className="rounded-full group-hover:translate-x-1 transition-transform">
             <Link href={`/formations/${formation.slug}`}>
               Découvrir <ArrowRight className="ml-2 h-3.5 w-3.5" />
             </Link>
           </Button>
        </div>
      </div>
    </div>
  );
}
