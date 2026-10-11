import type { ReactNode } from "react";

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  align?: "center" | "left";
  as?: "h1" | "h2";
}

export default function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Heading = "h2",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Heading
        id={id}
        className="mt-3 font-serif text-3xl leading-tight font-semibold text-balance text-cocoa-900 sm:text-4xl lg:text-5xl"
      >
        {title}
      </Heading>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-cocoa-600 sm:text-lg">{subtitle}</p>}
    </div>
  );
}
