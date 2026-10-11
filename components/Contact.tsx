"use client";

import type { ReactNode } from "react";
import { mapDirectionsUrl, mapEmbedUrl, site } from "@/data/site";
import { useLang } from "@/lib/i18n";
import { ClockIcon, FacebookIcon, InstagramIcon, MapPinIcon, MessageIcon, PhoneIcon } from "./ui/Icons";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

function InfoRow({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-berry-600 shadow-sm ring-1 ring-cocoa-900/5">
        {icon}
      </span>
      <div className="min-w-0">
        <h3 className="text-xs font-extrabold tracking-wider text-cocoa-600 uppercase">{title}</h3>
        <div className="mt-1 text-cocoa-900">{children}</div>
      </div>
    </div>
  );
}

// TODO: phone, address, hours and map location are placeholders — edit them in data/site.ts.
export default function Contact() {
  const { t, pick } = useLang();
  const linkClass = "font-bold underline decoration-berry-500/40 underline-offset-4 hover:text-berry-600";
  const socialClass =
    "grid h-12 w-12 place-items-center rounded-full bg-white text-cocoa-900 shadow-sm ring-1 ring-cocoa-900/10 transition hover:-translate-y-0.5 hover:bg-berry-600 hover:text-white";

  return (
    <section id="contact" aria-labelledby="contact-title" className="section">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <Reveal>
          <SectionHeading id="contact-title" eyebrow={t.contact.eyebrow} title={t.contact.title} align="left" />
          <div className="mt-10 space-y-7">
            <InfoRow icon={<PhoneIcon className="h-5 w-5" />} title={t.contact.phone}>
              <a href={site.phoneHref} className={linkClass}>{site.phoneDisplay}</a>
            </InfoRow>
            <InfoRow icon={<MapPinIcon className="h-5 w-5" />} title={t.contact.address}>
              <p>{pick(site.address)}</p>
              <a href={mapDirectionsUrl} target="_blank" rel="noopener noreferrer" className={`mt-1 inline-block text-sm ${linkClass}`}>
                {t.contact.directions}
                <span className="sr-only"> {t.newTab}</span>
              </a>
            </InfoRow>
            <InfoRow icon={<ClockIcon className="h-5 w-5" />} title={t.contact.hours}>
              <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1">
                {site.hours.map((row) => (
                  <div key={row.time + row.days.en} className="contents">
                    <dt className="text-cocoa-600">{pick(row.days)}</dt>
                    <dd className="font-bold tabular-nums">{row.time}</dd>
                  </div>
                ))}
              </dl>
            </InfoRow>
            <InfoRow icon={<MessageIcon className="h-5 w-5" />} title={t.contact.social}>
              <div className="mt-1 flex flex-wrap items-center gap-3">
                <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className={socialClass}>
                  <InstagramIcon className="h-5 w-5" />
                  <span className="sr-only">Instagram {t.newTab}</span>
                </a>
                <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" className={socialClass}>
                  <FacebookIcon className="h-5 w-5" />
                  <span className="sr-only">Facebook {t.newTab}</span>
                </a>
                <a href={site.instagramDmUrl} target="_blank" rel="noopener noreferrer" className={`text-sm ${linkClass}`}>
                  {t.contact.dm}
                  <span className="sr-only"> {t.newTab}</span>
                </a>
              </div>
            </InfoRow>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative h-full min-h-80 overflow-hidden rounded-[2rem] bg-cream-200 shadow-xl shadow-cocoa-900/10 ring-1 ring-cocoa-900/5">
            {/* TODO: point mapQuery in data/site.ts at the real bakery location */}
            <iframe
              title={t.contact.map}
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
