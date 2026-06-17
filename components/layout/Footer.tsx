import Link from "next/link";
import { Mountain, Phone, Mail, MapPin } from "lucide-react";

type Dict = {
  nav: { tours: string; accommodation: string; about: string; gallery: string; contact: string };
  footer: { tagline: string; tours: string; company: string; legal: string; privacy: string; terms: string; rights: string };
};

export default function Footer({ lang, dict }: { lang: string; dict: Dict }) {
  const year = new Date().getFullYear();

  const tourLinks = [
    { href: `/${lang}/tours`, label: dict.nav.tours },
    { href: `/${lang}/accommodation`, label: dict.nav.accommodation },
    { href: `/${lang}/gallery`, label: dict.nav.gallery },
  ];

  const companyLinks = [
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="bg-charcoal text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href={`/${lang}`} className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-terracotta rounded-full flex items-center justify-center">
                <Mountain className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading text-2xl font-semibold text-white">
                Fanorama Experiences
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/60 max-w-sm mb-6">
              {dict.footer.tagline}
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="tel:+212653936003"
                className="flex items-center gap-2 text-white/60 hover:text-terracotta transition-colors"
              >
                <Phone className="w-4 h-4" />
                +212 653 936 003
              </a>
              <a
                href="mailto:1wahed.nab2012@gmail.com"
                className="flex items-center gap-2 text-white/60 hover:text-terracotta transition-colors"
              >
                <Mail className="w-4 h-4" />
                1wahed.nab2012@gmail.com
              </a>
              <div className="flex items-start gap-2 text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Douar Imlil, Asni Al Haouz, Morocco</span>
              </div>
            </div>
          </div>

          {/* Tours */}
          <div>
            <h4 className="font-heading text-lg text-white font-semibold mb-4">
              {dict.footer.tours}
            </h4>
            <ul className="flex flex-col gap-2">
              {tourLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 hover:text-terracotta transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-lg text-white font-semibold mb-4">
              {dict.footer.company}
            </h4>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 hover:text-terracotta transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.instagram.com/moroccobikeskitours"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-terracotta transition-colors"
                >
                  📷 Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <span>© {year} Fanorama Experiences. {dict.footer.rights}</span>
          <div className="flex gap-4">
            <Link href={`/${lang}/privacy`} className="hover:text-white/70 transition-colors">
              {dict.footer.privacy}
            </Link>
            <Link href={`/${lang}/terms`} className="hover:text-white/70 transition-colors">
              {dict.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
