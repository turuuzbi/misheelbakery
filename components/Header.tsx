"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { useLang } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";
import { CloseIcon, MenuIcon } from "./ui/Icons";

export function Logo() {
  return (
    <span className="font-serif text-xl font-semibold tracking-tight text-cocoa-900">
      Misheel&rsquo;s <span className="text-berry-600 italic">Bakery</span>
    </span>
  );
}

export default function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/menu", label: t.nav.menu },
    { href: "/#custom", label: t.nav.custom },
    { href: "/#about", label: t.nav.about },
    { href: "/#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:shadow-lg"
      >
        {t.skip}
      </a>
      <header className="sticky top-0 z-50 border-b border-cocoa-900/5 bg-cream-50/85 backdrop-blur-md">
        <div className="container-page flex h-16 items-center justify-between gap-3">
          <Link href="/" aria-label={`Misheel's Bakery — ${t.nav.home}`} onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-7 text-sm font-bold text-cocoa-700">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-berry-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <a
              href={site.instagramDmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hidden min-h-10 px-5 py-2 text-sm sm:inline-flex"
            >
              {t.nav.order}
            </a>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full text-cocoa-900 ring-1 ring-cocoa-900/10 md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? t.nav.close : t.nav.open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <nav id="mobile-nav" hidden={!open} className="border-t border-cocoa-900/5 md:hidden">
          <ul className="container-page animate-fade-up py-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-lg font-bold text-cocoa-900 hover:bg-blush-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-3 pt-2 pb-1">
              <a
                href={site.instagramDmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full"
              >
                {t.hero.order}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
