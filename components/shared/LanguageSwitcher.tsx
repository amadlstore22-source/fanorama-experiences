"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher({
  lang,
  scrolled,
}: {
  lang: string;
  scrolled: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (newLang: string) => {
    const segments = pathname.split("/");
    segments[1] = newLang;
    router.push(segments.join("/"));
  };

  const textColor = scrolled ? "text-charcoal" : "text-white/90";

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <button
        onClick={() => switchTo("en")}
        className={`px-2 py-1 rounded transition-colors hover:text-terracotta ${
          lang === "en"
            ? "text-terracotta font-semibold"
            : textColor
        }`}
      >
        EN
      </button>
      <span className={`${textColor} opacity-40`}>|</span>
      <button
        onClick={() => switchTo("fr")}
        className={`px-2 py-1 rounded transition-colors hover:text-terracotta ${
          lang === "fr"
            ? "text-terracotta font-semibold"
            : textColor
        }`}
      >
        FR
      </button>
    </div>
  );
}
