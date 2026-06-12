"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

import Header from "@/components/Header";
import PageBackground from "@/components/PageBackground";
import BackToArchive from "@/components/BackToArchive";
import { useLanguage } from "@/components/LanguageProvider";
import { characters } from "@/data/characters";

const text = {
  en: {
    back: "← Back",
    profile: "Character Profile",
    bio: "Bio",
    status: "Status",
    weapon: "Weapon",
    quote: "Quote",
  },
  ua: {
    back: "← Назад",
    profile: "Профіль персонажа",
    bio: "Біографія",
    status: "Статус",
    weapon: "Зброя",
    quote: "Цитата",
  },
  de: {
    back: "← Zurück",
    profile: "Charakterprofil",
    bio: "Biografie",
    status: "Status",
    weapon: "Waffe",
    quote: "Zitat",
  },
};

export default function CharacterPage() {
  const { language } = useLanguage();
  const params = useParams<{ slug: string }>();

  const t = text[language];
  const character = characters.find((item) => item.slug === params.slug);

  if (!character) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="relative min-h-screen overflow-hidden px-5 pt-32">
        <PageBackground />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap gap-4">
            <BackToArchive />

            <Link
              href="/characters"
              className="inline-flex items-center gap-2 rounded-xl border border-red-950/70 bg-black/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-red-700 transition hover:border-red-700 hover:text-red-500"
            >
              {t.back}
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[520px] overflow-hidden rounded-[36px] border border-red-950/70 bg-zinc-950/80 shadow-[0_0_60px_rgba(120,0,0,0.25)]">
              <Image
                src={character.image}
                alt={character.name[language]}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>

            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.5em] text-red-700">
                {t.profile}
              </p>

              <h1 className="mb-4 text-6xl font-black uppercase md:text-8xl">
                {character.name[language]}
              </h1>

              <p className="mb-10 max-w-2xl text-xl text-red-700">
                {character.role[language]}
              </p>

              <div className="grid gap-6">
                <div className="rounded-[36px] border border-red-950/70 bg-zinc-950/80 p-8">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-red-700">
                    {t.bio}
                  </p>

                  <p className="text-lg leading-8 text-zinc-300">
                    {character.description[language]}
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="rounded-[32px] border border-red-950/70 bg-black/70 p-6">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-red-700">
                      {t.status}
                    </p>
                    <p className="text-zinc-300">
                      {character.status[language]}
                    </p>
                  </div>

                  <div className="rounded-[32px] border border-red-950/70 bg-black/70 p-6">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-red-700">
                      {t.weapon}
                    </p>
                    <p className="text-zinc-300">
                      {character.weapon[language]}
                    </p>
                  </div>

                  <div className="rounded-[32px] border border-red-950/70 bg-black/70 p-6">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-red-700">
                      {t.quote}
                    </p>
                    <p className="text-zinc-300">
                      “{character.quote[language]}”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}