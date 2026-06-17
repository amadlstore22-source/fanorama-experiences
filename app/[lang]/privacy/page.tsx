import { notFound } from "next/navigation";
import { hasLocale } from "../dictionaries";
import type { Metadata } from "next";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "fr" ? "Politique de Confidentialité | Fanorama Experiences" : "Privacy Policy | Fanorama Experiences",
    robots: { index: false },
  };
}

export default async function PrivacyPage({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const isFr = lang === "fr";
  const updated = "17 June 2026";

  return (
    <div className="min-h-screen bg-sand pt-20 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-2">
          {isFr ? "Politique de Confidentialité" : "Privacy Policy"}
        </h1>
        <p className="text-muted-warm text-sm mb-10">
          {isFr ? `Dernière mise à jour : ${updated}` : `Last updated: ${updated}`}
        </p>

        <div className="prose prose-sm max-w-none space-y-8 text-charcoal/80 leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "1. Qui sommes-nous ?" : "1. Who We Are"}
            </h2>
            {isFr ? (
              <p>
                Fanorama Experiences est une entreprise touristique basée à Douar Imlil, Asni Al Haouz, Maroc (code postal 42152),
                exploitant le Gîte Panorama et organisant des circuits d'aventure dans les montagnes de l'Atlas. Pour toute question
                relative à la présente politique, vous pouvez nous contacter à :{" "}
                <a href="mailto:1wahed.nab2012@gmail.com" className="text-terracotta underline">1wahed.nab2012@gmail.com</a> ou
                au +212 653 936 003.
              </p>
            ) : (
              <p>
                Fanorama Experiences is a tourism business based at Douar Imlil, Asni Al Haouz, Morocco (postal code 42152),
                operating Gite Panorama and organising adventure tours in the Atlas Mountains. For any questions regarding this
                policy, contact us at:{" "}
                <a href="mailto:1wahed.nab2012@gmail.com" className="text-terracotta underline">1wahed.nab2012@gmail.com</a> or
                +212 653 936 003.
              </p>
            )}
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "2. Données que nous collectons" : "2. Data We Collect"}
            </h2>
            {isFr ? (
              <>
                <p className="mb-3">Lorsque vous utilisez notre site ou notre formulaire de réservation, nous collectons uniquement les données que vous nous fournissez volontairement :</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Nom complet</strong> — pour identifier votre réservation.</li>
                  <li><strong>Adresse e-mail</strong> — pour vous envoyer une confirmation de réservation et répondre à vos demandes.</li>
                  <li><strong>Numéro de téléphone / WhatsApp</strong> (facultatif) — pour vous contacter rapidement en cas de besoin.</li>
                  <li><strong>Date(s) souhaitée(s) et taille du groupe</strong> — pour planifier votre expérience.</li>
                  <li><strong>Message / demandes spéciales</strong> (facultatif) — pour personnaliser votre séjour.</li>
                  <li><strong>Nom du circuit ou du séjour concerné</strong> — transmis automatiquement par la page depuis laquelle vous effectuez la réservation.</li>
                </ul>
                <p className="mt-3">Nous ne collectons <strong>pas</strong> de données de paiement (aucune carte bancaire n'est traitée sur ce site), de cookies de suivi, de données de localisation, ni aucune donnée sensible au sens de la loi.</p>
              </>
            ) : (
              <>
                <p className="mb-3">When you use our website or booking form, we collect only the data you voluntarily provide:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Full name</strong> — to identify your booking.</li>
                  <li><strong>Email address</strong> — to send a booking confirmation and respond to your enquiry.</li>
                  <li><strong>Phone / WhatsApp number</strong> (optional) — to reach you quickly if needed.</li>
                  <li><strong>Preferred date(s) and group size</strong> — to plan your experience.</li>
                  <li><strong>Message / special requests</strong> (optional) — to personalise your stay.</li>
                  <li><strong>Tour or accommodation name</strong> — passed automatically from the page on which you submit the form.</li>
                </ul>
                <p className="mt-3">We do <strong>not</strong> collect payment data (no card details are processed on this site), tracking cookies, location data, or any special-category data.</p>
              </>
            )}
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "3. Comment nous utilisons vos données" : "3. How We Use Your Data"}
            </h2>
            {isFr ? (
              <ul className="list-disc pl-5 space-y-2">
                <li>Traiter et confirmer vos demandes de réservation de circuits ou d'hébergement.</li>
                <li>Vous contacter par e-mail ou WhatsApp concernant votre réservation.</li>
                <li>Répondre à vos questions et demandes d'information.</li>
                <li>Améliorer nos services sur la base de retours généraux (sans identifier les personnes).</li>
              </ul>
            ) : (
              <ul className="list-disc pl-5 space-y-2">
                <li>Process and confirm your tour or accommodation booking requests.</li>
                <li>Contact you by email or WhatsApp regarding your booking.</li>
                <li>Respond to your questions and information requests.</li>
                <li>Improve our services based on general feedback (without identifying individuals).</li>
              </ul>
            )}
            <p className="mt-3">
              {isFr
                ? "Nous n'utilisons pas vos données à des fins de marketing non sollicité, nous ne les vendons pas et nous ne les partageons pas avec des tiers sans votre consentement, sauf obligation légale."
                : "We do not use your data for unsolicited marketing, sell it, or share it with third parties without your consent, except where required by law."}
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "4. Base légale du traitement" : "4. Legal Basis for Processing"}
            </h2>
            {isFr ? (
              <p>
                Conformément à la <strong>loi marocaine n° 09-08</strong> relative à la protection des personnes physiques à l'égard
                du traitement des données à caractère personnel, et au <strong>Règlement Général sur la Protection des Données (RGPD)</strong>{" "}
                de l'Union Européenne applicable à nos visiteurs européens, nous traitons vos données sur les bases légales suivantes :
                (a) <em>exécution d'un contrat</em> — traitement de votre demande de réservation ; (b) <em>intérêt légitime</em> — amélioration
                de nos services ; (c) <em>consentement</em> — lorsque vous soumettez volontairement notre formulaire.
              </p>
            ) : (
              <p>
                In accordance with <strong>Moroccan Law No. 09-08</strong> on the protection of individuals with regard to the
                processing of personal data, and the <strong>EU General Data Protection Regulation (GDPR)</strong> applicable to
                our European visitors, we process your data on the following legal bases: (a) <em>performance of a contract</em> —
                processing your booking request; (b) <em>legitimate interest</em> — improving our services; (c) <em>consent</em> —
                when you voluntarily submit our form.
              </p>
            )}
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "5. Partage des données avec des tiers" : "5. Third-Party Data Sharing"}
            </h2>
            {isFr ? (
              <>
                <p className="mb-3">Vos données transitent uniquement par les services tiers suivants, nécessaires au fonctionnement du site :</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>EmailJS</strong> (emailjs.com) — service d'envoi d'e-mails utilisé pour transmettre vos formulaires de réservation à notre boîte mail. Politique de confidentialité : emailjs.com/legal/privacy-policy.</li>
                  <li><strong>WhatsApp / Meta</strong> — si vous choisissez de nous contacter via WhatsApp, la conversation est soumise à la politique de confidentialité de WhatsApp (whatsapp.com/legal/privacy-policy).</li>
                  <li><strong>Google Maps</strong> — des cartes intégrées sont affichées sur certaines pages. Google peut collecter des données anonymes via ces iframes conformément à sa politique de confidentialité.</li>
                </ul>
                <p className="mt-3">Aucun autre tiers n'a accès à vos données personnelles.</p>
              </>
            ) : (
              <>
                <p className="mb-3">Your data passes through the following third-party services, which are necessary for the site to function:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>EmailJS</strong> (emailjs.com) — email delivery service used to forward your booking forms to our inbox. Privacy policy: emailjs.com/legal/privacy-policy.</li>
                  <li><strong>WhatsApp / Meta</strong> — if you choose to contact us via WhatsApp, the conversation is subject to WhatsApp's privacy policy (whatsapp.com/legal/privacy-policy).</li>
                  <li><strong>Google Maps</strong> — embedded maps are displayed on certain pages. Google may collect anonymous data through these iframes in accordance with its privacy policy.</li>
                </ul>
                <p className="mt-3">No other third party has access to your personal data.</p>
              </>
            )}
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "6. Conservation des données" : "6. Data Retention"}
            </h2>
            <p>
              {isFr
                ? "Nous conservons vos données de réservation aussi longtemps que nécessaire pour gérer votre demande et pendant une période maximale de 3 ans à compter de votre dernier contact, sauf obligation légale contraire. Les e-mails sont stockés dans notre boîte mail sécurisée."
                : "We retain your booking data for as long as necessary to manage your request and for a maximum period of 3 years from your last contact, unless a legal obligation requires otherwise. Emails are stored in our secure mailbox."}
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "7. Vos droits" : "7. Your Rights"}
            </h2>
            {isFr ? (
              <>
                <p className="mb-3">Conformément à la loi marocaine 09-08 et au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Droit d'accès</strong> — obtenir une copie des données que nous détenons sur vous.</li>
                  <li><strong>Droit de rectification</strong> — corriger des données inexactes.</li>
                  <li><strong>Droit à l'effacement</strong> — demander la suppression de vos données (« droit à l'oubli »).</li>
                  <li><strong>Droit d'opposition</strong> — vous opposer au traitement de vos données.</li>
                  <li><strong>Droit à la portabilité</strong> — recevoir vos données dans un format structuré.</li>
                  <li><strong>Droit de retirer votre consentement</strong> à tout moment, sans que cela affecte la licéité du traitement antérieur.</li>
                </ul>
                <p className="mt-3">Pour exercer ces droits, contactez-nous à <a href="mailto:1wahed.nab2012@gmail.com" className="text-terracotta underline">1wahed.nab2012@gmail.com</a>. Nous répondrons dans un délai de 30 jours.</p>
              </>
            ) : (
              <>
                <p className="mb-3">Under Moroccan Law 09-08 and the GDPR, you have the following rights:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Right of access</strong> — obtain a copy of the data we hold about you.</li>
                  <li><strong>Right of rectification</strong> — correct inaccurate data.</li>
                  <li><strong>Right to erasure</strong> — request deletion of your data ("right to be forgotten").</li>
                  <li><strong>Right to object</strong> — object to the processing of your data.</li>
                  <li><strong>Right to portability</strong> — receive your data in a structured format.</li>
                  <li><strong>Right to withdraw consent</strong> at any time, without affecting the lawfulness of prior processing.</li>
                </ul>
                <p className="mt-3">To exercise these rights, contact us at <a href="mailto:1wahed.nab2012@gmail.com" className="text-terracotta underline">1wahed.nab2012@gmail.com</a>. We will respond within 30 days.</p>
              </>
            )}
          </section>

          {/* 8 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "8. Cookies" : "8. Cookies"}
            </h2>
            <p>
              {isFr
                ? "Ce site n'utilise pas de cookies de suivi ou publicitaires. Des cookies techniques strictement nécessaires peuvent être placés par Next.js pour le fonctionnement du site (ex. : gestion de la langue). Aucune donnée personnelle n'est collectée via des cookies."
                : "This website does not use tracking or advertising cookies. Strictly necessary technical cookies may be placed by Next.js for the site to function (e.g. language preference). No personal data is collected via cookies."}
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "9. Sécurité" : "9. Security"}
            </h2>
            <p>
              {isFr
                ? "Nous prenons des mesures raisonnables pour protéger vos données contre tout accès non autorisé, perte ou divulgation. Les formulaires sont transmis via HTTPS. Cependant, aucune transmission sur Internet n'est totalement sécurisée et nous ne pouvons garantir une sécurité absolue."
                : "We take reasonable measures to protect your data against unauthorised access, loss, or disclosure. Forms are transmitted over HTTPS. However, no internet transmission is completely secure and we cannot guarantee absolute security."}
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "10. Transferts internationaux de données" : "10. International Data Transfers"}
            </h2>
            <p>
              {isFr
                ? "Vos données peuvent être traitées en dehors du Maroc via EmailJS (États-Unis). Ces transferts sont encadrés par les politiques de confidentialité des prestataires concernés, conformes aux normes internationales applicables."
                : "Your data may be processed outside Morocco via EmailJS (United States). These transfers are governed by the privacy policies of the relevant service providers, compliant with applicable international standards."}
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "11. Modifications de cette politique" : "11. Changes to This Policy"}
            </h2>
            <p>
              {isFr
                ? "Nous pouvons mettre à jour cette politique à tout moment. La date de dernière mise à jour figurant en haut de cette page sera modifiée en conséquence. Nous vous encourageons à consulter cette page régulièrement."
                : "We may update this policy at any time. The last updated date at the top of this page will be changed accordingly. We encourage you to review this page periodically."}
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              {isFr ? "12. Autorité de contrôle" : "12. Supervisory Authority"}
            </h2>
            {isFr ? (
              <p>
                Si vous résidez au Maroc, vous avez le droit de déposer une plainte auprès de la{" "}
                <strong>Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP)</strong>,
                l'autorité de contrôle marocaine (cndp.ma). Si vous résidez dans l'Union Européenne, vous pouvez contacter
                l'autorité de protection des données de votre pays de résidence.
              </p>
            ) : (
              <p>
                If you reside in Morocco, you have the right to lodge a complaint with the{" "}
                <strong>Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP)</strong>,
                Morocco's data protection authority (cndp.ma). If you reside in the European Union, you may contact the data
                protection authority in your country of residence.
              </p>
            )}
          </section>

          {/* Contact */}
          <section className="bg-white rounded-2xl border border-border p-6 mt-10">
            <h2 className="font-heading text-xl font-bold text-charcoal mb-2">
              {isFr ? "Nous contacter" : "Contact Us"}
            </h2>
            <p className="text-sm text-muted-warm">
              {isFr ? "Pour toute question relative à la présente politique :" : "For any questions regarding this policy:"}
            </p>
            <div className="mt-3 text-sm space-y-1">
              <p><strong>Fanorama Experiences</strong></p>
              <p>Douar Imlil, Asni Al Haouz, Imlil 42152, Morocco</p>
              <p><a href="mailto:1wahed.nab2012@gmail.com" className="text-terracotta underline">1wahed.nab2012@gmail.com</a></p>
              <p>+212 653 936 003</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
