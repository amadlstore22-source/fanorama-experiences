"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { MessageCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EMAILJS_SERVICE = "service_rc8bzpw";
const EMAILJS_TEMPLATE = "template_nbnnk7m";
const EMAILJS_PUBLIC = "aEEjoLwpu71Cy2oAK";
const WHATSAPP = "212653936003";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  date: z.string().min(1, "Preferred date required"),
  groupSize: z.number().min(1).max(20),
  message: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

type Dict = { booking: { title: string; name: string; email: string; phone: string; date: string; groupSize: string; message: string; submit: string; sending: string; successTitle: string; successMessage: string; whatsappAlt: string; namePlaceholder: string; emailPlaceholder: string; phonePlaceholder: string; datePlaceholder: string; messagePlaceholder: string; tourLabel: string } };

export default function BookingForm({ tourName, lang, dict }: { tourName: string; lang: string; dict: Dict }) {
  const defaultWaMessage = `Hi! I'm interested in booking: ${tourName}. Could you please send me more details?`;
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [waUrl, setWaUrl] = useState(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(defaultWaMessage)}`);
  const b = dict.booking;

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { groupSize: 2 },
  });

  const buildEmailBody = (data: FormData) => `
New Booking Request — Fanorama Experiences
==========================================

Booking for: ${tourName}

GUEST DETAILS
-------------
Name:         ${data.name}
Email:        ${data.email}
Phone/WA:     ${data.phone || "—"}

BOOKING DETAILS
---------------
Tour / Stay:  ${tourName}
Preferred date(s): ${data.date}
Group size:   ${data.groupSize} person${data.groupSize > 1 ? "s" : ""}

ADDITIONAL MESSAGE
------------------
${data.message || "No additional message."}

==========================================
Reply to: ${data.email}
Sent via Fanorama Experiences website
`.trim();

  const buildWhatsAppMessage = (data: FormData) =>
    `Hi! I'd like to make a booking with Fanorama Experiences.\n\n` +
    `📌 *Booking for:* ${tourName}\n` +
    `📅 *Date(s):* ${data.date}\n` +
    `👥 *Group size:* ${data.groupSize} person${data.groupSize > 1 ? "s" : ""}\n` +
    `👤 *Name:* ${data.name}\n` +
    `📧 *Email:* ${data.email}\n` +
    (data.phone ? `📞 *Phone:* ${data.phone}\n` : "") +
    (data.message ? `\n💬 *Message:* ${data.message}` : "");

  const onSubmit = async (data: FormData) => {
    setError("");
    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          tour_name: tourName,
          from_name: data.name,
          reply_to: data.email,
          phone: data.phone || "—",
          preferred_date: data.date,
          group_size: data.groupSize,
          message: data.message || "—",
          email_body: buildEmailBody(data),
        },
        EMAILJS_PUBLIC
      );
      setSent(true);
      setWaUrl(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(buildWhatsAppMessage(data))}`);
    } catch {
      setError(lang === "fr" ? "Erreur d'envoi. Contactez-nous sur WhatsApp." : "Failed to send. Please contact us on WhatsApp.");
    }
  };

  if (sent) {
    return (
      <div className="bg-white rounded-2xl border border-border p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-atlas-green mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-bold text-charcoal mb-2">{b.successTitle}</h3>
        <p className="text-muted-warm text-sm mb-6">{b.successMessage}</p>
        <a href={waUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[#25D366] font-medium hover:underline">
          <MessageCircle className="w-4 h-4" /> {b.whatsappAlt}
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-border p-6 md:p-8">
      <h3 className="font-heading text-2xl font-bold text-charcoal mb-1">{b.title}</h3>
      <p className="text-muted-warm text-sm mb-6">{b.tourLabel}: <span className="font-medium text-charcoal">{tourName}</span></p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <label className="text-sm font-medium text-charcoal mb-1.5 block">{b.name} *</label>
          <Input {...register("name")} placeholder={b.namePlaceholder} className="bg-sand border-border" />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="text-sm font-medium text-charcoal mb-1.5 block">{b.email} *</label>
          <Input {...register("email")} type="email" placeholder={b.emailPlaceholder} className="bg-sand border-border" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="text-sm font-medium text-charcoal mb-1.5 block">{b.phone}</label>
          <Input {...register("phone")} type="tel" placeholder={b.phonePlaceholder} className="bg-sand border-border" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-medium text-charcoal mb-1.5 block">{b.date} *</label>
            <Input {...register("date")} placeholder={b.datePlaceholder} className="bg-sand border-border" />
            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-charcoal mb-1.5 block">{b.groupSize}</label>
            <Input {...register("groupSize", { valueAsNumber: true })} type="number" min={1} max={20} className="bg-sand border-border" />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-charcoal mb-1.5 block">{b.message}</label>
          <Textarea {...register("message")} placeholder={b.messagePlaceholder} rows={3} className="bg-sand border-border resize-none" />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button type="submit" disabled={isSubmitting} className="w-full bg-terracotta hover:bg-terracotta-dark text-white rounded-full h-12 text-base">
          {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />{b.sending}</> : b.submit}
        </Button>

        <a href={waUrl} target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-sm text-[#25D366] font-medium hover:underline mt-1">
          <MessageCircle className="w-4 h-4" /> {b.whatsappAlt}
        </a>
      </form>
    </div>
  );
}
