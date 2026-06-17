"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

type Dict = {
  filter: {
    type: string; duration: string; difficulty: string;
    allTypes: string; allDurations: string; allDifficulties: string;
    dayTour: string; multiDay: string; weekPlus: string;
  };
  tour: {
    difficulty_beginner: string; difficulty_intermediate: string; difficulty_advanced: string;
    category_mtb: string; category_ebike: string; category_ski: string; category_trekking: string;
  };
};

export default function TourFilter({ dict }: { dict: Dict }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const set = (key: string, val: string) => {
    const p = new URLSearchParams(params.toString());
    if (val === "all") p.delete(key); else p.set(key, val);
    router.push(`${pathname}?${p.toString()}`);
  };

  const type = params.get("type") || "all";
  const duration = params.get("duration") || "all";
  const difficulty = params.get("difficulty") || "all";

  const sel = "bg-terracotta text-white border-terracotta";
  const unsel = "bg-white text-charcoal border-border hover:border-terracotta hover:text-terracotta";
  const btn = `px-4 py-2 rounded-full text-sm font-medium border transition-colors`;

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {/* Type */}
      <div className="flex gap-2 flex-wrap">
        {[
          ["all", dict.filter.allTypes],
          ["mtb", dict.tour.category_mtb],
          ["ebike", dict.tour.category_ebike],
          ["ski", dict.tour.category_ski],
          ["trekking", dict.tour.category_trekking],
        ].map(([v, label]) => (
          <button key={v} onClick={() => set("type", v)} className={`${btn} ${type === v ? sel : unsel}`}>{label}</button>
        ))}
      </div>
      <div className="w-px bg-border hidden sm:block" />
      {/* Duration */}
      <div className="flex gap-2 flex-wrap">
        {[
          ["all", dict.filter.allDurations],
          ["day", dict.filter.dayTour],
          ["multi", dict.filter.multiDay],
          ["week", dict.filter.weekPlus],
        ].map(([v, label]) => (
          <button key={v} onClick={() => set("duration", v)} className={`${btn} ${duration === v ? sel : unsel}`}>{label}</button>
        ))}
      </div>
      <div className="w-px bg-border hidden sm:block" />
      {/* Difficulty */}
      <div className="flex gap-2 flex-wrap">
        {[
          ["all", dict.filter.allDifficulties],
          ["beginner", dict.tour.difficulty_beginner],
          ["intermediate", dict.tour.difficulty_intermediate],
          ["advanced", dict.tour.difficulty_advanced],
        ].map(([v, label]) => (
          <button key={v} onClick={() => set("difficulty", v)} className={`${btn} ${difficulty === v ? sel : unsel}`}>{label}</button>
        ))}
      </div>
    </div>
  );
}
