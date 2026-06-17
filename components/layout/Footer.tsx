import Link from "next/link";
import { Mountain, Phone, Mail, MapPin } from "lucide-react";

type Dict = {
  nav: { rooms: string; activities: string; about: string; gallery: string; contact: string };
  footer: { tagline: string; explore: string; company: string; legal: string; privacy: string; terms: string; rights: string };
};

export default function Footer({ lang, dict }: { lang: string; dict: Dict }) {
  const year = new Date().getFullYear();

  const exploreLinks = [
    { href: `/${lang}/accommodation`, label: dict.nav.rooms },
    { href: `/${lang}/activities`, label: dict.nav.activities },
    { href: `/${lang}/gallery`, label: dict.nav.gallery },
  ];

  const companyLinks = [
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="bg-[#111110] text-white/70 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-terracotta/60 to-transparent" />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "32px 32px"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href={`/${lang}`} className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="w-10 h-10 bg-terracotta rounded-xl flex items-center justify-center group-hover:bg-terracotta-dark transition-colors">
                <Mountain className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-2xl font-bold text-white">Gite Panorama</span>
                <span className="text-[9px] tracking-[0.2em] uppercase text-white/30">Imlil · Morocco</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-white/40 max-w-sm mb-8">
              {dict.footer.tagline}
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+212653936003"
                className="flex items-center gap-3 text-white/40 hover:text-terracotta transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-terracotta/10 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                +212 653 936 003
              </a>
              <a href="mailto:1wahed.nab2012@gmail.com"
                className="flex items-center gap-3 text-white/40 hover:text-terracotta transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-terracotta/10 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                1wahed.nab2012@gmail.com
              </a>
              <div className="flex items-start gap-3 text-white/40">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>Douar Imlil, Asni Al Haouz, Morocco</span>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-heading text-base text-white font-semibold mb-5 uppercase tracking-wider">
              {dict.footer.explore}
            </h3>
            <ul className="flex flex-col gap-3">
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-sm text-white/40 hover:text-terracotta transition-colors hover:translate-x-1 inline-block duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading text-base text-white font-semibold mb-5 uppercase tracking-wider">
              {dict.footer.company}
            </h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-sm text-white/40 hover:text-terracotta transition-colors hover:translate-x-1 inline-block duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="https://www.instagram.com/moroccobikeskitours"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/40 hover:text-terracotta transition-colors">
                  📷 Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/25">
          <span>© {year} Gite Panorama Imlil. {dict.footer.rights}</span>
          <div className="flex gap-6">
            <Link href={`/${lang}/privacy`} className="hover:text-white/50 transition-colors">
              {dict.footer.privacy}
            </Link>
            <Link href={`/${lang}/terms`} className="hover:text-white/50 transition-colors">
              {dict.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
