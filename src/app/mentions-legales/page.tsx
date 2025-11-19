export const metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site SM Academy.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto w-full max-w-screen-md px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Mentions légales</h1>
      <div className="prose mt-6 max-w-none dark:prose-invert">
        <h2>Éditeur du site</h2>
        <p>
          <strong>Dénomination sociale:</strong> SM Academy<br />
          <strong>Forme juridique:</strong> SAS<br />
          <strong>Capital social:</strong> 1 000 €<br />
          <strong>Siège social:</strong> 94 Avenue du Docteur Fleming, 30900 Nîmes, France<br />
          <strong>SIREN:</strong> 982 761 678 – <strong>RCS:</strong> Nîmes<br />
          <strong>TVA intracommunautaire:</strong> FR19982761678<br />
          <strong>E-mail:</strong> contact@smtechnologie.fr<br />
          <strong>Téléphone:</strong> 09 82 77 44 44 / 06 68 99 74 36
        </p>
        <h2>Direction de la publication</h2>
        <p>
          <strong>Directeur de la publication:</strong> Khaled Mouhallal (Président)
        </p>
        <h2>Hébergement</h2>
        <p>
          <strong>Hébergeur:</strong> À compléter<br />
          <strong>Adresse:</strong> À compléter<br />
          <strong>Téléphone:</strong> À compléter
        </p>
        <h2>Propriété intellectuelle</h2>
        <p>
          L’ensemble des contenus de ce site (textes, images, logos, marques, etc.) est protégé par le droit de la propriété
          intellectuelle. Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale
          ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit, est
          interdite sans l’autorisation écrite préalable de SM Academy.
        </p>
        <h2>Données personnelles</h2>
        <p>
          Pour toute information relative au traitement de vos données, consultez notre{" "}
          <a href="/confidentialite">Politique de confidentialité</a>.
        </p>
        <h2>Contact</h2>
        <p>
          <a href="mailto:contact@smtechnologie.fr">contact@smtechnologie.fr</a> – 09 82 77 44 44 / 06 68 99 74 36
        </p>
      </div>
    </div>
  );
}


