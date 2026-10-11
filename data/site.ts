import type { Localized } from "@/lib/types";
import { photos } from "./images";

const INSTAGRAM_HANDLE = "misheelsbakery";

export const site = {
  name: "Misheel's Bakery",
  instagramHandle: INSTAGRAM_HANDLE,
  instagramUrl: `https://www.instagram.com/${INSTAGRAM_HANDLE}/`,
  /** Opens a DM thread with the bakery in the Instagram app. */
  instagramDmUrl: `https://ig.me/m/${INSTAGRAM_HANDLE}`,
  // TODO: replace with the real Facebook page (or remove)
  facebookUrl: "https://www.facebook.com/",
  // TODO: replace with the real phone number
  phoneDisplay: "+976 9911 2233",
  phoneHref: "tel:+97699112233",
  // TODO: replace with the real address
  address: {
    mn: "Энхтайвны өргөн чөлөө 12, 1-р хороо, Сүхбаатар дүүрэг, Улаанбаатар",
    en: "12 Peace Avenue, 1st khoroo, Sukhbaatar district, Ulaanbaatar",
  } satisfies Localized,
  // TODO: replace with the bakery's real location (any Google Maps search text works)
  mapQuery: "Sukhbaatar Square, Ulaanbaatar",
  // TODO: replace with real opening hours
  hours: [
    { days: { mn: "Даваа – Баасан", en: "Mon – Fri" }, time: "09:00 – 20:00" },
    { days: { mn: "Бямба – Ням", en: "Sat – Sun" }, time: "10:00 – 18:00" },
  ] satisfies { days: Localized; time: string }[],
  // TODO: replace with real Instagram post photos (and per-post links if you like)
  instagramTiles: [
    photos.berryCake,
    photos.croissants,
    photos.macarons,
    photos.breadLoaves,
    photos.pinkCake,
    photos.cinnamonRolls,
  ],
  /** Shows a small "Sample photo" chip on stock images. Set to false once real photos are in. */
  showPlaceholderLabels: true,
};

export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=15&output=embed`;
export const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`;
