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
      <p>
        Les entreprises et installateurs du <strong>Gard (30)</strong> peuvent suivre cette formation dans notre centre de Nîmes
        ou directement sur site. Pour en savoir plus sur nos interventions dans le département, consultez la page
        <a href="/gard"> centre de formation dans le Gard</a>.
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
      <p>
        Si votre entreprise est basée dans le <strong>Gard</strong> (Nîmes, Alès, Bagnols-sur-Cèze, Beaucaire, etc.),
        nous pouvons organiser des sessions en inter à Nîmes ou en intra dans vos locaux. Découvrez nos possibilités
        d&apos;intervention sur la page
        <a href="/gard"> formations dans le Gard</a>.
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
      <p>
        Vous êtes salarié, demandeur d&apos;emploi ou dirigeant d&apos;une entreprise située dans le <strong>Gard (30)</strong>&nbsp;?
        Nos équipes basées à Nîmes peuvent vous conseiller et vous orienter vers la bonne prise en charge. Pour une vue
        d&apos;ensemble de notre offre départementale, vous pouvez consulter la page
        <a href="/gard"> centre de formation dans le Gard</a>.
      </p>
    `,
  },
  {
    slug: "habilitation-electrique-niveaux-et-bonnes-pratiques",
    title: "Habilitation électrique: niveaux, rôles et bonnes pratiques à Nîmes (Gard)",
    excerpt:
      "Comprendre les symboles d'habilitation (H0/B0/BS/BE/B1/B2/BC/HC), les situations de travail et les réflexes sécurité pour vos équipes dans le Gard.",
    date: new Date(Date.now() - 3 * 86400000).toISOString(),
    coverImage: "/file.svg",
    category: "Électricité",
    tags: ["Habilitation", "Sécurité", "Électricité", "Gard", "Nîmes"],
    author: "SM Academy",
    contentHtml: `
      <p>
        L&apos;<strong>habilitation électrique</strong> atteste de la capacité d&apos;une personne à accomplir des tâches électriques en sécurité.
        Elle s&apos;appuie sur l&apos;évaluation des connaissances et des savoir-faire adaptés au poste et aux installations.
        Pour les entreprises de Nîmes et du Gard, c&apos;est un enjeu à la fois réglementaire et opérationnel.
      </p>

      <h3>1. Lire les symboles d&apos;habilitation</h3>
      <ul>
        <li><strong>H0/H0V</strong>&nbsp;: non électricien en haute tension (voisinage).</li>
        <li><strong>B0/BS/BE</strong>&nbsp;: interventions élémentaires ou spécifiques en basse tension.</li>
        <li><strong>B1/B2/B1V/B2V/BC</strong>&nbsp;: travaux d&apos;ordre électrique en BT (exécution, consignation).</li>
        <li><strong>HC</strong>&nbsp;: consignation en HT.</li>
      </ul>

      <h3>2. Obligations pour l&apos;employeur</h3>
      <p>
        L&apos;employeur doit s&apos;assurer que tout salarié intervenant sur ou à proximité d&apos;installations électriques possède
        une <strong>habilitation adaptée à son poste</strong>. En pratique, cela passe par&nbsp;:
      </p>
      <ul>
        <li>l&apos;analyse des postes et des situations de travail concernées ;</li>
        <li>la définition du niveau d&apos;habilitation cible (H0/B0/BS/BE/B1/B2/BC…) ;</li>
        <li>la mise en place de <strong>formations habilitation électrique</strong> initiales et de recyclage ;</li>
        <li>la formalisation de l&apos;habilitation via un titre signé par l&apos;employeur.</li>
      </ul>

      <h3>3. Recyclage et maintien des compétences</h3>
      <p>
        Le recyclage périodique (souvent tous les 3 ans) et la pratique sont essentiels pour maintenir le niveau de sécurité.
        C&apos;est aussi l&apos;occasion de réactualiser les connaissances vis-à-vis des normes, des procédures internes et des retours d&apos;expérience.
      </p>

      <h3>4. Se former à l&apos;habilitation électrique à Nîmes (Gard)</h3>
      <p>
        SM Academy propose des parcours d&apos;<strong>habilitation électrique</strong> adaptés aux postes de travail, notamment pour les
        entreprises du Gard (industrie, tertiaire, collectivités). Les sessions peuvent être organisées en inter dans notre
        centre de Nîmes ou en intra directement sur vos sites.
      </p>
      <p>
        Pour avoir une vue d&apos;ensemble de nos dispositifs réglementaires (SST, habilitations, AIPR, etc.), vous pouvez consulter&nbsp;:
      </p>
      <ul>
        <li>la page <a href="/gard">centre de formation dans le Gard</a> pour nos interventions dans le département ;</li>
        <li>le <a href="/formations">catalogue des formations</a> pour découvrir les autres modules complémentaires (IRVE, AIPR, SST…).</li>
      </ul>
    `,
  },
  {
    slug: "aipr-nimes-gard-encadrant-operateur",
    title: "AIPR à Nîmes (Gard): bien préparer vos encadrants et opérateurs",
    excerpt:
      "Pourquoi et comment former vos équipes à l'AIPR à Nîmes et dans le Gard: obligations, profils concernés et préparation efficace au QCM.",
    date: new Date(Date.now() - 3.5 * 86400000).toISOString(),
    coverImage: "/window.svg",
    category: "Prévention",
    tags: ["AIPR", "Réseaux", "Gard", "Nîmes"],
    author: "SM Academy",
    contentHtml: `
      <p>
        L&apos;<strong>AIPR (Autorisation d&apos;Intervention à Proximité des Réseaux)</strong> est devenue incontournable pour les entreprises
        de travaux publics, VRD, paysagistes ou encore les exploitants de réseaux. Sans collaborateurs habilités, certains chantiers
        ne peuvent tout simplement pas démarrer.
      </p>

      <h3>1. Rappels sur l&apos;obligation AIPR</h3>
      <p>
        La réglementation anti-endommagement impose que les intervenants à proximité des réseaux soient titulaires d&apos;une AIPR
        adaptée à leur rôle (concepteur, encadrant, opérateur). En cas d&apos;incident sur un réseau (coupure, fuite, dommage),
        l&apos;entreprise doit être en mesure de prouver que ses équipes étaient correctement formées et autorisées.
      </p>

      <h3>2. Quels profils viser en priorité ?</h3>
      <ul>
        <li><strong>AIPR Encadrant</strong>&nbsp;: conducteurs de travaux, chefs de chantier, responsables d&apos;équipe.</li>
        <li><strong>AIPR Opérateur</strong>&nbsp;: conducteurs d&apos;engins, suiveurs, ouvriers intervenant à proximité immédiate des réseaux.</li>
      </ul>
      <p>
        Dans le <strong>Gard</strong>, cela concerne autant les entreprises de VRD et TP que les collectivités, syndicats de réseaux
        ou prestataires intervenant sur l&apos;espace public.
      </p>

      <h3>3. Préparer le QCM AIPR à Nîmes</h3>
      <p>
        La formation AIPR proposée par SM Academy à Nîmes combine rappels réglementaires, analyse de plans et entraînement
        ciblé au QCM officiel. L&apos;objectif est que le stagiaire arrive serein le jour du test et comprenne les enjeux derrière chaque question.
      </p>

      <h3>4. Comment organiser vos sessions dans le Gard ?</h3>
      <p>
        Nous accompagnons les entreprises du Gard pour planifier des sessions AIPR&nbsp;:
      </p>
      <ul>
        <li>en inter-entreprises dans notre centre de Nîmes, pour 1 à quelques stagiaires ;</li>
        <li>en intra sur vos sites (Alès, Bagnols-sur-Cèze, Beaucaire, etc.) lorsque vous avez plusieurs collaborateurs à former.</li>
      </ul>

      <p>
        Pour aller plus loin, vous pouvez consulter la fiche détaillée de notre formation
        <a href="/formations/aipr-encadrement-operateur"> AIPR – Encadrant &amp; Opérateur à Nîmes (Gard)</a>, ainsi que la page
        <a href="/gard"> centre de formation dans le Gard</a> pour nos autres dispositifs réglementaires (SST, habilitations électriques, Gestes &amp; Postures, etc.).
      </p>
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
      <p>
        Dans le <strong>Gard</strong>, de nombreuses entreprises de logistique, de commerce et de services sont concernées par les TMS.
        Nos formations Gestes &amp; Postures peuvent être réalisées en inter à Nîmes ou directement dans vos entrepôts et magasins.
        Plus d&apos;infos sur la page
        <a href="/gard"> SM Academy dans le Gard</a>.
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
      <p>
        Pour les entreprises et structures implantées dans le <strong>Gard (30)</strong>, cela signifie que vos projets de formation
        menés avec notre centre de Nîmes respectent le Référentiel National Qualité et sont finançables par les dispositifs
        publics ou mutualisés. Vous pouvez démarrer en explorant notre
        <a href="/gard"> page dédiée au Gard</a> ou directement le
        <a href="/formations"> catalogue de formations</a>.
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
      <p>
        Si vous êtes basé dans le <strong>Gard</strong> (entreprise, collectivité, indépendant), nos conseillers à Nîmes peuvent
        construire avec vous un plan de formation cohérent pour vos équipes. Pour commencer, consultez notre
        <a href="/gard"> page Gard</a> ou rendez-vous sur le
        <a href="/formations"> catalogue des formations</a>.
      </p>
    `,
  },
  {
    slug: "formation-professionnelle-gard-entreprises-obligations",
    title: "Formation professionnelle dans le Gard: obligations et bonnes pratiques pour les entreprises",
    excerpt:
      "Panorama des obligations formation pour les employeurs dans le Gard et des bonnes pratiques pour structurer votre plan de développement des compétences.",
    date: new Date(Date.now() - 7 * 86400000).toISOString(),
    coverImage: "/globe.svg",
    category: "Conseils",
    tags: ["Gard", "Entreprise", "Obligations", "Formation"],
    author: "SM Academy",
    contentHtml: `
      <p>
        Les entreprises du <strong>Gard (30)</strong> sont soumises aux mêmes obligations que partout en France en matière de
        formation professionnelle: veiller à l&apos;adaptation des salariés à leur poste de travail et au maintien de leur
        capacité à occuper un emploi (article L6321-1 du Code du travail).
      </p>

      <h3>1. Connaître vos obligations</h3>
      <ul>
        <li>Garantir la sécurité des salariés (SST, habilitations, Gestes &amp; Postures, prévention des risques).</li>
        <li>Maintenir les compétences nécessaires pour tenir le poste (technique, bureautique, réglementaire).</li>
        <li>Proposer un parcours dans le temps (entretiens professionnels, formations régulières).</li>
      </ul>

      <h3>2. S&apos;appuyer sur un plan de formation</h3>
      <p>
        Dans la pratique, les PME du Gard gagnent à structurer un plan de développement des compétences qui couvre
        à la fois les obligations réglementaires (SST, habilitations, etc.) et les enjeux métier (IRVE, fibre, bureautique).
      </p>
      <ul>
        <li>Lister les postes sensibles (électriciens, techniciens fibre, manutention, encadrement).</li>
        <li>Identifier les formations obligatoires ou fortement recommandées.</li>
        <li>Planifier les recyclages pour éviter les ruptures d&apos;habilitation.</li>
      </ul>

      <h3>3. Travailler avec un partenaire local</h3>
      <p>
        En vous appuyant sur un <strong>centre de formation basé à Nîmes</strong>, vous limitez les déplacements, facilitez la
        logistique et pouvez organiser des sessions intra sur vos sites (Alès, Bagnols, Beaucaire, Uzès, etc.).
      </p>
      <p>
        SM Academy accompagne de nombreuses entreprises du Gard dans la construction et le déploiement de leur plan
        de formation: recensement des besoins, calendrier, optimisation des financements.
      </p>
      <p>
        Pour découvrir notre périmètre d&apos;intervention, rendez-vous sur la page
        <a href="/gard"> centre de formation dans le Gard</a>, puis explorez notre
        <a href="/formations"> catalogue de formations</a> pour identifier les modules adaptés à vos équipes.
      </p>
    `,
  },
  {
    slug: "organiser-formations-nimes-pour-sites-gard",
    title: "Organiser vos formations à Nîmes pour vos sites dans le Gard",
    excerpt:
      "Comment utiliser le centre de formation de Nîmes pour former efficacement vos équipes réparties dans tout le Gard.",
    date: new Date(Date.now() - 8 * 86400000).toISOString(),
    coverImage: "/window.svg",
    category: "Conseils",
    tags: ["Gard", "Nîmes", "Organisation", "Logistique"],
    author: "SM Academy",
    contentHtml: `
      <p>
        De nombreuses entreprises du <strong>Gard</strong> disposent de plusieurs sites (agences, dépôts, magasins) répartis
        entre Nîmes, Alès, Bagnols-sur-Cèze, Beaucaire ou encore le Grau-du-Roi. La question est alors: comment organiser
        les formations de manière simple et efficace ?
      </p>

      <h3>1. Utiliser Nîmes comme point central</h3>
      <p>
        Le centre de formation SM Academy à Nîmes offre un accès pratique depuis la plupart des villes du département
        (proximité des axes routiers, parking, restauration à proximité). Organiser vos sessions inter-entreprises à Nîmes
        permet de regrouper plusieurs sites sur une même formation.
      </p>

      <h3>2. Combiner inter et intra</h3>
      <ul>
        <li>Sessions <strong>inter</strong> à Nîmes pour des besoins ponctuels ou des effectifs réduits.</li>
        <li>Sessions <strong>intra</strong> directement dans vos locaux du Gard quand vous avez plusieurs salariés à former.</li>
        <li>Planification annuelle pour lisser les absences et optimiser la production.</li>
      </ul>

      <h3>3. Quels types de formations ?</h3>
      <p>
        Les thématiques les plus souvent organisées pour des entreprises du Gard sont: IRVE, habilitations électriques,
        SST, Gestes &amp; Postures, fibre optique D3 et Pack Office. Toutes ces formations sont détaillées dans notre
        <a href="/formations"> catalogue en ligne</a>.
      </p>

      <p>
        Pour construire un dispositif adapté à la géographie de vos sites (Nîmes, Alès, Bagnols, Beaucaire, Uzès, etc.),
        vous pouvez commencer par prendre contact via notre
        <a href="/gard"> page Gard</a> et nous décrire votre organisation. Nous vous proposerons ensuite un scénario
        mêlant formations à Nîmes et interventions sur site.
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


