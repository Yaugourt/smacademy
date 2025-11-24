import Link from "next/link";
import type { Metadata } from "next";
import { formations } from "@/data/formations";
import { Button } from "@/components/ui/button";
import MapEmbed from "@/components/site/MapEmbed";
import ContactForm from "@/components/forms/ContactForm";
import Image from "next/image";
import { MapPin, CheckCircle2, ArrowRight, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Centre de formation à Nîmes (Gard) | SM Academy",
  description:
    "SM Academy – centre de formation Qualiopi à Nîmes. Habilitations électriques, AIPR, SST, IRVE, Fibre optique D3, Gestes & Postures, Excel, Formateur. Sessions courtes, finançables OPCO / Entreprise.",
  alternates: { canonical: "/nimes" },
};

export default function NimesPage() {
  const citySlug = (slug: string) => `/formations/${slug}`; // Fixed link structure

  return (
    <div className="flex flex-col min-h-screen">
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

      {/* Hero Section Local */}
      <section className="relative py-16 lg:py-24 bg-slate-50 overflow-hidden">
        <div className="mx-auto w-full max-w-screen-xl px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-blue-100 text-[var(--primary)] px-3 py-1 text-sm font-bold">
                  <MapPin className="h-4 w-4 mr-2" />
                  Nîmes (30)
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-900">
                  Votre Centre de Formation à Nîmes
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Situé au cœur de la zone active de Nîmes, SM Academy vous accueille dans des locaux modernes et équipés pour vos formations techniques et tertiaires.
                  Centre certifié Qualiopi.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button asChild size="lg" className="rounded-full bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-600)]">
                    <Link href="#formations">Voir les formations à Nîmes</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full">
                    <Link href="#contact">Nous contacter</Link>
                  </Button>
                </div>
             </div>
             <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                 <MapEmbed className="h-full w-full" query="94 Av. du Dr Fleming Nimes" height={400} />
                 <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-xl shadow-lg flex items-center gap-4">
                    <div className="bg-[var(--primary)] rounded-full p-3 text-white">
                       <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                       <div className="font-bold text-slate-900">94 Avenue du Docteur Fleming</div>
                       <div className="text-sm text-slate-500">30900 Nîmes (Parking gratuit)</div>
                    </div>
                 </div>
             </div>
          </div>
        </div>
      </section>

      {/* Formations List */}
      <section id="formations" className="py-16 bg-white">
        <div className="mx-auto w-full max-w-screen-xl px-4">
           <div className="text-center max-w-3xl mx-auto mb-12">
             <h2 className="text-3xl font-bold mb-4">Formations disponibles à Nîmes</h2>
             <p className="text-slate-600">
               Tous nos stages se déroulent dans nos locaux nîmois ou peuvent être organisés dans votre entreprise (intra) partout dans le Gard.
               Chaque programme précise les objectifs, le contenu détaillé et les conditions de financement possibles.
             </p>
           </div>

           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {formations.map((f) => (
                <Link key={f.slug} href={citySlug(f.slug)} className="group block">
                  <div className="h-full bg-slate-50 rounded-2xl p-6 border border-slate-100 transition-all hover:shadow-lg hover:bg-white hover:border-[var(--brand-orange)]/30">
                    <div className="flex justify-between items-start mb-4">
                       <div className="p-2 bg-white rounded-lg shadow-sm text-[var(--primary)] group-hover:text-[var(--brand-orange)] transition-colors">
                          <CheckCircle2 className="h-6 w-6" />
                       </div>
                       <span className="text-xs font-medium bg-slate-200 px-2 py-1 rounded text-slate-600">Nîmes</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[var(--primary)] transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-3 mb-4">
                      {f.summary}
                    </p>
                    <div className="flex items-center text-sm font-bold text-[var(--brand-orange)]">
                      Voir le programme <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* Gallery / Center Info */}
      <section className="py-16 bg-slate-900 text-white">
         <div className="mx-auto w-full max-w-screen-xl px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="grid grid-cols-2 gap-4">
                  <div className="h-48 rounded-xl bg-slate-800 overflow-hidden relative">
                     <Image src="https://smacademy.fr/wp-content/uploads/2024/08/technicien-1-1.jpg" alt="Plateau technique" fill className="object-cover opacity-80 hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="h-48 rounded-xl bg-slate-800 overflow-hidden relative mt-8">
                     <Image src="https://smacademy.fr/wp-content/uploads/2024/08/irvee.jpg" alt="Salle de formation" fill className="object-cover opacity-80 hover:opacity-100 transition-opacity" />
                  </div>
               </div>
               <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Un plateau technique de qualité</h2>
                  <p className="text-slate-300 text-lg">
                    Pour garantir la qualité de nos formations pratiques (Fibre Optique, IRVE, SST), nous disposons d'équipements pédagogiques récents et conformes aux référentiels.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[var(--brand-orange)]" />
                      <span>Salles climatisées et équipées</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[var(--brand-orange)]" />
                      <span>Matériel technique individuel</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[var(--brand-orange)]" />
                      <span>Parking gratuit et facile d'accès</span>
                    </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* Contact Local */}
      <section id="contact" className="py-16 bg-white">
         <div className="mx-auto w-full max-w-screen-xl px-4 max-w-4xl">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
               <div className="text-center mb-8">
                 <h2 className="text-3xl font-bold mb-2">Nous rendre visite</h2>
                 <p className="text-slate-600">
                   Vous souhaitez visiter nos locaux ou discuter de votre projet de formation ? Prenez rendez-vous.
                 </p>
               </div>
               <ContactForm context="Page Nîmes" />
            </div>
         </div>
      </section>
    </div>
  );
}
