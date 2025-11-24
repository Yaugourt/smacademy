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
  images?: string[];
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
      "Formation fibre optique D3 à Nîmes (Gard): déploiement, raccordements précis et contrôle qualité (OTDR, photométrie). Parcours court, finançable OPCO / France Travail.",
    tags: ["Fibre", "Télécom"],
    heroImage: "https://smacademy.fr/wp-content/uploads/2024/08/technicien-1-1.jpg",
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
    slug: "aipr-encadrement-operateur",
    title: "AIPR – Encadrant & Opérateur",
    city: "Nîmes (Gard)",
    summary:
      "Formation AIPR à Nîmes (Gard): préparer et réussir l'Autorisation d'Intervention à Proximité des Réseaux pour encadrants et opérateurs (VRD, TP, réseaux). Parcours court avec entraînement aux QCM officiels.",
    tags: ["AIPR", "Réseaux"],
    heroImage: "https://smacademy.fr/wp-content/uploads/2024/08/technicien-1-1.jpg",
    duration: "1 à 2 jours",
    price: "Nous consulter",
    location: "Centre SM Academy (Nîmes) ou sur site dans le Gard",
    certification: "Préparation à l'autorisation AIPR (encadrant / opérateur)",
    audience:
      "Conducteurs de travaux, chefs de chantier, encadrants de proximité et opérateurs intervenant à proximité des réseaux (VRD, travaux publics, paysagistes, entreprises de réseaux).",
    objectives: [
      "Comprendre le cadre réglementaire anti-endommagement et les responsabilités des intervenants",
      "Lire les plans de réseaux et repérer les marquages au sol",
      "Identifier les risques principaux lors des travaux à proximité des réseaux",
      "Se préparer efficacement au QCM AIPR (encadrant ou opérateur)",
    ],
    prerequisites: [
      "Expérience dans les travaux à proximité de réseaux recommandée",
      "Compréhension écrite du français suffisante pour les QCM",
    ],
    program: [
      "Réglementation anti-endommagement (DT-DICT, rôles des acteurs, obligations AIPR)",
      "Lecture de plans et repérage des réseaux sur le terrain",
      "Analyse de situations à risque, bonnes pratiques de prévention",
      "Entraînement au QCM AIPR encadrant / opérateur sur plateforme dédiée",
    ],
    financingNotes:
      "Formation AIPR finançable selon les cas via OPCO, France Travail ou financement direct entreprise. Nous vous accompagnons dans le montage du dossier.",
    faqs: [
      {
        q: "La certification AIPR est-elle délivrée par SM Academy ?",
        a: "Non, SM Academy prépare au QCM AIPR officiel. L'autorisation AIPR est ensuite délivrée par l'employeur sur la base du résultat au QCM et du dossier du salarié.",
      },
      {
        q: "Quel profil peut suivre cette formation ?",
        a: "Encadrants, chefs de chantier, conducteurs de travaux et opérateurs intervenant à proximité des réseaux (VRD, TP, paysagistes, entreprises de réseaux, etc.).",
      },
    ],
  },
  {
    slug: "irve",
    title: "IRVE – Installation de bornes de recharge",
    city: "Nîmes (Gard)",
    summary:
      "Formation IRVE à Nîmes (Gard): installer, configurer et entretenir des bornes de recharge selon les normes. Finançable OPCO / France Travail.",
    tags: ["Électrique", "Mobilité"],
    heroImage: "https://smacademy.fr/wp-content/uploads/2024/08/irvee.jpg",
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
    images: [
      "https://smacademy.fr/wp-content/uploads/2024/08/irve.jpg",
      "https://smacademy.fr/wp-content/uploads/2024/08/irvee.jpg",
    ],
    financingNotes:
      "Éligible selon les cas via OPCO, France Travail (AIF/POE). Nous vous accompagnons pour le montage du dossier.",
    faqs: [
      { q: "Public visé ?", a: "Électriciens, installateurs, techniciens maintenance." },
      { q: "Lieu ?", a: "Au centre SM Academy (Nîmes) ou en intra sur votre site." },
      { q: "Financement ?", a: "OPCO, France Travail possibles selon votre situation." },
    ],
  },
  {
    slug: "formateur",
    title: "Formation de formateur pour adultes",
    city: "Nîmes (Gard)",
    summary:
      "Formation de formateur à Nîmes (Gard): concevoir, animer et évaluer des formations efficaces pour adultes. Finançable OPCO / Entreprise.",
    tags: ["Pédagogie"],
    heroImage: "https://smacademy.fr/wp-content/uploads/2024/08/reforme-formation-professionnelle-apprentissage-2-1.jpg",
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
      "Formation SST à Nîmes (Gard): devenir acteur de la prévention et maîtriser les gestes qui sauvent. Initiale + MAC. Finançable OPCO / France Travail.",
    tags: ["Sécurité"],
    heroImage: "https://smacademy.fr/wp-content/uploads/2024/08/sstt-2.jpg",
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
      "Formation Gestes & Postures à Nîmes (Gard): bonnes pratiques de manutention et posture pour réduire les TMS. Intra possible dans tout le Gard.",
    tags: ["Prévention"],
    heroImage: "https://smacademy.fr/wp-content/uploads/2024/08/gg.jpg",
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
      "Formation Pack Office à Nîmes (Gard): Word, Excel, PowerPoint, Outlook pour gagner en efficacité. Parcours modulaires. OPCO / Entreprise possibles.",
    tags: ["Bureautique"],
    heroImage: "https://smacademy.fr/wp-content/uploads/2024/08/PACK-OFF-1.png",
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
