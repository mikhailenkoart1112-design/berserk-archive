"use client";

import Header from "@/components/Header";
import { useLanguage } from "@/components/LanguageProvider";
import PageBackground from "@/components/PageBackground";
import BackToArchive from "@/components/BackToArchive";

const text = {
  en: {
    label: "BERSERK ARCHIVE",
    title: "STORY ARCS",
    description:
      "Follow the journey of Guts through every major arc of Berserk.",
    arcs: [
      {
        title: "Black Swordsman",
        description:
          "The beginning of Guts' revenge against the Apostles and Griffith.",
      },
      {
        title: "Golden Age",
        description:
          "The rise and fall of the Band of the Hawk and the tragic Eclipse.",
      },
      {
        title: "Conviction",
        description:
          "A dark journey through a world consumed by fear, religion and war.",
      },
      {
        title: "Falcon of the Millennium Empire",
        description:
          "The rebirth of Griffith and the creation of Falconia.",
      },
      {
        title: "Fantasia",
        description:
          "The merging of the physical and astral worlds into a new reality.",
      },
    ],
  },

  ua: {
    label: "АРХІВ BERSERK",
    title: "АРКИ ІСТОРІЇ",
    description:
      "Пройди шлях Гатса через усі основні сюжетні арки Berserk.",
    arcs: [
      {
        title: "Чорний мечник",
        description:
          "Початок помсти Гатса апостолам і Гріффіту.",
      },
      {
        title: "Золота доба",
        description:
          "Злет і падіння Банди Сокола та трагічне Затьмарення.",
      },
      {
        title: "Засудження",
        description:
          "Темна подорож світом, охопленим страхом, релігією та війною.",
      },
      {
        title: "Сокіл Імперії Тисячоліття",
        description:
          "Повернення Гріффіта та створення Фальконії.",
      },
      {
        title: "Фантазія",
        description:
          "Злиття фізичного та астрального світів в нову реальність.",
      },
    ],
  },

  de: {
    label: "BERSERK ARCHIV",
    title: "GESCHICHTSARKEN",
    description:
      "Verfolge die Reise von Guts durch alle wichtigen Handlungsbögen von Berserk.",
    arcs: [
      {
        title: "Der Schwarze Schwertkämpfer",
        description:
          "Der Beginn von Guts' Rache an den Aposteln und Griffith.",
      },
      {
        title: "Goldenes Zeitalter",
        description:
          "Aufstieg und Fall der Falkenbande sowie die tragische Eclipse.",
      },
      {
        title: "Überzeugung",
        description:
          "Eine dunkle Reise durch eine Welt voller Angst, Religion und Krieg.",
      },
      {
        title: "Falke des Tausendjährigen Reiches",
        description:
          "Die Wiedergeburt Griffiths und die Gründung von Falconia.",
      },
      {
        title: "Fantasia",
        description:
          "Die Verschmelzung der physischen und astralen Welt zu einer neuen Realität.",
      },
    ],
  },
};

export default function StoryPage() {
  const { language } = useLanguage();
  const t = text[language];

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

          <p className="mb-12 max-w-2xl text-zinc-400">
            {t.description}
          </p>

          <div className="space-y-6">
            {t.arcs.map((arc) => (
              <div
                key={arc.title}
                className="rounded-[28px] border border-red-950/70 bg-zinc-950/80 p-6 transition hover:border-red-700"
              >
                <h2 className="mb-3 text-2xl font-black text-white">
                  {arc.title}
                </h2>

                <p className="text-zinc-400">
                  {arc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}