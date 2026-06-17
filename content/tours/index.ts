export type Difficulty = "beginner" | "intermediate" | "advanced";
export type Category = "mtb" | "ebike" | "ski" | "trekking";

export type TourDay = {
  title_en: string;
  title_fr: string;
  description_en: string;
  description_fr: string;
};

export type Tour = {
  slug: string;
  title_en: string;
  title_fr: string;
  description_en: string;
  description_fr: string;
  duration: string;
  duration_fr: string;
  nights: number;
  difficulty: Difficulty;
  category: Category;
  groupSize: { min: number; max: number };
  meetingPoint_en: string;
  meetingPoint_fr: string;
  price_from: number | null;
  featured: boolean;
  images: string[];
  itinerary: TourDay[];
  included_en: string[];
  included_fr: string[];
  notIncluded_en: string[];
  notIncluded_fr: string[];
  highlights_en: string[];
  highlights_fr: string[];
};

export const tours: Tour[] = [
  {
    slug: "atlas-mtb-2-day",
    title_en: "Atlas Mountains 2-Day MTB Tour",
    title_fr: "Tour VTT 2 Jours — Montagnes de l'Atlas",
    description_en:
      "An exciting two-day mountain biking adventure through remote Berber valleys in Morocco's Atlas Mountains. Ride scenic trails, dirt roads, and hidden singletracks while discovering ancient villages and breathtaking landscapes.",
    description_fr:
      "Une aventure VTT de deux jours à travers les vallées berbères reculées des montagnes de l'Atlas. Parcourez des pistes pittoresques, des routes en terre et des singletracks cachés en découvrant des villages ancestraux.",
    duration: "2 days / 1 night",
    duration_fr: "2 jours / 1 nuit",
    nights: 1,
    difficulty: "beginner",
    category: "mtb",
    groupSize: { min: 2, max: 12 },
    meetingPoint_en: "Marrakech (transfer included)",
    meetingPoint_fr: "Marrakech (transfert inclus)",
    price_from: null,
    featured: true,
    images: [
      "/images/tours/atlas-mtb-2day-1.jpg",
      "/images/tours/atlas-mtb-2day-2.jpg",
    ],
    highlights_en: [
      "Scenic singletrack through Berber villages",
      "Lunch by a mountain riverbed",
      "Night at a traditional gite",
      "Panoramic views from Tachet pass",
    ],
    highlights_fr: [
      "Singletrack panoramique à travers les villages berbères",
      "Déjeuner au bord d'une rivière de montagne",
      "Nuit dans un gîte traditionnel",
      "Vue panoramique depuis le col de Tachet",
    ],
    itinerary: [
      {
        title_en: "Day 1: Imlil to Imi Oughlad (4–5h biking)",
        title_fr: "Jour 1 : Imlil → Imi Oughlad (4–5h de vélo)",
        description_en:
          "1.5h transfer from Marrakech to Imlil village. Begin with a climbing section with a mint tea break, then singletrack through local villages. Lunch by a riverbed. Moroccan singletrack riding leads to the final descent into Imi Oughlad for overnight at a gite.",
        description_fr:
          "Transfert de 1h30 depuis Marrakech jusqu'au village d'Imlil. On commence par une montée avec une pause thé à la menthe, puis singletrack à travers les villages. Déjeuner au bord de la rivière. Descente finale vers Imi Oughlad pour une nuit en gîte.",
      },
      {
        title_en: "Day 2: Imi Oughlad to Ouirgane (4–5h biking)",
        title_fr: "Jour 2 : Imi Oughlad → Ouirgane (4–5h de vélo)",
        description_en:
          "Morning departure with a zigzagging ascent via dirt road. Pause at Tachet pass with panoramic views. Descent through the Azzaden valley, passing stone villages. Lunch in Ouirgane, then return transfer to Marrakech.",
        description_fr:
          "Départ matinal avec montée en lacets sur chemin en terre. Pause au col de Tachet avec vue panoramique. Descente dans la vallée de l'Azzaden, en passant par des villages de pierre. Déjeuner à Ouirgane, puis transfert retour à Marrakech.",
      },
    ],
    included_en: [
      "Airport transfers",
      "Round-trip transport Marrakech ↔ tour",
      "1 night accommodation",
      "English-speaking guide",
      "All meals",
      "Support vehicle",
    ],
    included_fr: [
      "Transferts aéroport",
      "Transport aller-retour Marrakech ↔ circuit",
      "1 nuit d'hébergement",
      "Guide anglophone",
      "Tous les repas",
      "Véhicule d'assistance",
    ],
    notIncluded_en: ["Travel insurance", "Tips", "Bike & helmet rental", "Personal expenses"],
    notIncluded_fr: ["Assurance voyage", "Pourboires", "Location vélo & casque", "Dépenses personnelles"],
  },
  {
    slug: "atlas-mtb-3-day",
    title_en: "Atlas Mountains 3-Day MTB Tour",
    title_fr: "Tour VTT 3 Jours — Montagnes de l'Atlas",
    description_en:
      "Three days of thrilling MTB adventure blending adrenaline-pumping trails, panoramic vistas, and cultural immersion in Berber villages across the Atlas Mountains.",
    description_fr:
      "Trois jours d'aventure VTT entre pistes palpitantes, panoramas époustouflants et immersion culturelle dans les villages berbères de l'Atlas.",
    duration: "3 days / 2 nights",
    duration_fr: "3 jours / 2 nuits",
    nights: 2,
    difficulty: "intermediate",
    category: "mtb",
    groupSize: { min: 2, max: 12 },
    meetingPoint_en: "Imlil (transfer from Marrakech included)",
    meetingPoint_fr: "Imlil (transfert depuis Marrakech inclus)",
    price_from: null,
    featured: false,
    images: [
      "/images/tours/atlas-mtb-3day-1.jpg",
      "/images/tours/atlas-mtb-3day-2.jpg",
    ],
    highlights_en: [
      "4–5 hours biking per day",
      "Ride through Azzaden Valley",
      "Cultural stops in Berber villages",
      "Terraced mountain fields",
    ],
    highlights_fr: [
      "4–5 heures de vélo par jour",
      "Traversée de la vallée de l'Azzaden",
      "Arrêts culturels dans les villages berbères",
      "Champs en terrasses de montagne",
    ],
    itinerary: [
      {
        title_en: "Day 1: Imlil to Azzaden Valley",
        title_fr: "Jour 1 : Imlil → Vallée de l'Azzaden",
        description_en: "Rocky trails through scenic mountain paths, engaging with local Berber communities along the way.",
        description_fr: "Sentiers rocailleux à travers des paysages de montagne, à la rencontre des communautés berbères locales.",
      },
      {
        title_en: "Day 2: Azzaden Valley to Ouirgane via Amizmiz",
        title_fr: "Jour 2 : Vallée de l'Azzaden → Ouirgane via Amizmiz",
        description_en: "Diverse terrain featuring terraced fields, valleys, and cultural exploration in traditional towns.",
        description_fr: "Terrain varié avec des champs en terrasses, des vallées et une exploration culturelle dans des villages traditionnels.",
      },
      {
        title_en: "Day 3: Amizmiz trails and return",
        title_fr: "Jour 3 : Pistes d'Amizmiz et retour",
        description_en: "Captivating trails winding through the Atlas Mountains with traditional village encounters before the return to Marrakech.",
        description_fr: "Pistes envoûtantes serpentant dans l'Atlas avec des rencontres dans les villages traditionnels avant le retour à Marrakech.",
      },
    ],
    included_en: ["Airport transfers", "Round-trip transport", "2 nights accommodation", "English guide", "All meals", "Support vehicle"],
    included_fr: ["Transferts aéroport", "Transport aller-retour", "2 nuits d'hébergement", "Guide anglophone", "Tous les repas", "Véhicule d'assistance"],
    notIncluded_en: ["Travel insurance", "Tips", "Bike & helmet rental", "Personal expenses"],
    notIncluded_fr: ["Assurance voyage", "Pourboires", "Location vélo & casque", "Dépenses personnelles"],
  },
  {
    slug: "morocco-enduro-mtb-8-day",
    title_en: "Morocco Enduro MTB — 8-Day Tour",
    title_fr: "Enduro VTT Maroc — Circuit 8 Jours",
    description_en:
      "An exhilarating enduro MTB expedition for experienced riders through Morocco's Atlas Mountains. Technical trails, Berber villages, cultural immersion, and 2 nights in Marrakech.",
    description_fr:
      "Une expédition enduro VTT exaltante pour les riders expérimentés à travers les montagnes de l'Atlas. Pistes techniques, villages berbères, immersion culturelle et 2 nuits à Marrakech.",
    duration: "8 days / 7 nights",
    duration_fr: "8 jours / 7 nuits",
    nights: 7,
    difficulty: "advanced",
    category: "mtb",
    groupSize: { min: 2, max: 12 },
    meetingPoint_en: "Marrakech Airport (transfer included)",
    meetingPoint_fr: "Aéroport de Marrakech (transfert inclus)",
    price_from: null,
    featured: false,
    images: [
      "/images/tours/enduro-8day-1.jpg",
      "/images/tours/enduro-8day-2.jpg",
    ],
    highlights_en: [
      "Advanced technical singletracks",
      "High altitude at 2,660m (Oukaimeden)",
      "2 nights in Marrakech hotel",
      "Hammam relaxation included",
    ],
    highlights_fr: [
      "Singletracks techniques avancés",
      "Haute altitude à 2 660m (Oukaïmeden)",
      "2 nuits à l'hôtel de Marrakech",
      "Séance hammam incluse",
    ],
    itinerary: [
      { title_en: "Day 1: Arrival in Marrakech", title_fr: "Jour 1 : Arrivée à Marrakech", description_en: "Orientation and welcome dinner with Moroccan cuisine.", description_fr: "Orientation et dîner de bienvenue avec cuisine marocaine." },
      { title_en: "Day 2: Marrakech → Oukaimeden → Imlil", title_fr: "Jour 2 : Marrakech → Oukaïmeden → Imlil", description_en: "Technical descents and high-altitude climbing to 2,660m.", description_fr: "Descentes techniques et montée en altitude jusqu'à 2 660m." },
      { title_en: "Day 3: Imlil → Id Aissa", title_fr: "Jour 3 : Imlil → Id Aissa", description_en: "Hiking and technical singletrack through Ouazzaden valley.", description_fr: "Randonnée et singletrack technique dans la vallée de l'Ouazzaden." },
      { title_en: "Day 4: Ouirgane → Amizmiz Valley", title_fr: "Jour 4 : Ouirgane → Vallée d'Amizmiz", description_en: "Singletrack emphasis, gorge scenery, and hammam relaxation.", description_fr: "Accent sur le singletrack, paysages de gorges et détente au hammam." },
      { title_en: "Day 5: Amizmiz → Ait Hamed", title_fr: "Jour 5 : Amizmiz → Ait Hamed", description_en: "Berber cultural visits, olive groves, and Middle Atlas exploration.", description_fr: "Visites culturelles berbères, oliveraies et exploration du Moyen Atlas." },
      { title_en: "Day 6: Ait Hamed → Ijoukak", title_fr: "Jour 6 : Ait Hamed → Ijoukak", description_en: "Riverbed singletrack and technical terrain challenges.", description_fr: "Singletrack en bord de rivière et défis techniques." },
      { title_en: "Day 7: Ijoukak → Ouirgane → Marrakech", title_fr: "Jour 7 : Ijoukak → Ouirgane → Marrakech", description_en: "Final biking day with epic descents back to Marrakech.", description_fr: "Dernière journée de vélo avec des descentes épiques vers Marrakech." },
      { title_en: "Day 8: Departure", title_fr: "Jour 8 : Départ", description_en: "Breakfast and airport transfer.", description_fr: "Petit-déjeuner et transfert aéroport." },
    ],
    included_en: ["Airport transfers", "2 nights Marrakech hotel (B&B)", "5 nights mountain accommodation", "English guide", "All meals on tour days", "Support vehicle"],
    included_fr: ["Transferts aéroport", "2 nuits hôtel Marrakech (petit-déj)", "5 nuits hébergement montagne", "Guide anglophone", "Tous les repas en circuit", "Véhicule d'assistance"],
    notIncluded_en: ["Travel insurance", "Tips", "Bike & helmet rental", "Personal expenses"],
    notIncluded_fr: ["Assurance voyage", "Pourboires", "Location vélo & casque", "Dépenses personnelles"],
  },
  {
    slug: "anti-atlas-mtb-8-day",
    title_en: "8-Day Anti-Atlas MTB Tour from Agadir",
    title_fr: "Circuit VTT 8 Jours Anti-Atlas — Départ Agadir",
    description_en:
      "An intermediate MTB adventure through southern Morocco's rocky mountain trails, hidden palm valleys, remote Berber villages, desert plateaus, and spectacular Atlantic coastline tracks.",
    description_fr:
      "Une aventure VTT intermédiaire à travers le sud du Maroc : sentiers rocailleux, vallées de palmiers, villages berbères reculés, plateaux désertiques et pistes côtières de l'Atlantique.",
    duration: "8 days / 7 nights",
    duration_fr: "8 jours / 7 nuits",
    nights: 7,
    difficulty: "intermediate",
    category: "mtb",
    groupSize: { min: 2, max: 12 },
    meetingPoint_en: "Agadir (start and end)",
    meetingPoint_fr: "Agadir (départ et arrivée)",
    price_from: null,
    featured: false,
    images: [
      "/images/tours/anti-atlas-1.jpg",
      "/images/tours/anti-atlas-2.jpg",
    ],
    highlights_en: [
      "Atlantic coastal trails and argan forests",
      "Pink granite formations of Tafraout",
      "Desert plateaus and canyon descents",
      "Historic town of Tiznit",
    ],
    highlights_fr: [
      "Pistes côtières atlantiques et forêts d'argan",
      "Formations de granit rose de Tafraout",
      "Plateaux désertiques et descentes de canyon",
      "Ville historique de Tiznit",
    ],
    itinerary: [
      { title_en: "Day 1: Agadir → Tamri", title_fr: "Jour 1 : Agadir → Tamri", description_en: "Atlantic coastal trails and argan forests.", description_fr: "Pistes côtières atlantiques et forêts d'argan." },
      { title_en: "Day 2: Tamri → Tafraout", title_fr: "Jour 2 : Tamri → Tafraout", description_en: "Ameln Valley and pink granite rock formations.", description_fr: "Vallée de l'Ameln et formations de granit rose." },
      { title_en: "Day 3: Tafraout exploration", title_fr: "Jour 3 : Exploration de Tafraout", description_en: "Blue Rocks and technical singletracks.", description_fr: "Rochers bleus et singletracks techniques." },
      { title_en: "Day 4: Tafraout → Ichet", title_fr: "Jour 4 : Tafraout → Ichet", description_en: "Remote mountain trails and isolated villages.", description_fr: "Sentiers de montagne reculés et villages isolés." },
      { title_en: "Day 5: Ichet → Ait Mansour Gorges", title_fr: "Jour 5 : Ichet → Gorges d'Ait Mansour", description_en: "Palm groves and canyon descents.", description_fr: "Palmeraies et descentes dans les gorges." },
      { title_en: "Day 6: Ait Mansour → Akka", title_fr: "Jour 6 : Ait Mansour → Akka", description_en: "Desert plateaus and Berber village encounters.", description_fr: "Plateaux désertiques et rencontres berbères." },
      { title_en: "Day 7: Akka → Tiznit", title_fr: "Jour 7 : Akka → Tiznit", description_en: "Historic town of Tiznit, famous for silver craftsmanship.", description_fr: "Ville historique de Tiznit, réputée pour sa bijouterie en argent." },
      { title_en: "Day 8: Tiznit → Agadir", title_fr: "Jour 8 : Tiznit → Agadir", description_en: "Coastal return ride back to Agadir.", description_fr: "Retour à Agadir le long de la côte." },
    ],
    included_en: ["Professional MTB guide", "4x4 support vehicle", "7 nights accommodation", "Full board on biking days", "Water and mechanical assistance", "Airport transfers"],
    included_fr: ["Guide VTT professionnel", "Véhicule 4x4 d'assistance", "7 nuits d'hébergement", "Pension complète les jours de vélo", "Eau et assistance mécanique", "Transferts aéroport"],
    notIncluded_en: ["Travel insurance", "Entrance fees", "Tips", "Extra beverages", "Bike & helmet rental"],
    notIncluded_fr: ["Assurance voyage", "Droits d'entrée", "Pourboires", "Boissons supplémentaires", "Location vélo & casque"],
  },
  {
    slug: "atlas-to-atlantic-9-day",
    title_en: "Atlas Mountains to Atlantic Coast — 9-Day Biking Tour",
    title_fr: "Atlas → Côte Atlantique — Circuit Vélo 9 Jours",
    description_en:
      "A 9-day biking odyssey traversing Morocco from Marrakech through the High Atlas Mountains to the Atlantic Coast. Switchback roads, isolated mountain passes, lush valleys, and the port city of Essaouira await.",
    description_fr:
      "Une odyssée cycliste de 9 jours à travers le Maroc, de Marrakech aux sommets de l'Atlas jusqu'à la côte atlantique. Lacets, cols isolés, vallées verdoyantes et la ville portuaire d'Essaouira.",
    duration: "9 days / 8 nights",
    duration_fr: "9 jours / 8 nuits",
    nights: 8,
    difficulty: "intermediate",
    category: "mtb",
    groupSize: { min: 2, max: 12 },
    meetingPoint_en: "Marrakech (airport pickup included)",
    meetingPoint_fr: "Marrakech (transfert aéroport inclus)",
    price_from: null,
    featured: false,
    images: [
      "/images/tours/atlas-atlantic-1.jpg",
      "/images/tours/atlas-atlantic-2.jpg",
    ],
    highlights_en: [
      "Cross the High Atlas at 2,300m",
      "Ride to the Atlantic at Imessouane",
      "Stay in Essaouira medina riad",
      "Visit El Bahia Palace in Marrakech",
    ],
    highlights_fr: [
      "Traversée du Haut Atlas à 2 300m",
      "Arrivée à l'Atlantique à Imessouane",
      "Séjour dans un riad de la médina d'Essaouira",
      "Visite du Palais El Bahia à Marrakech",
    ],
    itinerary: [
      { title_en: "Day 1: Marrakech arrival", title_fr: "Jour 1 : Arrivée à Marrakech", description_en: "Explore the medina, souks, and Jemaa el-Fnaa square.", description_fr: "Exploration de la médina, des souks et de la place Jemaa el-Fna." },
      { title_en: "Day 2: Marrakech → Imlil valley", title_fr: "Jour 2 : Marrakech → Vallée d'Imlil", description_en: "Transfer to Imlil; climb to 2,300m pass; singletrack descent through Tacheddirt and Tamguist.", description_fr: "Transfert vers Imlil ; montée au col à 2 300m ; descente en singletrack à travers Tacheddirt et Tamguist." },
      { title_en: "Day 3: Azzaden Valley", title_fr: "Jour 3 : Vallée de l'Azzaden", description_en: "Optional challenging climb to a second pass or uplift; singletrack descent.", description_fr: "Montée optionnelle ou assistance ; descente en singletrack." },
      { title_en: "Day 4: Extended singletrack", title_fr: "Jour 4 : Singletrack étendu", description_en: "Multiple climbs and descents between remote villages; overnight near Amizmiz.", description_fr: "Multiples montées et descentes entre villages reculés ; nuit près d'Amizmiz." },
      { title_en: "Day 5: Towards the coast", title_fr: "Jour 5 : Vers la côte", description_en: "Rollercoaster terrain; overnight in Imouzzar Ida Outanane.", description_fr: "Terrain en montagnes russes ; nuit à Imouzzer Ida Outanane." },
      { title_en: "Day 6: Mountains to sea", title_fr: "Jour 6 : Montagne → Mer", description_en: "Quiet road through Targant Valley; overnight in Imessouane with ocean swimming.", description_fr: "Route tranquille dans la vallée de Targant ; nuit à Imessouane avec baignade." },
      { title_en: "Day 7: Coastal ride to Essaouira", title_fr: "Jour 7 : Piste côtière vers Essaouira", description_en: "Inland exploration through villages and almond orchards; stop at Sidi Kaouki; evening in Essaouira.", description_fr: "Exploration des villages et vergers d'amandiers ; arrêt à Sidi Kaouki ; soirée à Essaouira." },
      { title_en: "Day 8: Essaouira → Marrakech", title_fr: "Jour 8 : Essaouira → Marrakech", description_en: "Morning exploration of Essaouira; 170km return to Marrakech; visit El Bahia Palace.", description_fr: "Matinée à Essaouira ; 170km de retour à Marrakech ; visite du Palais El Bahia." },
      { title_en: "Day 9: Departure", title_fr: "Jour 9 : Départ", description_en: "Airport transfer after breakfast.", description_fr: "Transfert aéroport après le petit-déjeuner." },
    ],
    included_en: ["Airport transfers", "All accommodation (gites, riads)", "English guide", "All meals", "Support vehicle"],
    included_fr: ["Transferts aéroport", "Tout l'hébergement (gîtes, riads)", "Guide anglophone", "Tous les repas", "Véhicule d'assistance"],
    notIncluded_en: ["Travel insurance", "Tips", "Bike & helmet rental", "Personal expenses"],
    notIncluded_fr: ["Assurance voyage", "Pourboires", "Location vélo & casque", "Dépenses personnelles"],
  },
  {
    slug: "atlas-berber-ebike-2-day",
    title_en: "Atlas Berber Valley E-Bike — 2-Day Tour",
    title_fr: "E-Bike Vallée Berbère de l'Atlas — 2 Jours",
    description_en:
      "An immersive e-bike experience through the Atlas Mountains and Berber villages. Perfect for beginners and families — electric assistance means everyone can enjoy the stunning terrain without exhaustion.",
    description_fr:
      "Une expérience e-bike immersive dans les montagnes de l'Atlas et les villages berbères. Idéal pour les débutants et les familles — l'assistance électrique permet à tous de profiter du terrain magnifique.",
    duration: "2 days / 1 night",
    duration_fr: "2 jours / 1 nuit",
    nights: 1,
    difficulty: "beginner",
    category: "ebike",
    groupSize: { min: 2, max: 12 },
    meetingPoint_en: "Imlil Valley (transfer from Marrakech included)",
    meetingPoint_fr: "Vallée d'Imlil (transfert depuis Marrakech inclus)",
    price_from: null,
    featured: true,
    images: [
      "/images/tours/ebike-berber-1.jpg",
      "/images/tours/ebike-berber-2.jpg",
    ],
    highlights_en: [
      "Electric assistance — suitable for all levels",
      "Tinzert village with Ouirgane Park views",
      "Ride through the Azzaden Valley",
      "Stop at Agafay Desert",
    ],
    highlights_fr: [
      "Assistance électrique — adapté à tous les niveaux",
      "Village de Tinzert avec vue sur le parc d'Ouirgane",
      "Traversée de la vallée de l'Azzaden",
      "Arrêt au désert d'Agafay",
    ],
    itinerary: [
      {
        title_en: "Day 1: Imlil to Ouirgane",
        title_fr: "Jour 1 : Imlil → Ouirgane",
        description_en: "Ride through the Azzaden Valley, visiting Tinzert village overlooking Ouirgane Park. Easy dirt roads through rural landscapes. Overnight in Ouirgane.",
        description_fr: "Traversée de la vallée de l'Azzaden, visite du village de Tinzert avec vue sur le parc d'Ouirgane. Routes en terre faciles. Nuit à Ouirgane.",
      },
      {
        title_en: "Day 2: Ouirgane to Agafay Desert and return",
        title_fr: "Jour 2 : Ouirgane → Désert d'Agafay et retour",
        description_en: "Tarmac road with Atlas views, mint tea stop at Tizi Ouadou, lunch in open fields, visit Lala Takerkoust village, finish at the Agafay Desert before returning to Marrakech.",
        description_fr: "Route goudronnée avec vue sur l'Atlas, pause thé à la menthe à Tizi Ouadou, déjeuner en plein air, visite de Lala Takerkoust, arrivée au désert d'Agafay avant le retour à Marrakech.",
      },
    ],
    included_en: ["Airport transfers", "Round-trip transport", "1 night accommodation", "English guide", "All meals", "Support vehicle"],
    included_fr: ["Transferts aéroport", "Transport aller-retour", "1 nuit d'hébergement", "Guide anglophone", "Tous les repas", "Véhicule d'assistance"],
    notIncluded_en: ["Travel insurance", "Tips", "E-bike & helmet rental", "Personal expenses"],
    notIncluded_fr: ["Assurance voyage", "Pourboires", "Location e-bike & casque", "Dépenses personnelles"],
  },
  {
    slug: "kik-plateau-ebike-day",
    title_en: "E-Bike: Asni to Amizmiz via Kik Plateau",
    title_fr: "E-Bike : Asni → Amizmiz via le Plateau du Kik",
    description_en:
      "A stunning day e-bike tour from Marrakech through the Kik Plateau with Atlas Mountain views, ancient Berber villages, and a mint tea stop. Perfect introduction to Morocco's mountains.",
    description_fr:
      "Un magnifique circuit e-bike à la journée depuis Marrakech, à travers le Plateau du Kik avec des vues sur l'Atlas, des villages berbères ancestraux et une pause thé à la menthe. Introduction parfaite aux montagnes marocaines.",
    duration: "Day tour (4–5h biking)",
    duration_fr: "Journée (4–5h de vélo)",
    nights: 0,
    difficulty: "beginner",
    category: "ebike",
    groupSize: { min: 2, max: 12 },
    meetingPoint_en: "Marrakech hotel (pickup included)",
    meetingPoint_fr: "Hôtel de Marrakech (transfert inclus)",
    price_from: null,
    featured: true,
    images: [
      "/images/tours/kik-plateau-1.jpg",
      "/images/tours/kik-plateau-2.jpg",
    ],
    highlights_en: [
      "Kik Plateau with panoramic Atlas views",
      "Ancient village of Tizi Ouadou",
      "Traditional mint tea with locals",
      "Visit Lala Takerkoust lake",
    ],
    highlights_fr: [
      "Plateau du Kik avec panorama sur l'Atlas",
      "Village ancestral de Tizi Ouadou",
      "Thé à la menthe traditionnel avec les locaux",
      "Visite du lac de Lalla Takerkoust",
    ],
    itinerary: [
      {
        title_en: "Full Day: Asni → Kik Plateau → Amizmiz Dam",
        title_fr: "Journée complète : Asni → Plateau du Kik → Barrage d'Amizmiz",
        description_en: "Early pickup from Marrakech hotel. Ride via tarmac towards the Atlas Mountains. Visit the ancient village of Tizi Ouadou for traditional mint tea. Cross the Kik Plateau with breathtaking views. Lunch in the fields. Stop at Lala Takerkoust to meet locals. Arrive at Amizmiz Dam. Return transfer to Marrakech.",
        description_fr: "Ramassage tôt le matin à l'hôtel de Marrakech. Trajet sur route goudronnée vers l'Atlas. Visite du village ancestral de Tizi Ouadou pour un thé à la menthe. Traversée du Plateau du Kik avec des vues époustouflantes. Déjeuner en plein champ. Arrêt à Lalla Takerkoust pour rencontrer les locaux. Arrivée au barrage d'Amizmiz. Retour à Marrakech.",
      },
    ],
    included_en: ["Hotel pickup & drop-off from Marrakech", "English guide", "Lunch and refreshments", "Support vehicle"],
    included_fr: ["Transfert hôtel aller-retour depuis Marrakech", "Guide anglophone", "Déjeuner et rafraîchissements", "Véhicule d'assistance"],
    notIncluded_en: ["Travel insurance", "Tips", "E-bike & helmet rental", "Personal expenses"],
    notIncluded_fr: ["Assurance voyage", "Pourboires", "Location e-bike & casque", "Dépenses personnelles"],
  },
];

export function getAllTours(): Tour[] {
  return tours;
}

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}

export function getFeaturedTours(): Tour[] {
  return tours.filter((t) => t.featured);
}

export function getFilteredTours(
  category?: string,
  duration?: string,
  difficulty?: string
): Tour[] {
  return tours.filter((t) => {
    if (category && category !== "all" && t.category !== category) return false;
    if (difficulty && difficulty !== "all" && t.difficulty !== difficulty) return false;
    if (duration && duration !== "all") {
      if (duration === "day" && t.nights !== 0) return false;
      if (duration === "multi" && (t.nights === 0 || t.nights > 3)) return false;
      if (duration === "week" && t.nights < 7) return false;
    }
    return true;
  });
}
