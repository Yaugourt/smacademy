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
      <p>
        Les infrastructures de recharge pour véhicules électriques (IRVE) sont encadrées par des normes exigeantes.
        Une installation mal dimensionnée ou mal protégée peut entraîner des échauffements, des déclenchements intempestifs
        ou, dans le pire des cas, un départ de feu. Il est donc indispensable de maîtriser le cadre normatif avant d'intervenir.
      </p>

      <h3>1. Cadre réglementaire IRVE</h3>
      <p>
        L’installateur IRVE doit s’appuyer sur le référentiel en vigueur (UTE, NF C 15‑100 et documents fabricants).
        Au-delà de la conformité, l’objectif est d’assurer la sécurité des personnes et des biens tout au long de la vie de l’installation.
      </p>
      <ul>
        <li>Choisir le bon schéma de liaison à la terre et le reporter sur les schémas.</li>
        <li>Identifier les circuits dédiés IRVE et les protections associées.</li>
        <li>Prendre en compte les conditions d’environnement (local technique, extérieur, parking couvert, etc.).</li>
      </ul>

      <h3>2. Dimensionnement et protections</h3>
      <p>
        Un mauvais dimensionnement peut rendre l’installation instable ou dangereuse. En formation, nous insistons sur les points suivants:
      </p>
      <ul>
        <li>Calcul des sections de conducteurs en fonction de la longueur, de l’intensité et du mode de pose.</li>
        <li>Choix des disjoncteurs et différentiels adaptés au type de borne et à l’environnement.</li>
        <li>Coordination des protections pour éviter les déclenchements en cascade.</li>
      </ul>

      <h3>3. Mise en service et essais</h3>
      <p>
        Avant la mise à disposition du client, une phase de contrôle est indispensable:
      </p>
      <ul>
        <li>Vérification des serrages, repérages et continuité des conducteurs de protection.</li>
        <li>Mesure des valeurs d’isolement et de la résistance de terre.</li>
        <li>Essais fonctionnels de charge sur les bornes et vérification des dispositifs de commande/arrêt.</li>
      </ul>

      <p>
        Chez SM Academy, la formation IRVE alterne théorie et pratique: analyse des schémas, câblage sur plateau technique,
        recherche de défauts et mise en service guidée. L’objectif est que le stagiaire reparte avec des réflexes applicables
        dès le retour sur le terrain.
      </p>
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
      <p>
        Le SST est un acteur clé de la prévention des risques. La présence de salariés formés réduit la gravité des accidents
        et améliore la culture sécurité. Au‑delà du geste de secours, le SST contribue à identifier les situations dangereuses
        et à les faire remonter.
      </p>

      <h3>Obligations de l’employeur</h3>
      <p>
        Le Code du travail impose à l’employeur de mettre en place une organisation des secours efficace. Concrètement:
      </p>
      <ul>
        <li>Disposer de moyens d’alerte et de premiers secours adaptés aux risques de l’entreprise.</li>
        <li>Désigner des salariés capables de donner l’alerte et de prodiguer les premiers secours.</li>
        <li>Former régulièrement ces salariés et maintenir leurs compétences (recyclage SST).</li>
      </ul>

      <h3>Combien de SST dans l’entreprise ?</h3>
      <p>
        La réglementation ne fixe pas un nombre unique pour toutes les structures, mais plusieurs textes et recommandations
        de la CARSAT et de l’INRS servent de référence. En pratique, on vise au minimum:
      </p>
      <ul>
        <li>Au moins un SST par équipe, par zone de travail et par tranche horaire.</li>
        <li>Une redondance pour couvrir les absences (congés, maladie, déplacements).</li>
      </ul>

      <h3>Intérêt pour l’entreprise</h3>
      <p>
        Former des SST, ce n’est pas seulement “cocher une case” réglementaire. Les bénéfices sont concrets:
      </p>
      <ul>
        <li>Réduction de la gravité des accidents grâce à une prise en charge immédiate.</li>
        <li>Meilleure culture prévention dans les équipes (repérage et signalement des situations à risque).</li>
        <li>Image de marque renforcée vis‑à‑vis des clients et des partenaires.</li>
      </ul>

      <p>
        La formation SST proposée par SM Academy alterne mises en situation, cas concrets liés à votre activité
        et rappels réglementaires pour que chaque stagiaire soit opérationnel dès son retour sur poste.
      </p>
    `,
  },
  {
    slug: "financer-sa-formation-opco-france-travail",
    title: "Financer sa formation: OPCO et France Travail",
    excerpt:
      "Financer sa formation à Nîmes: tour d'horizon des prises en charge OPCO et des aides France Travail.",
    date: new Date(Date.now() - 2 * 86400000).toISOString(),
    coverImage: "/globe.svg",
    category: "Financements",
    tags: ["Financement", "OPCO", "France Travail"],
    author: "SM Academy",
    contentHtml: `
      <p>
        Plusieurs dispositifs peuvent financer votre montée en compétences: OPCO pour les salariés, aides France Travail pour les demandeurs d'emploi,
        financement direct par l'entreprise ou en propre pour les indépendants. L’objectif est de limiter, voire d’annuler, le reste à charge.
      </p>

      <h3>1. Financement via les OPCO (salariés)</h3>
      <p>
        Les OPCO (opérateurs de compétences) prennent en charge, tout ou partie, des coûts pédagogiques des formations liées
        au développement des compétences des salariés.
      </p>
      <ul>
        <li>Vous identifiez la formation (IRVE, SST, Fibre, etc.) et obtenez un devis détaillé.</li>
        <li>Votre entreprise transmet la demande de prise en charge à son OPCO (ou via l’extranet dédié).</li>
        <li>Une fois l’accord obtenu, la formation est planifiée et facturée selon les modalités définies.</li>
      </ul>

      <h3>2. Aides France Travail (demandeurs d’emploi)</h3>
      <p>
        Pour les demandeurs d’emploi, France Travail peut mobiliser différents dispositifs (AIF, POEI/POEC, etc.) afin
        de financer une formation nécessaire au retour à l’emploi.
      </p>
      <ul>
        <li>Échanger avec votre conseiller France Travail sur votre projet (IRVE, fibre, SST…).</li>
        <li>Faire établir un devis et un programme détaillé par l’organisme de formation.</li>
        <li>Déposer la demande d’aide et attendre la validation avant de vous engager définitivement.</li>
      </ul>

      <h3>3. Financement entreprise / autofinancement</h3>
      <p>
        Pour certaines situations, l’entreprise ou le stagiaire peut décider de financer directement la formation:
      </p>
      <ul>
        <li>Budget formation interne pour anticiper ou compléter les prises en charge OPCO.</li>
        <li>Investissement individuel pour développer son employabilité (changement de poste, reconversion).</li>
      </ul>

      <p>
        Chez SM Academy, nous vous accompagnons dans le montage du dossier: devis détaillé, calendrier prévisionnel,
        justificatifs à transmettre à votre OPCO ou à France Travail. L’objectif: vous simplifier la partie
        administrative pour vous concentrer sur l’essentiel, la montée en compétences.
      </p>
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
      <p>
        Les TMS représentent une part importante des maladies professionnelles. Une démarche efficace combine aménagement du poste,
        organisation du travail et formation aux gestes sûrs. L’objectif est de réduire à la fois la pénibilité et l’absentéisme.
      </p>
      <h3>Trois leviers</h3>
      <ul>
        <li>Analyser les contraintes (charges, postures, répétitivité) et éliminer ce qui peut l'être.</li>
        <li>Aménager: réglages, aides à la manutention, organisation des flux.</li>
        <li>Former: principes biomécaniques, gestes de manutention, pauses actives.</li>
      </ul>

      <h3>Des exemples concrets</h3>
      <p>
        En formation, nous partons de situations réelles rencontrées dans les entreprises:
      </p>
      <ul>
        <li>Manutention manuelle de cartons en logistique (palettes, rayonnages, préparation de commandes).</li>
        <li>Travail prolongé sur écran en bureau (position assise, hauteur de fauteuil, réglage de l’écran).</li>
        <li>Gestes répétitifs en production (conditionnement, assemblage, picking).</li>
      </ul>

      <p>
        Les stagiaires expérimentent de nouveaux gestes, apprennent à organiser leur poste et repartent avec des outils simples
        pour prolonger la démarche dans leur équipe (étirements, micro‑pauses, check‑list de poste).
      </p>
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
      <p>
        Qualiopi atteste de la qualité des processus d'un organisme de formation via le Référentiel National Qualité (RNQ).
        Pour les entreprises et les apprenants, c’est la garantie que le centre de formation est régulièrement audité
        et que les pratiques sont formalisées.
      </p>
      <h3>À retenir</h3>
      <ul>
        <li>Information précise sur les prestations, leurs objectifs et leurs résultats.</li>
        <li>Ingénierie pédagogique et adaptation aux publics (y compris prise en compte du handicap).</li>
        <li>Compétences des formateurs, actualisation des connaissances et veille réglementaire.</li>
        <li>Amélioration continue via la collecte et l’analyse des retours stagiaires et clients.</li>
      </ul>

      <h3>Ce que ça change pour vous</h3>
      <p>
        Choisir un organisme certifié Qualiopi, c’est bénéficier:
      </p>
      <ul>
        <li>De formations finançables par les dispositifs publics ou mutualisés (OPCO, France Travail, etc.).</li>
        <li>D’un parcours clair: objectifs, programme, modalités d’évaluation, attestation ou certification.</li>
        <li>D’un interlocuteur capable de vous accompagner sur la durée (avant, pendant et après la formation).</li>
      </ul>

      <p>
        La certification de SM Academy est donc un gage de sérieux, mais aussi un levier concret pour sécuriser vos
        projets de formation et leur financement.
      </p>
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
      <p>
        Le bon choix de formation aligne un besoin métier, un objectif mesurable et un dispositif adapté
        (contenus, durée, modalités, évaluation). Avant de vous engager, prenez le temps de clarifier votre projet.
      </p>

      <h3>1. Clarifier votre objectif</h3>
      <ul>
        <li>Quelle compétence concrète voulez‑vous développer (ex: installer des bornes IRVE, animer une formation, devenir SST) ?</li>
        <li>Quel est votre délai (urgence réglementaire, projet de reconversion, évolution de poste) ?</li>
        <li>Quels résultats attendez‑vous: certification, attestation, montée en grade, changement de métier ?</li>
      </ul>

      <h3>2. Vérifier vos prérequis</h3>
      <ul>
        <li>Expérience métier existante ou non sur le sujet.</li>
        <li>Niveau en prérequis techniques (électricité, bureautique, pédagogie…).</li>
        <li>Possibilité de réaliser des mises en pratique (plateau technique, situation de travail).</li>
      </ul>

      <h3>3. Choisir le bon format</h3>
      <ul>
        <li>Durée concentrée sur quelques jours ou parcours plus étalé.</li>
        <li>Part de pratique par rapport à la théorie.</li>
        <li>Accompagnement après la formation (supports, hotline, coaching, etc.).</li>
      </ul>

      <h3>4. Anticiper le financement</h3>
      <ul>
        <li>Discuter avec votre employeur et/ou votre service RH des besoins et des budgets.</li>
        <li>Identifier l’OPCO ou les aides France Travail mobilisables selon votre situation.</li>
        <li>Demander un devis détaillé et un programme à l’organisme pour constituer votre dossier.</li>
      </ul>

      <p>
        SM Academy peut vous aider à faire le point en amont: validation de votre projet, choix de la bonne
        formation dans notre catalogue et accompagnement sur les démarches de financement.
      </p>
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


