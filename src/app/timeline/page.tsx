"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Header from "@/components/Header";
import PageBackground from "@/components/PageBackground";
import BackToArchive from "@/components/BackToArchive";
import { useLanguage } from "@/components/LanguageProvider";

const text = {
  en: {
    label: "BERSERK ARCHIVE",
    title: "TIMELINE",
    description: "The main turning points in the dark history of Berserk.",
    close: "Close",
    detailsTitle: "Event details",
    period: "Period",
    characters: "Main characters",
    impact: "Impact",
    events: [
      {
        number: "01",
        title: "Golden Age",
        image: "/timeline/golden-age.jpg",
        short: "Guts joins the Band of the Hawk and meets Griffith.",
        periodValue: "Golden Age Arc",
        charactersValue: "Guts, Griffith, Casca",
        impactValue: "The beginning of the tragedy",
        full:
          "The Golden Age begins with Guts joining the Band of the Hawk. This period shows friendship, ambition, war and the rise of Griffith. It looks heroic at first, but slowly becomes the road toward betrayal and sacrifice.",
      },
      {
        number: "02",
        title: "The Eclipse",
        image: "/timeline/eclipse.jpg",
        short: "The Band of the Hawk is sacrificed during the Eclipse.",
        periodValue: "Eclipse",
        charactersValue: "Guts, Griffith, Casca, God Hand",
        impactValue: "The fall of the Band of the Hawk",
        full:
          "The Eclipse is the darkest turning point of Berserk. Griffith sacrifices the Band of the Hawk and is reborn as Femto. Guts and Casca survive, but their lives are permanently broken by the event.",
      },
      {
        number: "03",
        title: "Black Swordsman",
        image: "/timeline/black-swordsman.jpg",
        short: "Guts begins his revenge against the Apostles.",
        periodValue: "Black Swordsman Arc",
        charactersValue: "Guts, Puck, Apostles",
        impactValue: "Guts becomes a hunter of monsters",
        full:
          "After the Eclipse, Guts becomes the Black Swordsman. Driven by rage and pain, he hunts apostles with the Dragonslayer. This is the beginning of his lonely war against demons and fate.",
      },
      {
        number: "04",
        title: "Conviction",
        image: "/timeline/conviction.jpg",
        short: "The world falls deeper into fear, faith and monsters.",
        periodValue: "Conviction Arc",
        charactersValue: "Guts, Casca, Farnese, Serpico",
        impactValue: "Faith and fear turn into horror",
        full:
          "The Conviction arc shows a world ruled by fear, religion and suffering. Guts meets new companions while darkness gathers around the Tower of Conviction and the world moves closer to supernatural disaster.",
      },
      {
        number: "05",
        title: "Falconia",
        image: "/timeline/falconia.jpg",
        short: "Griffith creates a new empire in a transformed world.",
        periodValue: "Falcon of the Millennium Empire",
        charactersValue: "Griffith, Guts, Apostles",
        impactValue: "The rise of Griffith's empire",
        full:
          "After returning to the world, Griffith creates Falconia, a shining kingdom that seems like salvation for humanity. But this paradise exists inside a world reshaped by monsters and causality.",
      },
      {
        number: "06",
        title: "Fantasia",
        image: "/timeline/fantasia.jpg",
        short: "The physical and astral worlds merge into one reality.",
        periodValue: "Fantasia Arc",
        charactersValue: "Guts, Casca, Griffith, Astral beings",
        impactValue: "Reality changes forever",
        full:
          "Fantasia begins when the physical world and the astral world merge. Monsters, spirits and mythical beings become part of everyday reality, changing the world of Berserk forever.",
      },
    ],
  },

  ua: {
    label: "АРХІВ BERSERK",
    title: "ТАЙМЛАЙН",
    description: "Головні поворотні моменти темної історії Berserk.",
    close: "Закрити",
    detailsTitle: "Деталі події",
    period: "Період",
    characters: "Головні персонажі",
    impact: "Вплив",
    events: [
      {
        number: "01",
        title: "Золота доба",
        image: "/timeline/golden-age.jpg",
        short: "Гатс приєднується до Банди Сокола та зустрічає Гріффіта.",
        periodValue: "Арка Золотої доби",
        charactersValue: "Гатс, Гріффіт, Каска",
        impactValue: "Початок трагедії",
        full:
          "Золота доба починається з того, що Гатс приєднується до Банди Сокола. Цей період показує дружбу, амбіції, війну та піднесення Гріффіта. Спочатку все виглядає героїчно, але поступово стає дорогою до зради й жертви.",
      },
      {
        number: "02",
        title: "Затьмарення",
        image: "/timeline/eclipse.jpg",
        short: "Банду Сокола приносять у жертву під час Затьмарення.",
        periodValue: "Затьмарення",
        charactersValue: "Гатс, Гріффіт, Каска, Рука Бога",
        impactValue: "Падіння Банди Сокола",
        full:
          "Затьмарення — найтемніший поворотний момент Berserk. Гріффіт приносить Банду Сокола в жертву та перероджується у Femto. Гатс і Каска виживають, але ця подія назавжди ламає їхні життя.",
      },
      {
        number: "03",
        title: "Чорний мечник",
        image: "/timeline/black-swordsman.jpg",
        short: "Гатс починає свою помсту апостолам.",
        periodValue: "Арка Чорного мечника",
        charactersValue: "Гатс, Пак, Апостоли",
        impactValue: "Гатс стає мисливцем на монстрів",
        full:
          "Після Затьмарення Гатс стає Чорним мечником. Його ведуть лють і біль, а зброєю стає Dragonslayer. Так починається його самотня війна проти демонів і долі.",
      },
      {
        number: "04",
        title: "Засудження",
        image: "/timeline/conviction.jpg",
        short: "Світ занурюється глибше у страх, віру та монстрів.",
        periodValue: "Арка Засудження",
        charactersValue: "Гатс, Каска, Фарнезе, Серпіко",
        impactValue: "Віра та страх стають жахом",
        full:
          "Арка Засудження показує світ, яким керують страх, релігія та страждання. Гатс зустрічає нових супутників, поки темрява збирається навколо Вежі Засудження.",
      },
      {
        number: "05",
        title: "Фальконія",
        image: "/timeline/falconia.jpg",
        short: "Гріффіт створює нову імперію у зміненому світі.",
        periodValue: "Сокіл імперії тисячоліття",
        charactersValue: "Гріффіт, Гатс, Апостоли",
        impactValue: "Піднесення імперії Гріффіта",
        full:
          "Після повернення у світ Гріффіт створює Фальконію — сяюче королівство, яке здається спасінням для людства. Але цей рай існує у світі, зміненому монстрами та причинністю.",
      },
      {
        number: "06",
        title: "Фантазія",
        image: "/timeline/fantasia.jpg",
        short: "Фізичний та астральний світи зливаються в одну реальність.",
        periodValue: "Арка Фантазії",
        charactersValue: "Гатс, Каска, Гріффіт, астральні істоти",
        impactValue: "Реальність змінюється назавжди",
        full:
          "Фантазія починається тоді, коли фізичний світ і астральний світ зливаються. Монстри, духи та міфічні істоти стають частиною реальності, назавжди змінюючи світ Berserk.",
      },
    ],
  },

  de: {
    label: "BERSERK ARCHIV",
    title: "ZEITLEISTE",
    description:
      "Die wichtigsten Wendepunkte in der dunklen Geschichte von Berserk.",
    close: "Schließen",
    detailsTitle: "Ereignisdetails",
    period: "Zeitraum",
    characters: "Hauptfiguren",
    impact: "Auswirkung",
    events: [
      {
        number: "01",
        title: "Goldenes Zeitalter",
        image: "/timeline/golden-age.jpg",
        short: "Guts tritt der Falkenbande bei und trifft Griffith.",
        periodValue: "Golden Age Arc",
        charactersValue: "Guts, Griffith, Casca",
        impactValue: "Beginn der Tragödie",
        full:
          "Das Goldene Zeitalter beginnt, als Guts der Falkenbande beitritt. Diese Zeit zeigt Freundschaft, Ehrgeiz, Krieg und Griffiths Aufstieg. Doch langsam wird sie zum Weg in Verrat und Opfer.",
      },
      {
        number: "02",
        title: "Die Finsternis",
        image: "/timeline/eclipse.jpg",
        short: "Die Falkenbande wird während der Eclipse geopfert.",
        periodValue: "Eclipse",
        charactersValue: "Guts, Griffith, Casca, Gotteshand",
        impactValue: "Fall der Falkenbande",
        full:
          "Die Eclipse ist der dunkelste Wendepunkt von Berserk. Griffith opfert die Falkenbande und wird als Femto wiedergeboren. Guts und Casca überleben, doch ihr Leben ist für immer zerbrochen.",
      },
      {
        number: "03",
        title: "Der Schwarze Schwertkämpfer",
        image: "/timeline/black-swordsman.jpg",
        short: "Guts beginnt seinen Rachefeldzug gegen die Apostel.",
        periodValue: "Black Swordsman Arc",
        charactersValue: "Guts, Puck, Apostel",
        impactValue: "Guts wird zum Monsterjäger",
        full:
          "Nach der Eclipse wird Guts zum Schwarzen Schwertkämpfer. Getrieben von Wut und Schmerz jagt er Apostel mit dem Dragonslayer.",
      },
      {
        number: "04",
        title: "Überzeugung",
        image: "/timeline/conviction.jpg",
        short: "Die Welt versinkt tiefer in Angst, Glauben und Monster.",
        periodValue: "Conviction Arc",
        charactersValue: "Guts, Casca, Farnese, Serpico",
        impactValue: "Glaube und Angst werden Horror",
        full:
          "Der Conviction Arc zeigt eine Welt voller Angst, Religion und Leid. Guts trifft neue Gefährten, während sich die Dunkelheit um den Turm der Überzeugung sammelt.",
      },
      {
        number: "05",
        title: "Falconia",
        image: "/timeline/falconia.jpg",
        short: "Griffith erschafft ein neues Reich in einer veränderten Welt.",
        periodValue: "Falcon of the Millennium Empire",
        charactersValue: "Griffith, Guts, Apostel",
        impactValue: "Aufstieg von Griffiths Reich",
        full:
          "Griffith erschafft Falconia, ein strahlendes Reich, das wie Rettung für die Menschheit wirkt. Doch dieses Paradies existiert in einer Welt, die von Monstern und Kausalität verändert wurde.",
      },
      {
        number: "06",
        title: "Fantasia",
        image: "/timeline/fantasia.jpg",
        short: "Die physische und die astrale Welt verschmelzen zu einer Realität.",
        periodValue: "Fantasia Arc",
        charactersValue: "Guts, Casca, Griffith, astrale Wesen",
        impactValue: "Die Realität verändert sich für immer",
        full:
          "Fantasia beginnt, als die physische und die astrale Welt verschmelzen. Monster, Geister und mythische Wesen werden Teil der Realität.",
      },
    ],
  },
};

