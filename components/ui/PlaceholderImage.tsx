"use client";

import Image from "next/image";
import { useState } from "react";
import type { Tone } from "@/data/menu";
import { site } from "@/data/site";
import { useLang } from "@/lib/i18n";
import { CakeIcon } from "./Icons";

const toneClasses: Record<Tone, string> = {
  blush: "from-blush-100 to-blush-200 text-berry-600",
  butter: "from-butter-100 to-butter-200 text-cocoa-600",
  pistachio: "from-pistachio-100 to-pistachio-200 text-cocoa-600",
  cream: "from-cream-100 to-cream-200 text-cocoa-600",
  lilac: "from-lilac-100 to-lilac-200 text-berry-600",
};

interface PlaceholderImageProps {
  /** Photo URL. Leave empty to show a gradient placeholder block. */
  src?: string;
  alt: string;
  sizes: string;
  tone?: Tone;
  preload?: boolean;
  className?: string;
  /** Show the "Sample photo" chip (also controlled globally by site.showPlaceholderLabels). */
  showLabel?: boolean;
}

/**
 * Image wrapper for swappable placeholder photos. Falls back to a tinted gradient
 * block if the photo is missing or fails to load. Parent must set the size/aspect ratio.
 */
export default function PlaceholderImage({
  src,
  alt,
  sizes,
  tone = "cream",
  preload = false,
  className = "",
  showLabel = true,
}: PlaceholderImageProps) {
  const { t } = useLang();
  const [failed, setFailed] = useState(false);
  const showPhoto = Boolean(src) && !failed;

  return (
    <div className={`relative overflow-hidden bg-linear-to-br ${toneClasses[tone]} ${className}`}>
      {showPhoto ? (
        <Image
          src={src!}
          alt={alt}
          fill
          sizes={sizes}
          preload={preload}
          onError={() => setFailed(true)}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <div
          {...(alt ? { role: "img", "aria-label": alt } : { "aria-hidden": true })}
          className="absolute inset-0 grid place-items-center"
        >
          <CakeIcon className="h-12 w-12 opacity-50" />
        </div>
      )}
      {showLabel && site.showPlaceholderLabels && (
        <span className="pointer-events-none absolute bottom-2 left-2 rounded-full bg-white/75 px-2 py-0.5 text-[10px] font-bold tracking-wide text-cocoa-700 backdrop-blur-sm">
          {t.placeholder.photo}
        </span>
      )}
    </div>
  );
}
