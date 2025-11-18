import CookiesReset from "@/components/site/CookiesReset";

export const metadata = {
  title: "Politique cookies",
  description: "Politique relative aux cookies et traceurs.",
};

export default function CookiesPage() {
  return (
    <div className="mx-auto w-full max-w-screen-md px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Politique cookies</h1>
      <div className="prose mt-6 max-w-none dark:prose-invert">
        <h2>Principe</h2>
        <p>
          Nous utilisons des cookies essentiels au fonctionnement du site, et des cookies/traceurs soumis à consentement pour
          l’affichage de contenus externes (Google Maps, Calendly) et la mesure d’audience.
        </p>
        <h2>Catégories</h2>
        <ul>
          <li>Essentiels: nécessaires au fonctionnement et à la sécurité du site.</li>
          <li>Marketing/Externe: Google Maps, Calendly (chargés uniquement après consentement).</li>
          <li>Mesure d’audience: désactivée par défaut si non consentie.</li>
        </ul>
        <h2>Gestion du consentement</h2>
        <p>
          Une bannière permet d’accepter ou de refuser. Votre choix est conservé localement. Vous pouvez le modifier à tout
          moment ci-dessous:
        </p>
        <CookiesReset />
        <h2>Durée</h2>
        <p>Le consentement est conservé jusqu’à 6 mois, puis nous vous redemanderons votre choix.</p>
      </div>
    </div>
  );
}


