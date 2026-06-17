"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Mountain } from "lucide-react";
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
    const onScroll = () => setScrolled(window.scrollY > 20);
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHome ? "bg-sand/95 backdrop-blur-sm shadow-sm border-b border-border" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href={`/${lang}`} className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center group-hover:bg-terracotta-dark transition-colors">
              <Mountain className="w-4 h-4 text-white" />
            </div>
            <span className={`font-heading text-xl font-semibold tracking-wide ${dark ? "text-white" : "text-charcoal"}`}>
              Fanorama
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link key={link.href} href={link.href}
                className={`text-sm font-medium transition-colors hover:text-terracotta ${dark ? "text-white/90 hover:text-white" : "text-charcoal"} ${pathname === link.href ? "text-terracotta" : ""}`}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher lang={lang} scrolled={!dark} />
            <Link
              href={`/${lang}/contact`}
              className={cn(buttonVariants(), "bg-terracotta hover:bg-terracotta-dark text-white rounded-full px-5 text-sm border-0")}
            >
              {dict.nav.bookNow}
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher lang={lang} scrolled={!dark} />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className={`p-2 rounded-md ${dark ? "text-white" : "text-charcoal"}`} aria-label="Open menu">
                <Menu className="w-5 h-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-72 bg-sand">
                <div className="flex items-center gap-2 mb-8 mt-2">
                  <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center">
                    <Mountain className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-heading text-xl font-semibold text-charcoal">Fanorama</span>
                </div>
                <nav className="flex flex-col gap-1">
                  {links.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
                      className={`px-3 py-3 rounded-lg text-base font-medium transition-colors hover:bg-sand-dark hover:text-terracotta ${pathname === link.href ? "text-terracotta bg-sand-dark" : "text-charcoal"}`}>
                      {link.label}
                    </Link>
                  ))}
                  <div className="mt-4 pt-4 border-t border-border">
                    <Link
                      href={`/${lang}/contact`}
                      onClick={() => setOpen(false)}
                      className={cn(buttonVariants(), "w-full bg-terracotta hover:bg-terracotta-dark text-white rounded-full border-0 justify-center")}
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
