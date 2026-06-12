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
    title: "APOSTLES",
    description:
      "Powerful demonic beings who abandoned their humanity through the power of a Beherit.",
    entity: "Beherit Sacrifice",
    bannerTitle: "Monsters born from sacrifice",
    close: "Close",
    detailsTitle: "Full information",
    status: "Status",
    form: "Apostle form",
    power: "Power",
    feature: "Feature",
    apostles: [
      {
        name: "Zodd",
        image: "/apostles/zodd.jpg",
        description:
          "A legendary warrior apostle who seeks only the strongest opponents.",
        statusValue: "Legendary Apostle",
        formValue: "Beast warrior",
        powerValue: "Immense strength",
        featureValue: "Lives for battle",
        full:
          "Nosferatu Zodd is one of the most feared apostles. He lives only for battle and respects powerful warriors. His presence feels like a warning that something inhuman has entered the battlefield.",
      },
      {
        name: "Grunbeld",
        image: "/apostles/grunbeld.jpg",
        description:
          "A dragon-like apostle and one of Griffith's strongest warriors.",
        statusValue: "Apostle warrior",
        formValue: "Dragon-like monster",
        powerValue: "Fire and armor",
        featureValue: "Knightly brutality",
        full:
          "Grunbeld is a massive apostle with the power of a dragon. He combines knightly discipline with monstrous strength, making him one of the most dangerous warriors under Griffith.",
      },
      {
        name: "Rosine",
        image: "/apostles/rosine.jpg",
        description:
          "An apostle connected to lost childhood, illusion and cruelty.",
        statusValue: "Apostle",
        formValue: "Moth-like demon",
        powerValue: "Flight and illusions",
        featureValue: "Broken childhood",
        full:
          "Rosine represents the tragedy of childhood twisted into horror. Her fantasy world hides cruelty, pain and the terrifying cost of escaping reality through sacrifice.",
      },
      {
        name: "Irvine",
        image: "/apostles/irvine.jpg",
        description:
          "A silent archer apostle with beast-like instincts.",
        statusValue: "Apostle archer",
        formValue: "Beast-like creature",
        powerValue: "Deadly precision",
        featureValue: "Silent hunter",
        full:
          "Irvine is calm, quiet and deadly. He fights like a hunter, using patience, instinct and perfect aim. His apostle nature feels closer to a wild beast than a human warrior.",
      },
      {
        name: "Locus",
        image: "/apostles/locus.jpg",
        description:
          "A knightly apostle known for loyalty, elegance and deadly skill.",
        statusValue: "Apostle knight",
        formValue: "Lancer demon",
        powerValue: "Speed and combat skill",
        featureValue: "Elegant warrior",
        full:
          "Locus is one of Griffith's most elegant and loyal apostles. He carries himself like a noble knight, but beneath that beauty exists the terrifying power of a demon.",
      },
    ],
  },

  ua: {
    label: "АРХІВ BERSERK",
    title: "АПОСТОЛИ",
    description:
      "Могутні демонічні істоти, які відкинули людяність через силу Бехеріта.",
    entity: "Жертва Бехеріта",
    bannerTitle: "Монстри, народжені жертвою",
    close: "Закрити",
    detailsTitle: "Повна інформація",
    status: "Статус",
    form: "Форма апостола",
    power: "Сила",
    feature: "Особливість",
    apostles: [
      {
        name: "Zodd",
        image: "/apostles/zodd.jpg",
        description:
          "Легендарний апостол-воїн, який шукає лише найсильніших суперників.",
        statusValue: "Легендарний апостол",
        formValue: "Звіроподібний воїн",
        powerValue: "Неймовірна сила",
        featureValue: "Живе битвою",
        full:
          "Nosferatu Zodd — один із найстрашніших апостолів. Він живе лише заради битви та поважає сильних воїнів. Його поява на полі бою відчувається як знак, що прийшло щось нелюдське.",
      },
      {
        name: "Grunbeld",
        image: "/apostles/grunbeld.jpg",
        description:
          "Драконоподібний апостол і один із найсильніших воїнів Гріффіта.",
        statusValue: "Апостол-воїн",
        formValue: "Драконоподібний монстр",
        powerValue: "Вогонь і броня",
        featureValue: "Лицарська жорстокість",
        full:
          "Grunbeld — масивний апостол із силою дракона. Він поєднує лицарську дисципліну з монструозною міццю, тому є одним із найнебезпечніших воїнів Гріффіта.",
      },
      {
        name: "Rosine",
        image: "/apostles/rosine.jpg",
        description:
          "Апостолка, пов’язана з втраченим дитинством, ілюзіями та жорстокістю.",
        statusValue: "Апостолка",
        formValue: "Метеликоподібний демон",
        powerValue: "Політ та ілюзії",
        featureValue: "Зламане дитинство",
        full:
          "Rosine уособлює трагедію дитинства, перетвореного на жах. Її казковий світ приховує жорстокість, біль і страшну ціну втечі від реальності через жертву.",
      },
      {
        name: "Irvine",
        image: "/apostles/irvine.jpg",
        description:
          "Мовчазний апостол-лучник із звіриними інстинктами.",
        statusValue: "Апостол-лучник",
        formValue: "Звіроподібна істота",
        powerValue: "Смертельна точність",
        featureValue: "Тихий мисливець",
        full:
          "Irvine спокійний, мовчазний і смертельно небезпечний. Він б’ється як мисливець, використовуючи терпіння, інстинкт і бездоганну точність.",
      },
      {
        name: "Locus",
        image: "/apostles/locus.jpg",
        description:
          "Лицарський апостол, відомий відданістю, елегантністю та смертельною майстерністю.",
        statusValue: "Апостол-лицар",
        formValue: "Демонічний списник",
        powerValue: "Швидкість і майстерність",
        featureValue: "Елегантний воїн",
        full:
          "Locus — один із найелегантніших і найвідданіших апостолів Гріффіта. Він поводиться як шляхетний лицар, але за цією красою прихована жахлива сила демона.",
      },
    ],
  },

  de: {
    label: "BERSERK ARCHIV",
    title: "APOSTEL",
    description:
      "Mächtige dämonische Wesen, die ihre Menschlichkeit durch die Kraft eines Beherits aufgegeben haben.",
    entity: "Beherit-Opfer",
    bannerTitle: "Monster, geboren aus Opfer",
    close: "Schließen",
    detailsTitle: "Vollständige Information",
    status: "Status",
    form: "Apostelform",
    power: "Kraft",
    feature: "Besonderheit",
    apostles: [
      {
        name: "Zodd",
        image: "/apostles/zodd.jpg",
        description:
          "Ein legendärer Krieger-Apostel, der nur die stärksten Gegner sucht.",
        statusValue: "Legendärer Apostel",
        formValue: "Bestienkrieger",
        powerValue: "Gewaltige Stärke",
        featureValue: "Lebt für den Kampf",
        full:
          "Nosferatu Zodd ist einer der gefürchtetsten Apostel. Er lebt nur für den Kampf und respektiert starke Krieger. Seine Anwesenheit wirkt wie eine Warnung, dass etwas Unmenschliches das Schlachtfeld betreten hat.",
      },
      {
        name: "Grunbeld",
        image: "/apostles/grunbeld.jpg",
        description:
          "Ein drachenähnlicher Apostel und einer von Griffiths stärksten Kriegern.",
        statusValue: "Apostelkrieger",
        formValue: "Drachenähnliches Monster",
        powerValue: "Feuer und Rüstung",
        featureValue: "Ritterliche Brutalität",
        full:
          "Grunbeld ist ein gewaltiger Apostel mit der Kraft eines Drachen. Er verbindet ritterliche Disziplin mit monströser Stärke.",
      },
      {
        name: "Rosine",
        image: "/apostles/rosine.jpg",
        description:
          "Eine Apostelin, verbunden mit verlorener Kindheit, Illusion und Grausamkeit.",
        statusValue: "Apostelin",
        formValue: "Mottenähnlicher Dämon",
        powerValue: "Flug und Illusionen",
        featureValue: "Gebrochene Kindheit",
        full:
          "Rosine verkörpert die Tragödie einer Kindheit, die in Horror verwandelt wurde. Ihre Fantasiewelt verbirgt Grausamkeit, Schmerz und Opfer.",
      },
      {
        name: "Irvine",
        image: "/apostles/irvine.jpg",
        description:
          "Ein stiller Bogenschützen-Apostel mit tierischen Instinkten.",
        statusValue: "Apostel-Bogenschütze",
        formValue: "Bestienartige Kreatur",
        powerValue: "Tödliche Präzision",
        featureValue: "Stiller Jäger",
        full:
          "Irvine ist ruhig, still und tödlich. Er kämpft wie ein Jäger, mit Geduld, Instinkt und perfektem Ziel.",
      },
      {
        name: "Locus",
        image: "/apostles/locus.jpg",
        description:
          "Ein ritterlicher Apostel, bekannt für Loyalität, Eleganz und tödliches Können.",
        statusValue: "Apostelritter",
        formValue: "Dämonischer Lanzenreiter",
        powerValue: "Geschwindigkeit und Können",
        featureValue: "Eleganter Krieger",
        full:
          "Locus ist einer von Griffiths elegantesten und treuesten Aposteln. Er wirkt wie ein edler Ritter, doch darunter liegt die Macht eines Dämons.",
      },
    ],
  },
};

