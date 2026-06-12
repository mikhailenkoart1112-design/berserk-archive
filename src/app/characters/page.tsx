"use client";

import { useState } from "react";
import Link from "next/link";

import Header from "@/components/Header";
import PageBackground from "@/components/PageBackground";
import { useLanguage } from "@/components/LanguageProvider";
import { characters } from "@/data/characters";
import BackToArchive from "@/components/BackToArchive";
import Image from "next/image";

const text = {
  en: {
    label: "BERSERK ARCHIVE",
    title: "CHARACTERS",
    description:
      "Explore the main characters of Berserk, their roles, stories and connections to the world.",
    search: "Search character...",
    empty: "No characters found.",
  },

  ua: {
    label: "АРХІВ BERSERK",
    title: "ПЕРСОНАЖІ",
    description:
      "Досліджуй головних персонажів Berserk, їхні ролі, історії та зв’язки зі світом.",
    search: "Пошук персонажа...",
    empty: "Персонажів не знайдено.",
  },

  de: {
    label: "BERSERK ARCHIV",
    title: "CHARAKTERE",
    description:
      "Erkunde die Hauptcharaktere von Berserk, ihre Rollen, Geschichten und Verbindungen zur Welt.",
    search: "Charakter suchen...",
    empty: "Keine Charaktere gefunden.",
  },
};

export default function CharactersPage() {
  const { language } = useLanguage();
  const [query, setQuery] = useState("");

  const t = text[language];

  const filteredCharacters = characters.filter((character) => {
    const name = character.name[language].toLowerCase();
    const role = character.role[language].toLowerCase();
    const search = query.toLowerCase();

    return name.includes(search) || role.includes(search);
  });

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="relative min-h-screen overflow-hidden px-5 pt-32">
        <PageBackground />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-8">
            <BackToArchive />
          </div>

          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-red-700">
            {t.label}
          </p>

          <h1 className="mb-6 text-5xl font-black uppercase md:text-7xl">
            {t.title}
          </h1>

          <p className="mb-8 max-w-2xl text-zinc-400">
            {t.description}
          </p>

          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.search}
            className="mb-12 w-full max-w-xl rounded-2xl border border-red-950/70 bg-black/70 px-5 py-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-700"
          />

          {filteredCharacters.length === 0 ? (
            <p className="text-zinc-500">{t.empty}</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {filteredCharacters.map((character) => (
                <Link
                  key={character.slug}
                  href={`/characters/${character.slug}`}
                  className="group relative min-h-[440px] overflow-hidden rounded-[32px] border border-red-950/70 bg-zinc-950/80 p-6 transition duration-300 hover:-translate-y-2 hover:border-red-700 hover:shadow-[0_0_50px_rgba(120,0,0,0.35)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-black opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-8 overflow-hidden rounded-[28px] border border-red-950/60 bg-black">
                     <Image
  src={character.image}
  alt={character.name[language]}
  width={500}
  height={300}
  className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
/>
                    </div>

                    <div className="mt-auto">
                      <p className="mb-2 text-xs uppercase tracking-[0.35em] text-red-700">
                        {character.role[language]}
                      </p>

                      <h2 className="mb-4 text-3xl font-black uppercase">
                        {character.name[language]}
                      </h2>

                      <p className="text-sm leading-7 text-zinc-400">
                        {character.description[language]}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}