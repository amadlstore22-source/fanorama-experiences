"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";
import { MessageCircle, CheckCircle2, Loader2, AlertTriangle, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AvailabilityCalendar from "@/components/shared/AvailabilityCalendar";

const EMAILJS_SERVICE = "service_rc8bzpw";
const EMAILJS_TEMPLATE = "template_nbnnk7m";
const EMAILJS_PUBLIC = "aEEjoLwpu71Cy2oAK";
const WHATSAPP = "212653936003";

// Room ID → display name mapping for suggestions
const ROOM_NAMES: Record<string, { en: string; fr: string }> = {
  "single-mountain-view":  { en: "Single Room with Mountain View", fr: "Chambre Simple Vue Montagne" },
  "double-room":           { en: "Double Room", fr: "Chambre Double" },
  "deluxe-double-balcony": { en: "Deluxe Double Room with Balcony", fr: "Chambre Double Deluxe avec Balcon" },
  "deluxe-twin-balcony":   { en: "Deluxe Double or Twin Room with Balcony", fr: "Chambre Double ou Twin Deluxe avec Balcon" },
  "double-twin-terrace":   { en: "Double or Twin Room with Terrace", fr: "Chambre Double ou Twin avec Terrasse" },
};

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  groupSize: z.number().min(1).max(20),
  message: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

type Dict = {
  booking: {
    title: string; name: string; email: string; phone: string; date: string; checkOut: string;
    groupSize: string; message: string; submit: string; sending: string; successTitle: string;
    successMessage: string; whatsappAlt: string; namePlaceholder: string; emailPlaceholder: string;
    phonePlaceholder: string; datePlaceholder: string; checkOutPlaceholder: string;
    messagePlaceholder: string; tourLabel: string;
  };
};

type Props = {
  tourName: string;
  roomId?: string;
  lang: string;
  dict: Dict;
};

export default function BookingForm({ tourName, roomId, lang, dict }: Props) {
  const isFr = lang === "fr";
  const b = dict.booking;

  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [conflictSuggestions, setConflictSuggestions] = useState<string[] | null>(null);
  const [waUrl, setWaUrl] = useState(
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
      isFr
        ? `Bonjour ! Je souhaite réserver : ${tourName} au Gite Panorama. Pouvez-vous me donner plus de détails ?`
        : `Hi! I'd like to book: ${tourName} at Gite Panorama. Could you please send me more details?`
    )}`
  );

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { groupSize: 2 },
  });

  const checkIn  = dateRange?.from ? format(dateRange.from, "yyyy-MM-dd") : "";
  const checkOut = dateRange?.to   ? format(dateRange.to,   "yyyy-MM-dd") : "";

  const buildEmailBody = (data: FormData) => `
New Booking Request — Gite Panorama Imlil
==========================================

Room / Activity: ${tourName}
Check-in:  ${checkIn}
Check-out: ${checkOut}

GUEST DETAILS
-------------
Name:       ${data.name}
Email:      ${data.email}
Phone/WA:   ${data.phone || "—"}
Guests:     ${data.groupSize}

ADDITIONAL MESSAGE
------------------
${data.message || "No additional message."}

==========================================
Reply to: ${data.email}
Sent via Gite Panorama Imlil website
`.trim();

  const buildWaMessage = (data: FormData) =>
    `Hi! I'd like to make a booking at Gite Panorama Imlil.\n\n` +
    `📌 *Room / Activity:* ${tourName}\n` +
    `📅 *Check-in:* ${checkIn}\n` +
    `📅 *Check-out:* ${checkOut}\n` +
    `👥 *Guests:* ${data.groupSize}\n` +
    `👤 *Name:* ${data.name}\n` +
    `📧 *Email:* ${data.email}\n` +
    (data.phone ? `📞 *Phone:* ${data.phone}\n` : "") +
    (data.message ? `\n💬 *Message:* ${data.message}` : "");

  const onSubmit = async (data: FormData) => {
    setError("");
    setConflictSuggestions(null);

    if (!checkIn || !checkOut) {
      setError(isFr ? "Veuillez sélectionner vos dates d'arrivée et de départ." : "Please select your check-in and check-out dates.");
      return;
    }

    setSubmitting(true);
    try {
      // If we have a roomId, check availability via Supabase first
      if (roomId) {
        const res = await fetch("/api/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            room_id: roomId,
            guest_name: data.name,
            guest_email: data.email,
            guest_phone: data.phone || null,
            check_in: checkIn,
            check_out: checkOut,
            guests: data.groupSize,
            message: data.message || null,
          }),
        });

        if (res.status === 409) {
          const body = await res.json();
          setConflictSuggestions(body.suggestions ?? []);
          setSubmitting(false);
          return;
        }

        if (!res.ok) {
          throw new Error("booking_failed");
        }
      }

      // Send confirmation email via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          title: `Booking Request — ${tourName}`,
          name: data.name,
          email: data.email,
          message: buildEmailBody(data),
        },
        EMAILJS_PUBLIC
      );

      setWaUrl(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(buildWaMessage(data))}`);
      setSent(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(isFr ? "Erreur d'envoi. Contactez-nous sur WhatsApp." : "Failed to send. Please contact us on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div className="bg-[#1a1917] border border-white/10 rounded-2xl p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-atlas-green mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-bold text-white mb-2">{b.successTitle}</h3>
        <p className="text-white/50 text-sm mb-6">{b.successMessage}</p>
        <a href={waUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[#25D366] font-medium hover:underline">
          <MessageCircle className="w-4 h-4" /> {b.whatsappAlt}
        </a>
      </div>
    );
  }

  return (
    <div className="bg-[#1a1917] border border-white/10 rounded-2xl p-6 md:p-8">
      <h3 className="font-heading text-2xl font-bold text-white mb-1">{b.title}</h3>
      <p className="text-white/40 text-sm mb-6">
        {b.tourLabel}: <span className="font-medium text-saffron">{tourName}</span>
      </p>

      {/* Availability calendar — only shown when we have a roomId */}
      {roomId && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <CalendarDays className="w-4 h-4 text-terracotta" />
            <span className="text-sm font-medium text-white/70">
              {isFr ? "Sélectionnez vos dates" : "Select your dates"}
            </span>
          </div>
          <AvailabilityCalendar
            roomId={roomId}
            lang={lang}
            selected={dateRange}
            onSelect={setDateRange}
          />
          {dateRange?.from && dateRange?.to && (
            <div className="mt-3 flex gap-4 text-sm">
              <div className="flex-1 bg-white/5 rounded-lg px-3 py-2">
                <div className="text-white/40 text-xs mb-0.5">{isFr ? "Arrivée" : "Check-in"}</div>
                <div className="text-white font-medium">{format(dateRange.from, "d MMM yyyy")}</div>
              </div>
              <div className="flex-1 bg-white/5 rounded-lg px-3 py-2">
                <div className="text-white/40 text-xs mb-0.5">{isFr ? "Départ" : "Check-out"}</div>
                <div className="text-white font-medium">{format(dateRange.to, "d MMM yyyy")}</div>
              </div>
            </div>
          )}
          {(!dateRange?.from || !dateRange?.to) && (
            <p className="text-white/30 text-xs mt-2">
              {isFr ? "Cliquez sur une date d'arrivée puis une date de départ." : "Click a check-in date then a check-out date."}
            </p>
          )}
        </div>
      )}

      {/* Conflict warning + suggestions */}
      {conflictSuggestions !== null && (
        <div className="mb-5 bg-red-950/60 border border-red-500/30 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-red-300 font-semibold text-sm">
                {isFr ? "Ces dates sont déjà réservées." : "These dates are already booked."}
              </p>
              {conflictSuggestions.length > 0 ? (
                <>
                  <p className="text-white/50 text-xs mt-1 mb-2">
                    {isFr ? "Chambres disponibles pour ces dates :" : "These rooms are available for your dates:"}
                  </p>
                  <ul className="space-y-1">
                    {conflictSuggestions.map((id) => (
                      <li key={id} className="text-saffron text-sm font-medium">
                        ✓ {isFr ? ROOM_NAMES[id]?.fr : ROOM_NAMES[id]?.en}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="text-white/50 text-xs mt-1">
                  {isFr
                    ? "Aucune chambre disponible pour ces dates. Essayez d'autres dates."
                    : "No other rooms available for those dates. Please try different dates."}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <label className="text-sm font-medium text-white/70 mb-1.5 block">{b.name} *</label>
          <Input {...register("name")} placeholder={b.namePlaceholder}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-terracotta/50" />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="text-sm font-medium text-white/70 mb-1.5 block">{b.email} *</label>
          <Input {...register("email")} type="email" placeholder={b.emailPlaceholder}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-terracotta/50" />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="text-sm font-medium text-white/70 mb-1.5 block">{b.phone}</label>
          <Input {...register("phone")} type="tel" placeholder={b.phonePlaceholder}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-terracotta/50" />
        </div>
        <div>
          <label className="text-sm font-medium text-white/70 mb-1.5 block">{b.groupSize}</label>
          <Input {...register("groupSize", { valueAsNumber: true })} type="number" min={1} max={20}
            className="bg-white/5 border-white/10 text-white focus:border-terracotta/50" />
        </div>
        <div>
          <label className="text-sm font-medium text-white/70 mb-1.5 block">{b.message}</label>
          <Textarea {...register("message")} placeholder={b.messagePlaceholder} rows={3}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/20 resize-none focus:border-terracotta/50" />
        </div>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <Button type="submit" disabled={submitting}
          className="w-full bg-terracotta hover:bg-terracotta-dark text-white rounded-full h-12 text-base shadow-lg hover:shadow-terracotta/30 transition-all duration-200">
          {submitting
            ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />{b.sending}</>
            : b.submit}
        </Button>

        <a href={waUrl} target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-sm text-[#25D366] font-medium hover:underline mt-1">
          <MessageCircle className="w-4 h-4" /> {b.whatsappAlt}
        </a>
      </form>
    </div>
  );
}
