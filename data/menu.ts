import type { Localized } from "@/lib/types";
import { photos } from "./images";

export type CategoryId = "cakes" | "pastries" | "bread" | "custom";
/** Background tint used behind the photo (and as the fallback if the photo is missing). */
export type Tone = "blush" | "butter" | "pistachio" | "cream" | "lilac";

export interface Category {
  id: CategoryId;
  name: Localized;
}

export interface Product {
  id: string;
  category: CategoryId;
  name: Localized;
  description: Localized;
  /** Price in tögrög (₮). */
  price: number;
  /** Show the price as a starting price ("from 120,000₮"). */
  priceFrom?: boolean;
  image?: string;
  tone: Tone;
  featured?: boolean;
  badge?: Localized;
}

export const categories: Category[] = [
  { id: "cakes", name: { mn: "Бялуу", en: "Cakes" } },
  { id: "pastries", name: { mn: "Нарийн боов", en: "Pastries" } },
  { id: "bread", name: { mn: "Талх", en: "Bread" } },
  { id: "custom", name: { mn: "Захиалгат", en: "Custom" } },
];

// TODO: Every product below is invented placeholder content.
// Replace names, descriptions, prices (₮) and photos with Misheel's real menu.
export const products: Product[] = [
  // ── Cakes ──────────────────────────────────────────────
  {
    id: "seabuckthorn-cheesecake",
    category: "cakes",
    name: { mn: "Чацарганатай чизкейк", en: "Sea Buckthorn Cheesecake" },
    description: {
      mn: "Зөөлөн крем бяслаг, Монгол чацарганын исгэлэн-чихэрлэг соустай.",
      en: "Silky cream cheese with a tangy-sweet Mongolian sea buckthorn glaze.",
    },
    price: 68000, // TODO: real price
    image: photos.cheesecake,
    tone: "butter",
    featured: true,
    badge: { mn: "Онцлох", en: "Signature" },
  },
  {
    id: "honey-cake",
    category: "cakes",
    name: { mn: "Зөгийн балтай бялуу", en: "Honey Cake (Medovik)" },
    description: {
      mn: "Зөгийн балтай нимгэн давхаргууд, цөцгийтэй зөөлөн кремтэй.",
      en: "Thin honey layers with a light sour-cream frosting.",
    },
    price: 55000, // TODO: real price
    image: photos.layerCake,
    tone: "butter",
    featured: true,
  },
  {
    id: "chocolate-cake",
    category: "cakes",
    name: { mn: "Шоколадан бялуу", en: "Triple Chocolate Cake" },
    description: {
      mn: "Чийглэг шоколадан бялуу, хар шоколадан ганаштай.",
      en: "Moist chocolate sponge finished with dark ganache.",
    },
    price: 62000, // TODO: real price
    image: photos.chocolateCake,
    tone: "blush",
    featured: true,
  },
  {
    id: "red-velvet",
    category: "cakes",
    name: { mn: "Улаан хилэн бялуу", en: "Red Velvet Cake" },
    description: {
      mn: "Сонгодог улаан хилэн, крем бяслагийн кремтэй.",
      en: "Classic red velvet with cream-cheese frosting.",
    },
    price: 58000, // TODO: real price
    image: photos.berryCake,
    tone: "blush",
  },
  {
    id: "napoleon",
    category: "cakes",
    name: { mn: "Наполеон", en: "Napoleon Cake" },
    description: {
      mn: "Шаржигнуур давхаргат зуурмаг, ванилийн кастардтай.",
      en: "Crisp puff-pastry layers with vanilla custard.",
    },
    price: 52000, // TODO: real price
    image: photos.creamCake,
    tone: "cream",
  },

  // ── Pastries ───────────────────────────────────────────
  {
    id: "butter-croissant",
    category: "pastries",
    name: { mn: "Цөцгийн тостой круассан", en: "Butter Croissant" },
    description: {
      mn: "Жинхэнэ цөцгийн тостой, өглөө бүр шинээр жигнэдэг.",
      en: "Real butter, flaky layers, baked every morning.",
    },
    price: 6500, // TODO: real price
    image: photos.croissants,
    tone: "butter",
    featured: true,
  },
  {
    id: "pain-au-chocolat",
    category: "pastries",
    name: { mn: "Шоколадтай круассан", en: "Pain au Chocolat" },
    description: {
      mn: "Хар шоколад ороосон шаржигнуур боов.",
      en: "Flaky pastry wrapped around dark chocolate.",
    },
    price: 7500, // TODO: real price
    image: photos.pastries,
    tone: "cream",
  },
  {
    id: "cinnamon-roll",
    category: "pastries",
    name: { mn: "Шанцайтай ороомог", en: "Cinnamon Roll" },
    description: {
      mn: "Зөөлөн ороомог боов, крем бяслагийн бүрхүүлтэй.",
      en: "Soft and swirly, topped with cream-cheese icing.",
    },
    price: 7000, // TODO: real price
    image: photos.cinnamonRolls,
    tone: "butter",
    featured: true,
  },
  {
    id: "macarons",
    category: "pastries",
    name: { mn: "Макарон (6 ш)", en: "Macarons (6 pcs)" },
    description: {
      mn: "Гүзээлзгэнэ, пистачио, ваниль, шоколадны амттай.",
      en: "Strawberry, pistachio, vanilla and chocolate.",
    },
    price: 18000, // TODO: real price
    image: photos.macarons,
    tone: "lilac",
    featured: true,
  },
  {
    id: "cookies",
    category: "pastries",
    name: { mn: "Шоколадтай жигнэмэг (4 ш)", en: "Chocolate Chip Cookies (4 pcs)" },
    description: {
      mn: "Гадуураа шаржигнуур, дотроо зөөлөн.",
      en: "Crisp edges, soft and gooey in the middle.",
    },
    price: 9000, // TODO: real price
    image: photos.cookies,
    tone: "cream",
  },

  // ── Bread ──────────────────────────────────────────────
  {
    id: "sourdough",
    category: "bread",
    name: { mn: "Исгэлэн талх", en: "Country Sourdough" },
    description: {
      mn: "48 цаг исгэсэн, шаржигнуур хальстай.",
      en: "48-hour ferment, crackly crust, open crumb.",
    },
    price: 12000, // TODO: real price
    image: photos.breadLoaves,
    tone: "cream",
    featured: true,
  },
  {
    id: "baguette",
    category: "bread",
    name: { mn: "Багет", en: "Baguette" },
    description: {
      mn: "Өглөө бүр шинээр жигнэсэн Франц талх.",
      en: "Classic French baguette, fresh each morning.",
    },
    price: 5500, // TODO: real price
    image: photos.baguette,
    tone: "butter",
  },
  {
    id: "rye-pine-nut",
    category: "bread",
    name: { mn: "Хушны самартай хар талх", en: "Rye & Pine Nut Loaf" },
    description: {
      mn: "Хар гурил, Монгол хушны самартай тэжээллэг талх.",
      en: "Hearty rye bread with Mongolian pine nuts.",
    },
    price: 13500, // TODO: real price
    image: photos.ryeBread,
    tone: "pistachio",
  },
  {
    id: "milk-bread",
    category: "bread",
    name: { mn: "Сүүтэй зөөлөн талх", en: "Milk Bread" },
    description: {
      mn: "Хөвсгөр зөөлөн, өглөөний цайнд яг таарна.",
      en: "Pillowy soft, perfect with morning tea.",
    },
    price: 8000, // TODO: real price
    image: photos.softBread,
    tone: "cream",
  },

  // ── Custom ─────────────────────────────────────────────
  {
    id: "birthday-cake",
    category: "custom",
    name: { mn: "Төрсөн өдрийн бялуу", en: "Birthday Cake" },
    description: {
      mn: "Таны хүссэн амт, өнгө, бичвэртэй.",
      en: "Your choice of flavour, colours and message.",
    },
    price: 120000, // TODO: real price
    priceFrom: true,
    image: photos.birthdayCake,
    tone: "blush",
  },
  {
    id: "bento-cake",
    category: "custom",
    name: { mn: "Бенто бялуу", en: "Bento Cake" },
    description: {
      mn: "1–2 хүнд зориулсан, бэлэг шиг савласан жижигхэн бялуу.",
      en: "A tiny cake for one or two, boxed like a gift.",
    },
    price: 45000, // TODO: real price
    priceFrom: true,
    image: photos.pinkCake,
    tone: "lilac",
    featured: true,
  },
  {
    id: "wedding-cake",
    category: "custom",
    name: { mn: "Хуримын бялуу", en: "Wedding Cake" },
    description: {
      mn: "Олон давхар, шинэ цэцгээр чимэглэсэн.",
      en: "Tiered and decorated with fresh flowers.",
    },
    price: 450000, // TODO: real price
    priceFrom: true,
    image: photos.weddingCake,
    tone: "cream",
  },
  {
    id: "cupcake-box",
    category: "custom",
    name: { mn: "Капкейк (12 ш)", en: "Cupcake Box (12 pcs)" },
    description: {
      mn: "Үдэшлэг, оффисын баярт зориулсан.",
      en: "For parties, showers and office treats.",
    },
    price: 72000, // TODO: real price
    priceFrom: true,
    image: photos.cupcakes,
    tone: "pistachio",
  },
];

/** The product shown in the hero. TODO: confirm Misheel's true signature item. */
export const signatureProduct = products.find((p) => p.id === "seabuckthorn-cheesecake")!;

export const featuredProducts = products.filter((p) => p.featured);

// TODO: replace with the flavours and sizes Misheel actually offers
export const cakeFlavors: Localized[] = [
  { mn: "Ваниль", en: "Vanilla" },
  { mn: "Шоколад", en: "Chocolate" },
  { mn: "Улаан хилэн", en: "Red velvet" },
  { mn: "Зөгийн бал", en: "Honey" },
  { mn: "Чацаргана", en: "Sea buckthorn" },
  { mn: "Гүзээлзгэнэ", en: "Strawberry" },
];

export const cakeSizes: Localized[] = [
  { mn: "Бенто — 1–2 хүн", en: "Bento — serves 1–2" },
  { mn: "Жижиг — 6–8 хүн", en: "Small — serves 6–8" },
  { mn: "Дунд — 10–14 хүн", en: "Medium — serves 10–14" },
  { mn: "Том — 16–20 хүн", en: "Large — serves 16–20" },
  { mn: "Олон давхар — 30+ хүн", en: "Tiered — serves 30+" },
];
