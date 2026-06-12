"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Header from "@/components/Header";
import PageBackground from "@/components/PageBackground";
import BackToArchive from "@/components/BackToArchive";
import { useLanguage } from "@/components/LanguageProvider";

const mapPoints = {
  // Elfhelm (за океаном)
  elfhelm: {
    x: "3%",
    y: "60%",
  },

  // Midland
  midland: {
    x: "29%",
    y: "60%",
  },

  // Falconia (район Randel)
  falconia: {
    x: "50%",
    y: "56%",
  },

  // Kushan Empire
  kushan: {
    x: "88%",
    y: "63%",
  },
};

const text = {
  en: {
    close: "Close",
    detailsTitle: "Location details",
    type: "Type",
    importance: "Importance",
    danger: "Danger",
    places: [
      {
        id: "midland",
        name: "Midland",
        image: "/world/midland.jpg",
        typeValue: "Kingdom",
        importanceValue: "Main human kingdom",
        dangerValue: "War and political collapse",
        full:
          "Midland is one of the most important human kingdoms in Berserk. It is connected to the Band of the Hawk, Griffith's rise, royal politics, war and the beginning of many tragedies.",
      },
      {
        id: "falconia",
        name: "Falconia",
        image: "/world/falconia.jpg",
        typeValue: "Empire",
        importanceValue: "Griffith's new kingdom",
        dangerValue: "Beautiful but suspicious paradise",
        full:
          "Falconia is Griffith's shining empire, a place that seems like salvation for humanity. But its beauty hides the frightening truth of a world reshaped by monsters and causality.",
      },
      {
        id: "elfhelm",
        name: "Elfhelm",
        image: "/world/elfhelm.jpg",
        typeValue: "Mystic island",
        importanceValue: "Magic and astral beings",
        dangerValue: "Separated from ordinary reality",
        full:
          "Elfhelm is a mysterious island connected to elves, witches, spirits and astral creatures. It represents the magical side of Berserk's world and a rare place of peace before tragedy returns.",
      },
      {
        id: "kushan",
        name: "Kushan Empire",
        image: "/world/kushan.jpg",
        typeValue: "Empire",
        importanceValue: "Eastern military power",
        dangerValue: "Dark magic and invasion",
        full:
          "The Kushan Empire is a massive eastern empire known for war, conquest and dark magic. Its power changes the balance of the world and brings terrifying supernatural forces into conflict.",
      },
      {
        id: "astral",
        name: "Astral World",
        image: "/world/astral-world.jpg",
        typeValue: "Other realm",
        importanceValue: "Source of spirits and monsters",
        dangerValue: "Reality itself becomes unstable",
        full:
          "The Astral World is a hidden layer of reality connected to spirits, demons, magic and mythical beings. When it merges with the physical world, Berserk's reality changes forever.",
      },
    ],
  },

  ua: {
    close: "Закрити",
    detailsTitle: "Деталі локації",
    type: "Тип",
    importance: "Важливість",
    danger: "Небезпека",
    places: [
      {
        id: "midland",
        name: "Мідленд",
        image: "/world/midland.jpg",
        typeValue: "Королівство",
        importanceValue: "Головне людське королівство",
        dangerValue: "Війна та політичний занепад",
        full:
          "Мідленд — одне з найважливіших людських королівств у Berserk. Воно пов’язане з Бандою Сокола, сходженням Гріффіта, королівською політикою, війною та початком багатьох трагедій.",
      },
      {
        id: "falconia",
        name: "Фальконія",
        image: "/world/falconia.jpg",
        typeValue: "Імперія",
        importanceValue: "Нове королівство Гріффіта",
        dangerValue: "Красивий, але підозрілий рай",
        full:
          "Фальконія — сяюча імперія Гріффіта, яка здається спасінням для людства. Але її краса приховує страшну правду світу, зміненого монстрами та причинністю.",
      },
      {
        id: "elfhelm",
        name: "Ельфгейм",
        image: "/world/elfhelm.jpg",
        typeValue: "Містичний острів",
        importanceValue: "Магія та астральні істоти",
        dangerValue: "Відокремлений від звичайної реальності",
        full:
          "Ельфгейм — загадковий острів, пов’язаний з ельфами, відьмами, духами та астральними створіннями. Він показує магічну сторону світу Berserk і рідкісний спокій перед новою трагедією.",
      },
      {
        id: "kushan",
        name: "Кушанська імперія",
        image: "/world/kushan.jpg",
        typeValue: "Імперія",
        importanceValue: "Східна військова сила",
        dangerValue: "Темна магія та вторгнення",
        full:
          "Кушанська імперія — величезна східна держава, відома війною, завоюваннями та темною магією. Її сила змінює баланс світу й приносить у конфлікт надприродний жах.",
      },
      {
        id: "astral",
        name: "Астральний світ",
        image: "/world/astral-world.jpg",
        typeValue: "Інший вимір",
        importanceValue: "Джерело духів і монстрів",
        dangerValue: "Реальність стає нестабільною",
        full:
          "Астральний світ — прихований шар реальності, пов’язаний з духами, демонами, магією та міфічними істотами. Коли він зливається з фізичним світом, реальність Berserk змінюється назавжди.",
      },
    ],
  },

  de: {
    close: "Schließen",
    detailsTitle: "Ortsdetails",
    type: "Typ",
    importance: "Bedeutung",
    danger: "Gefahr",
    places: [
      {
        id: "midland",
        name: "Midland",
        image: "/world/midland.jpg",
        typeValue: "Königreich",
        importanceValue: "Wichtigstes Menschenreich",
        dangerValue: "Krieg und politischer Zerfall",
        full:
          "Midland ist eines der wichtigsten menschlichen Königreiche in Berserk. Es ist mit der Falkenbande, Griffiths Aufstieg, Politik, Krieg und dem Beginn vieler Tragödien verbunden.",
      },
      {
        id: "falconia",
        name: "Falconia",
        image: "/world/falconia.jpg",
        typeValue: "Imperium",
        importanceValue: "Griffiths neues Reich",
        dangerValue: "Schönes, aber verdächtiges Paradies",
        full:
          "Falconia ist Griffiths strahlendes Imperium, das wie Rettung für die Menschheit wirkt. Doch seine Schönheit verbirgt die Wahrheit einer Welt, die durch Monster und Kausalität verändert wurde.",
      },
      {
        id: "elfhelm",
        name: "Elfhelm",
        image: "/world/elfhelm.jpg",
        typeValue: "Mystische Insel",
        importanceValue: "Magie und astrale Wesen",
        dangerValue: "Von normaler Realität getrennt",
        full:
          "Elfhelm ist eine geheimnisvolle Insel, verbunden mit Elfen, Hexen, Geistern und astralen Wesen. Sie zeigt die magische Seite der Welt von Berserk.",
      },
      {
        id: "kushan",
        name: "Kushanisches Reich",
        image: "/world/kushan.jpg",
        typeValue: "Imperium",
        importanceValue: "Östliche Militärmacht",
        dangerValue: "Dunkle Magie und Invasion",
        full:
          "Das Kushanische Reich ist ein gewaltiges östliches Imperium, bekannt für Krieg, Eroberung und dunkle Magie. Seine Macht verändert das Gleichgewicht der Welt.",
      },
      {
        id: "astral",
        name: "Astralwelt",
        image: "/world/astral-world.jpg",
        typeValue: "Andere Ebene",
        importanceValue: "Quelle von Geistern und Monstern",
        dangerValue: "Die Realität wird instabil",
        full:
          "Die Astralwelt ist eine verborgene Ebene der Realität, verbunden mit Geistern, Dämonen, Magie und mythischen Wesen. Wenn sie mit der physischen Welt verschmilzt, verändert sich Berserks Realität für immer.",
      },
    ],
  },
};

