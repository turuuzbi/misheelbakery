"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { dictionary, type Dictionary } from "./dictionary";
import type { Lang, Localized } from "./types";

const STORAGE_KEY = "misheel-lang";
const DEFAULT_LANG: Lang = "mn";

// The chosen language is kept in localStorage (with an in-memory fallback for
// private modes that block storage) and read through useSyncExternalStore.
let memoryLang: Lang | null = null;
const listeners = new Set<() => void>();

function readLang(): Lang {
  if (memoryLang) return memoryLang;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "mn" || stored === "en") return stored;
  } catch {
    // storage unavailable
  }
  return DEFAULT_LANG;
}

function writeLang(lang: Lang) {
  memoryLang = lang;
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // storage unavailable — memoryLang still applies for this visit
  }
  listeners.forEach((notify) => notify());
}

function subscribe(notify: () => void) {
  listeners.add(notify);
  return () => {
    listeners.delete(notify);
  };
}

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** UI strings for the current language. */
  t: Dictionary;
  /** Picks the current language from a { mn, en } value. */
  pick: (value: Localized) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readLang, () => DEFAULT_LANG);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value: LanguageContextValue = {
    lang,
    setLang: writeLang,
    t: dictionary[lang],
    pick: (v) => v[lang],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
