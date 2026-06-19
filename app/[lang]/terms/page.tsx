import { notFound } from "next/navigation";
import { hasLocale } from "../dictionaries";
import type { Metadata } from "next";

export async function generateMetadata({ params }: PageProps<"/[lang]/terms">): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "fr" ? "Conditions Générales | Gîte Panorama Imlil" : "Terms & Conditions | Gite Panorama Imlil",
    robots: { index: false },
  };
}

export default async function TermsPage({ params }: PageProps<"/[lang]/terms">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const isFr = lang === "fr";
  const updated = "17 June 2026";

  return (
    <div className="min-h-screen bg-sand pt-20 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-2">
          {isFr ? "Conditions Générales d'Utilisation et de Vente" : "Terms & Conditions"}
        </h1>
        <p className="text-muted-warm text-sm mb-10">
          {isFr ? `Dernière mise à jour : ${updated}` : `Last updated: ${updated}`}
        </p>

        <div className="prose prose-sm max-w-none space-y-8 text-charcoal/80 leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "1. Identification de l'entreprise" : "1. Company Information"}
            </h2>
            {isFr ? (
              <p>
                Le présent site est exploité par <strong>Gîte Panorama</strong>, maison d'hôtes familiale basée à
                Douar Imlil, Asni Al Haouz, Imlil 42152, Maroc. Contact :{" "}
                <a href="mailto:infoaitidar@gmail.com" className="text-terracotta underline">infoaitidar@gmail.com</a>{" "}
                — +212 653 936 003. En accédant à ce site et en effectuant une réservation, vous acceptez les présentes
                conditions dans leur intégralité.
              </p>
            ) : (
              <p>
                This website is operated by <strong>Gite Panorama</strong>, a family-run guesthouse based at
                Douar Imlil, Asni Al Haouz, Imlil 42152, Morocco. Contact:{" "}
                <a href="mailto:infoaitidar@gmail.com" className="text-terracotta underline">infoaitidar@gmail.com</a>{" "}
                — +212 653 936 003. By accessing this site and making a booking, you agree to these terms in full.
              </p>
            )}
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "2. Services proposés" : "2. Services Offered"}
            </h2>
            {isFr ? (
              <p>
                Gîte Panorama propose des hébergements en chambres et des activités d'une journée (cours de cuisine,
                randonnées guidées) à Imlil, au pied du Parc National du Toubkal. Tous les services sont soumis à
                disponibilité et confirmation par notre équipe.
              </p>
            ) : (
              <p>
                Gite Panorama offers guesthouse accommodation and day activities (cooking classes, guided hikes) in Imlil,
                at the gateway to Toubkal National Park. All services are subject to availability and confirmation by our team.
              </p>
            )}
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "3. Processus de réservation" : "3. Booking Process"}
            </h2>
            {isFr ? (
              <>
                <p className="mb-3">La soumission d'un formulaire de réservation sur ce site constitue une <strong>demande de réservation</strong>, et non une réservation confirmée. Une réservation n'est définitive qu'après :</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Réception d'une confirmation écrite de notre part par e-mail ou WhatsApp ;</li>
                  <li>Accord sur les dates, le groupe et le service concerné ;</li>
                  <li>Versement d'un acompte si requis.</li>
                </ul>
                <p className="mt-3">Nous nous réservons le droit de refuser ou d'annuler toute demande de réservation, notamment en cas d'indisponibilité, de conditions météorologiques dangereuses ou de force majeure.</p>
              </>
            ) : (
              <>
                <p className="mb-3">Submitting a booking form on this site constitutes a <strong>booking request</strong>, not a confirmed booking. A booking is only confirmed after:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Receipt of written confirmation from us by email or WhatsApp;</li>
                  <li>Agreement on dates, group size and the service in question;</li>
                  <li>Payment of a deposit if required.</li>
                </ul>
                <p className="mt-3">We reserve the right to refuse or cancel any booking request, including due to unavailability, dangerous weather conditions, or force majeure.</p>
              </>
            )}
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "4. Tarifs et paiement" : "4. Pricing and Payment"}
            </h2>
            {isFr ? (
              <>
                <p className="mb-3">Les tarifs indiqués sur ce site sont exprimés en dirhams marocains (MAD) et à titre indicatif. Le prix définitif sera confirmé par écrit lors de la validation de votre réservation.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Un acompte peut être demandé pour confirmer votre réservation.</li>
                  <li>Le solde est généralement dû à l'arrivée, sauf accord contraire.</li>
                  <li>Les modes de paiement acceptés seront précisés lors de la confirmation.</li>
                  <li>Les tarifs peuvent varier selon la saison, la taille du groupe et les services optionnels choisis.</li>
                </ul>
              </>
            ) : (
              <>
                <p className="mb-3">Prices shown on this site are in Moroccan dirhams (MAD) and are indicative. The final price will be confirmed in writing when your booking is validated.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>A deposit may be required to confirm your booking.</li>
                  <li>The balance is generally due on arrival, unless otherwise agreed.</li>
                  <li>Accepted payment methods will be specified at confirmation.</li>
                  <li>Prices may vary by season, group size, and optional services selected.</li>
                </ul>
              </>
            )}
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "5. Annulation et remboursement" : "5. Cancellation and Refunds"}
            </h2>
            {isFr ? (
              <>
                <p className="mb-3"><strong>Annulation par le client :</strong></p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Plus de 30 jours avant le départ : remboursement intégral de l'acompte.</li>
                  <li>Entre 15 et 30 jours avant le départ : remboursement de 50 % de l'acompte.</li>
                  <li>Moins de 15 jours avant le départ : l'acompte est non remboursable.</li>
                  <li>Non-présentation (no-show) : aucun remboursement.</li>
                </ul>
                <p className="mb-3"><strong>Annulation par Gîte Panorama :</strong></p>
                <p>En cas d'annulation de notre fait (force majeure, indisponibilité), nous proposerons soit un report à une date ultérieure, soit un remboursement intégral de l'acompte versé. Nous ne saurions être tenus responsables des frais annexes (transport, visa, etc.).</p>
              </>
            ) : (
              <>
                <p className="mb-3"><strong>Cancellation by the client:</strong></p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>More than 30 days before departure: full deposit refund.</li>
                  <li>Between 15 and 30 days before departure: 50% deposit refund.</li>
                  <li>Less than 15 days before departure: deposit is non-refundable.</li>
                  <li>No-show: no refund.</li>
                </ul>
                <p className="mb-3"><strong>Cancellation by Gite Panorama:</strong></p>
                <p>If we cancel due to force majeure or unavailability, we will offer either a rescheduled date or a full refund of any deposit paid. We cannot be held liable for ancillary costs (flights, visas, etc.).</p>
              </>
            )}
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "6. Responsabilité et risques" : "6. Liability and Risk"}
            </h2>
            {isFr ? (
              <>
                <p className="mb-3">Les activités proposées (randonnées, cours de cuisine) peuvent comporter des risques inhérents. En participant, vous reconnaissez :</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Avoir été informé des conditions et des risques liés à l'activité choisie.</li>
                  <li>Être en bonne condition physique et médicale pour y participer.</li>
                  <li>Suivre à tout moment les instructions de nos hôtes et guides.</li>
                  <li>Que Gîte Panorama ne peut être tenu responsable des accidents résultant du non-respect des consignes ou de comportements imprudents.</li>
                </ul>
                <p className="mt-3">Nous déclinons toute responsabilité pour les pertes, dommages ou blessures résultant de conditions imprévisibles, de force majeure ou d'actes tiers.</p>
              </>
            ) : (
              <>
                <p className="mb-3">Activities offered (hiking, cooking classes) may carry inherent risks. By participating, you acknowledge that:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You have been informed of the conditions and risks associated with the chosen activity.</li>
                  <li>You are in good physical and medical condition to participate.</li>
                  <li>You will follow the instructions of our hosts and guides at all times.</li>
                  <li>Gite Panorama cannot be held liable for accidents resulting from failure to follow instructions or reckless behaviour.</li>
                </ul>
                <p className="mt-3">We disclaim all liability for losses, damages, or injuries resulting from unforeseeable conditions, force majeure, or third-party acts.</p>
              </>
            )}
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "7. Assurance" : "7. Insurance"}
            </h2>
            <p>
              {isFr
                ? "Nous recommandons vivement à tous nos clients de souscrire une assurance voyage couvrant les annulations, les accidents et les rapatriements médicaux. Gîte Panorama ne fournit pas d'assurance voyage aux participants."
                : "We strongly recommend that all clients take out travel insurance covering cancellations, accidents, and medical repatriation. Gite Panorama does not provide travel insurance to guests."}
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "8. Comportement des participants" : "8. Participant Conduct"}
            </h2>
            {isFr ? (
              <p>
                Tous les clients doivent adopter un comportement respectueux envers nos hôtes, les autres clients,
                les communautés locales et l'environnement naturel. Gîte Panorama se réserve le droit de refuser ou
                d'interrompre un séjour sans remboursement en cas de comportement mettant en danger la sécurité d'autrui
                ou perturbant gravement le bon fonctionnement du gîte.
              </p>
            ) : (
              <p>
                All guests must behave respectfully towards our hosts, fellow guests, local communities, and the natural
                environment. Gite Panorama reserves the right to refuse or end a stay without refund if a guest's behaviour
                endangers the safety of others or seriously disrupts the running of the guesthouse.
              </p>
            )}
          </section>

          {/* 9 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "9. Photos et témoignages" : "9. Photos and Testimonials"}
            </h2>
            <p>
              {isFr
                ? "Durant votre séjour ou les activités, des photos ou vidéos peuvent être prises. En réservant, vous consentez à ce que ces images puissent être utilisées à des fins promotionnelles sur notre site web et nos réseaux sociaux, sans compensation. Si vous souhaitez vous y opposer, veuillez nous en informer par écrit avant votre arrivée."
                : "During your stay or activities, photos or videos may be taken. By booking, you consent to these images being used for promotional purposes on our website and social media, without compensation. If you wish to object to this use, please notify us in writing before your arrival."}
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "10. Propriété intellectuelle" : "10. Intellectual Property"}
            </h2>
            <p>
              {isFr
                ? "L'ensemble du contenu de ce site (textes, images, logos, design) est la propriété exclusive de Gite Panorama Imlil ou de ses concédants de licence. Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est strictement interdite."
                : "All content on this site (text, images, logos, design) is the exclusive property of Gite Panorama Imlil or its licensors. Any reproduction, distribution, or use without prior written permission is strictly prohibited."}
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "11. Droit applicable et juridiction compétente" : "11. Governing Law and Jurisdiction"}
            </h2>
            {isFr ? (
              <p>
                Les présentes conditions sont régies par le <strong>droit marocain</strong>, notamment le Code des obligations
                et des contrats (Dahir du 9 Ramadan 1331), la loi n° 31-08 édictant des mesures de protection du consommateur,
                et la loi n° 09-08 relative à la protection des données personnelles. En cas de litige, les parties
                s'efforceront de trouver une résolution amiable. À défaut, les tribunaux compétents du ressort d'Al Haouz,
                Maroc, seront seuls compétents.
              </p>
            ) : (
              <p>
                These terms are governed by <strong>Moroccan law</strong>, including the Code of Obligations and Contracts
                (Dahir of 9 Ramadan 1331), Law No. 31-08 on consumer protection measures, and Law No. 09-08 on personal data
                protection. In the event of a dispute, the parties will seek an amicable resolution. Failing that, the competent
                courts of the Al Haouz jurisdiction, Morocco, shall have exclusive jurisdiction.
              </p>
            )}
          </section>

          {/* 12 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "12. Modifications des conditions" : "12. Changes to These Terms"}
            </h2>
            <p>
              {isFr
                ? "Nous nous réservons le droit de modifier les présentes conditions à tout moment. Les modifications prennent effet dès leur publication sur ce site. Il vous appartient de les consulter régulièrement. La poursuite de l'utilisation du site après modification vaut acceptation des nouvelles conditions."
                : "We reserve the right to modify these terms at any time. Modifications take effect upon publication on this site. It is your responsibility to review them regularly. Continued use of the site after modification constitutes acceptance of the updated terms."}
            </p>
          </section>

          {/* Contact */}
          <section className="bg-white rounded-2xl border border-border p-6 mt-10">
            <h2 className="font-heading text-xl font-bold text-charcoal mb-2">
              {isFr ? "Nous contacter" : "Contact Us"}
            </h2>
            <p className="text-sm text-muted-warm">
              {isFr ? "Pour toute question relative aux présentes conditions :" : "For any questions regarding these terms:"}
            </p>
            <div className="mt-3 text-sm space-y-1">
              <p><strong>Gite Panorama Imlil</strong></p>
              <p>Douar Imlil, Asni Al Haouz, Imlil 42152, Morocco</p>
              <p><a href="mailto:infoaitidar@gmail.com" className="text-terracotta underline">infoaitidar@gmail.com</a></p>
              <p>+212 653 936 003</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
