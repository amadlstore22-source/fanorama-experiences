export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TouristInformationCenter"],
    name: "Fanorama Experiences",
    alternateName: "Gite Panorama Imlil",
    description:
      "Expert-guided MTB, e-bike, ski, and trekking adventures in Morocco's Atlas Mountains, with authentic accommodation at Gite Panorama in Imlil.",
    url: "https://fanorama-experiences.vercel.app",
    telephone: "+212653936003",
    email: "1wahed.nab2012@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Douar Imlil Asni",
      addressLocality: "Imlil",
      postalCode: "42152",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.1324771,
      longitude: -7.9203727,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "21:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "31",
      bestRating: "5",
    },
    priceRange: "$$",
    currenciesAccepted: "MAD, EUR, USD",
    paymentAccepted: "Cash, Bank Transfer",
    hasMap: "https://www.google.com/maps?q=31.1324771,-7.9203727",
    sameAs: [
      "https://www.booking.com/hotel/ma/gite-panorama-imlil.html",
    ],
    offers: [
      {
        "@type": "Offer",
        name: "MTB Tours Atlas Mountains",
        description: "Expert-guided mountain bike tours in the Moroccan Atlas",
        url: "https://fanorama-experiences.vercel.app/en/tours",
      },
      {
        "@type": "Offer",
        name: "E-Bike Adventures",
        description: "Electric bike tours through Berber valleys",
        url: "https://fanorama-experiences.vercel.app/en/tours",
      },
      {
        "@type": "Offer",
        name: "Gite Panorama Accommodation",
        description: "Authentic mountain accommodation in Imlil with panoramic Atlas views",
        url: "https://fanorama-experiences.vercel.app/en/accommodation",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
