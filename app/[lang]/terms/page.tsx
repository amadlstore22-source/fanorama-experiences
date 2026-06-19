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
  const updated = "19 June 2026";

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
              {isFr ? "1. Identification de l'établissement" : "1. Business Information"}
            </h2>
            {isFr ? (
              <p>
                Le présent site est exploité par <strong>Gîte Panorama</strong> (également désigné « Gîte Panorama Imlil »),
                maison d'hôtes familiale gérée par la famille Aitidar, située à Douar Imlil, Asni Al Haouz, Imlil 42152, Maroc.
                Contact : <a href="mailto:infoaitidar@gmail.com" className="text-terracotta underline">infoaitidar@gmail.com</a>{" "}
                — +212 653 936 003. En accédant à ce site et en soumettant une demande de réservation, vous acceptez les
                présentes conditions dans leur intégralité.
              </p>
            ) : (
              <p>
                This website is operated by <strong>Gite Panorama</strong> (also referred to as "Gite Panorama Imlil"),
                a family-run guesthouse managed by the Aitidar family, located at Douar Imlil, Asni Al Haouz,
                Imlil 42152, Morocco. Contact:{" "}
                <a href="mailto:infoaitidar@gmail.com" className="text-terracotta underline">infoaitidar@gmail.com</a>{" "}
                — +212 653 936 003. By accessing this site and submitting a booking request, you agree to these terms in full.
              </p>
            )}
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "2. Services proposés" : "2. Services Offered"}
            </h2>
            {isFr ? (
              <>
                <p className="mb-3">Gîte Panorama propose les services suivants :</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Hébergement</strong> — 5 types de chambres (chambre simple vue montagne, chambre double, chambre double deluxe avec balcon, chambre double ou twin deluxe avec balcon, chambre double ou twin avec terrasse), pour 1 à 2 personnes chacune.</li>
                  <li><strong>Restauration</strong> — petit-déjeuner et repas marocains cuisinés sur place.</li>
                  <li><strong>Activités</strong> — randonnées guidées dans le Parc National du Toubkal et cours de cuisine marocaine.</li>
                  <li><strong>Services annexes</strong> — hammam, navette aéroport sur demande.</li>
                </ul>
                <p className="mt-3">Tous les services sont soumis à disponibilité et doivent être confirmés par écrit par notre équipe avant d'être considérés comme réservés.</p>
              </>
            ) : (
              <>
                <p className="mb-3">Gite Panorama offers the following services:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Accommodation</strong> — 5 room types (single mountain view, double room, deluxe double with balcony, deluxe double or twin with balcony, double or twin with terrace), each sleeping 1–2 guests.</li>
                  <li><strong>Dining</strong> — breakfast and home-cooked Moroccan meals.</li>
                  <li><strong>Activities</strong> — guided hikes in Toubkal National Park and Moroccan cooking classes.</li>
                  <li><strong>Additional services</strong> — hammam, airport shuttle on request.</li>
                </ul>
                <p className="mt-3">All services are subject to availability and must be confirmed in writing by our team before they are considered booked.</p>
              </>
            )}
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "3. Processus de réservation" : "3. Booking Process"}
            </h2>
            {isFr ? (
              <>
                <p className="mb-3">Notre site intègre un <strong>calendrier de disponibilité en temps réel</strong> permettant de vérifier les dates libres avant de soumettre une demande. La soumission d'un formulaire constitue une <strong>demande de réservation</strong>, et non une réservation confirmée. Une réservation n'est définitive qu'après :</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Réception d'une confirmation écrite de notre part par e-mail ou WhatsApp ;</li>
                  <li>Accord sur les dates, la chambre ou l'activité, et la taille du groupe ;</li>
                  <li>Versement d'un acompte si requis.</li>
                </ul>
                <p className="mt-3">Lorsque vous soumettez une demande, vos données (nom, e-mail, téléphone, dates, nombre de personnes, message) sont enregistrées dans notre base de données sécurisée et transmises à notre équipe par e-mail. Le calendrier de disponibilité est mis à jour automatiquement pour refléter les réservations en cours (statut « en attente » ou « confirmé »).</p>
                <p className="mt-3">Nous nous réservons le droit de refuser ou d'annuler toute demande, notamment en cas d'indisponibilité, de conditions météorologiques dangereuses ou de force majeure.</p>
              </>
            ) : (
              <>
                <p className="mb-3">Our site features a <strong>real-time availability calendar</strong> allowing you to check free dates before submitting a request. Submitting a booking form constitutes a <strong>booking request</strong>, not a confirmed booking. A booking is only confirmed after:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Receipt of written confirmation from us by email or WhatsApp;</li>
                  <li>Agreement on dates, room or activity, and group size;</li>
                  <li>Payment of a deposit if required.</li>
                </ul>
                <p className="mt-3">When you submit a request, your data (name, email, phone, dates, number of guests, message) is saved in our secure database and forwarded to our team by email. The availability calendar is updated automatically to reflect current bookings (status "pending" or "confirmed").</p>
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
                <p className="mb-3">Les tarifs affichés sur ce site sont exprimés en <strong>dirhams marocains (MAD)</strong>, toutes taxes incluses, et sont donnés à titre indicatif. Le prix définitif est confirmé par écrit lors de la validation de la réservation.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Un acompte peut être demandé pour confirmer votre réservation.</li>
                  <li>Le solde est dû à l'arrivée, sauf accord contraire écrit.</li>
                  <li><strong>Aucune transaction bancaire n'est traitée sur ce site.</strong> Les modes de paiement acceptés (espèces, virement bancaire) seront précisés lors de la confirmation.</li>
                  <li>Les tarifs peuvent varier selon la saison, la durée du séjour, la taille du groupe et les services optionnels.</li>
                </ul>
              </>
            ) : (
              <>
                <p className="mb-3">Prices displayed on this site are in <strong>Moroccan dirhams (MAD)</strong>, inclusive of taxes, and are indicative. The final price is confirmed in writing upon booking validation.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>A deposit may be required to confirm your booking.</li>
                  <li>The balance is due on arrival, unless otherwise agreed in writing.</li>
                  <li><strong>No card payments are processed on this site.</strong> Accepted payment methods (cash, bank transfer) will be specified at confirmation.</li>
                  <li>Prices may vary by season, length of stay, group size, and optional services.</li>
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
                  <li>Plus de 30 jours avant la date d'arrivée : remboursement intégral de l'acompte.</li>
                  <li>Entre 15 et 30 jours avant la date d'arrivée : remboursement de 50 % de l'acompte.</li>
                  <li>Moins de 15 jours avant la date d'arrivée : acompte non remboursable.</li>
                  <li>Non-présentation (no-show) sans préavis : aucun remboursement.</li>
                </ul>
                <p className="mb-3"><strong>Annulation par Gîte Panorama :</strong></p>
                <p>En cas d'annulation de notre fait (force majeure, indisponibilité imprévue), nous proposerons soit un report à des dates alternatives, soit un remboursement intégral de l'acompte versé. Nous ne saurions être tenus responsables des frais annexes (transport, visa, assurance, etc.) engagés par le client.</p>
              </>
            ) : (
              <>
                <p className="mb-3"><strong>Cancellation by the guest:</strong></p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>More than 30 days before arrival: full deposit refund.</li>
                  <li>Between 15 and 30 days before arrival: 50% deposit refund.</li>
                  <li>Less than 15 days before arrival: deposit is non-refundable.</li>
                  <li>No-show without notice: no refund.</li>
                </ul>
                <p className="mb-3"><strong>Cancellation by Gite Panorama:</strong></p>
                <p>If we cancel due to force majeure or unforeseen unavailability, we will offer either alternative dates or a full refund of any deposit paid. We cannot be held liable for ancillary costs (flights, visas, insurance, etc.) incurred by the guest.</p>
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
                <p className="mb-3">Les activités proposées (randonnées en haute montagne, cours de cuisine) peuvent comporter des risques inhérents. En participant, vous reconnaissez :</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Avoir été informé des conditions et des risques liés à l'activité choisie.</li>
                  <li>Être en bonne condition physique et médicale pour y participer.</li>
                  <li>Suivre à tout moment les instructions de nos hôtes et guides certifiés.</li>
                  <li>Que Gîte Panorama ne peut être tenu responsable des accidents résultant du non-respect des consignes ou d'un comportement imprudent.</li>
                </ul>
                <p className="mt-3">Nous déclinons toute responsabilité pour les pertes, dommages ou blessures résultant de conditions météorologiques imprévisibles, de force majeure ou d'actes de tiers. La responsabilité de Gîte Panorama est limitée au montant réellement versé pour le service concerné.</p>
              </>
            ) : (
              <>
                <p className="mb-3">Activities offered (high-mountain hiking, cooking classes) may carry inherent risks. By participating, you acknowledge that:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You have been informed of the conditions and risks associated with the chosen activity.</li>
                  <li>You are in good physical and medical condition to participate.</li>
                  <li>You will follow the instructions of our hosts and certified guides at all times.</li>
                  <li>Gite Panorama cannot be held liable for accidents resulting from failure to follow instructions or reckless behaviour.</li>
                </ul>
                <p className="mt-3">We disclaim all liability for losses, damages, or injuries resulting from unforeseeable weather conditions, force majeure, or third-party acts. Gite Panorama's liability is limited to the amount actually paid for the service in question.</p>
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
                ? "Nous recommandons vivement à tous nos clients de souscrire une assurance voyage couvrant les annulations, les accidents, les urgences médicales et les rapatriements. Gîte Panorama ne fournit aucune assurance voyage aux participants et décline toute responsabilité pour les frais qui pourraient en découler."
                : "We strongly recommend that all guests take out travel insurance covering cancellations, accidents, medical emergencies, and repatriation. Gite Panorama does not provide travel insurance to guests and accepts no liability for costs that may arise from its absence."}
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "8. Comportement des clients" : "8. Guest Conduct"}
            </h2>
            {isFr ? (
              <p>
                Tous les clients doivent adopter un comportement respectueux envers notre famille d'hôtes, les autres
                clients, les communautés locales et l'environnement naturel du Haut Atlas. Gîte Panorama se réserve le
                droit de refuser l'accès ou de mettre fin à un séjour sans remboursement en cas de comportement
                mettant en danger la sécurité d'autrui, causant des dommages matériels, ou perturbant gravement le
                bon fonctionnement de l'établissement.
              </p>
            ) : (
              <p>
                All guests must behave respectfully towards our host family, fellow guests, local communities, and the
                natural environment of the High Atlas. Gite Panorama reserves the right to refuse entry or end a stay
                without refund if a guest's behaviour endangers the safety of others, causes material damage, or
                seriously disrupts the running of the guesthouse.
              </p>
            )}
          </section>

          {/* 9 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "9. Photos et témoignages" : "9. Photos and Testimonials"}
            </h2>
            {isFr ? (
              <>
                <p className="mb-3">
                  Durant votre séjour, des photos ou vidéos peuvent être prises dans les espaces communs. En réservant,
                  vous consentez à ce que ces images puissent être utilisées à des fins promotionnelles sur notre site
                  web et nos réseaux sociaux, sans compensation financière. Si vous souhaitez vous y opposer, veuillez
                  nous en informer par écrit avant votre arrivée.
                </p>
                <p>
                  Notre galerie photo invite également les anciens clients à partager leurs propres clichés via WhatsApp
                  pour publication sur le site. En envoyant des photos, vous nous accordez une licence non exclusive
                  et gratuite d'utilisation à des fins promotionnelles, et confirmez détenir les droits sur ces images.
                </p>
              </>
            ) : (
              <>
                <p className="mb-3">
                  During your stay, photos or videos may be taken in common areas. By booking, you consent to these
                  images being used for promotional purposes on our website and social media, without financial
                  compensation. If you wish to object to this use, please notify us in writing before your arrival.
                </p>
                <p>
                  Our photo gallery also invites past guests to share their own photos via WhatsApp for publication
                  on the site. By sending photos, you grant us a non-exclusive, royalty-free licence to use them for
                  promotional purposes, and confirm that you hold the rights to those images.
                </p>
              </>
            )}
          </section>

          {/* 10 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "10. Consentement et utilisation du site" : "10. Consent and Site Use"}
            </h2>
            {isFr ? (
              <p>
                Lors de votre première visite, une bannière de consentement vous est présentée. En cliquant sur
                « Accepter », vous confirmez avoir lu et accepté les présentes conditions générales ainsi que notre
                politique de confidentialité. Votre consentement est enregistré localement dans votre navigateur
                (via <code>localStorage</code>) sous la clé <code>gite-panorama-consent-v1</code>, afin de ne plus
                vous afficher cette bannière lors de vos visites ultérieures. Aucune donnée personnelle n'est
                transmise à des tiers via ce mécanisme.
              </p>
            ) : (
              <p>
                On your first visit, a consent banner is displayed. By clicking "Accept", you confirm that you have
                read and agreed to these Terms & Conditions and our Privacy Policy. Your consent is stored locally
                in your browser (via <code>localStorage</code>) under the key <code>gite-panorama-consent-v1</code>,
                so the banner is not shown on subsequent visits. No personal data is transmitted to third parties
                through this mechanism.
              </p>
            )}
          </section>

          {/* 11 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "11. Propriété intellectuelle" : "11. Intellectual Property"}
            </h2>
            <p>
              {isFr
                ? "L'ensemble du contenu de ce site (textes, photographies, logos, design, code) est la propriété exclusive de Gîte Panorama Imlil ou de ses concédants de licence. Toute reproduction, distribution ou utilisation commerciale sans autorisation écrite préalable est strictement interdite."
                : "All content on this site (text, photographs, logos, design, code) is the exclusive property of Gite Panorama Imlil or its licensors. Any reproduction, distribution, or commercial use without prior written permission is strictly prohibited."}
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "12. Droit applicable et juridiction compétente" : "12. Governing Law and Jurisdiction"}
            </h2>
            {isFr ? (
              <p>
                Les présentes conditions sont régies par le <strong>droit marocain</strong>, notamment le Code des
                obligations et des contrats (Dahir du 9 Ramadan 1331), la loi n° 31-08 édictant des mesures de
                protection du consommateur, et la loi n° 09-08 relative à la protection des données personnelles.
                En cas de litige, les parties s'efforceront de trouver une résolution amiable. À défaut, les
                tribunaux compétents du ressort d'<strong>Al Haouz, Maroc</strong>, seront seuls compétents.
              </p>
            ) : (
              <p>
                These terms are governed by <strong>Moroccan law</strong>, including the Code of Obligations and
                Contracts (Dahir of 9 Ramadan 1331), Law No. 31-08 on consumer protection measures, and Law
                No. 09-08 on personal data protection. In the event of a dispute, the parties will seek an amicable
                resolution first. Failing that, the competent courts of the <strong>Al Haouz jurisdiction, Morocco</strong>,
                shall have exclusive jurisdiction.
              </p>
            )}
          </section>

          {/* 13 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "13. Modifications des conditions" : "13. Changes to These Terms"}
            </h2>
            <p>
              {isFr
                ? "Nous nous réservons le droit de modifier les présentes conditions à tout moment. Les modifications prennent effet dès leur publication sur ce site. La date de dernière mise à jour figurant en haut de cette page sera actualisée en conséquence. La poursuite de l'utilisation du site après modification vaut acceptation des nouvelles conditions."
                : "We reserve the right to modify these terms at any time. Modifications take effect upon publication on this site. The last updated date at the top of this page will be updated accordingly. Continued use of the site after modification constitutes acceptance of the updated terms."}
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
              <p><strong>Gite Panorama Imlil — Famille Aitidar</strong></p>
              <p>Douar Imlil, Asni Al Haouz, Imlil 42152, Maroc / Morocco</p>
              <p><a href="mailto:infoaitidar@gmail.com" className="text-terracotta underline">infoaitidar@gmail.com</a></p>
              <p><a href="https://wa.me/212653936003" className="text-terracotta underline">+212 653 936 003</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
