export const metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité (RGPD) de SM Academy.",
};

export default function ConfidentialitePage() {
  return (
    <div className="mx-auto w-full max-w-screen-md px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Politique de confidentialité</h1>
      <div className="prose mt-6 max-w-none dark:prose-invert">
        <h2>Responsable de traitement</h2>
        <p>
          SM Academy (SAS – 94 Avenue du Docteur Fleming, 30900 Nîmes) est responsable des traitements opérés via le site
          smacademy.fr. Contact RGPD: <a href="mailto:contact@smtechnologie.fr">contact@smtechnologie.fr</a>.
        </p>
        <h2>Finalités et bases légales</h2>
        <ul>
          <li>Gestion des demandes de contact et de rappel: exécution de mesures précontractuelles.</li>
          <li>Prospection et communication (si consentie): consentement ou intérêt légitime.</li>
          <li>Sécurité du site et prévention de la fraude: intérêt légitime.</li>
          <li>Affichage de contenus externes (Google Maps, Calendly): consentement.</li>
        </ul>
        <h2>Données traitées</h2>
        <p>Identité (nom), coordonnées (téléphone, e-mail), préférences de rappel, message, métadonnées techniques (IP tronquée, user-agent), paramètres UTM.</p>
        <h2>Destinataires</h2>
        <p>Équipe interne dûment habilitée et sous-traitants techniques (hébergeur, outils d’e-mailing). Pas de vente de données.</p>
        <h2>Transferts hors UE</h2>
        <p>Certains prestataires peuvent être situés hors UE. Lorsque c’est le cas, des garanties appropriées sont mises en place (clauses contractuelles types).</p>
        <h2>Durées de conservation</h2>
        <ul>
          <li>Prospects: 3 ans après le dernier contact.</li>
          <li>Logs techniques: 6 à 12 mois.</li>
          <li>Données contractuelles/comptables: durées légales applicables.</li>
        </ul>
        <h2>Vos droits</h2>
        <p>Accès, rectification, effacement, limitation, opposition, portabilité. Exercer vos droits: <a href="mailto:contact@smtechnologie.fr">contact@smtechnologie.fr</a>. Réclamation: CNIL (cnil.fr).</p>
        <h2>Cookies et traceurs</h2>
        <p>
          Les cookies non essentiels (Google Maps, Calendly, mesure d’audience) ne sont déposés qu’avec votre consentement.
          Vous pouvez modifier votre choix à tout moment sur la page <a href="/cookies">Politique cookies</a>.
        </p>
        <h2>Actualisation</h2>
        <p>La présente politique peut être mise à jour. Dernière mise à jour: {new Date().toLocaleDateString("fr-FR")}.</p>
      </div>
    </div>
  );
}


