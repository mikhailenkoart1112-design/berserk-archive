"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function BackToArchive() {
  const { language } = useLanguage();

  const text = {
    en: "← Back To Archive",
    ua: "← Повернутись в Архів",
    de: "← Zurück zum Archiv",
  };

  return (
    <Link
      href="/enter"
      className="inline-flex items-center gap-2 rounded-xl border border-red-950/70 bg-black/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-red-700 transition hover:border-red-700 hover:text-red-500"
    >
      {text[language]}
    </Link>
  );
}