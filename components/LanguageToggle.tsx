"use client";

import { useLang } from "@/lib/i18n";
import type { Lang } from "@/lib/types";

const options: { value: Lang; label: string }[] = [
  { value: "mn", label: "МН" },
  { value: "en", label: "EN" },
];

export default function LanguageToggle() {
  const { lang, setLang, t } = useLang();

  return (
    <div role="group" aria-label={t.lang.label} className="flex rounded-full bg-white/80 p-1 ring-1 ring-cocoa-900/10">
      {options.map((option) => {
        const active = option.value === lang;
        return (
          <button
            key={option.value}
            type="button"
            lang={option.value}
            aria-pressed={active}
            onClick={() => setLang(option.value)}
            className={`min-h-9 min-w-10 rounded-full px-2.5 text-xs font-extrabold tracking-wide transition-colors ${
              active ? "bg-cocoa-900 text-cream-50" : "text-cocoa-700 hover:text-berry-600"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
