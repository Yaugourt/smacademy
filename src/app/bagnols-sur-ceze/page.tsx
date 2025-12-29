import Link from "next/link";
import type { Metadata } from "next";
import { formations } from "@/data/formations";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/forms/ContactForm";
import { MapPin, CheckCircle2, ArrowRight, Phone, Building2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Formation professionnelle à Bagnols-sur-Cèze (Gard) | SST, IRVE, Fibre | SM Academy",
    description:
        "Formations professionnelles à Bagnols-sur-Cèze et Sud Ardèche : SST, IRVE, Fibre optique D3, AIPR, Gestes & Postures. Centre Qualiopi. Intervention sur Pont-Saint-Esprit, Laudun, Roquemaure. Financement OPCO.",
    keywords: [
        "formation Bagnols-sur-Cèze",
        "formation SST Bagnols",
        "formation IRVE Bagnols Gard",
        "formation fibre optique Bagnols-sur-Cèze",
        "centre de formation Pont-Saint-Esprit",
        "formation professionnelle Nord Gard",
        "formation Laudun",
    ],
    alternates: { canonical: "/bagnols-sur-ceze" },
};

export default function BagnolsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: "SM Academy - Formations Bagnols-sur-Cèze",
                        url: "https://smacademy.fr/bagnols-sur-ceze",
                        telephone: "+33982774444",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Bagnols-sur-Cèze",
                            addressRegion: "Occitanie",
                            postalCode: "30200",
                            addressCountry: "FR",
                        },
                        areaServed: [
                            { "@type": "City", name: "Bagnols-sur-Cèze" },
                            { "@type": "City", name: "Pont-Saint-Esprit" },
                            { "@type": "City", name: "Laudun-l'Ardoise" },
                            { "@type": "City", name: "Roquemaure" },
                            { "@type": "City", name: "Villeneuve-lès-Avignon" },
                        ],
                        parentOrganization: {
                            "@type": "EducationalOrganization",
                            name: "SM Academy",
                            url: "https://smacademy.fr",
                        },
                    }),
                }}
            />

            {/* Hero Section */}
            <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white overflow-hidden">
                <div className="mx-auto w-full max-w-screen-xl px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center rounded-full bg-[var(--brand-orange)]/20 text-[var(--brand-orange)] px-4 py-2 text-sm font-bold">
                                <MapPin className="h-4 w-4 mr-2" />
                                Bagnols-sur-Cèze et environs
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                Formations professionnelles à <span className="text-[var(--brand-orange)]">Bagnols-sur-Cèze</span>
                            </h1>
                            <p className="text-lg text-blue-100 leading-relaxed">
                                SM Academy propose ses formations à <strong>Bagnols-sur-Cèze</strong> et dans le <strong>Nord-Est du Gard</strong> :
                                Pont-Saint-Esprit, Laudun-l'Ardoise, Roquemaure, jusqu'à Villeneuve-lès-Avignon.
                                Sessions intra chez vous ou inter à Nîmes.
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                                    <span>Centre certifié Qualiopi</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                                    <Building2 className="h-4 w-4 text-blue-300" />
                                    <span>Zone industrielle Marcoule</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4 pt-2">
                                <Button asChild size="lg" className="rounded-full bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-600)]">
                                    <Link href="#formations">Voir les formations</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="rounded-full border-white/30 text-white hover:bg-white/10">
                                    <a href="tel:+33982774444">
                                        <Phone className="mr-2 h-4 w-4" /> 09 82 77 44 44
                                    </a>
                                </Button>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                <h3 className="font-bold text-xl mb-4">Zones d'intervention</h3>
                                <ul className="space-y-3 text-blue-100">
                                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--brand-orange)]" /> Bagnols-sur-Cèze</li>
                                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--brand-orange)]" /> Pont-Saint-Esprit</li>
                                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--brand-orange)]" /> Laudun-l'Ardoise</li>
                                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--brand-orange)]" /> Roquemaure</li>
                                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--brand-orange)]" /> Villeneuve-lès-Avignon</li>
                                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--brand-orange)]" /> Zone Marcoule / CEA</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Secteur industriel */}
            <section className="py-12 bg-muted/50 border-b">
                <div className="mx-auto w-full max-w-screen-xl px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Formations pour le secteur industriel</h2>
                        <p className="text-muted-foreground">
                            La zone de Bagnols-sur-Cèze accueille de nombreuses entreprises industrielles (site de Marcoule, sous-traitants nucléaires,
                            entreprises de maintenance). Nos formations SST, habilitations et IRVE répondent aux exigences réglementaires de ces secteurs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Formations */}
            <section id="formations" className="py-16 bg-background">
                <div className="mx-auto w-full max-w-screen-xl px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-foreground">Formations disponibles à Bagnols-sur-Cèze</h2>
                        <p className="text-muted-foreground">
                            Sessions <strong>intra</strong> dans vos locaux ou <strong>inter-entreprises</strong> à Nîmes (40 min).
                            Toutes les formations sont éligibles au financement OPCO.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {formations.map((f) => (
                            <Link key={f.slug} href={`/formations/${f.slug}`} className="group block">
                                <div className="h-full bg-card rounded-2xl p-6 border border-border transition-all hover:shadow-lg hover:border-[var(--brand-orange)]/30">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-2 bg-muted rounded-lg text-[var(--primary)] group-hover:text-[var(--brand-orange)] transition-colors">
                                            <CheckCircle2 className="h-6 w-6" />
                                        </div>
                                        <span className="text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-2 py-1 rounded">
                                            Bagnols / Intra
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[var(--primary)] transition-colors">
                                        {f.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
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

            {/* Avantages */}
            <section className="py-16 bg-muted/30 border-y">
                <div className="mx-auto w-full max-w-screen-xl px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-foreground">Formation intra à Bagnols-sur-Cèze</h2>
                            <p className="text-muted-foreground">
                                Pour les entreprises de la zone Bagnols / Pont-Saint-Esprit, nous organisons des formations
                                directement dans vos locaux. Idéal pour les équipes de maintenance, les sous-traitants
                                industriels et les entreprises du BTP.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-foreground">Formation sur vos équipements</strong>
                                        <p className="text-muted-foreground text-sm">Mises en situation sur votre matériel réel.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-foreground">Flexibilité horaire</strong>
                                        <p className="text-muted-foreground text-sm">Adaptation aux contraintes de production.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-foreground">Prise en charge OPCO</strong>
                                        <p className="text-muted-foreground text-sm">Accompagnement complet sur le dossier de financement.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                            <h3 className="font-bold text-xl mb-4 text-foreground">Demander un devis intra Bagnols</h3>
                            <ContactForm context="Page Bagnols-sur-Cèze - Demande intra" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-16 bg-background">
                <div className="mx-auto w-full max-w-screen-xl px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-4 text-foreground">Contactez-nous pour Bagnols-sur-Cèze</h2>
                    <p className="text-muted-foreground mb-8">
                        Entreprise ou particulier dans la zone Bagnols / Pont-Saint-Esprit ?
                        Nos conseillers sont à votre disposition.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="rounded-full bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-600)]">
                            <a href="tel:+33982774444">09 82 77 44 44</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="rounded-full">
                            <a href="tel:+33668997436">06 68 99 74 36</a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
