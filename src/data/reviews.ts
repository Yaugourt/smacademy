export type Review = {
  author: string;
  rating: number;
  time: string;
  text: string;
  avatar?: string;
  profile?: string;
};

export const reviewsSummary = {
  rating: 5.0,
  total: 42,
};

export const reviews: Review[] = [
  {
    author: "A. Dupont",
    rating: 5,
    time: "il y a 1 mois",
    text:
      "Excellente expérience de formation. Pédagogie claire et beaucoup de pratique, je recommande.",
  },
  {
    author: "M. Bernard",
    rating: 5,
    time: "il y a 3 semaines",
    text:
      "Equipe pro et à l'écoute. Organisation nickel, j'ai pu appliquer dès le lendemain.",
  },
  {
    author: "S. Martin",
    rating: 5,
    time: "il y a 2 semaines",
    text:
      "Très bonne formation, formateur patient et compétent. Centre sérieux.",
  },
];