export default function WorldPage() {
  const { language } = useLanguage();
  const t = text[language];
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  const openedPlace = openedIndex !== null ? t.places[openedIndex] : null;

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      

      <section className="relative min-h-screen overflow-hidden px-5 pb-16 pt-32">
        <PageBackground />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-8">
            <BackToArchive />
          </div>

          <div className="overflow-hidden rounded-[36px] border border-red-950/70 bg-black p-2 shadow-[0_0_70px_rgba(127,29,29,0.22)] md:p-4">
            <div className="relative mx-auto w-full overflow-hidden rounded-[28px] bg-black">
              <Image
                src="/world/world-banner.jpg"
                alt="Berserk world map"
                width={1600}
                height={1000}
                priority
                className="h-auto w-full opacity-80"
              />

              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_60%,#000_100%)]" />

              {t.places
  .filter((place) => place.id !== "astral")
  .map((place) => {
    const index = t.places.findIndex((item) => item.id === place.id);
    const point = mapPoints[place.id as keyof typeof mapPoints];

    return (
                  <button
                    key={place.id}
                    type="button"
                    onClick={() => setOpenedIndex(index)}
                    style={{
                      left: point.x,
                      top: point.y,
                    }}
                    className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
                  >
                    <span className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700/25 blur-md transition group-hover:bg-red-600/45" />

                    <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-red-500 bg-black shadow-[0_0_30px_rgba(255,0,0,0.75)] transition group-hover:scale-125">
                      <span className="h-3 w-3 rounded-full bg-red-600" />
                    </span>

                    <span className="absolute left-1/2 top-10 hidden -translate-x-1/2 whitespace-nowrap rounded-full border border-red-950/70 bg-black/90 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-red-500 shadow-[0_0_25px_rgba(127,29,29,0.4)] group-hover:block">
                      {place.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <div className="mt-8">
  <button
    type="button"
    onClick={() =>
      setOpenedIndex(
        t.places.findIndex((place) => place.id === "astral")
      )
    }
    className="w-full overflow-hidden rounded-[36px] border border-red-950/70 bg-black p-8 text-left shadow-[0_0_50px_rgba(120,0,0,0.25)] transition hover:border-red-700"
  >
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.45em] text-red-700">
      OTHER REALM
    </p>

    <h2 className="mb-4 text-5xl font-black uppercase text-red-600 md:text-7xl">
      ASTRAL WORLD
    </h2>

    <p className="max-w-3xl text-zinc-400">
      Hidden dimension of spirits, demons, monsters and magic.
    </p>
  </button>
</div>

      <AnimatePresence>
        {openedPlace && (
          <motion.div
            className="fixed inset-0 z-[100] overflow-y-auto bg-black/90 px-5 py-8 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              onClick={() => setOpenedIndex(null)}
              className="fixed right-5 top-5 z-[110] rounded-full border border-red-800 bg-black/80 px-5 py-3 text-xs font-black uppercase tracking-[0.3em] text-red-600"
            >
              {t.close}
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 30 }}
              transition={{ duration: 0.35 }}
              className="mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-red-950/80 bg-zinc-950 shadow-[0_0_100px_rgba(127,29,29,0.35)]"
            >
              <div className="relative h-[430px] bg-black md:h-[640px]">
                <Image
                  src={openedPlace.image}
                  alt={openedPlace.name}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                <div className="absolute bottom-8 left-6 right-6 md:left-10">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.45em] text-red-600">
                    {openedPlace.typeValue}
                  </p>

                  <h2 className="text-5xl font-black uppercase md:text-8xl">
                    {openedPlace.name}
                  </h2>
                </div>
              </div>

              <div className="p-7 md:p-10">
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-red-700">
                  {t.detailsTitle}
                </p>

                <div className="mb-8 grid gap-4 md:grid-cols-3">
                  <div className="rounded-[24px] border border-red-950/70 bg-black/60 p-5">
                    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-red-700">
                      {t.type}
                    </p>
                    <p className="text-zinc-300">{openedPlace.typeValue}</p>
                  </div>

                  <div className="rounded-[24px] border border-red-950/70 bg-black/60 p-5">
                    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-red-700">
                      {t.importance}
                    </p>
                    <p className="text-zinc-300">
                      {openedPlace.importanceValue}
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-red-950/70 bg-black/60 p-5">
                    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-red-700">
                      {t.danger}
                    </p>
                    <p className="text-zinc-300">{openedPlace.dangerValue}</p>
                  </div>
                </div>

                <p className="max-w-4xl text-xl leading-9 text-zinc-300">
                  {openedPlace.full}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}