import type { Metadata } from "next";
import { FullMenu } from "@/components/MenuTabs";

export const metadata: Metadata = { title: "Цэс · Menu" };

export default function MenuPage() {
  return <FullMenu />;
}