export default function TimelinePage() {
  const { language } = useLanguage();
  const t = text[language];
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  const openedEvent = openedIndex !== null ? t.events[openedIndex] : null;

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="relative min-h-screen overflow-hidden px-5 pb-16 pt-32">
        <PageBackground />

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-8">
            <BackToArchive />
          </div>

          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-red-700">
            {t.label}
          </p>

          <h1 className="mb-6 text-5xl font-black uppercase md:text-7xl">
            {t.title}
          </h1>

          <p className="mb-14 max-w-2xl text-zinc-400">
            {t.description}
          </p>

          <div className="relative space-y-8 border-l border-red-950 pl-6 md:pl-10">
            {t.events.map((event, index) => (
              <button
                key={event.number}
                type="button"
                onClick={() => setOpenedIndex(index)}
                className="group relative w-full rounded-[28px] border border-red-950/70 bg-zinc-950/80 p-6 text-left transition hover:-translate-y-1 hover:border-red-700 hover:shadow-[0_0_45px_rgba(120,0,0,0.3)]"
              >
                <div className="absolute -left-[43px] top-7 h-5 w-5 rounded-full border border-red-700 bg-black shadow-[0_0_25px_rgba(255,0,0,0.5)] md:-left-[59px]" />

                <p className="mb-3 text-sm font-black text-red-700">
                  {event.number}
                </p>

                <h2 className="mb-3 text-2xl font-black uppercase md:text-3xl">
                  {event.title}
                </h2>

                <p className="leading-7 text-zinc-400">
                  {event.short}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {openedEvent && (
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
                  src={openedEvent.image}
                  alt={openedEvent.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                <div className="absolute bottom-8 left-6 right-6 md:left-10">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.45em] text-red-600">
                    {openedEvent.number}
                  </p>

                  <h2 className="text-5xl font-black uppercase md:text-8xl">
                    {openedEvent.title}
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
                      {t.period}
                    </p>
                    <p className="text-zinc-300">{openedEvent.periodValue}</p>
                  </div>

                  <div className="rounded-[24px] border border-red-950/70 bg-black/60 p-5">
                    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-red-700">
                      {t.characters}
                    </p>
                    <p className="text-zinc-300">
                      {openedEvent.charactersValue}
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-red-950/70 bg-black/60 p-5">
                    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-red-700">
                      {t.impact}
                    </p>
                    <p className="text-zinc-300">{openedEvent.impactValue}</p>
                  </div>
                </div>

                <p className="max-w-4xl text-xl leading-9 text-zinc-300">
                  {openedEvent.full}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}