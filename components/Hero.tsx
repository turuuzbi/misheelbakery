"use client";

import Link from "next/link";
import { signatureProduct as product } from "@/data/menu";
import { site } from "@/data/site";
import { formatPrice } from "@/lib/format";
import { useLang } from "@/lib/i18n";
import { ArrowRightIcon, InstagramIcon } from "./ui/Icons";
import PlaceholderImage from "./ui/PlaceholderImage";

export default function Hero() {
  const { t, pick } = useLang();

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-blush-200/70 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute top-1/2 -left-32 h-72 w-72 rounded-full bg-butter-200/60 blur-3xl" />

      <div className="container-page relative grid items-center gap-12 pt-8 pb-20 sm:pt-14 md:grid-cols-2 md:gap-14 md:pb-28">
        <div>
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1
            id="hero-title"
            className="mt-4 font-serif text-[2.5rem] leading-[1.1] font-semibold text-balance text-cocoa-900 sm:text-6xl"
          >
            {t.hero.title}{" "}
            <span className="block text-berry-600 italic">{t.hero.titleAccent}</span>
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-cocoa-600">{t.hero.subtitle}</p>
          <div className="mt-8 flex animate-fade-up flex-col gap-3 sm:flex-row">
            {/* Opens an Instagram DM with the bakery */}
            <a href={site.instagramDmUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <InstagramIcon className="h-5 w-5" />
              {t.hero.order}
              <span className="sr-only"> {t.newTab}</span>
            </a>
            <Link href="/#menu" className="btn btn-soft">
              {t.hero.viewMenu}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-md">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-full rounded-b-[2.5rem] bg-blush-200" aria-hidden="true" />
          <PlaceholderImage
            src={product.image}
            alt={pick(product.name)}
            sizes="(min-width: 768px) 28rem, 90vw"
            tone={product.tone}
            preload
            className="aspect-[4/5] rounded-t-full rounded-b-[2.5rem] shadow-2xl shadow-cocoa-900/15"
          />
          <div className="absolute -bottom-6 left-4 animate-float rounded-3xl bg-white/95 px-5 py-4 shadow-xl ring-1 ring-cocoa-900/5 md:-left-8">
            <p className="text-[11px] font-extrabold tracking-wider text-berry-600 uppercase">{t.hero.signature}</p>
            <p className="mt-1 font-serif text-lg leading-tight font-semibold">{pick(product.name)}</p>
            <p className="mt-0.5 text-sm font-bold text-cocoa-600">{formatPrice(product.price)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
