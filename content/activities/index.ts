export type Activity = {
  slug: string;
  nameEn: string;
  nameFr: string;
  descriptionEn: string;
  descriptionFr: string;
  duration: string;
  durationFr: string;
  priceMAD: number | null;
  priceEUR: number | null;
  maxPersons: number;
  image: string;
  includedEn: string[];
  includedFr: string[];
  highlight?: boolean;
};

export const activities: Activity[] = [
  {
    slug: "moroccan-cooking-class",
    nameEn: "Moroccan Cooking Class",
    nameFr: "Cours de Cuisine Marocaine",
    descriptionEn: "Learn to cook authentic Moroccan dishes with the Aitidar family. We'll prepare a traditional tagine, Berber bread, and mint tea from scratch using local ingredients sourced from the Imlil market.",
    descriptionFr: "Apprenez à cuisiner des plats marocains authentiques avec la famille Aitidar. Nous préparerons un tajine traditionnel, du pain berbère et du thé à la menthe avec des ingrédients locaux du marché d'Imlil.",
    duration: "3 hours",
    durationFr: "3 heures",
    priceMAD: null,
    priceEUR: null,
    maxPersons: 8,
    image: "/images/activities/cooking-class.jpg",
    includedEn: ["All ingredients", "Recipe card to take home", "Lunch (what you cook)", "Mint tea"],
    includedFr: ["Tous les ingrédients", "Fiche recette à emporter", "Déjeuner (ce que vous cuisinez)", "Thé à la menthe"],
    highlight: true,
  },
];

export function getAllActivities(): Activity[] {
  return activities;
}

export function getActivityBySlug(slug: string): Activity | undefined {
  return activities.find((a) => a.slug === slug);
}
