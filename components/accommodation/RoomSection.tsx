"use client";

import { useState } from "react";
import RoomCard from "./RoomCard";
import BookingForm from "@/components/tours/BookingForm";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Room = {
  id: string;
  nameEn: string;
  nameFr: string;
  photo: string;
  size: string | null;
  beds: string;
  bedsFr: string;
  maxPersons: number;
  priceMAD: number;
  features: string[];
  featuresFr: string[];
  highlight?: boolean;
};

type Dict = Parameters<typeof BookingForm>[0]["dict"];

export default function RoomSection({ rooms, lang, dict }: { rooms: Room[]; lang: string; dict: Dict }) {
  const [booking, setBooking] = useState<{ id: string; name: string } | null>(null);
  const isFr = lang === "fr";

  const handleBook = (roomId: string, roomName: string) => {
    setBooking({ id: roomId, name: roomName });
    setTimeout(() => {
      document.getElementById("room-booking-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="space-y-4">
      {rooms.map((room) => (
        <RoomCard key={room.nameEn} room={room} lang={lang} onBook={handleBook} />
      ))}

      <AnimatePresence>
        {booking && (
          <motion.div
            id="room-booking-form"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="relative mt-4 bg-white/5 border border-terracotta/30 rounded-2xl p-1">
              <div className="flex items-center justify-between px-5 pt-4 pb-2">
                <div>
                  <div className="text-saffron text-xs font-semibold tracking-widest uppercase mb-0.5">
                    {isFr ? "Réservation pour" : "Booking for"}
                  </div>
                  <div className="font-heading text-lg font-semibold text-white">{booking.name}</div>
                </div>
                <button
                  onClick={() => setBooking(null)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
              <BookingForm roomId={booking.id} tourName={booking.name} lang={lang} dict={dict} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
