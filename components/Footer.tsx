"use client";

import { site } from "@/data/site";
import { useLang } from "@/lib/i18n";
import { Logo } from "./Header";
import { InstagramIcon } from "./ui/Icons";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-cocoa-900/5 bg-cream-100">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Logo />
          <p className="mt-1 text-sm text-cocoa-600">{t.footer.tagline}</p>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-cocoa-700 hover:text-berry-600"
          >
            <InstagramIcon className="h-4 w-4" />@{site.instagramHandle}
            <span className="sr-only"> {t.newTab}</span>
          </a>
        </div>
        <div className="flex flex-col items-start gap-2 sm:items-end">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-extrabold text-cocoa-700 ring-1 ring-cocoa-900/10">
            <span className="h-2 w-2 rounded-full bg-berry-500" aria-hidden="true" />
            {t.footer.demo}
          </p>
          <p className="text-xs text-cocoa-600">{t.footer.demoNote}</p>
          <p className="text-xs text-cocoa-600">
            © {new Date().getFullYear()} Misheel&rsquo;s Bakery. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
