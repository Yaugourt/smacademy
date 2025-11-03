export type Formation = {
  slug: string;
  title: string;
  summary: string;
  city: string;
  tags?: string[];
  heroImage?: string;
  duration?: string;
  price?: string;
  location?: string;
  certification?: string;
  audience?: string;
  objectives?: string[];
  prerequisites?: string[];
  program?: string[];
  financingNotes?: string;
  faqs?: { q: string; a: string }[];
  sections?: { title: string; content: string }[];
};

export const formations: Formation[] = [
  {
    slug: "fibre-optique-d3",
    title: "Installation et raccordement Fibre optique D3",
    city: "Nîmes (Gard)",
    summary:
      "Formation express à l'installation et au raccordement fibre optique: techniques de déploiement, raccordements précis et contrôle qualité.",
    tags: ["Fibre", "Télécom"],
    duration: "2 à 3 jours",
    price: "Nous consulter",
    location: "Centre SM Academy (Nîmes) ou sur site",
    objectives: [
      "Lire un plan et identifier l'architecture D3",
      "Réaliser les raccordements (épissures, connecteurs)",
      "Contrôler et mesurer la qualité (OTDR, photométrie)",
    ],
    prerequisites: ["Notions d'électricité et travail en hauteur recommandées"],
    program: [
      "Architecture FTTH et sécurité",
      "Techniques de raccordement (soudeuse, jarretières)",
      "Mesures, tests et dossier d'ouvrage",
    ],
    faqs: [
      { q: "Matériel fourni ?", a: "Oui, tout le matériel nécessaire est fourni durant la formation." },
      { q: "Certification ?", a: "Attestation de fin de formation remise." },
    ],
  },
  {
    slug: "irve",
    title: "IRVE – Installation de bornes de recharge",
    city: "Nîmes (Gard)",
    summary:
      "Installer, configurer et entretenir des infrastructures de recharge pour véhicules électriques en respectant normes et sécurité.",
    tags: ["Électrique", "Mobilité"],
    heroImage: "/globe.svg",
    duration: "3 jours",
    price: "Nous consulter",
    location: "Centre SM Academy (Nîmes) ou sur site",
    certification: "Conforme aux exigences IRVE",
    audience: "Électriciens, installateurs, techniciens maintenance, responsables techniques.",
    objectives: [
      "Connaître les normes et schémas IRVE",
      "Réaliser l'installation et la mise en service",
      "Assurer la maintenance et le dépannage de base",
    ],
    prerequisites: ["Habilitation électrique recommandée"],
    program: [
      "Normes IRVE, sécurité et réglementation",
      "Dimensionnement et câblage",
      "Mise en service, paramétrage, essais",
    ],
    financingNotes:
      "Éligible selon les cas via OPCO, France Travail (AIF/POE) ou CPF. Nous vous accompagnons pour le montage du dossier.",
    faqs: [
      { q: "Public visé ?", a: "Électriciens, installateurs, techniciens maintenance." },
      { q: "Lieu ?", a: "Au centre SM Academy (Nîmes) ou en intra sur votre site." },
      { q: "Financement ?", a: "OPCO, CPF, France Travail possibles selon votre situation." },
    ],
  },
  {
    slug: "formateur",
    title: "Formation de formateur pour adultes",
    city: "Nîmes (Gard)",
    summary:
      "Concevoir, animer et évaluer des actions de formation efficaces, adaptées aux publics adultes.",
    tags: ["Pédagogie"],
    duration: "3 à 5 jours",
    price: "Nous consulter",
    location: "Centre SM Academy (Nîmes) ou sur site",
    objectives: [
      "Construire des objectifs pédagogiques",
      "Animer avec des méthodes actives",
      "Évaluer les acquis et ajuster le scénario",
    ],
    prerequisites: ["Expérience métier à transmettre"],
    program: [
      "Ingénierie pédagogique (objectifs, séquences)",
      "Animer et gérer les groupes",
      "Évaluation et bilan",
    ],
  },
  {
    slug: "sst",
    title: "SST – Sauveteur Secouriste du Travail",
    city: "Nîmes (Gard)",
    summary:
      "Devenir acteur de la prévention et maîtriser les gestes qui sauvent en milieu professionnel.",
    tags: ["Sécurité"],
    duration: "2 jours (initial)",
    price: "Nous consulter",
    location: "Centre SM Academy (Nîmes) ou sur site",
    certification: "Certification SST",
    objectives: [
      "Protéger, examiner, alerter",
      "Secourir face à un étouffement, saignement, inconscience, arrêt cardiaque",
      "Participer à la prévention des risques",
    ],
    prerequisites: ["Aucun"],
    program: [
      "Conduite à tenir et chaîne des secours",
      "Gestes techniques (PLS, massage, défibrillateur)",
      "Prévention des risques professionnels",
    ],
  },
  {
    slug: "gestes-et-postures",
    title: "Gestes et Postures – Prévenir les TMS",
    city: "Nîmes (Gard)",
    summary:
      "Acquérir les bonnes pratiques de manutention et de posture pour réduire les risques de TMS.",
    tags: ["Prévention"],
    duration: "1 jour",
    price: "Nous consulter",
    location: "Centre SM Academy (Nîmes) ou sur site",
    objectives: [
      "Comprendre les TMS et facteurs de risque",
      "Adopter les bons gestes de manutention",
      "Aménager son poste pour limiter les contraintes",
    ],
    prerequisites: ["Aucun"],
    program: [
      "Bases biomécaniques et TMS",
      "Gestes et postures en situations de travail",
      "Exercices pratiques et prévention",
    ],
  },
  {
    slug: "pack-office",
    title: "Pack Office – Word, Excel, PowerPoint, Outlook",
    city: "Nîmes (Gard)",
    summary:
      "Monter en compétence sur la bureautique pour gagner en efficacité au quotidien.",
    tags: ["Bureautique"],
    duration: "2 à 5 jours selon niveau",
    price: "Nous consulter",
    location: "Centre SM Academy (Nîmes) ou sur site",
    objectives: [
      "Word: mise en forme avancée, styles",
      "Excel: formules, tableaux, graphiques",
      "PowerPoint: présentations percutantes",
    ],
    prerequisites: ["Connaissances de base en informatique"],
    program: [
      "Parcours modulaires par logiciel",
      "Cas pratiques professionnels",
    ],
  },
];

export function getFormationBySlug(slug: string): Formation | undefined {
  return formations.find((f) => f.slug === slug);
}


