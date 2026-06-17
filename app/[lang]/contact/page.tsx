import { notFound } from "next/navigation";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { getDictionary, hasLocale } from "../dictionaries";
import BookingForm from "@/components/tours/BookingForm";
import type { Metadata } from "next";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "fr" ? "Contact | Fanorama Experiences" : "Contact | Fanorama Experiences",
  };
}

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const c = dict.contact;
  const isFr = lang === "fr";

  const contactItems = [
    { icon: Phone, label: c.phone, value: "+212 653 936 003", href: "tel:+212653936003" },
    { icon: MessageCircle, label: c.whatsapp, value: "+212 653 936 003", href: "https://wa.me/212653936003" },
    { icon: Mail, label: c.email, value: "1wahed.nab2012@gmail.com", href: "mailto:1wahed.nab2012@gmail.com" },
    { icon: MapPin, label: c.address, value: "Douar Imlil Asni, Imlil 42152, Morocco", href: undefined },
  ];

  return (
    <div className="min-h-screen bg-sand pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <h1 className="font-heading text-5xl font-bold text-charcoal mb-3">{c.title}</h1>
          <p className="text-muted-warm text-lg">{c.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="bg-white rounded-2xl border border-border p-5">
                    <div className="w-10 h-10 bg-terracotta/10 rounded-full flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-terracotta" />
                    </div>
                    <div className="text-xs font-medium text-muted-warm uppercase tracking-wider mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                        className="text-sm font-medium text-charcoal hover:text-terracotta transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-charcoal">{item.value}</span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/212653936003?text=Hello! I'd like to book a tour with Fanorama Experiences."
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white rounded-2xl p-5 hover:bg-[#1ebe5d] transition-colors"
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 fill-white" />
              </div>
              <div>
                <div className="font-semibold">{isFr ? "Chattez avec nous sur WhatsApp" : "Chat with us on WhatsApp"}</div>
                <div className="text-white/80 text-sm">{isFr ? "Réponse rapide garantie" : "Fast response guaranteed"}</div>
              </div>
            </a>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-border h-60">
              <iframe
                src="https://www.google.com/maps?q=31.1324771,-7.9203727&output=embed"
                width="100%" height="100%"
                style={{ border: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gite Panorama location"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <BookingForm
              tourName={isFr ? "Demande générale" : "General inquiry"}
              lang={lang}
              dict={dict}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
