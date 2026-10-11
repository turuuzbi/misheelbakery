import type { Metadata, Viewport } from "next";
import { Lora, Nunito } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

// Both fonts include cyrillic-ext, which covers the Mongolian letters Ө and Ү.
const lora = Lora({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});
const nunito = Nunito({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Misheel's Bakery — Улаанбаатар",
    template: "%s · Misheel's Bakery",
  },
  description:
    "Гар хийцийн бялуу, нарийн боов, талх. Instagram-аар захиалаарай. Handmade cakes, pastries and bread in Ulaanbaatar.",
  // Demo preview — keep out of search engines. Remove when the real site launches.
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export const viewport: Viewport = {
  themeColor: "#fffaf3",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn" className={`${lora.variable} ${nunito.variable}`}>
      <body className="min-h-dvh font-sans antialiased">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <LanguageProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
