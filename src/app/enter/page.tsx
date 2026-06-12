"use client";

import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import PageBackground from "@/components/PageBackground";
import { useLanguage } from "@/components/LanguageProvider";

const text = {
  en: {
    center: "THE STRUGGLER",
    sections: [
      ["Story", "/story"],
      ["Timeline", "/timeline"],
      ["Characters", "/characters"],
      ["God Hand", "/god-hand"],
      ["Apostles", "/apostles"],
      ["World", "/world"],
      ["Weapons", "/weapons"],
      ["Gallery", "/gallery"],
    ],
  },

  ua: {
    center: "БОРОТЬБА З ДОЛЕЮ",
    sections: [
      ["Історія", "/story"],
      ["Таймлайн", "/timeline"],
      ["Персонажі", "/characters"],
      ["Рука Бога", "/god-hand"],
      ["Апостоли", "/apostles"],
      ["Світ", "/world"],
      ["Зброя", "/weapons"],
      ["Галерея", "/gallery"],
    ],
  },

  de: {
    center: "DER KÄMPFER",
    sections: [
      ["Geschichte", "/story"],
      ["Zeitleiste", "/timeline"],
      ["Charaktere", "/characters"],
      ["Gotteshand", "/god-hand"],
      ["Apostel", "/apostles"],
      ["Welt", "/world"],
      ["Waffen", "/weapons"],
      ["Galerie", "/gallery"],
    ],
  },
};

export default function EnterPage() {
  const { language } = useLanguage();
  const t = text[language];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-24">
        <PageBackground />

        <div className="relative z-10 flex min-h-[820px] w-full max-w-[820px] items-center justify-center md:h-[780px]">
          <div className="absolute h-[260px] w-[260px] rounded-full border border-red-900/70 bg-black/80 shadow-[0_0_100px_rgba(150,0,0,0.45)] md:h-[360px] md:w-[360px]" />

          <div className="relative z-20 text-center">
            <div className="relative mx-auto mb-5 h-40 w-40 overflow-hidden rounded-full border border-red-900 bg-black shadow-[0_0_80px_rgba(120,0,0,0.5)] md:h-52 md:w-52">
              <Image
                src="/characters/guts-enter.jpg"
                alt="Guts"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 rounded-full border border-red-700/50" />
            </div>

            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-red-700 md:text-xs md:tracking-[0.45em]">
              {t.center}
            </p>
          </div>

          {t.sections.map(([name, href], index) => {
            const angle = (360 / t.sections.length) * index;

            return (
              <Link
                key={href}
                href={href}
                className="orbit-link"
                style={
                  {
                    "--angle": `${angle}deg`,
                  } as React.CSSProperties
                }
              >
                <span>{name}</span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}