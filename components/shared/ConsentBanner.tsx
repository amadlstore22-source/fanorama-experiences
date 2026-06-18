"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, ExternalLink } from "lucide-react";

const CONSENT_KEY = "gite-panorama-consent-v1";

type Props = { lang: string };

const copy = {
  en: {
    heading: "Before you continue",
    body: "By using this website you agree to our",
    terms: "Terms & Conditions",
    and: "and",
    privacy: "Privacy Policy",
    period: ".",
    readFirst: "You can read them before accepting.",
    accept: "I Accept & Continue",
  },
  fr: {
    heading: "Avant de continuer",
    body: "En utilisant ce site vous acceptez nos",
    terms: "Conditions Générales",
    and: "et notre",
    privacy: "Politique de Confidentialité",
    period: ".",
    readFirst: "Vous pouvez les lire avant d'accepter.",
    accept: "J'accepte et continue",
  },
} as const;

export default function ConsentBanner({ lang }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) setVisible(true);
  }, []);

  if (!visible) return null;

  const t = lang === "fr" ? copy.fr : copy.en;

  function accept() {
    localStorage.setItem(CONSENT_KEY, "1");
    setVisible(false);
  }

  return (
    <>
      {/* backdrop — blocks all interaction behind the banner */}
      <div className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-[2px]" aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="consent-heading"
        className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t-4 border-terracotta shadow-2xl"
      >
        <div className="max-w-4xl mx-auto px-4 py-5 sm:px-6 sm:py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* icon */}
          <div className="shrink-0 w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center">
            <Shield className="w-5 h-5 text-terracotta" />
          </div>

          {/* text */}
          <div className="flex-1 min-w-0">
            <p id="consent-heading" className="font-semibold text-charcoal text-sm sm:text-base">
              {t.heading}
            </p>
            <p className="mt-1 text-sm text-charcoal/70 leading-relaxed">
              {t.body}{" "}
              <Link
                href={`/${lang}/terms`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 text-terracotta hover:underline font-medium"
              >
                {t.terms}
                <ExternalLink className="w-3 h-3" />
              </Link>{" "}
              {t.and}{" "}
              <Link
                href={`/${lang}/privacy`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 text-terracotta hover:underline font-medium"
              >
                {t.privacy}
                <ExternalLink className="w-3 h-3" />
              </Link>
              {t.period}{" "}
              <span className="text-charcoal/50">{t.readFirst}</span>
            </p>
          </div>

          {/* cta */}
          <button
            onClick={accept}
            className="shrink-0 w-full sm:w-auto bg-terracotta hover:bg-[#A54E22] text-white font-semibold text-sm rounded-full px-7 py-3 transition-colors shadow-md hover:shadow-terracotta/30 focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </>
  );
}
