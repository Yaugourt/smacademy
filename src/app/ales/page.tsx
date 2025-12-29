import Link from "next/link";
import type { Metadata } from "next";
import { formations } from "@/data/formations";
import { Button } from "@/components/ui/button";
import MapEmbed from "@/components/site/MapEmbed";
import ContactForm from "@/components/forms/ContactForm";
import Image from "next/image";
import { MapPin, CheckCircle2, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "Formation professionnelle à Alès (Gard) | SST, IRVE, Fibre | SM Academy",
    description:
        "Formations professionnelles à Alès et Nord Gard : SST, IRVE, Fibre optique D3, AIPR, Gestes & Postures. Centre Qualiopi basé à Nîmes, intervention sur Alès et Cévennes. Financement OPCO et France Travail.",
    keywords: [
        "formation Alès",
        "formation SST Alès",
        "formation IRVE Alès Gard",
        "formation fibre optique Alès",
        "centre de formation Cévennes",
        "formation professionnelle Nord Gard",
    ],
    alternates: { canonical: "/ales" },
};

export default function AlesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: "SM Academy - Formations Alès",
                        url: "https://smacademy.fr/ales",
                        telephone: "+33982774444",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Alès",
                            addressRegion: "Occitanie",
                            postalCode: "30100",
                            addressCountry: "FR",
                        },
                        areaServed: [
                            { "@type": "City", name: "Alès" },
                            { "@type": "City", name: "La Grand-Combe" },
                            { "@type": "City", name: "Saint-Ambroix" },
                            { "@type": "City", name: "Bessèges" },
                            { "@type": "AdministrativeArea", name: "Cévennes" },
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
            <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
                <div className="mx-auto w-full max-w-screen-xl px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center rounded-full bg-[var(--brand-orange)]/20 text-[var(--brand-orange)] px-4 py-2 text-sm font-bold">
                                <MapPin className="h-4 w-4 mr-2" />
                                Alès et Nord Gard
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                Formations professionnelles à <span className="text-[var(--brand-orange)]">Alès</span>
                            </h1>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                SM Academy intervient à <strong>Alès</strong> et dans tout le <strong>Nord du Gard</strong> (Cévennes, La Grand-Combe, Saint-Ambroix, Bessèges)
                                pour vos formations techniques et réglementaires. Sessions intra dans vos locaux ou inter à Nîmes.
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                                    <span>Centre certifié Qualiopi</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                                    <span>Intervention sur site</span>
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
                                <ul className="space-y-3 text-slate-300">
                                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--brand-orange)]" /> Alès et agglomération</li>
                                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--brand-orange)]" /> La Grand-Combe</li>
                                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--brand-orange)]" /> Saint-Ambroix</li>
                                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--brand-orange)]" /> Bessèges</li>
                                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--brand-orange)]" /> Génolhac</li>
                                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--brand-orange)]" /> Toutes les Cévennes gardoises</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Formations */}
            <section id="formations" className="py-16 bg-background">
                <div className="mx-auto w-full max-w-screen-xl px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-foreground">Formations disponibles à Alès</h2>
                        <p className="text-muted-foreground">
                            Toutes nos formations peuvent être organisées en <strong>intra</strong> directement dans vos locaux à Alès
                            ou en <strong>inter-entreprises</strong> dans notre centre de Nîmes (30 min en voiture).
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
                                        <span className="text-xs font-medium bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] px-2 py-1 rounded">
                                            Alès / Intra
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

            {/* Avantages intra */}
            <section className="py-16 bg-muted/30 border-y">
                <div className="mx-auto w-full max-w-screen-xl px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-foreground">Pourquoi choisir une formation intra à Alès ?</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-foreground">Pas de déplacement</strong>
                                        <p className="text-muted-foreground text-sm">Vos équipes restent sur site, pas de temps perdu en trajet.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-foreground">Formation adaptée</strong>
                                        <p className="text-muted-foreground text-sm">Le formateur s'appuie sur vos équipements et situations de travail réelles.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-foreground">Tarif groupe avantageux</strong>
                                        <p className="text-muted-foreground text-sm">Coût optimisé dès 4-5 stagiaires, financement OPCO possible.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                            <h3 className="font-bold text-xl mb-4 text-foreground">Demander un devis intra Alès</h3>
                            <ContactForm context="Page Alès - Demande intra" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-16 bg-background">
                <div className="mx-auto w-full max-w-screen-xl px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-4 text-foreground">Contactez-nous pour Alès</h2>
                    <p className="text-muted-foreground mb-8">
                        Vous êtes une entreprise ou un particulier basé à Alès ou dans le Nord du Gard ?
                        Contactez-nous pour organiser votre formation.
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
