"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

type Dict = { whatsapp: { tooltip: string } };

const PHONE = "212653936003";

export default function WhatsAppButton({
  dict,
  tourName,
}: {
  dict: Dict;
  tourName: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  const message = tourName
    ? `Hi! I'd like to book the ${tourName} tour.`
    : `Hello! I'm interested in booking a tour with Fanorama Experiences.`;

  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

  if (!visible) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={dict.whatsapp.tooltip}
      className="fixed bottom-20 left-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#1ebe5d] transition-all duration-200 hover:scale-105 group"
      aria-label={dict.whatsapp.tooltip}
    >
      <MessageCircle className="w-5 h-5 fill-white" />
      <span className="text-sm font-medium hidden sm:block">WhatsApp</span>
    </a>
  );
}
