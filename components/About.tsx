"use client";

import { photos } from "@/data/images";
import { useLang } from "@/lib/i18n";
import PlaceholderImage from "./ui/PlaceholderImage";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

// TODO: the story, founding year and stats are placeholders — replace with Misheel's real story.
export default function About() {
  const { t } = useLang();

  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="container-page grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal className="relative mx-auto w-full max-w-sm md:max-w-md">
          <div className="absolute -inset-3 -rotate-3 rounded-[2.75rem] bg-pistachio-100" aria-hidden="true" />
          <PlaceholderImage
            src={photos.baker}
            alt=""
            sizes="(min-width: 768px) 28rem, 90vw"
            tone="pistachio"
            className="aspect-[4/5] rounded-[2.5rem] shadow-xl shadow-cocoa-900/10"
          />
        </Reveal>

        <Reveal delay={100}>
          <SectionHeading id="about-title" eyebrow={t.about.eyebrow} title={t.about.title} align="left" />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-cocoa-600">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
          <p className="mt-6 font-serif text-2xl text-berry-600 italic">{t.about.signoff}</p>
          <dl className="mt-8 grid grid-cols-3 gap-3">
            {t.about.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse rounded-3xl bg-white px-3 py-4 text-center shadow-sm ring-1 ring-cocoa-900/5"
              >
                <dt className="mt-1 text-xs leading-snug font-bold text-cocoa-600">{stat.label}</dt>
                <dd className="font-serif text-2xl font-semibold text-cocoa-900 sm:text-3xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
