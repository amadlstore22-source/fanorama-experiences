"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Mountain, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";

type Dict = { nav: { tours: string; accommodation: string; about: string; gallery: string; contact: string; bookNow: string } };

export default function Navbar({ lang, dict }: { lang: string; dict: Dict }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: `/${lang}/tours`, label: dict.nav.tours },
    { href: `/${lang}/accommodation`, label: dict.nav.accommodation },
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/gallery`, label: dict.nav.gallery },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ];

  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`;
  const dark = !scrolled && isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-terracotta rounded-xl flex items-center justify-center group-hover:bg-terracotta-dark transition-colors shadow-sm group-hover:rotate-3 transition-all duration-300">
              <Mountain className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-heading text-xl font-bold tracking-wide ${dark ? "text-white" : "text-charcoal"}`}>
                Fanorama
              </span>
              <span className={`text-[9px] tracking-[0.2em] uppercase font-medium ${dark ? "text-white/50" : "text-muted-warm"}`}>
                Experiences
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                    dark
                      ? `text-white/85 hover:text-white hover:bg-white/10 ${active ? "text-white" : ""}`
                      : `text-charcoal/80 hover:text-charcoal hover:bg-sand ${active ? "text-terracotta" : ""}`
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-terracotta rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher lang={lang} scrolled={!dark} />
            <Link
              href={`/${lang}/contact`}
              className={cn(
                buttonVariants(),
                "bg-[#A54E22] hover:bg-[#8B4019] text-white rounded-full px-6 text-sm border-0 shadow-md hover:shadow-terracotta/40 transition-all duration-200"
              )}
            >
              {dict.nav.bookNow}
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher lang={lang} scrolled={!dark} />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                className={`p-2 rounded-lg transition-colors ${dark ? "text-white hover:bg-white/10" : "text-charcoal hover:bg-sand"}`}
                aria-label="Open menu"
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </SheetTrigger>
              <SheetContent side="right" className="w-72 bg-charcoal border-l border-white/10 p-0">
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 bg-terracotta rounded-xl flex items-center justify-center">
                      <Mountain className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-col leading-none">
                      <span className="font-heading text-xl font-bold text-white">Fanorama</span>
                      <span className="text-[9px] tracking-[0.2em] uppercase text-white/40">Experiences</span>
                    </div>
                  </div>
                </div>
                <nav className="flex flex-col p-4 gap-1">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        pathname === link.href
                          ? "text-white bg-terracotta"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <Link
                      href={`/${lang}/contact`}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-center w-full bg-[#A54E22] hover:bg-[#8B4019] text-white rounded-full py-3 text-sm font-semibold transition-colors"
                    >
                      {dict.nav.bookNow}
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
