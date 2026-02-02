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
  programPdf?: string; // lien vers le DOCX téléchargeable
};

export const formations: Formation[] = [
  {
    slug: "aipr-operateur",
    title: "AIPR Opérateur – Autorisation d'intervention à proximité des réseaux",
    city: "Nîmes (Gard)",
    summary:
      "Formation AIPR Opérateur à Nîmes (Gard) : maîtrisez la réglementation DT-DICT et préparez le QCM officiel. 1 jour, 190 €, finançable OPCO / France Travail.",
    tags: ["AIPR", "Sécurité", "Réseaux"],
    heroImage: "/smAcademy/AIPR.png",
    duration: "1 jour (7 heures)",
    price: "190 €",
    location: "Centre SM Academy (Nîmes) ou sur site",
    audience:
      "Conducteur d'engins TP, conducteurs de nacelles, grue, pompe à béton, suiveur, canalisateur, ouvrier en travaux publics. Exécutants de travaux urgents dispensés de DT et DICT.",
    objectives: [
      "Comprendre les enjeux de la réforme anti-endommagement de 2012 et leur impact sur le rôle d'opérateur",
      "Sécuriser les biens et les personnes en mettant en œuvre les bonnes pratiques anti-endommagement",
      "Réussir l'examen QCM AIPR sur la plateforme du Ministère",
    ],
    prerequisites: ["Aucun prérequis"],
    program: [
      "L'impact de la réforme de protection à l'endommagement des réseaux sur le chantier",
      "La réglementation DT – DICT – Principaux points de repères",
      "La réglementation AIPR et arrêté du 22 décembre 2015",
      "Définitions, glossaire et différents acteurs de la réforme",
      "Les types de réseaux concernés et cas de dispense",
      "Le fonctionnement du système DT-DICT conjointes",
      "L'exécution des travaux, marquage piquetage",
      "Cas particulier des travaux urgents – ATU",
      "Application du guide technique, reconnaissance terrain",
      "En cas de dommage, d'arrêt de chantier",
      "Examen QCM AIPR (1 heure) sur tablettes numériques",
    ],
    financingNotes:
      "Éligible OPCO, France Travail (AIF/POE). Nous vous accompagnons pour le montage du dossier.",
    faqs: [
      { q: "Public visé ?", a: "Opérateurs exécutant des travaux à proximité de réseaux enterrés ou aériens." },
      { q: "Lieu ?", a: "Au centre SM Academy (Nîmes) ou en intra sur votre site." },
      { q: "Certification ?", a: "Attestation de réussite QCM AIPR délivrée par le Ministère." },
    ],
    programPdf: "/smAcademy/PROGRAMME AIPR OPE 2026.docx",
  },
  {
    slug: "bientraitance",
    title: "Bientraitance auprès des personnes âgées",
    city: "Nîmes (Gard)",
    summary:
      "Formation Bientraitance à Nîmes (Gard) : développez une pratique réflexive et des gestes bienveillants. 1 jour, 190 €, finançable OPCO / France Travail.",
    tags: ["Santé", "Social", "Prévention"],
    heroImage: "/smAcademy/Bientraitance-aupres-des-personnes-agees.jpg",
    duration: "1 jour (7 heures)",
    price: "190 €",
    location: "Centre SM Academy (Nîmes) ou sur site",
    audience:
      "Tous les salariés susceptibles d'effectuer des tâches d'accompagnement de personnes âgées ou vulnérables.",
    objectives: [
      "Permettre à chaque professionnel de faire évoluer ses représentations",
      "Appréhender la législation en vigueur et les recommandations",
      "Amorcer une démarche d'analyse et d'évaluation de ses pratiques professionnelles",
      "Développer une réflexion éthique sur sa pratique",
      "Se positionner dans la démarche de bientraitance",
      "Identifier des actions concrètes de promotion de la bientraitance",
    ],
    prerequisites: ["Aucun prérequis"],
    program: [
      "Définition de la bientraitance : qu'est-ce que la bientraitance ?",
      "Définition de la maltraitance : les six formes de violence",
      "Mettre en œuvre une pratique réflexive pour se positionner dans la bientraitance",
      "Développer des pratiques bientraitantes : bienveillance, empathie, communication",
      "Repérer et savoir réagir face aux situations à risque",
      "Mettre en place l'écoute active dans son action d'accompagnement",
    ],
    financingNotes:
      "Éligible OPCO, France Travail. Nous vous accompagnons pour le montage du dossier.",
    faqs: [
      { q: "Public visé ?", a: "Professionnels de l'accompagnement de personnes âgées ou vulnérables." },
      { q: "Lieu ?", a: "Au centre SM Academy (Nîmes) ou en intra sur votre site." },
    ],
    programPdf: "/smAcademy/Programme bien Traitance.docx",
  },
  {
    slug: "gestes-et-postures",
    title: "Gestes et Postures – Prévenir les TMS",
    city: "Nîmes (Gard)",
    summary:
      "Formation Gestes & Postures à Nîmes (Gard) : adoptez les bons gestes de manutention et réduisez les TMS. 1 jour, 190 €, finançable OPCO / France Travail.",
    tags: ["Prévention", "TMS"],
    heroImage: "/smAcademy/IMG_6244.jpeg",
    duration: "1 jour (7 heures)",
    price: "190 €",
    location: "Centre SM Academy (Nîmes) ou sur site",
    audience:
      "Tous les salariés susceptibles d'effectuer des tâches physiques ou des manipulations manuelles (manutention de charges, postures statiques, mouvements répétitifs).",
    objectives: [
      "Situer l'importance des risques d'accidents et de maladies professionnelles",
      "Identifier les pistes de prévention des risques liés à l'activité physique",
      "Identifier les éléments déterminants des gestes et postures de travail",
    ],
    prerequisites: ["Aucun prérequis"],
    program: [
      "Introduction aux risques liés aux accidents de travail",
      "Analyse des accidents de travail liés aux manutentions manuelles",
      "Réglementation gestes et postures, obligations employeurs/employés",
      "Notions d'anatomie et de physiologie : fonctionnement du dos, muscles, articulations",
      "Mise en évidence des risques potentiels (osseux, musculaires, articulaires)",
      "Techniques de préservation corporelle : verrouillage lombaire, postures invariantes",
      "Principes d'économie d'effort et de sécurité physique",
    ],
    financingNotes:
      "Éligible OPCO, France Travail. Nous vous accompagnons pour le montage du dossier.",
    faqs: [
      { q: "Public visé ?", a: "Salariés effectuant des tâches physiques ou manipulations manuelles." },
      { q: "Lieu ?", a: "Au centre SM Academy (Nîmes) ou en intra sur votre site." },
    ],
    programPdf: "/smAcademy/PROGRAMME Gestes & Posture.docx",
  },
  {
    slug: "pack-office",
    title: "Pack Office Expert – Word, Excel, PowerPoint",
    city: "Nîmes (Gard)",
    summary:
      "Formation Pack Office à Nîmes (Gard) : maîtrisez Word, Excel et PowerPoint au niveau expert. 5 jours, 1 500 €, finançable OPCO / France Travail.",
    tags: ["Bureautique", "Office"],
    heroImage: "/smAcademy/IMG_3092.png",
    duration: "5 jours (35 heures)",
    price: "1 500 €",
    location: "Centre SM Academy (Nîmes) ou sur site",
    audience:
      "Professionnels, salariés, demandeurs d'emploi ou indépendants ayant déjà une bonne maîtrise des outils Microsoft Office souhaitant atteindre un niveau expert.",
    objectives: [
      "Disposer d'une vision approfondie de Microsoft Office et de ses principales fonctionnalités",
      "Maîtriser de manière experte les outils Word, Excel et PowerPoint pour un usage professionnel avancé",
      "Optimiser l'utilisation des logiciels en intégrant des outils sur mesure adaptés aux besoins quotidiens",
    ],
    prerequisites: ["Aucun prérequis"],
    program: [
      "Approfondissement de la suite Microsoft Office : organisation, interconnexion, formats",
      "Word Expert : styles avancés, sommaires, publipostage, macros, collaboration",
      "Excel Expert : formules avancées (RECHERCHEV/X, INDEX, EQUIV, SI imbriqués), TCD, VBA",
      "PowerPoint Expert : masques, multimédia, animations avancées, design professionnel",
    ],
    financingNotes:
      "Éligible OPCO, France Travail. Nous vous accompagnons pour le montage du dossier.",
    faqs: [
      { q: "Public visé ?", a: "Professionnels souhaitant atteindre un niveau expert sur Office." },
      { q: "Lieu ?", a: "Au centre SM Academy (Nîmes) ou en intra sur votre site." },
    ],
    programPdf: "/smAcademy/PROGRAMME OFFICE 2026 (2).docx",
  },
  {
    slug: "fibre-optique-d3",
    title: "Réseaux Fibre Optique D3 – Raccordement et maintenance",
    city: "Nîmes (Gard)",
    summary:
      "Formation Fibre Optique D3 à Nîmes (Gard) : maîtrisez les mesures OTDR, le raccordement et la maintenance. 10 jours, 1 500 €, finançable OPCO / France Travail.",
    tags: ["Fibre", "Télécom"],
    heroImage: "/smAcademy/fibre.jpeg",
    duration: "10 jours (70 heures)",
    price: "1 500 €",
    location: "Centre SM Academy (Nîmes) ou sur site",
    audience:
      "Professionnels, salariés travaillant dans le domaine de la fibre optique.",
    objectives: [
      "Optimiser les techniques de mesure et de contrôle d'un réseau fibre optique",
      "Assurer la maintenance préventive et corrective d'une infrastructure fibre optique",
      "Réaliser la documentation technique et le reporting qualité des interventions",
    ],
    prerequisites: ["Aucun prérequis"],
    program: [
      "Maîtrise des mesures et contrôles avancés : OTDR, photomètre, soudeuse",
      "Rappel des bases des mesures optiques (puissance, affaiblissement, réflectométrie)",
      "Utilisation avancée du réflectomètre : paramétrage, lecture et interprétation des courbes",
      "Maintenance préventive et corrective : diagnostic des pannes, procédure d'intervention",
      "Réparation, remplacement et re-soudure des fibres endommagées",
      "Suivi et traçabilité : rapports de mesure, mise à jour des plans, dossier technique complet",
    ],
    images: [
      "/smAcademy/fibre.jpeg",
      "/smAcademy/fibre2.jpeg",
      "/smAcademy/fibre3.PNG",
      "/smAcademy/fibre.PNG",
    ],
    financingNotes:
      "Éligible OPCO, France Travail. Nous vous accompagnons pour le montage du dossier.",
    faqs: [
      { q: "Public visé ?", a: "Professionnels et salariés du domaine fibre optique." },
      { q: "Lieu ?", a: "Au centre SM Academy (Nîmes) ou en intra sur votre site." },
      { q: "Certification ?", a: "Certificat de réalisation et attestation de compétences." },
    ],
    programPdf: "/smAcademy/PROGRAMME Réseaux fibre optique.docx",
  },
  {
    slug: "risque-routier",
    title: "Prévention des Risques Routiers",
    city: "Nîmes (Gard)",
    summary:
      "Formation Risque Routier à Nîmes (Gard) : sensibilisation aux dangers de la route et moyens de prévention. ½ journée, 60 €, finançable OPCO / France Travail.",
    tags: ["Prévention", "Sécurité routière"],
    heroImage: "/smAcademy/IMG_9683.jpeg",
    duration: "½ journée",
    price: "60 €",
    location: "Centre SM Academy (Nîmes) ou sur site",
    audience:
      "Toute personne effectuant des déplacements professionnels : commerciaux, techniciens, chauffeurs, livreurs, etc.",
    objectives: [
      "Comprendre et analyser le comportement des conducteurs",
      "Prendre en compte la sécurité sur le plan routier",
      "Sensibiliser aux dangers et aux différents aspects de la sécurité routière",
      "Diminuer l'exposition aux risques routiers",
    ],
    prerequisites: ["Permis B, E ou EC recommandé"],
    program: [
      "S'adapter au comportement de l'Homme : conditions physiques, vision, conduite de nuit",
      "Se représenter les limites de son véhicule : lois physiques, pneumatiques",
      "Description des risques et moyens de prévention : vigilance, substances psychoactives",
      "Organes de sécurité : ceinture, airbag, appui-tête, ABS, GPS",
      "Synthèse sur le code de la route : permis à points, infractions",
    ],
    financingNotes:
      "Éligible OPCO, France Travail. Nous vous accompagnons pour le montage du dossier.",
    faqs: [
      { q: "Public visé ?", a: "Toute personne effectuant des déplacements professionnels." },
      { q: "Lieu ?", a: "Au centre SM Academy (Nîmes) ou en intra sur votre site." },
      { q: "Matériel ?", a: "Simulateur de conduite et/ou voiture tonneau disponibles." },
    ],
    programPdf: "/smAcademy/PROGRAMME RISQUE ROUTIER 2026.docx",
  },
];

export function getFormationBySlug(slug: string): Formation | undefined {
  return formations.find((f) => f.slug === slug);
}
