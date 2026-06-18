"use client";

import { useEffect, useState } from "react";
import { DayPicker, type DateRange } from "react-day-picker";
import { addDays, eachDayOfInterval, parseISO, isBefore, startOfDay } from "date-fns";
import "react-day-picker/style.css";

type BookedRange = { check_in: string; check_out: string };

type Props = {
  roomId: string;
  lang: string;
  selected: DateRange | undefined;
  onSelect: (range: DateRange | undefined) => void;
};

const today = startOfDay(new Date());

export default function AvailabilityCalendar({ roomId, lang, selected, onSelect }: Props) {
  const [bookedDates, setBookedDates] = useState<Date[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!roomId) return;
    setLoading(true);
    fetch(`/api/availability?room_id=${encodeURIComponent(roomId)}`)
      .then((r) => r.json())
      .then(({ bookings }: { bookings: BookedRange[] }) => {
        const dates: Date[] = [];
        for (const b of bookings ?? []) {
          const start = parseISO(b.check_in);
          const end = addDays(parseISO(b.check_out), -1); // check-out day itself is free
          eachDayOfInterval({ start, end }).forEach((d) => dates.push(d));
        }
        setBookedDates(dates);
      })
      .catch(() => setBookedDates([]))
      .finally(() => setLoading(false));
  }, [roomId]);

  const isFr = lang === "fr";

  // Block: past days + already booked days
  const disabled = [
    (d: Date) => isBefore(d, today),
    ...bookedDates.map((d) => d),
  ];

  return (
    <div className="rounded-xl overflow-hidden">
      {loading ? (
        <div className="flex items-center justify-center h-48 text-white/40 text-sm">
          {isFr ? "Chargement du calendrier…" : "Loading calendar…"}
        </div>
      ) : (
        <>
          <div className="flex gap-3 mb-3 flex-wrap text-xs">
            <span className="flex items-center gap-1.5 text-white/50">
              <span className="w-3 h-3 rounded-sm bg-white/10 border border-white/20 inline-block" />
              {isFr ? "Disponible" : "Available"}
            </span>
            <span className="flex items-center gap-1.5 text-white/50">
              <span className="w-3 h-3 rounded-sm bg-red-900/60 inline-block" />
              {isFr ? "Réservé" : "Booked"}
            </span>
            <span className="flex items-center gap-1.5 text-white/50">
              <span className="w-3 h-3 rounded-sm bg-terracotta inline-block" />
              {isFr ? "Votre sélection" : "Your selection"}
            </span>
          </div>
          <DayPicker
            mode="range"
            selected={selected}
            onSelect={onSelect}
            disabled={disabled}
            numberOfMonths={2}
            pagedNavigation
            showOutsideDays={false}
            locale={isFr ? undefined : undefined}
            classNames={{
              root: "rdp-custom",
              months: "flex flex-col sm:flex-row gap-4",
              month: "space-y-2",
              month_caption: "flex justify-center pt-1 pb-2 relative items-center",
              caption_label: "text-sm font-semibold text-white",
              nav: "flex items-center gap-1",
              button_previous: "text-white/50 hover:text-white p-1 rounded transition-colors",
              button_next: "text-white/50 hover:text-white p-1 rounded transition-colors",
              month_grid: "w-full border-collapse",
              weekdays: "flex",
              weekday: "text-white/30 rounded-md w-9 font-normal text-[0.8rem] text-center",
              week: "flex w-full mt-1",
              day: "h-9 w-9 text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
              day_button: "h-9 w-9 p-0 font-normal rounded-md text-white/80 hover:bg-white/10 transition-colors",
              selected: "bg-terracotta text-white rounded-md",
              today: "text-saffron font-bold",
              outside: "text-white/20 opacity-50",
              disabled: "text-white/20 opacity-40 cursor-not-allowed line-through",
              range_start: "bg-terracotta text-white rounded-l-md",
              range_end: "bg-terracotta text-white rounded-r-md",
              range_middle: "bg-terracotta/30 text-white rounded-none",
              hidden: "invisible",
            }}
          />
        </>
      )}
    </div>
  );
}
