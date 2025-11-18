import Link from "next/link";
import Image from "next/image";
import { formations } from "@/data/formations";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/forms/ContactForm";
import { Cable, HeartPulse, Zap, GraduationCap, Dumbbell, FlaskConical, HardHat } from "lucide-react";

export const metadata = {
  title: "Formations",
  description:
    "Découvrez nos formations: SST, IRVE, Fibre optique D3, Gestes & Postures, Pack Office, Formation de formateur.",
};

export default function FormationsPage() {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 py-12">
      {/* Hero images from current site */}
      <section className="grid gap-3 sm:grid-cols-2">
        <div className="relative h-72 overflow-hidden rounded-xl border sm:h-[420px]">
          <Image
            src="https://smacademy.fr/wp-content/uploads/2025/02/IMG_3091-scaled-e1740573209118.jpg"
            alt="Formation Nîmes"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="relative h-72 overflow-hidden rounded-xl border sm:h-[420px]">
          <Image
            src="https://smacademy.fr/wp-content/uploads/2024/08/IMG_1326-692x1024.jpg"
            alt="Centre de formation Nîmes"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      <h1 className="mt-10 text-3xl font-semibold tracking-tight">Formations</h1>
      <p className="mt-2 text-foreground">Découvrez nos formations à Nîmes (Gard) ou dans vos locaux.</p>
      {/* Above-the-fold conversion: quick stats + CTA */}
      <section className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <KPI label="Taux de satisfaction" value="100%" />
          <KPI label="Taux de réussite" value="100%" />
          <KPI label="Formations effectuées" value="13" />
          <KPI label="Stagiaires formés" value="51" />
        </div>
        <div className="flex items-center gap-3 lg:justify-end">
          <Button asChild variant="outline" className="rounded-full border-[var(--brand-orange)] text-[var(--brand-orange)] hover:bg-[var(--brand-orange)] hover:text-white">
            <a href="#contact">Être rappelé</a>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-[var(--brand-orange)] text-[var(--brand-orange)] hover:bg-[var(--brand-orange)] hover:text-white">
            <a href="tel:+33982774444">Nous appeler</a>
          </Button>
        </div>
      </section>

      {/* Highlighted sections */}
      <section className="mt-10 grid gap-8">
        <FeatureBlock
          image="https://smacademy.fr/wp-content/uploads/2024/08/technicien-1.jpg"
          imageAlt="Formation Fibre optique"
          title="Formation Installation & Maintenance Fibre optique D3"
          bulletsLeft={["Installer", "Raccorder"]}
          bulletsRight={["Contrôler", "Maintenance"]}
          duration="5 jours (35h)"
          cost="999 €"
          programHref="https://smttechnologie.fr/wp-content/uploads/2024/02/Critere-2-Programme-et-contenu.pdf"
          detailsHref="/formations/fibre-optique-d3"
          icon={<Cable className="h-5 w-5 text-[var(--brand-orange)]" />}
        />
        <FeatureBlock
          image="https://smacademy.fr/wp-content/uploads/2025/02/header-sst-1024x782.jpg"
          imageAlt="Formation SST"
          title="Formation SST (Sauveteur Secouriste du Travail)"
          bulletsLeft={["Prévention", "Réactivité"]}
          bulletsRight={["Sécurité", "Secours"]}
          duration="2 jours (14h)"
          cost="En cours"
          programHref="https://smttechnologie.fr/wp-content/uploads/2024/02/Critere-2-Programme-et-contenu.pdf"
          reversed
          detailsHref="/formations/sst"
          icon={<HeartPulse className="h-5 w-5 text-[var(--brand-orange)]" />}
        />
        <FeatureBlock
          image="https://smacademy.fr/wp-content/uploads/2025/02/habilitation-electrique.jpg"
          imageAlt="Habilitation électrique"
          title="Habilitation électrique (initiale & recyclage)"
          bulletsLeft={[
            "Basse tension: B0 / B0V / BS / BE / B1 / B1V / B2 / B2V / BC / HC",
          ]}
          bulletsRight={["Manœuvre, non électriciens: H0 / H0V / B0 / B0V / BS / BE"]}
          duration="1 à 3,5 jours (7h à 24,5h)"
          cost="Sur devis"
          icon={<Zap className="h-5 w-5 text-[var(--brand-orange)]" />}
        />
        <FeatureBlock
          image="https://smacademy.fr/wp-content/uploads/2024/08/reforme-formation-professionnelle-apprentissage-2.jpg"
          imageAlt="Formation de formateur"
          title="Formation de formateur pour adultes"
          bulletsLeft={["Créer son organisme", "Cadre réglementaire"]}
          bulletsRight={["Techniques d'animation", "Concevoir une formation"]}
          duration="2 jours (14h)"
          cost="1500 €"
          reversed
          detailsHref="/formations/formateur"
          icon={<GraduationCap className="h-5 w-5 text-[var(--brand-orange)]" />}
        />
        <FeatureBlock
          image="https://smacademy.fr/wp-content/uploads/2024/08/formation-gestes-et-postures-ne-plus-se-faire-de-mal-au-quotidien.webp"
          imageAlt="Gestes & Postures"
          title="Formation Gestes & Postures"
          bulletsLeft={["Santé", "Sécurité"]}
          bulletsRight={["Prévention", "Ergonomie"]}
          duration="1 jour (7h)"
          cost="En cours"
          detailsHref="/formations/gestes-et-postures"
          icon={<Dumbbell className="h-5 w-5 text-[var(--brand-orange)]" />}
        />
        <FeatureBlock
          image="https://smacademy.fr/wp-content/uploads/2025/02/img.jpg"
          imageAlt="Connaissance des produits"
          title="Formation Connaissance des produits"
          bulletsLeft={["Entretien des locaux", "Chimique"]}
          bulletsRight={["Santé", "Sécurité"]}
          duration="4h"
          cost="Sur devis"
          reversed
          icon={<FlaskConical className="h-5 w-5 text-[var(--brand-orange)]" />}
        />
        <FeatureBlock
          image="https://smacademy.fr/wp-content/uploads/2025/02/637cc50279103fc747cff18f_6140a5f3fbeaf1d18962d58e_AIPR.png"
          imageAlt="AIPR"
          title="Autorisation d’Intervention à Proximité des Réseaux (AIPR)"
          bulletsLeft={["Opérateur", "Concepteur"]}
          bulletsRight={["Encadrant"]}
          duration="1 jour (7h) ou 0,5 jour (4h)"
          cost="Sur devis"
          icon={<HardHat className="h-5 w-5 text-[var(--brand-orange)]" />}
        />
      </section>

      

      <section id="contact" className="mt-12 rounded-xl border p-6">
        <h2 className="text-2xl font-semibold">Un conseiller vous rappelle</h2>
        <p className="mt-1 text-sm text-foreground">
          Dites-nous votre besoin, on vous oriente vers la bonne formation.
        </p>
        <div className="mt-4">
          <ContactForm context="Formations – Index" />
        </div>
      </section>
    </div>
  );
}