export default function ApostlesPage() {
  const { language } = useLanguage();
  const t = text[language];
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  const openedApostle = openedIndex !== null ? t.apostles[openedIndex] : null;

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="relative min-h-screen overflow-hidden px-5 pb-16 pt-32">
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

          <p className="mb-12 max-w-2xl text-lg leading-8 text-zinc-400">
            {t.description}
          </p>

          <div className="relative mb-12 h-[280px] overflow-hidden rounded-[36px] border border-red-950/70 bg-zinc-950 md:h-[430px]">
            <Image
              src="/apostles/apostles-banner.jpg"
              alt="Apostles"
              fill
              priority
              className="object-cover opacity-80"
            />

            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

            <div className="absolute bottom-8 left-6 right-6 md:bottom-10 md:left-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.45em] text-red-600">
                {t.entity}
              </p>

              <h2 className="max-w-3xl text-4xl font-black uppercase md:text-6xl">
                {t.bannerTitle}
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {t.apostles.map((apostle, index) => (
              <button
                key={apostle.name}
                type="button"
                onClick={() => setOpenedIndex(index)}
                className="group overflow-hidden rounded-[32px] border border-red-950/70 bg-zinc-950/80 text-left transition hover:-translate-y-1 hover:border-red-700 hover:shadow-[0_0_45px_rgba(127,29,29,0.35)]"
              >
                <div className="relative h-64 overflow-hidden bg-black">
                  <Image
                    src={apostle.image}
                    alt={apostle.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                <div className="p-6">
                  <h2 className="mb-3 text-3xl font-black uppercase text-red-600">
                    {apostle.name}
                  </h2>

                  <p className="leading-7 text-zinc-400">
                    {apostle.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {openedApostle && (
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
  src={openedApostle.image}
  alt={openedApostle.name}
  fill
  className={
    openedApostle.name === "Rosine"
      ? "object-cover"
      : "object-contain"
  }
/>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                <div className="absolute bottom-8 left-6 right-6 md:left-10">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.45em] text-red-600">
                    {t.entity}
                  </p>

                  <h2 className="text-5xl font-black uppercase md:text-8xl">
                    {openedApostle.name}
                  </h2>
                </div>
              </div>

              <div className="p-7 md:p-10">
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-red-700">
                  {t.detailsTitle}
                </p>

                <div className="mb-8 grid gap-4 md:grid-cols-4">
                  <div className="rounded-[24px] border border-red-950/70 bg-black/60 p-5">
                    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-red-700">
                      {t.status}
                    </p>
                    <p className="text-zinc-300">
                      {openedApostle.statusValue}
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-red-950/70 bg-black/60 p-5">
                    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-red-700">
                      {t.form}
                    </p>
                    <p className="text-zinc-300">
                      {openedApostle.formValue}
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-red-950/70 bg-black/60 p-5">
                    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-red-700">
                      {t.power}
                    </p>
                    <p className="text-zinc-300">
                      {openedApostle.powerValue}
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-red-950/70 bg-black/60 p-5">
                    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-red-700">
                      {t.feature}
                    </p>
                    <p className="text-zinc-300">
                      {openedApostle.featureValue}
                    </p>
                  </div>
                </div>

                <p className="max-w-4xl text-xl leading-9 text-zinc-300">
                  {openedApostle.full}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}