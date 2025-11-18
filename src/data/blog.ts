export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  coverImage?: string;
  category?: string;
  tags?: string[];
  author?: string;
  contentHtml: string;
};

export const posts: Post[] = [
  {
    slug: "guide-irve-normes-installation",
    title: "IRVE: normes et bonnes pratiques d'installation",
    excerpt:
      "IRVE à Nîmes (Gard): panorama des normes et points de vigilance pour l'installation et la mise en service.",
    date: new Date().toISOString(),
    coverImage: "/window.svg",
    category: "IRVE",
    tags: ["IRVE", "Électricité", "Normes"],
    author: "SM Academy",
    contentHtml: `
      <p>Les infrastructures de recharge pour véhicules électriques (IRVE) sont encadrées par des normes exigeantes. Voici les points clés à retenir: dimensionnement, protections, schémas, mise en service et essais.</p>
      <h3>Normes et sécurité</h3>
      <ul>
        <li>Respect des sections de conducteurs selon la longueur et l'intensité.</li>
        <li>Protection différentielle et coordination des protections.</li>
        <li>Respect du guide UTE et prescriptions du fabricant.</li>
      </ul>
      <p>Chez SM Academy, la formation IRVE alterne théorie et pratique pour sécuriser vos interventions.</p>
    `,
  },
  {
    slug: "sst-obligations-entreprise",
    title: "SST: quelles obligations pour l'entreprise?",
    excerpt:
      "SST à Nîmes: l'intérêt du Sauveteur Secouriste du Travail et les obligations de l'employeur.",
    date: new Date(Date.now() - 86400000).toISOString(),
    coverImage: "/file.svg",
    category: "SST",
    tags: ["SST", "Sécurité"],
    author: "SM Academy",
    contentHtml: `
      <p>Le SST est un acteur clé de la prévention des risques. La présence de salariés formés réduit la gravité des accidents et améliore la culture sécurité.</p>
      <p>La réglementation impose une organisation des secours: le SST en est un pilier.</p>
    `,
  },
  {
    slug: "financements-opco-cpf-france-travail",
    title: "Financer sa formation: OPCO, CPF, France Travail",
    excerpt:
      "Financer sa formation à Nîmes: tour d'horizon CPF, OPCO et aides France Travail.",
    date: new Date(Date.now() - 2 * 86400000).toISOString(),
    coverImage: "/globe.svg",
    category: "Financements",
    tags: ["Financement", "CPF", "OPCO"],
    author: "SM Academy",
    contentHtml: `
      <p>Plusieurs dispositifs peuvent financer votre montée en compétences: OPCO pour les salariés, CPF pour les actifs, aides France Travail pour les demandeurs d'emploi.</p>
      <p>Nous vous accompagnons pour le montage de votre dossier.</p>
    `,
  },
  {
    slug: "habilitation-electrique-niveaux-et-bonnes-pratiques",
    title: "Habilitation électrique: niveaux, rôles et bonnes pratiques",
    excerpt:
      "Comprendre les symboles d'habilitation (H0/B0/BS/BE/B1/B2/BC/HC), les situations de travail et les réflexes sécurité.",
    date: new Date(Date.now() - 3 * 86400000).toISOString(),
    coverImage: "/file.svg",
    category: "Électricité",
    tags: ["Habilitation", "Sécurité", "Électricité"],
    author: "SM Academy",
    contentHtml: `
      <p>L'habilitation électrique atteste de la capacité d'une personne à accomplir des tâches électriques en sécurité. Elle s'appuie sur l'évaluation des connaissances et des savoir-faire adaptés au poste.</p>
      <h3>Lire les symboles</h3>
      <ul>
        <li><strong>H0/H0V</strong>: non électricien en haute tension (voisinage).</li>
        <li><strong>B0/BS/BE</strong>: interventions élémentaires ou spécifiques en basse tension.</li>
        <li><strong>B1/B2/B1V/B2V/BC</strong>: travaux d'ordre électrique en BT (exécution, consignation).</li>
        <li><strong>HC</strong>: consignation en HT.</li>
      </ul>
      <p>Le recyclage périodique et la pratique sont essentiels pour maintenir le niveau de sécurité.</p>
    `,
  },
  {
    slug: "gestes-et-postures-prevenir-les-tms",
    title: "Gestes & Postures: prévenir les TMS au quotidien",
    excerpt:
      "Repérer les facteurs de risque, aménager le poste et adopter les bons gestes pour réduire les troubles musculo-squelettiques.",
    date: new Date(Date.now() - 4 * 86400000).toISOString(),
    coverImage: "/window.svg",
    category: "Prévention",
    tags: ["TMS", "Prévention", "Ergonomie"],
    author: "SM Academy",
    contentHtml: `
      <p>Les TMS représentent une part importante des maladies professionnelles. Une démarche efficace combine aménagement du poste, organisation du travail et formation aux gestes sûrs.</p>
      <h3>Trois leviers</h3>
      <ul>
        <li>Analyser les contraintes (charges, postures, répétitivité) et éliminer ce qui peut l'être.</li>
        <li>Aménager: réglages, aides à la manutention, organisation des flux.</li>
        <li>Former: principes biomécaniques, gestes de manutention, pauses actives.</li>
      </ul>
    `,
  },
  {
    slug: "qualiopi-7-criteres-et-benefices",
    title: "Qualiopi: les 7 critères et ce que ça change pour vous",
    excerpt:
      "Décryptage des critères du Référentiel National Qualité (RNQ) et des bénéfices pour les apprenants et entreprises.",
    date: new Date(Date.now() - 5 * 86400000).toISOString(),
    coverImage: "/globe.svg",
    category: "Qualité",
    tags: ["Qualiopi", "Qualité", "RNQ"],
    author: "SM Academy",
    contentHtml: `
      <p>Qualiopi atteste de la qualité des processus d'un organisme de formation via le RNQ. Cela garantit des informations claires, des parcours adaptés, une montée en compétence mesurable et une amélioration continue.</p>
      <h3>À retenir</h3>
      <ul>
        <li>Information précise sur les prestations et leurs résultats.</li>
        <li>Ingénierie pédagogique et adaptation aux publics (handicap inclus).</li>
        <li>Compétences des formateurs et veille active.</li>
        <li>Amélioration continue via la prise en compte des retours.</li>
      </ul>
    `,
  },
  {
    slug: "bien-choisir-sa-formation-professionnelle",
    title: "Comment bien choisir sa formation professionnelle",
    excerpt:
      "Objectifs, prérequis, financement, certification: les 5 questions à se poser pour un choix efficace.",
    date: new Date(Date.now() - 6 * 86400000).toISOString(),
    coverImage: "/file.svg",
    category: "Conseils",
    tags: ["Orientation", "Financement", "Qualité"],
    author: "SM Academy",
    contentHtml: `
      <p>Le bon choix de formation aligne un besoin métier, un objectif mesurable et un dispositif adapté (contenus, durée, modalités, évaluation). Vérifiez la reconnaissance (certification), les prérequis et les solutions de financement.</p>
      <ul>
        <li>Clarifiez l'objectif (compétence visée, délai, livrables).</li>
        <li>Évaluez vos prérequis; demandez un positionnement si nécessaire.</li>
        <li>Étudiez les modalités (présentiel, pratique, accompagnement post-formation).</li>
        <li>Mobilisez les financements (OPCO, CPF, France Travail) et planifiez.</li>
      </ul>
    `,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllCategories(): string[] {
  return Array.from(
    new Set(posts.map((p) => p.category).filter(Boolean) as string[])
  ).sort();
}

export function getAllTags(): string[] {
  const set = new Set<string>();
  for (const p of posts) {
    (p.tags || []).forEach((t) => set.add(t));
  }
  return Array.from(set).sort();
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter((p) => (p.category || "").toLowerCase() === category.toLowerCase());
}

export function getPostsByTag(tag: string): Post[] {
  return posts.filter((p) => (p.tags || []).some((t) => t.toLowerCase() === tag.toLowerCase()));
}


