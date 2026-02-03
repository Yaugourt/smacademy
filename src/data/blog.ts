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
    slug: "formation-sst-nimes-gard-guide-complet-2026",
    title: "Formation SST à Nîmes (Gard) : Guide complet 2026 – Devenir Sauveteur Secouriste du Travail",
    excerpt:
      "Tout savoir sur la formation SST à Nîmes : obligations légales, programme, durée, prix et financement. Devenez Sauveteur Secouriste du Travail certifié INRS dans le Gard.",
    date: "2026-02-03T10:00:00.000Z",
    coverImage: "/smAcademy/sst.jpeg",
    category: "SST",
    tags: ["SST", "Sécurité", "Nîmes", "Gard", "Formation obligatoire", "INRS"],
    author: "SM Academy",
    contentHtml: \`
      <p>
        La <strong>formation SST (Sauveteur Secouriste du Travail)</strong> est une obligation légale pour de nombreuses entreprises.
        Si vous êtes basé à <strong>Nîmes</strong> ou dans le <strong>Gard (30)</strong>, ce guide complet vous explique tout ce qu'il faut
        savoir pour former vos équipes ou vous former vous-même.
      </p>

      <h2>1. Qu'est-ce que la formation SST ?</h2>
      <p>
        Le SST est un salarié capable d'intervenir lors d'un accident du travail et de participer à la prévention des risques
        professionnels dans son entreprise. La formation est encadrée par l'<strong>INRS</strong> (Institut National de Recherche et de Sécurité)
        et délivre un <strong>certificat SST valable 24 mois</strong>.
      </p>

      <h2>2. Obligation légale : que dit le Code du Travail ?</h2>
      <p>
        Le <strong>Code du Travail (article R4224-15)</strong> impose la présence d'au moins un sauveteur secouriste dans :
      </p>
      <ul>
        <li>Chaque atelier où sont effectués des <strong>travaux dangereux</strong></li>
        <li>Chaque chantier de <strong>plus de 20 personnes</strong> pendant plus de 15 jours avec travaux dangereux</li>
      </ul>
      <p>
        Dans le <strong>Gard</strong>, les entreprises du BTP, de l'industrie, de la logistique et des services sont particulièrement concernées.
      </p>

      <h2>3. Programme de la formation SST initiale</h2>
      <p>
        La formation SST initiale dure <strong>14 heures (2 jours)</strong> et couvre :
      </p>
      <ul>
        <li><strong>Le cadre juridique</strong> : rôle du SST, responsabilités</li>
        <li><strong>La protection</strong> : analyser la situation, supprimer ou isoler le danger</li>
        <li><strong>L'examen de la victime</strong> : reconnaître les signes vitaux</li>
        <li><strong>L'alerte</strong> : qui alerter, comment transmettre les informations</li>
        <li><strong>Les gestes de secours</strong> : PLS, RCP, utilisation du DAE, hémorragies, brûlures, plaies</li>
      </ul>

      <h2>4. Recyclage MAC SST : maintenir ses compétences</h2>
      <p>
        Le certificat SST est valable <strong>24 mois</strong>. Pour le prolonger, il faut suivre un recyclage appelé
        <strong>MAC SST (Maintien et Actualisation des Compétences)</strong> :
      </p>
      <ul>
        <li><strong>Durée</strong> : 7 heures (1 jour)</li>
        <li><strong>Contenu</strong> : révision des gestes, actualisation des recommandations, mises en situation</li>
        <li><strong>Validité</strong> : prolonge le certificat de 24 mois</li>
      </ul>

      <h2>5. Prix et financement de la formation SST à Nîmes</h2>
      <p>
        Chez SM Academy à Nîmes, la formation SST est proposée à <strong>250 € par stagiaire</strong>. Plusieurs dispositifs
        permettent de financer cette formation :
      </p>
      <ul>
        <li><strong>OPCO</strong> : prise en charge pour les salariés via l'opérateur de compétences de votre branche</li>
        <li><strong>France Travail</strong> : aides AIF/POEI pour les demandeurs d'emploi</li>
        <li><strong>Plan de formation entreprise</strong> : budget formation interne</li>
      </ul>

      <h2>6. Pourquoi choisir SM Academy pour votre formation SST dans le Gard ?</h2>
      <ul>
        <li><strong>Centre certifié Qualiopi</strong> : formations finançables par les fonds publics</li>
        <li><strong>Formateurs certifiés INRS</strong> : expertise et pédagogie reconnues</li>
        <li><strong>Sessions régulières</strong> à Nîmes et en intra dans tout le Gard (Alès, Bagnols, Uzès, Beaucaire)</li>
        <li><strong>Accompagnement administratif</strong> : montage des dossiers OPCO et France Travail</li>
      </ul>

      <p>
        Découvrez notre <a href="/formations/sst">formation SST à Nîmes</a> et contactez-nous pour planifier vos sessions.
        Pour les entreprises du <strong>Gard</strong>, consultez également notre <a href="/gard">page dédiée au département</a>.
      </p>
    \`,
  },
  {
    slug: "habilitation-electrique-h0b0-nimes-guide-2026",
    title: "Habilitation Électrique H0B0 à Nîmes : Formation obligatoire pour non-électriciens (Guide 2026)",
    excerpt:
      "Formation habilitation électrique H0B0 à Nîmes (Gard) : norme NF C18-510, programme, durée 7h, prix et financement. Indispensable pour les non-électriciens.",
    date: "2026-02-02T10:00:00.000Z",
    coverImage: "/smAcademy/IMG_3076.jpeg",
    category: "Électricité",
    tags: ["Habilitation électrique", "H0B0", "Sécurité", "Nîmes", "Gard", "NF C18-510"],
    author: "SM Academy",
    contentHtml: \`
      <p>
        L'<strong>habilitation électrique H0B0</strong> est obligatoire pour tout personnel non-électricien amené à travailler
        à proximité d'installations électriques. Si vous êtes à <strong>Nîmes</strong> ou dans le <strong>Gard</strong>,
        voici tout ce qu'il faut savoir sur cette formation réglementaire.
      </p>

      <h2>1. Qu'est-ce que l'habilitation électrique H0B0 ?</h2>
      <p>
        L'habilitation électrique est la <strong>reconnaissance par l'employeur</strong> de la capacité d'une personne à accomplir
        en sécurité des tâches à proximité d'installations électriques. Elle est encadrée par la <strong>norme NF C18-510</strong>
        et le <strong>décret 2010-1118</strong>.
      </p>
      <p>
        Le symbole <strong>H0B0</strong> signifie :
      </p>
      <ul>
        <li><strong>H0</strong> : travaux d'ordre non électrique en haute tension (voisinage)</li>
        <li><strong>B0</strong> : travaux d'ordre non électrique en basse tension</li>
      </ul>

      <h2>2. Qui doit suivre la formation H0B0 ?</h2>
      <p>
        Cette formation s'adresse aux <strong>non-électriciens</strong> qui peuvent être exposés au risque électrique :
      </p>
      <ul>
        <li>Peintres, maçons, plaquistes intervenant près de tableaux électriques</li>
        <li>Agents d'entretien, gardiens, agents de sécurité</li>
        <li>Personnel de maintenance non électricien</li>
        <li>Intérimaires, sous-traitants accédant à des locaux électriques</li>
      </ul>
      <p>
        Dans le <strong>Gard</strong>, les entreprises du BTP, de l'industrie et des services sont particulièrement concernées.
      </p>

      <h2>3. Programme de la formation H0B0 (7 heures)</h2>
      <p>
        La formation habilitation électrique H0B0 dure <strong>1 jour (7 heures)</strong> et couvre :
      </p>
      <ul>
        <li><strong>Notions d'électricité</strong> : tension, intensité, résistance, courant alternatif/continu</li>
        <li><strong>Effets du courant sur le corps humain</strong> : électrisation, électrocution, brûlures</li>
        <li><strong>Zones d'environnement</strong> : domaines de tension, distances de sécurité</li>
        <li><strong>Équipements de protection</strong> : EPI et EPC</li>
        <li><strong>Conduite à tenir en cas d'accident</strong> : incendie, électrisation</li>
        <li><strong>Évaluation</strong> : QCM théorique et mise en situation pratique</li>
      </ul>

      <h2>4. Validité et recyclage</h2>
      <p>
        L'habilitation électrique H0B0 est valable <strong>3 ans</strong> pour le même poste de travail.
        Un <strong>recyclage est obligatoire</strong> :
      </p>
      <ul>
        <li>Tous les 3 ans pour le même poste</li>
        <li>En cas de changement de fonction ou d'entreprise</li>
        <li>En cas de restriction médicale</li>
        <li>Après un accident électrique</li>
      </ul>

      <h2>5. Prix et financement à Nîmes</h2>
      <p>
        Chez SM Academy, la formation H0B0 est proposée à <strong>190 € par stagiaire</strong>. Financement possible :
      </p>
      <ul>
        <li><strong>OPCO</strong> : prise en charge pour les salariés</li>
        <li><strong>France Travail</strong> : aides pour les demandeurs d'emploi</li>
        <li><strong>Plan de formation entreprise</strong></li>
      </ul>

      <h2>6. Formation H0B0 dans le Gard avec SM Academy</h2>
      <p>
        Notre centre de formation à <strong>Nîmes</strong> propose des sessions régulières d'habilitation électrique H0B0.
        Nous intervenons également en <strong>intra</strong> dans tout le Gard : Alès, Bagnols-sur-Cèze, Beaucaire, Uzès, etc.
      </p>
      <p>
        Découvrez notre <a href="/formations/habilitation-electrique-h0b0">formation H0B0 à Nîmes</a> et contactez-nous
        pour organiser vos sessions. Pour plus d'informations sur nos interventions dans le département,
        consultez notre <a href="/gard">page Gard</a>.
      </p>
    \`,
  },
  {
    slug: "cpf-formation-nimes-gard-guide-utilisation-2026",
    title: "CPF 2026 : Comment utiliser votre Compte Personnel de Formation à Nîmes (Gard)",
    excerpt:
      "Guide complet CPF 2026 : comment consulter vos droits, choisir une formation éligible à Nîmes et financer votre projet professionnel dans le Gard.",
    date: "2026-02-01T10:00:00.000Z",
    coverImage: "/smAcademy/IMG_3092.png",
    category: "Financements",
    tags: ["CPF", "Financement", "Nîmes", "Gard", "Formation professionnelle"],
    author: "SM Academy",
    contentHtml: \`
      <p>
        Le <strong>Compte Personnel de Formation (CPF)</strong> est un dispositif qui permet à tout actif de financer
        ses formations tout au long de sa vie professionnelle. Si vous êtes à <strong>Nîmes</strong> ou dans le <strong>Gard</strong>,
        voici comment utiliser vos droits CPF en 2026.
      </p>

      <h2>1. Qu'est-ce que le CPF ?</h2>
      <p>
        Le CPF est un compte individuel alimenté en euros chaque année pour les salariés et indépendants.
        Il remplace le DIF (Droit Individuel à la Formation) depuis 2015.
      </p>
      <ul>
        <li><strong>Alimentation</strong> : 500 € par an pour un temps plein (plafonné à 5 000 €)</li>
        <li><strong>Majoré</strong> : 800 € par an pour les salariés peu qualifiés (plafonné à 8 000 €)</li>
        <li><strong>Portabilité</strong> : vos droits vous suivent même si vous changez d'employeur</li>
      </ul>

      <h2>2. Comment consulter vos droits CPF ?</h2>
      <p>
        Pour connaître le montant de vos droits, rendez-vous sur <strong>moncompteformation.gouv.fr</strong> :
      </p>
      <ol>
        <li>Connectez-vous avec FranceConnect (identifiants impots.gouv.fr ou Ameli)</li>
        <li>Consultez votre solde CPF en euros</li>
        <li>Recherchez les formations éligibles</li>
      </ol>

      <h2>3. Quelles formations sont éligibles au CPF ?</h2>
      <p>
        Seules les formations certifiantes ou qualifiantes inscrites au <strong>RNCP</strong> ou au <strong>Répertoire Spécifique</strong>
        sont éligibles. Dans le Gard, les formations les plus demandées sont :
      </p>
      <ul>
        <li><strong>Formations sécurité</strong> : SST, habilitations électriques</li>
        <li><strong>Formations techniques</strong> : IRVE, fibre optique</li>
        <li><strong>Bureautique</strong> : Pack Office, Excel, Word</li>
        <li><strong>Langues</strong> : anglais, espagnol</li>
      </ul>

      <h2>4. Attention aux arnaques CPF</h2>
      <p>
        Le CPF est la cible de nombreuses arnaques. <strong>Ne communiquez jamais</strong> vos identifiants par téléphone
        ou par email. Aucun organisme sérieux ne vous demandera de vous inscrire immédiatement.
      </p>
      <ul>
        <li>Méfiez-vous des appels non sollicités</li>
        <li>Vérifiez que l'organisme est certifié <strong>Qualiopi</strong></li>
        <li>Prenez le temps de comparer les offres</li>
      </ul>

      <h2>5. Financer sa formation à Nîmes avec le CPF</h2>
      <p>
        Si votre solde CPF ne couvre pas la totalité de la formation, plusieurs options existent :
      </p>
      <ul>
        <li><strong>Reste à charge personnel</strong> : vous complétez la différence</li>
        <li><strong>Abondement employeur</strong> : votre entreprise peut compléter</li>
        <li><strong>Abondement France Travail</strong> : pour les demandeurs d'emploi</li>
        <li><strong>Abondement Région Occitanie</strong> : selon les dispositifs en cours</li>
      </ul>

      <h2>6. SM Academy : formations éligibles CPF dans le Gard</h2>
      <p>
        Chez SM Academy à <strong>Nîmes</strong>, plusieurs de nos formations sont finançables par différents dispositifs
        (OPCO, France Travail, plan de formation entreprise). Nous vous accompagnons dans vos démarches de financement.
      </p>
      <p>
        Consultez notre <a href="/formations">catalogue de formations</a> et contactez-nous pour étudier
        les possibilités de financement adaptées à votre situation.
      </p>
    \`,
  },
  {
    slug: "metiers-qui-recrutent-nimes-gard-2026",
    title: "Top 10 des métiers qui recrutent à Nîmes et dans le Gard en 2026",
    excerpt:
      "Découvrez les métiers en tension dans le Gard : technicien fibre optique, installateur IRVE, SST, électricien... et les formations pour y accéder à Nîmes.",
    date: "2026-01-30T10:00:00.000Z",
    coverImage: "/smAcademy/fibre.jpeg",
    category: "Emploi",
    tags: ["Emploi", "Nîmes", "Gard", "Reconversion", "Métiers en tension"],
    author: "SM Academy",
    contentHtml: \`
      <p>
        Le marché de l'emploi dans le <strong>Gard (30)</strong> évolue rapidement avec la transition énergétique et numérique.
        Voici les <strong>métiers qui recrutent le plus à Nîmes</strong> et dans le département en 2026, ainsi que les formations
        pour y accéder.
      </p>

      <h2>1. Technicien Fibre Optique</h2>
      <p>
        Le déploiement de la fibre continue dans le Gard, notamment dans les zones rurales (Cévennes, Petite Camargue).
        Les techniciens D3 (raccordement abonné) sont très recherchés.
      </p>
      <ul>
        <li><strong>Salaire débutant</strong> : 1 700 € à 2 000 € brut/mois</li>
        <li><strong>Formation</strong> : <a href="/formations/fibre-optique-d3">Fibre Optique D3 (10 jours)</a></li>
        <li><strong>Débouchés</strong> : Sous-traitants opérateurs, entreprises TP, artisans</li>
      </ul>

      <h2>2. Installateur IRVE (Bornes de recharge)</h2>
      <p>
        Avec l'essor des véhicules électriques, les électriciens qualifiés IRVE sont en forte demande.
        Le Gard voit se multiplier les projets en copropriétés, entreprises et chez les particuliers.
      </p>
      <ul>
        <li><strong>Salaire</strong> : 2 200 € à 3 000 € brut/mois</li>
        <li><strong>Formation</strong> : IRVE niveaux P1/P2/P3</li>
        <li><strong>Débouchés</strong> : Électriciens, artisans, entreprises d'installation</li>
      </ul>

      <h2>3. Sauveteur Secouriste du Travail (SST)</h2>
      <p>
        Les entreprises du Gard recherchent des salariés formés SST pour respecter leurs obligations légales.
        C'est une compétence valorisante pour tout CV.
      </p>
      <ul>
        <li><strong>Formation</strong> : <a href="/formations/sst">SST Initiale (2 jours)</a></li>
        <li><strong>Avantage</strong> : Compétence transversale, applicable dans tous les secteurs</li>
      </ul>

      <h2>4. Agent de prévention et sécurité</h2>
      <p>
        Les événements, commerces et sites industriels du Gard recrutent des agents de sécurité.
        La formation SST est souvent un prérequis.
      </p>

      <h2>5. Technicien de maintenance</h2>
      <p>
        L'industrie et le tertiaire recherchent des techniciens polyvalents avec habilitations électriques.
      </p>
      <ul>
        <li><strong>Formation</strong> : <a href="/formations/habilitation-electrique-h0b0">Habilitation H0B0</a> ou BS/BE</li>
      </ul>

      <h2>6. Aide à domicile / Auxiliaire de vie</h2>
      <p>
        Le vieillissement de la population dans le Gard crée une forte demande.
        La formation Bientraitance est un plus apprécié.
      </p>
      <ul>
        <li><strong>Formation</strong> : <a href="/formations/bientraitance">Bientraitance (1 jour)</a></li>
      </ul>

      <h2>7. Conducteur d'engins TP</h2>
      <p>
        Les chantiers de travaux publics dans le Gard nécessitent des conducteurs avec AIPR.
      </p>
      <ul>
        <li><strong>Formation</strong> : <a href="/formations/aipr-operateur">AIPR Opérateur (1 jour)</a></li>
      </ul>

      <h2>8. Employé administratif / Assistant bureautique</h2>
      <p>
        La maîtrise du Pack Office reste essentielle pour les emplois de bureau.
      </p>
      <ul>
        <li><strong>Formation</strong> : <a href="/formations/pack-office">Pack Office Expert (5 jours)</a></li>
      </ul>

      <h2>9. Manutentionnaire / Préparateur de commandes</h2>
      <p>
        La logistique recrute dans le Gard. La formation Gestes et Postures est recommandée.
      </p>
      <ul>
        <li><strong>Formation</strong> : <a href="/formations/gestes-et-postures">Gestes et Postures (1 jour)</a></li>
      </ul>

      <h2>10. Formateur professionnel</h2>
      <p>
        Avec l'essor de la formation continue, les formateurs sont recherchés dans tous les domaines.
      </p>

      <h2>Se former à Nîmes pour accéder à ces métiers</h2>
      <p>
        SM Academy à <strong>Nîmes</strong> propose des formations courtes et certifiantes pour accéder rapidement
        à ces métiers en tension. Nos formations sont finançables par OPCO et France Travail.
      </p>
      <p>
        Consultez notre <a href="/formations">catalogue complet</a> ou notre <a href="/gard">page Gard</a>
        pour découvrir nos interventions dans le département.
      </p>
    \`,
  },
  {
    slug: "reconversion-professionnelle-nimes-gard-guide-2026",
    title: "Reconversion professionnelle à Nîmes (Gard) : Guide complet 2026",
    excerpt:
      "Comment réussir sa reconversion professionnelle dans le Gard : métiers porteurs, formations courtes à Nîmes, financement et accompagnement.",
    date: "2026-01-28T10:00:00.000Z",
    coverImage: "/smAcademy/IMG_6244.jpeg",
    category: "Reconversion",
    tags: ["Reconversion", "Nîmes", "Gard", "Formation professionnelle", "Emploi"],
    author: "SM Academy",
    contentHtml: \`
      <p>
        Vous envisagez une <strong>reconversion professionnelle</strong> à <strong>Nîmes</strong> ou dans le <strong>Gard</strong> ?
        Ce guide vous présente les étapes clés, les métiers porteurs et les formations courtes pour réussir votre transition.
      </p>

      <h2>1. Pourquoi se reconvertir en 2026 ?</h2>
      <p>
        La reconversion professionnelle n'est plus un tabou. Elle répond à plusieurs motivations :
      </p>
      <ul>
        <li><strong>Quête de sens</strong> : exercer un métier aligné avec ses valeurs</li>
        <li><strong>Évolution du marché</strong> : certains métiers disparaissent, d'autres émergent</li>
        <li><strong>Opportunités locales</strong> : le Gard recrute dans les métiers techniques</li>
        <li><strong>Amélioration salariale</strong> : les métiers en tension offrent de bonnes rémunérations</li>
      </ul>

      <h2>2. Les métiers porteurs pour une reconversion dans le Gard</h2>
      <p>
        Certains secteurs recrutent activement dans le département :
      </p>
      <ul>
        <li><strong>Fibre optique</strong> : technicien D3, chef d'équipe fibre</li>
        <li><strong>Électricité</strong> : installateur IRVE, électricien habilité</li>
        <li><strong>Sécurité</strong> : agent de prévention, SST en entreprise</li>
        <li><strong>Aide à la personne</strong> : auxiliaire de vie, aide-soignant</li>
        <li><strong>BTP</strong> : conducteur d'engins, ouvrier qualifié</li>
      </ul>

      <h2>3. Formations courtes pour une reconversion rapide</h2>
      <p>
        Contrairement aux idées reçues, une reconversion ne nécessite pas forcément des années d'études.
        Des formations courtes permettent d'être opérationnel rapidement :
      </p>
      <ul>
        <li><strong>Fibre optique D3</strong> : 10 jours pour devenir technicien raccordement</li>
        <li><strong>SST</strong> : 2 jours pour obtenir le certificat Sauveteur Secouriste</li>
        <li><strong>Habilitation électrique</strong> : 1 à 3 jours selon le niveau</li>
        <li><strong>AIPR</strong> : 1 jour pour travailler sur les chantiers</li>
        <li><strong>Pack Office</strong> : 5 jours pour maîtriser la bureautique</li>
      </ul>

      <h2>4. Comment financer sa reconversion ?</h2>
      <p>
        Plusieurs dispositifs existent pour financer votre projet :
      </p>
      <ul>
        <li><strong>France Travail</strong> : AIF, POEI/POEC pour les demandeurs d'emploi</li>
        <li><strong>Région Occitanie</strong> : aides à la reconversion dans les métiers en tension</li>
        <li><strong>Transition Pro</strong> : pour les salariés en CDI (ex-FONGECIF)</li>
        <li><strong>OPCO</strong> : via le plan de développement des compétences</li>
      </ul>

      <h2>5. Les étapes d'une reconversion réussie</h2>
      <ol>
        <li><strong>Bilan de compétences</strong> : identifier vos atouts et motivations</li>
        <li><strong>Étude du marché local</strong> : quels métiers recrutent dans le Gard ?</li>
        <li><strong>Choix de la formation</strong> : courte, certifiante, finançable</li>
        <li><strong>Montage du dossier</strong> : financement, planning, accompagnement</li>
        <li><strong>Formation</strong> : acquisition des compétences</li>
        <li><strong>Recherche d'emploi</strong> : CV, réseau, candidatures</li>
      </ol>

      <h2>6. SM Academy vous accompagne à Nîmes</h2>
      <p>
        Notre centre de formation à <strong>Nîmes</strong> propose des parcours adaptés aux reconversions :
      </p>
      <ul>
        <li>Formations courtes et certifiantes</li>
        <li>Accompagnement au financement</li>
        <li>Conseils sur les débouchés locaux</li>
        <li>Réseau d'entreprises partenaires dans le Gard</li>
      </ul>
      <p>
        Consultez notre <a href="/formations">catalogue de formations</a> ou contactez-nous pour un conseil personnalisé.
        Découvrez également notre <a href="/gard">page Gard</a> pour nos interventions dans le département.
      </p>
    \`,
  },
  {
    slug: "formation-irve-2025-nouvelles-normes-certifications",
    title: "Formation IRVE 2025 : Nouvelles normes et certifications pour les installateurs",
    excerpt:
      "Découvrez les évolutions 2025 des formations IRVE à Nîmes (Gard) : nouvelles normes, niveaux de qualification P1/P2/P3 et perspectives d'emploi pour les électriciens.",
    date: "2025-01-02T10:00:00.000Z",
    coverImage: "/blog/irve-1.jpeg",
    category: "IRVE",
    tags: ["IRVE", "Électricité", "Normes", "2025", "Nîmes", "Gard"],
    author: "SM Academy",
    contentHtml: `
      <p>
        Le marché de la <strong>recharge de véhicules électriques</strong> connaît une croissance exponentielle en 2025.
        Avec l'obligation pour les parkings neufs d'intégrer des bornes et les aides à l'installation pour les particuliers,
        les électriciens formés IRVE sont très recherchés dans le <strong>Gard</strong> et toute la région <strong>Occitanie</strong>.
      </p>

      <h3>1. Évolutions réglementaires IRVE 2025</h3>
      <p>
        Les normes IRVE évoluent régulièrement pour intégrer les nouvelles technologies (charge bidirectionnelle, pilotage intelligent)
        et renforcer la sécurité. En 2025, les points clés sont :
      </p>
      <ul>
        <li><strong>NF C 15-100</strong> mise à jour pour les installations résidentielles et tertiaires.</li>
        <li>Exigences renforcées sur le <strong>dimensionnement des protections</strong> et la gestion dynamique de puissance.</li>
        <li>Nouvelles recommandations pour les <strong>bornes AC et DC</strong> en espace public.</li>
      </ul>

      <h3>2. Les 3 niveaux de qualification IRVE</h3>
      <p>
        Pour intervenir légalement sur des installations IRVE, l'électricien doit obtenir une qualification adaptée :
      </p>
      <ul>
        <li><strong>P1 (niveau 1)</strong> : Installation de bornes jusqu'à 22 kW sans configuration spécifique.</li>
        <li><strong>P2 (niveau 2)</strong> : Installation de bornes jusqu'à 22 kW avec configuration pour la supervision et le pilotage énergétique.</li>
        <li><strong>P3 (niveau 3)</strong> : Installation de bornes de recharge rapide (DC) au-delà de 22 kW.</li>
      </ul>

      <h3>3. Débouchés dans le Gard et en Occitanie</h3>
      <p>
        Le département du <strong>Gard (30)</strong> et la ville de <strong>Nîmes</strong> voient se multiplier les projets :
      </p>
      <ul>
        <li>Équipement des copropriétés et résidences neuves.</li>
        <li>Déploiement de bornes sur les parkings d'entreprises et commerces.</li>
        <li>Installation chez les particuliers avec les aides Advenir et MaPrimeRénov'.</li>
      </ul>
      <p>
        Les électriciens qualifiés IRVE peuvent facturer leurs prestations entre <strong>150€ et 300€ par borne</strong>
        pour l'installation, avec un volume de demandes en hausse constante.
      </p>

      <h3>4. Se former IRVE à Nîmes avec SM Academy</h3>
      <p>
        Notre <a href="/formations/irve">formation IRVE à Nîmes</a> couvre les niveaux P1 et P2 sur 3 jours.
        Elle alterne théorie (normes, schémas, dimensionnement) et pratique sur notre plateau technique équipé de bornes réelles.
      </p>
      <p>
        La formation est <strong>finançable par OPCO</strong> pour les salariés ou par <strong>France Travail</strong>
        pour les demandeurs d'emploi. Nous accompagnons chaque stagiaire dans le montage de son dossier.
      </p>
      <p>
        Pour les entreprises du <strong>Gard</strong> (Nîmes, Alès, Bagnols-sur-Cèze, Uzès), nous proposons également
        des sessions intra directement sur vos sites. Découvrez notre
        <a href="/gard">offre de formation dans le Gard</a>.
      </p>
    `,
  },
  {
    slug: "reconversion-fibre-optique-guide-complet-gard",
    title: "Reconversion Fibre Optique dans le Gard : Salaires, formation et débouchés 2025",
    excerpt:
      "Guide complet pour votre reconversion technicien fibre optique dans le Gard (Nîmes, Alès, Bagnols) : salaires, formation D3, débouchés et financement.",
    date: "2025-01-01T10:00:00.000Z",
    coverImage: "/blog/formationnimes.jpg",
    category: "Fibre",
    tags: ["Fibre optique", "Reconversion", "Gard", "Nîmes", "Emploi", "Salaire"],
    author: "SM Academy",
    contentHtml: `
      <p>
        La <strong>fibre optique</strong> continue son déploiement massif en France, et le <strong>Gard</strong> ne fait pas exception.
        Le département vise une couverture 100% fibre d'ici 2025-2026, créant une forte demande de techniciens qualifiés.
        Pour les personnes en reconversion professionnelle, c'est une opportunité concrète d'accéder rapidement à l'emploi.
      </p>

      <h3>1. Le marché de la fibre dans le Gard</h3>
      <p>
        Le plan France Très Haut Débit et les investissements des opérateurs (Orange, SFR, Free, Bouygues) génèrent un besoin
        constant de techniciens pour :
      </p>
      <ul>
        <li>Le <strong>déploiement horizontal</strong> (tirage de câbles, pose de boîtiers).</li>
        <li>Le <strong>raccordement D3</strong> (branchement abonné, soudure, tests).</li>
        <li>La <strong>maintenance</strong> et le dépannage des réseaux existants.</li>
      </ul>
      <p>
        Les zones rurales du Gard (Cévennes, Petite Camargue) sont particulièrement concernées par les chantiers en cours.
      </p>

      <h3>2. Salaires technicien fibre optique dans le Gard</h3>
      <p>
        Les rémunérations varient selon l'expérience et le statut :
      </p>
      <ul>
        <li><strong>Débutant</strong> (après formation D3) : 1 700€ à 2 000€ brut/mois.</li>
        <li><strong>Confirmé</strong> (2-3 ans d'expérience) : 2 200€ à 2 600€ brut/mois.</li>
        <li><strong>Chef d'équipe / Technicien expert</strong> : 2 800€ à 3 200€ brut/mois.</li>
        <li><strong>Indépendant (sous-traitant)</strong> : facturation à la prise (8€ à 15€/prise selon complexité).</li>
      </ul>
      <p>
        À noter : les techniciens disposant de <strong>plusieurs compétences</strong> (fibre + IRVE par exemple) sont particulièrement recherchés.
      </p>

      <h3>3. La formation Fibre Optique D3 à Nîmes</h3>
      <p>
        La <a href="/formations/fibre-optique-d3">formation Fibre Optique D3</a> dispensée par SM Academy à Nîmes
        dure 2 à 3 jours et couvre :
      </p>
      <ul>
        <li>L'architecture FTTH et les règles de sécurité.</li>
        <li>Les techniques de raccordement (soudeuse, connecteurs, jarretières).</li>
        <li>Les mesures et contrôles qualité (OTDR, photométrie).</li>
      </ul>
      <p>
        À l'issue de la formation, vous recevez une <strong>attestation de compétences</strong> reconnue par les donneurs d'ordre.
      </p>

      <h3>4. Financer sa reconversion</h3>
      <p>
        Plusieurs dispositifs permettent de financer votre formation fibre optique :
      </p>
      <ul>
        <li><strong>France Travail</strong> : AIF, POEI/POEC pour les demandeurs d'emploi.</li>
        <li><strong>Région Occitanie</strong> : aides à la reconversion dans les métiers en tension.</li>
        <li><strong>OPCO</strong> : pour les salariés en transition professionnelle.</li>
      </ul>
      <p>
        Notre équipe vous accompagne dans toutes les démarches administratives. Contactez-nous via notre
        <a href="/gard">page Gard</a> pour un conseil personnalisé.
      </p>

      <h3>5. Perspectives d'emploi à Nîmes, Alès et Bagnols</h3>
      <p>
        Les entreprises qui recrutent des techniciens fibre dans le Gard incluent :
      </p>
      <ul>
        <li>Les sous-traitants des opérateurs (Circet, Scopelec, Solutions 30, etc.).</li>
        <li>Les entreprises locales de travaux publics et réseaux.</li>
        <li>Les artisans électriciens diversifiant leur activité.</li>
      </ul>
      <p>
        Avec une formation de quelques jours et de la motivation, vous pouvez être opérationnel et embauché
        en moins d'un mois.
      </p>
    `,
  },
  {
    slug: "mac-sst-vs-sst-initiale-quelle-formation-choisir",
    title: "MAC SST vs SST Initiale : Quelle formation choisir à Nîmes ?",
    excerpt:
      "Différences entre formation SST initiale et recyclage MAC SST à Nîmes (Gard) : durée, programme, validité et obligations employeur.",
    date: "2024-12-30T10:00:00.000Z",
    coverImage: "/blog/sst.jpg",
    category: "SST",
    tags: ["SST", "MAC SST", "Sécurité", "Nîmes", "Gard", "Recyclage"],
    author: "SM Academy",
    contentHtml: `
      <p>
        Vous devez former vos salariés au <strong>Sauveteur Secouriste du Travail (SST)</strong> mais vous hésitez
        entre la formation initiale et le recyclage (MAC SST) ? Cet article clarifie les différences et vous aide
        à choisir la bonne formule pour votre équipe dans le <strong>Gard</strong>.
      </p>

      <h3>1. SST Initiale : pour les nouveaux sauveteurs</h3>
      <p>
        La <strong>formation SST initiale</strong> s'adresse aux personnes n'ayant jamais été certifiées SST
        ou dont le certificat a expiré depuis plus de 24 mois.
      </p>
      <ul>
        <li><strong>Durée</strong> : 14 heures (2 jours consécutifs).</li>
        <li><strong>Programme</strong> : Cadre juridique, protection/examen/alerte, gestes de secours complets (PLS, RCP, DAE, hémorragies, brûlures, etc.).</li>
        <li><strong>Validation</strong> : Épreuves certificatives en fin de formation.</li>
        <li><strong>Validité</strong> : 24 mois.</li>
      </ul>

      <h3>2. MAC SST : pour maintenir ses compétences</h3>
      <p>
        Le <strong>MAC SST (Maintien et Actualisation des Compétences)</strong> est le recyclage obligatoire
        pour les SST déjà certifiés.
      </p>
      <ul>
        <li><strong>Durée</strong> : 7 heures (1 jour).</li>
        <li><strong>Programme</strong> : Révision des gestes, actualisation des recommandations, mises en situation.</li>
        <li><strong>Prérequis</strong> : Être titulaire d'un certificat SST valide (moins de 24 mois).</li>
        <li><strong>Validité</strong> : Prolonge le certificat de 24 mois supplémentaires.</li>
      </ul>

      <h3>3. Tableau comparatif</h3>
      <table>
        <thead>
          <tr><th>Critère</th><th>SST Initiale</th><th>MAC SST</th></tr>
        </thead>
        <tbody>
          <tr><td>Durée</td><td>2 jours (14h)</td><td>1 jour (7h)</td></tr>
          <tr><td>Public</td><td>Nouveaux SST</td><td>SST à recycler</td></tr>
          <tr><td>Prérequis</td><td>Aucun</td><td>Certificat SST valide</td></tr>
          <tr><td>Validité obtenue</td><td>24 mois</td><td>24 mois</td></tr>
          <tr><td>Tarif indicatif</td><td>150-200€</td><td>100-150€</td></tr>
        </tbody>
      </table>

      <h3>4. Obligations de l'employeur</h3>
      <p>
        Le Code du travail impose à l'employeur de disposer de personnel formé aux premiers secours.
        Les recommandations INRS/CARSAT préconisent :
      </p>
      <ul>
        <li>Au minimum <strong>1 SST par équipe ou zone de travail</strong>.</li>
        <li>Une <strong>redondance</strong> pour couvrir absences et congés.</li>
        <li>Un <strong>recyclage avant expiration</strong> du certificat (tous les 24 mois maximum).</li>
      </ul>

      <h3>5. Se former SST à Nîmes avec SM Academy</h3>
      <p>
        Notre <a href="/formations/sst">formation SST à Nîmes</a> est dispensée par des formateurs certifiés INRS.
        Nous proposons :
      </p>
      <ul>
        <li>Sessions <strong>inter-entreprises</strong> à Nîmes avec des dates régulières.</li>
        <li>Sessions <strong>intra</strong> dans vos locaux partout dans le Gard (Alès, Bagnols, Beaucaire, Uzès).</li>
        <li>Accompagnement au <strong>financement OPCO</strong> ou France Travail.</li>
      </ul>
      <p>
        Pour planifier les formations de votre équipe, contactez-nous via notre
        <a href="/gard">page Gard</a> ou appelez le 09 82 77 44 44.
      </p>
    `,
  },

  {
    slug: "guide-irve-normes-installation",
    title: "IRVE: normes et bonnes pratiques d'installation",
    excerpt:
      "IRVE à Nîmes (Gard): panorama des normes et points de vigilance pour l'installation et la mise en service.",
    date: new Date().toISOString(),
    coverImage: "/blog/irve-1.jpeg",
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
    coverImage: "/blog/sst.jpg",
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
    coverImage: "/blog/financement.jpg",
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
    coverImage: "/blog/habilitationelectrique.png",
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
    coverImage: "/blog/AIPR.png",
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
    coverImage: "/blog/tms.jpg",
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
    coverImage: "/blog/qualiopi.png",
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
    coverImage: "/blog/choixformation.webp",
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
    coverImage: "/blog/bonnepratiqueformationpro.png",
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
    coverImage: "/blog/formationnimes.jpg",
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


