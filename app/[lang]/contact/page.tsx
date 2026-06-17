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
    <div className="min-h-screen bg-[#111110] pb-20">
      {/* Header */}
      <div className="relative pt-32 pb-14 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "32px 32px"
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-terracotta/60 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-saffron/60" />
            <span className="text-saffron text-xs font-semibold tracking-[0.3em] uppercase">
              {isFr ? "Parlons aventure" : "Let's talk adventure"}
            </span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">{c.title}</h1>
          <p className="text-white/40 text-lg max-w-xl">{c.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-terracotta/30 transition-all duration-200 group">
                    <div className="w-10 h-10 bg-terracotta/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-terracotta/20 transition-colors">
                      <Icon className="w-5 h-5 text-terracotta" />
                    </div>
                    <div className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-1.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                        className="text-sm font-medium text-white/70 hover:text-terracotta transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-white/70">{item.value}</span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/212653936003?text=Hello! I'd like to book a tour with Fanorama Experiences."
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] rounded-2xl p-5 hover:bg-[#25D366]/20 hover:border-[#25D366]/50 transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-[#25D366]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 fill-[#25D366]" />
              </div>
              <div>
                <div className="font-semibold text-base">{isFr ? "Chattez avec nous sur WhatsApp" : "Chat with us on WhatsApp"}</div>
                <div className="text-[#25D366]/60 text-sm">{isFr ? "Réponse rapide garantie" : "Fast response guaranteed"}</div>
              </div>
            </a>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-white/10 h-64">
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
