"use client";

import type { Product } from "@/data/menu";
import { site } from "@/data/site";
import { formatPrice } from "@/lib/format";
import { useLang } from "@/lib/i18n";
import { ArrowRightIcon } from "./ui/Icons";
import PlaceholderImage from "./ui/PlaceholderImage";

interface ProductCardProps {
  product: Product;
  /** next/image `sizes` hint for the card's photo. */
  sizes: string;
  /** Lay the card out as a compact row on phones (used in menu grids). */
  rowOnMobile?: boolean;
}

export default function ProductCard({ product, sizes, rowOnMobile = false }: ProductCardProps) {
  const { t, pick } = useLang();
  const name = pick(product.name);
  const price = formatPrice(product.price);

  return (
    <article
      className={`group flex h-full overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-cocoa-900/5 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-cocoa-900/10 ${
        rowOnMobile ? "flex-row sm:flex-col" : "flex-col"
      }`}
    >
      <div className={`relative ${rowOnMobile ? "w-32 shrink-0 sm:w-auto" : ""}`}>
        {/* Name is in the heading below, so the photo is decorative (alt=""). */}
        <PlaceholderImage
          src={product.image}
          alt=""
          sizes={sizes}
          tone={product.tone}
          showLabel={!rowOnMobile}
          className={rowOnMobile ? "h-full min-h-32 sm:aspect-[4/3] sm:h-auto" : "aspect-[4/3]"}
        />
        {product.badge && (
          <span className="absolute top-3 left-3 rounded-full bg-berry-600 px-3 py-1 text-xs font-extrabold text-white shadow">
            {pick(product.badge)}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-serif text-lg leading-snug font-semibold text-cocoa-900">{name}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-cocoa-600">{pick(product.description)}</p>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
          <p className="font-extrabold text-cocoa-900">
            {product.priceFrom ? t.menu.fromPrice.replace("{price}", price) : price}
          </p>
          <a
            href={site.instagramDmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-8 items-center gap-1.5 text-sm font-extrabold text-berry-600 transition-all hover:gap-2.5"
          >
            {t.menu.order}
            <ArrowRightIcon className="h-4 w-4" />
            <span className="sr-only">
              {" "}
              — {name} {t.newTab}
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}
