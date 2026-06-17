export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "BedAndBreakfast"],
    name: "Gite Panorama Imlil",
    alternateName: "Gîte Panorama",
    description:
      "A family-run guesthouse in Imlil at the foot of Toubkal National Park. Panoramic Atlas views, home-cooked Moroccan meals, and authentic Berber hospitality.",
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
      closes: "22:00",
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
    checkinTime: "12:00",
    checkoutTime: "11:00",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Breakfast included", value: true },
      { "@type": "LocationFeatureSpecification", name: "Panoramic mountain views", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hammam / Steam room", value: true },
      { "@type": "LocationFeatureSpecification", name: "Airport shuttle", value: true },
      { "@type": "LocationFeatureSpecification", name: "Sun terrace", value: true },
    ],
    hasMap: "https://www.google.com/maps?q=31.1324771,-7.9203727",
    sameAs: [
      "https://www.booking.com/hotel/ma/gite-panorama-imlil.html",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