function FeatureBlock({
  image,
  imageAlt,
  title,
  icon,
  bulletsLeft,
  bulletsRight,
  duration,
  cost,
  programHref,
  detailsHref,
  reversed = false,
}: {
  image: string;
  imageAlt: string;
  title: string;
  icon?: React.ReactNode;
  bulletsLeft: string[];
  bulletsRight: string[];
  duration: string;
  cost: string;
  programHref?: string;
  detailsHref?: string;
  reversed?: boolean;
}) {
  return (
    <div className={`grid items-center gap-6 md:grid-cols-2 ${reversed ? "md:[&>div:first-child]:order-2" : ""}`}>
      <div className="relative h-56 overflow-hidden rounded-xl border sm:h-72">
        <Image src={image} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
      </div>
      <div className="space-y-4">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          {icon}
          <span>{title}</span>
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <ul className="list-disc pl-5 text-sm text-muted-foreground">
            {bulletsLeft.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <ul className="list-disc pl-5 text-sm text-muted-foreground">
            {bulletsRight.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <InfoMini label="Durée" value={duration} />
          <InfoMini label="Coût" value={cost} />
        </div>
        <div className="flex flex-wrap gap-3">
          {detailsHref && (
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[var(--brand-orange)] text-[var(--brand-orange)] hover:bg-[var(--brand-orange)] hover:text-white"
            >
              <Link href={detailsHref}>Voir la formation</Link>
            </Button>
          )}
          <Button asChild variant="outline" className="rounded-full border-[var(--brand-orange)] text-[var(--brand-orange)] hover:bg-[var(--brand-orange)] hover:text-white">
            <a href="#contact">Être rappelé</a>
          </Button>
          {programHref && (
            <Button asChild variant="outline" className="rounded-full">
              <a href={programHref} target="_blank" rel="noopener noreferrer">
                Programme (PDF)
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function KPI({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border p-5">
      <div className="text-3xl font-semibold text-[var(--brand-orange)]">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function InfoMini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border p-3 text-sm">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
}


