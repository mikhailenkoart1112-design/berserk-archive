"use client";

import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import { useLanguage } from "@/components/LanguageProvider";
import AshParticles from "@/components/AshParticles";
import SmokeLayer from "@/components/SmokeLayer";
import { useRouter } from "next/navigation";
import { useState } from "react";

const text = {
  en: {
    archive: "BERSERK ARCHIVE",
    title: "THE BLACK SWORDSMAN",
    description:
      "Explore the world of Berserk, its characters, kingdoms, battles and history.",
    button: "ENTER THE WORLD",
  },
  ua: {
    archive: "АРХІВ BERSERK",
    title: "ЧОРНИЙ МЕЧНИК",
    description:
      "Досліджуй світ Berserk, його персонажів, королівства, битви та історію.",
    button: "УВІЙТИ У СВІТ",
  },
  de: {
    archive: "BERSERK ARCHIV",
    title: "DER SCHWARZE SCHWERTKÄMPFER",
    description:
      "Erkunde die Welt von Berserk, ihre Charaktere, Königreiche, Schlachten und Geschichte.",
    button: "DIE WELT BETRETEN",
  },
};

export default function Home() {
  const { language } = useLanguage();
  const t = text[language];
  const router = useRouter();
const [clicks, setClicks] = useState(0);

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#220000_0%,#050000_45%,#000_100%)]" />

        <SmokeLayer />
        <AshParticles />

        <Image
          src="/images/brand.png"
          alt="Brand Of Sacrifice"
          width={900}
          height={900}
          className="pointer-events-none absolute left-1/2 top-[57%] w-[620px] -translate-x-1/2 -translate-y-1/2 opacity-[0.09] mix-blend-screen md:w-[900px]"
        />

       <div className="absolute left-1/2 top-10 -translate-x-1/2 md:top-8">
  <div className="absolute left-1/2 top-10 -translate-x-1/2 md:top-8">
  <div className="relative h-44 w-44 md:h-60 md:w-60">
    <div className="absolute left-1/2 top-10 -translate-x-1/2 md:top-8">
  <button
    type="button"
    onClick={() => {
      const next = clicks + 1;

      if (next >= 5) {
        router.push("/eclipse");
      }

      setClicks(next);
    }}
    className="relative h-44 w-44 md:h-60 md:w-60"
  >
    <Image
      src="/images/behelit.png?v=2"
      alt="Behelit"
      fill
      priority
      unoptimized
      className="behelit-float object-contain drop-shadow-[0_0_55px_rgba(255,0,0,0.8)]"
    />
  </button>
</div>
  </div>
</div>
</div>

        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="relative z-10 mt-40 text-center md:mt-48">
          <p className="mb-5 text-xs uppercase tracking-[0.55em] text-red-600 md:text-sm">
            {t.archive}
          </p>

          <h1 className="mb-6 text-5xl font-black uppercase leading-none tracking-tight text-white drop-shadow-[0_0_35px_rgba(255,0,0,0.18)] md:text-8xl">
            {t.title}
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
            {t.description}
          </p>

          <Link
            href="/enter"
            className="mt-10 inline-block rounded-2xl border border-red-800/80 bg-black/40 px-8 py-4 text-sm font-bold uppercase tracking-[0.35em] text-white shadow-[0_0_35px_rgba(120,0,0,0.35)] transition hover:bg-red-950"
          >
            {t.button}
          </Link>
        </div>
      </section>
    </main>
  );
}