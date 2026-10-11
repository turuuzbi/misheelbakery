"use client";

import { useRef } from "react";
import { featuredProducts } from "@/data/menu";
import { useLang } from "@/lib/i18n";
import ProductCard from "./ProductCard";
import { ChevronLeftIcon, ChevronRightIcon } from "./ui/Icons";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

// Lines the first card up with .container-page on wide screens.
const edgePadding =
  "px-5 scroll-px-5 sm:px-8 sm:scroll-px-8 lg:px-[max(2rem,calc((100vw_-_72rem)/2_+_2rem))] lg:scroll-px-[max(2rem,calc((100vw_-_72rem)/2_+_2rem))]";

/** Lightweight scroll-snap carousel: swipe on phones, arrow buttons on larger screens. */
export default function FeaturedCarousel() {
  const { t } = useLang();
  const trackRef = useRef<HTMLUListElement>(null);

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 20 : track.clientWidth * 0.8;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: direction * step, behavior: reduceMotion ? "auto" : "smooth" });
  };

  const arrowClass =
    "grid h-12 w-12 place-items-center rounded-full bg-white text-cocoa-900 shadow-sm ring-1 ring-cocoa-900/10 transition hover:-translate-y-0.5 hover:bg-cocoa-900 hover:text-cream-50";

  return (
    <section aria-labelledby="featured-title" className="section overflow-hidden bg-blush-100/60">
      <div className="container-page flex items-end justify-between gap-6">
        <Reveal>
          <SectionHeading id="featured-title" eyebrow={t.featured.eyebrow} title={t.featured.title} align="left" />
        </Reveal>
        <div className="hidden shrink-0 gap-2 sm:flex">
          <button type="button" className={arrowClass} onClick={() => scroll(-1)} aria-label={t.featured.prev}>
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button type="button" className={arrowClass} onClick={() => scroll(1)} aria-label={t.featured.next}>
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <Reveal delay={100}>
        <ul
          ref={trackRef}
          aria-label={t.featured.title}
          className={`no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pt-2 pb-6 ${edgePadding}`}
        >
          {featuredProducts.map((product) => (
            <li key={product.id} className="w-[78%] max-w-sm shrink-0 snap-start sm:w-[45%] lg:w-[31%]">
              <ProductCard product={product} sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 78vw" />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
