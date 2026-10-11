"use client";

import type { Tone } from "@/data/menu";
import { site } from "@/data/site";
import { useLang } from "@/lib/i18n";
import { InstagramIcon } from "./ui/Icons";
import PlaceholderImage from "./ui/PlaceholderImage";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const tones: Tone[] = ["blush", "butter", "lilac", "cream", "pistachio", "blush"];

/** Static grid of placeholder tiles — every tile links to the Instagram profile. */
export default function InstagramGrid() {
  const { t } = useLang();

  return (
    <section aria-labelledby="instagram-title" className="section bg-pistachio-100/50">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="instagram-title"
            eyebrow={`@${site.instagramHandle}`}
            title={t.instagram.title}
            subtitle={t.instagram.subtitle}
          />
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-10 grid grid-cols-3 gap-2 sm:gap-4 lg:grid-cols-6">
            {site.instagramTiles.map((src, i) => (
              <li key={i}>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-2xl sm:rounded-3xl"
                >
                  <PlaceholderImage
                    src={src}
                    alt=""
                    sizes="(min-width: 1024px) 11rem, 33vw"
                    tone={tones[i % tones.length]}
                    showLabel={false}
                    className="aspect-square"
                  />
                  <span className="absolute inset-0 grid place-items-center bg-cocoa-900/0 text-white opacity-0 transition duration-300 group-hover:bg-cocoa-900/35 group-hover:opacity-100 group-focus-visible:bg-cocoa-900/35 group-focus-visible:opacity-100">
                    <InstagramIcon className="h-7 w-7" />
                  </span>
                  <span className="sr-only">
                    {t.instagram.tile} {i + 1} {t.newTab}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-10 text-center">
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <InstagramIcon className="h-5 w-5" />
            {t.instagram.follow} @{site.instagramHandle}
            <span className="sr-only"> {t.newTab}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
