"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { cakeFlavors, cakeSizes } from "@/data/menu";
import { useLang } from "@/lib/i18n";
import { CheckIcon } from "./ui/Icons";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

function tomorrowISO() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

/** Front-end-only order form: validates in the browser, logs to the console, shows a thank-you. */
export default function CustomCakeForm() {
  const { t, pick } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const dateRef = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  // Earliest pickup is tomorrow. Set after mount so server and client HTML match.
  useEffect(() => {
    if (dateRef.current) dateRef.current.min = tomorrowISO();
  }, [submitted]);

  useEffect(() => {
    if (submitted) successRef.current?.focus();
  }, [submitted]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const request = Object.fromEntries(new FormData(e.currentTarget));
    // Demo only — there is no backend. TODO: send to email, a Google Sheet or a CRM when going live.
    console.log("[Misheel's Bakery demo] Custom cake request:", request);
    setSubmitted(true);
  };

  return (
    <section id="custom" aria-labelledby="custom-title" className="section bg-butter-100/60">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            id="custom-title"
            eyebrow={t.custom.eyebrow}
            title={t.custom.title}
            subtitle={t.custom.subtitle}
            align="left"
          />
          <ol className="mt-8 space-y-4">
            {t.custom.steps.map((step, i) => (
              <li key={step} className="flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white font-serif text-lg font-semibold text-berry-600 shadow-sm">
                  {i + 1}
                </span>
                <span className="font-bold text-cocoa-700">{step}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-[2rem] bg-white p-6 shadow-xl shadow-cocoa-900/5 ring-1 ring-cocoa-900/5 sm:p-8">
            {submitted ? (
              <div
                ref={successRef}
                tabIndex={-1}
                role="status"
                className="flex animate-fade-up flex-col items-center py-10 text-center focus:outline-none"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-pistachio-100 text-cocoa-900">
                  <CheckIcon className="h-8 w-8" />
                </span>
                <p className="mt-5 font-serif text-3xl font-semibold">{t.custom.successTitle}</p>
                <p className="mt-3 max-w-sm text-cocoa-600">{t.custom.successBody}</p>
                <p className="mt-4 max-w-sm rounded-2xl bg-cream-100 px-4 py-2 text-xs text-cocoa-600">
                  {t.custom.demoNote}
                </p>
                <button type="button" className="btn btn-soft mt-6" onClick={() => setSubmitted(false)}>
                  {t.custom.another}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="cake-name" className="label">{t.custom.name}</label>
                  <input id="cake-name" name="name" required autoComplete="name" className="field" />
                </div>
                <div>
                  <label htmlFor="cake-phone" className="label">{t.custom.phone}</label>
                  <input
                    id="cake-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    required
                    autoComplete="tel"
                    pattern="\+?[0-9 ]{8,16}"
                    placeholder={t.custom.phoneHint}
                    className="field"
                  />
                </div>
                <div>
                  <label htmlFor="cake-date" className="label">{t.custom.date}</label>
                  <input ref={dateRef} id="cake-date" name="date" type="date" required className="field" />
                </div>
                <div>
                  <label htmlFor="cake-size" className="label">{t.custom.size}</label>
                  <select id="cake-size" name="size" required defaultValue="" className="field">
                    <option value="" disabled>{t.custom.choose}</option>
                    {cakeSizes.map((size) => (
                      <option key={size.en} value={size.en}>{pick(size)}</option>
                    ))}
                  </select>
                </div>
                <fieldset className="sm:col-span-2">
                  <legend className="label">{t.custom.flavor}</legend>
                  <div className="flex flex-wrap gap-2">
                    {cakeFlavors.map((flavor, i) => (
                      <label key={flavor.en} className="cursor-pointer">
                        <input
                          type="radio"
                          name="flavor"
                          value={flavor.en}
                          required
                          defaultChecked={i === 0}
                          className="peer sr-only"
                        />
                        <span className="inline-flex min-h-10 items-center rounded-full bg-cream-100 px-4 text-sm font-bold text-cocoa-700 ring-1 ring-cocoa-900/10 transition peer-checked:bg-berry-600 peer-checked:text-white peer-checked:ring-berry-600 peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-berry-600 hover:bg-blush-100 peer-checked:hover:bg-berry-700">
                          {pick(flavor)}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <div className="sm:col-span-2">
                  <label htmlFor="cake-message" className="label">
                    {t.custom.message} <span className="font-normal text-cocoa-500">({t.custom.optional})</span>
                  </label>
                  <textarea
                    id="cake-message"
                    name="message"
                    rows={3}
                    maxLength={300}
                    placeholder={t.custom.messagePlaceholder}
                    className="field resize-y"
                  />
                </div>
                <button type="submit" className="btn btn-primary sm:col-span-2">
                  {t.custom.submit}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
