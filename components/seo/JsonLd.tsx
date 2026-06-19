export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "BedAndBreakfast"],
    name: "Gite Panorama Imlil",
    alternateName: "GÃ®te Panorama",
    description:
      "A family-run guesthouse in Imlil at the foot of Toubkal National Park. Panoramic Atlas views, home-cooked Moroccan meals, and authentic Berber hospitality.",
    url: "https://fanorama-experiences.vercel.app",
    telephone: "+212653936003",
    email: "infoaitidar@gmail.com",
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
      closes: "22:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "9.2",
      reviewCount: "95",
      bestRating: "10",
      worstRating: "1",
    },
    priceRange: "$",
    currenciesAccepted: "MAD, EUR, USD",
    paymentAccepted: "Cash, Bank Transfer",
    checkinTime: "13:00",
    checkoutTime: "12:00",
    numberOfRooms: 6,
    petsAllowed: true,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Halal breakfast available", value: true },
      { "@type": "LocationFeatureSpecification", name: "Panoramic mountain views", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hammam / Steam room", value: true },
      { "@type": "LocationFeatureSpecification", name: "Airport shuttle (paid)", value: true },
      { "@type": "LocationFeatureSpecification", name: "Sun terrace", value: true },
      { "@type": "LocationFeatureSpecification", name: "Garden", value: true },
      { "@type": "LocationFeatureSpecification", name: "Restaurant / home-cooked meals", value: true },
      { "@type": "LocationFeatureSpecification", name: "24-hour front desk", value: true },
      { "@type": "LocationFeatureSpecification", name: "Bike rental", value: true },
      { "@type": "LocationFeatureSpecification", name: "Shared kitchen", value: true },
      { "@type": "LocationFeatureSpecification", name: "Luggage storage", value: true },
    ],
    hasMap: "https://www.google.com/maps?q=31.1324771,-7.9203727",
    sameAs: [
      "https://www.booking.com/hotel/ma/gite-panorama-imlil.html",
      "https://www.instagram.com/imlil_panorama_lodge/",
      "https://www.tripadvisor.com/Hotel_Review-g488109-d23560592-Reviews-Gite_Panorama-Imlil_Marrakech_Safi.html",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

