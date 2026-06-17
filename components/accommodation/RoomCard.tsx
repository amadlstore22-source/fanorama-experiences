"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bed, Users, Maximize2, Check, Star, MessageCircle, Video } from "lucide-react";

type Room = {
  nameEn: string;
  nameFr: string;
  size: string | null;
  beds: string;
  bedsFr: string;
  maxPersons: number;
  priceMAD: number;
  features: string[];
  featuresFr: string[];
  highlight?: boolean;
};

type Props = {
  room: Room;
  lang: string;
  onBook: (roomName: string) => void;
};

const WHATSAPP = "212653936003";

export default function RoomCard({ room, lang, onBook }: Props) {
  const [open, setOpen] = useState(false);
  const isFr = lang === "fr";
  const name = isFr ? room.nameFr : room.nameEn;
  const beds = isFr ? room.bedsFr : room.beds;
  const features = isFr ? room.featuresFr : room.features;

  const waMessage = encodeURIComponent(
    `Hi! I'm interested in booking the *${room.nameEn}* at Gite Panorama.\n\n` +
    `📋 *Room details:*\n` +
    `• ${room.nameEn}\n` +
    `• ${room.beds}${room.size ? ` · ${room.size}` : ""}\n` +
    `• Max ${room.maxPersons} person${room.maxPersons > 1 ? "s" : ""}\n` +
    `• MAD ${room.priceMAD}/night\n\n` +
    `Could you please confirm availability?`
  );

  return (
    <>
      {/* Card */}
      <div
        className={`relative bg-white/5 border rounded-2xl p-5 cursor-pointer hover:bg-white/8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group ${
          room.highlight
            ? "border-terracotta/40 ring-1 ring-terracotta/20 hover:shadow-terracotta/20"
            : "border-white/10 hover:border-white/20"
        }`}
        onClick={() => setOpen(true)}
      >
        {room.highlight && (
          <div className="absolute -top-3 left-5">
            <span className="text-xs bg-terracotta text-white px-3 py-1 rounded-full font-semibold shadow-lg">
              <Star className="w-3 h-3 inline mr-1 fill-white" />
              {isFr ? "Plus populaire" : "Most Popular"}
            </span>
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          <div className="flex-1">
            <h3 className="font-heading text-xl font-semibold text-white mb-1 group-hover:text-saffron transition-colors">
              {name}
            </h3>
            <div className="flex flex-wrap gap-3 text-white/40 text-xs mb-3">
              <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5" />{beds}</span>
              {room.size && <span className="flex items-center gap-1"><Maximize2 className="w-3.5 h-3.5" />{room.size}</span>}
              <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />Max {room.maxPersons}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {features.slice(0, 3).map((f) => (
                <span key={f} className="text-xs bg-white/5 text-white/50 px-2.5 py-1 rounded-full border border-white/10">
                  {f}
                </span>
              ))}
              {features.length > 3 && (
                <span className="text-xs text-white/30 px-2 py-1">+{features.length - 3} more</span>
              )}
            </div>
          </div>

          <div className="shrink-0 text-right">
            <div className="text-white/30 text-xs mb-0.5">{isFr ? "À partir de" : "From"}</div>
            <div className="font-heading text-3xl font-bold text-terracotta">MAD {room.priceMAD}</div>
            <div className="text-white/30 text-xs">{isFr ? "/ nuit" : "/ night"}</div>
            <div className="mt-3 text-xs text-white/40 group-hover:text-saffron transition-colors flex items-center gap-1 justify-end">
              {isFr ? "Voir détails" : "View details"} →
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Panel */}
            <motion.div
              className="relative bg-[#1a1917] border border-white/10 rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-br from-charcoal to-[#111110] px-7 pt-7 pb-6 border-b border-white/10">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>

                {room.highlight && (
                  <span className="inline-flex items-center gap-1 text-xs bg-terracotta text-white px-3 py-1 rounded-full font-semibold mb-3">
                    <Star className="w-3 h-3 fill-white" />
                    {isFr ? "Plus populaire" : "Most Popular"}
                  </span>
                )}

                <h2 className="font-heading text-2xl font-bold text-white pr-10">{name}</h2>
                <div className="flex flex-wrap gap-3 mt-3 text-white/40 text-sm">
                  <span className="flex items-center gap-1.5"><Bed className="w-4 h-4" />{beds}</span>
                  {room.size && <span className="flex items-center gap-1.5"><Maximize2 className="w-4 h-4" />{room.size}</span>}
                  <span className="flex items-center gap-1.5"><Users className="w-4 h-4" />Max {room.maxPersons} {isFr ? "pers." : "persons"}</span>
                </div>
              </div>

              {/* Video placeholder */}
              <div className="mx-7 mt-6 rounded-xl bg-white/5 border border-white/10 h-40 flex flex-col items-center justify-center gap-2 text-white/20 border-dashed">
                <Video className="w-8 h-8" />
                <span className="text-xs">{isFr ? "Aperçu vidéo bientôt disponible" : "Video preview coming soon"}</span>
              </div>

              {/* Features */}
              <div className="px-7 pt-5 pb-2">
                <h4 className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-3">
                  {isFr ? "Équipements inclus" : "Room features"}
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-white/70">
                      <Check className="w-3.5 h-3.5 text-atlas-green shrink-0" /> {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Price + CTAs */}
              <div className="px-7 pt-5 pb-7">
                <div className="flex items-end gap-2 mb-5">
                  <div>
                    <div className="text-white/30 text-xs">{isFr ? "À partir de" : "From"}</div>
                    <div className="font-heading text-4xl font-bold text-terracotta">MAD {room.priceMAD}</div>
                    <div className="text-white/30 text-xs">{isFr ? "par nuit · taxes incluses" : "per night · taxes included"}</div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => { setOpen(false); onBook(name); }}
                    className="w-full bg-terracotta hover:bg-terracotta-dark text-white rounded-full py-3.5 text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-terracotta/30"
                  >
                    {isFr ? "Réserver cette chambre" : "Book this room"}
                  </button>
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 rounded-full py-3 text-sm font-medium transition-all duration-200"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {isFr ? "Demander sur WhatsApp" : "Ask on WhatsApp"}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
