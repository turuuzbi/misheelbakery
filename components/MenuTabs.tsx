"use client";

import Link from "next/link";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { categories, products, type CategoryId } from "@/data/menu";
import { useLang } from "@/lib/i18n";
import ProductCard from "./ProductCard";
import { ArrowRightIcon } from "./ui/Icons";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

interface MenuTabsProps {
  /** Max items per category (home page preview). Omit to show everything. */
  limit?: number;
}

/** Accessible category tabs (arrow keys / Home / End) with a product grid. */
export default function MenuTabs({ limit }: MenuTabsProps) {
  const { t, pick } = useLang();
  const [active, setActive] = useState<CategoryId>(categories[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  const items = products.filter((p) => p.category === active).slice(0, limit);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const count = categories.length;
    const current = categories.findIndex((c) => c.id === active);
    const next =
      e.key === "ArrowRight" ? (current + 1) % count
      : e.key === "ArrowLeft" ? (current - 1 + count) % count
      : e.key === "Home" ? 0
      : e.key === "End" ? count - 1
      : -1;
    if (next < 0) return;
    e.preventDefault();
    setActive(categories[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label={t.menu.categories}
        onKeyDown={onKeyDown}
        className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 py-1 sm:mx-0 sm:justify-center sm:px-0"
      >
        {categories.map((category, i) => {
          const selected = category.id === active;
          return (
            <button
              key={category.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${category.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(category.id)}
              className={`min-h-11 shrink-0 rounded-full px-5 text-sm font-extrabold transition duration-200 ${
                selected
                  ? "bg-cocoa-900 text-cream-50 shadow-md"
                  : "bg-white text-cocoa-700 ring-1 ring-cocoa-900/10 hover:bg-blush-100"
              }`}
            >
              {pick(category.name)}
            </button>
          );
        })}
      </div>

      <div role="tabpanel" id={`${baseId}-panel`} aria-labelledby={`${baseId}-tab-${active}`} className="mt-8 sm:mt-10">
        {/* key re-triggers the fade when the category changes */}
        <ul key={active} className="grid animate-fade-up gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {items.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} rowOnMobile sizes="(min-width: 1024px) 17rem, (min-width: 640px) 45vw, 8rem" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Home page menu section: preview of each category + link to the full menu page. */
export function MenuPreview() {
  const { t } = useLang();
  return (
    <section id="menu" aria-labelledby="menu-title" className="section">
      <div className="container-page">
        <Reveal>
          <SectionHeading id="menu-title" eyebrow={t.menu.eyebrow} title={t.menu.title} subtitle={t.menu.subtitle} />
        </Reveal>
        <Reveal delay={100} className="mt-10">
          <MenuTabs limit={4} />
        </Reveal>
        <div className="mt-10 text-center">
          <Link href="/menu" className="btn btn-soft">
            {t.menu.seeAll}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Content of the /menu page. */
export function FullMenu() {
  const { t } = useLang();
  return (
    <section className="pt-10 pb-20 sm:pt-16 sm:pb-28">
      <div className="container-page">
        <SectionHeading as="h1" eyebrow={t.menu.eyebrow} title={t.menu.pageTitle} subtitle={t.menu.pageSubtitle} />
        <div className="mt-10">
          <MenuTabs />
        </div>
        <div className="mt-16 flex flex-col items-center gap-4 rounded-[2rem] bg-blush-100 px-6 py-10 text-center">
          <p className="font-serif text-2xl font-semibold">{t.menu.customCta}</p>
          <Link href="/#custom" className="btn btn-primary">
            {t.menu.customCtaButton}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
