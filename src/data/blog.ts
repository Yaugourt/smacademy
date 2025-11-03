export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  coverImage?: string;
  tags?: string[];
  author?: string;
  contentHtml: string;
};

export const posts: Post[] = [
  {
    slug: "guide-irve-normes-installation",
    title: "IRVE: normes et bonnes pratiques d'installation",
    excerpt:
      "Panorama des exigences IRVE et des points de vigilance lors de l'installation et la mise en service.",
    date: new Date().toISOString(),
    coverImage: "/window.svg",
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
      "Comprendre l'intérêt du Sauveteur Secouriste du Travail et les obligations de l'employeur.",
    date: new Date(Date.now() - 86400000).toISOString(),
    coverImage: "/file.svg",
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
      "Tour d'horizon des dispositifs de financement mobilisables selon votre situation.",
    date: new Date(Date.now() - 2 * 86400000).toISOString(),
    coverImage: "/globe.svg",
    tags: ["Financement", "CPF", "OPCO"],
    author: "SM Academy",
    contentHtml: `
      <p>Plusieurs dispositifs peuvent financer votre montée en compétences: OPCO pour les salariés, CPF pour les actifs, aides France Travail pour les demandeurs d'emploi.</p>
      <p>Nous vous accompagnons pour le montage de votre dossier.</p>
    `,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}


