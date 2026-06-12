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
    title: "GOD HAND",
    description:
      "The five demonic beings who stand above apostles and manipulate fate.",
    entity: "Eclipse Entity",
    bannerTitle: "The Five Angels of Desire",
    close: "Close",
    detailsTitle: "Full information",
    status: "Status",
    origin: "Origin",
    influence: "Influence",
    feature: "Feature",
    members: [
      {
        name: "Void",
        image: "/god-hand/void.jpg",
        description: "The oldest and most mysterious member of the God Hand.",
        statusValue: "Member of the God Hand",
        originValue: "Unknown",
        influenceValue: "Causality",
        featureValue: "Leader-like presence",
        full:
          "Void appears as the most authoritative figure among the God Hand. His words sound like judgement itself. He represents causality, sacrifice and the cruel idea that human suffering is part of a greater design.",
      },
      {
        name: "Femto",
        image: "/god-hand/femto.jpg",
        description: "Griffith reborn after the Eclipse.",
        statusValue: "Fifth member of the God Hand",
        originValue: "Griffith",
        influenceValue: "Ambition",
        featureValue: "Rebirth through sacrifice",
        full:
          "Femto is Griffith's demonic rebirth after the Eclipse. He carries Griffith's dream, but without human weakness, mercy or guilt. His existence represents ambition taken beyond humanity.",
      },
      {
        name: "Slan",
        image: "/god-hand/slan.jpg",
        description: "A terrifying entity connected to desire and darkness.",
        statusValue: "Member of the God Hand",
        originValue: "Unknown",
        influenceValue: "Desire",
        featureValue: "Temptation and obsession",
        full:
          "Slan is connected to temptation, pleasure, pain and obsession. She appears as both beautiful and horrifying, showing how desire can become something monstrous and corrupted.",
      },
      {
        name: "Ubik",
        image: "/god-hand/ubik.jpg",
        description: "A manipulator who twists truth and memory.",
        statusValue: "Member of the God Hand",
        originValue: "Unknown",
        influenceValue: "Manipulation",
        featureValue: "Illusions and memories",
        full:
          "Ubik uses visions, memories and psychological pressure. He does not fight with strength, but with manipulation, forcing victims to accept despair as truth.",
      },
      {
        name: "Conrad",
        image: "/god-hand/conrad.jpg",
        description: "A silent figure of decay and suffering.",
        statusValue: "Member of the God Hand",
        originValue: "Unknown",
        influenceValue: "Disease and decay",
        featureValue: "Plague and corruption",
        full:
          "Conrad is quiet, disturbing and almost emotionless. His presence feels like disease, rot and unavoidable collapse. He represents suffering that spreads slowly and silently.",
      },
    ],
  },

  ua: {
    label: "АРХІВ BERSERK",
    title: "РУКА БОГА",
    description:
      "П’ять демонічних істот, що стоять над апостолами та впливають на долю.",
    entity: "Істота Затьмарення",
    bannerTitle: "П’ять ангелів бажання",
    close: "Закрити",
    detailsTitle: "Повна інформація",
    status: "Статус",
    origin: "Походження",
    influence: "Сфера впливу",
    feature: "Особливість",
    members: [
      {
        name: "Void",
        image: "/god-hand/void.jpg",
        description: "Найстаріший і найзагадковіший учасник Руки Бога.",
        statusValue: "Член Руки Бога",
        originValue: "Невідоме",
        influenceValue: "Причинність",
        featureValue: "Фігура, схожа на лідера",
        full:
          "Void виглядає як найавторитетніша істота серед Руки Бога. Його слова звучать як вирок. Він уособлює причинність, закон жертви та жорстоку ідею, що людські страждання є частиною великого задуму.",
      },
      {
        name: "Femto",
        image: "/god-hand/femto.jpg",
        description: "Гріффіт, перероджений після Затьмарення.",
        statusValue: "П’ятий член Руки Бога",
        originValue: "Griffith",
        influenceValue: "Амбіція",
        featureValue: "Переродження через жертву",
        full:
          "Femto — це демонічне переродження Гріффіта після Затьмарення. Він несе мрію Гріффіта, але вже без людської слабкості, жалю та провини. Його існування уособлює амбіцію, що вийшла за межі людяності.",
      },
      {
        name: "Slan",
        image: "/god-hand/slan.jpg",
        description: "Моторошна істота, пов’язана з бажанням і темрявою.",
        statusValue: "Член Руки Бога",
        originValue: "Невідоме",
        influenceValue: "Бажання",
        featureValue: "Спокуса та одержимість",
        full:
          "Slan пов’язана зі спокусою, насолодою, болем та одержимістю. Вона одночасно красива й жахлива, показуючи, як бажання може перетворитися на щось монструозне й зіпсоване.",
      },
      {
        name: "Ubik",
        image: "/god-hand/ubik.jpg",
        description: "Маніпулятор, який викривляє правду та спогади.",
        statusValue: "Член Руки Бога",
        originValue: "Невідоме",
        influenceValue: "Маніпуляція",
        featureValue: "Ілюзії та спогади",
        full:
          "Ubik використовує видіння, спогади та психологічний тиск. Він не перемагає силою, а ламає свідомість, змушуючи жертв прийняти відчай як правду.",
      },
      {
        name: "Conrad",
        image: "/god-hand/conrad.jpg",
        description: "Мовчазна фігура розпаду й страждання.",
        statusValue: "Член Руки Бога",
        originValue: "Невідоме",
        influenceValue: "Хвороби та розпад",
        featureValue: "Чума й зіпсуття",
        full:
          "Conrad тихий, тривожний і майже беземоційний. Його присутність відчувається як хвороба, гниття й неминучий занепад. Він уособлює страждання, яке поширюється повільно й безшумно.",
      },
    ],
  },

  de: {
    label: "BERSERK ARCHIV",
    title: "GOTTESHAND",
    description:
      "Fünf dämonische Wesen, die über den Aposteln stehen und das Schicksal lenken.",
    entity: "Eclipse-Wesen",
    bannerTitle: "Die fünf Engel des Verlangens",
    close: "Schließen",
    detailsTitle: "Vollständige Information",
    status: "Status",
    origin: "Herkunft",
    influence: "Einfluss",
    feature: "Besonderheit",
    members: [
      {
        name: "Void",
        image: "/god-hand/void.jpg",
        description: "Das älteste und geheimnisvollste Mitglied.",
        statusValue: "Mitglied der Gotteshand",
        originValue: "Unbekannt",
        influenceValue: "Kausalität",
        featureValue: "Führungsartige Präsenz",
        full:
          "Void wirkt wie die führende Präsenz der Gotteshand. Seine Worte klingen wie ein Urteil. Er steht für Kausalität, Opfer und die grausame Idee, dass menschliches Leid Teil eines größeren Plans ist.",
      },
      {
        name: "Femto",
        image: "/god-hand/femto.jpg",
        description: "Griffith, nach der Eclipse wiedergeboren.",
        statusValue: "Fünftes Mitglied der Gotteshand",
        originValue: "Griffith",
        influenceValue: "Ehrgeiz",
        featureValue: "Wiedergeburt durch Opfer",
        full:
          "Femto ist Griffiths dämonische Wiedergeburt nach der Eclipse. Er trägt Griffiths Traum weiter, aber ohne menschliche Schwäche, Reue oder Schuld.",
      },
      {
        name: "Slan",
        image: "/god-hand/slan.jpg",
        description: "Ein Wesen aus Verlangen und Dunkelheit.",
        statusValue: "Mitglied der Gotteshand",
        originValue: "Unbekannt",
        influenceValue: "Verlangen",
        featureValue: "Versuchung und Besessenheit",
        full:
          "Slan ist mit Versuchung, Schmerz, Lust und Besessenheit verbunden. Sie ist schön und schrecklich zugleich und zeigt, wie Verlangen monströs werden kann.",
      },
      {
        name: "Ubik",
        image: "/god-hand/ubik.jpg",
        description: "Ein Manipulator von Wahrheit und Erinnerung.",
        statusValue: "Mitglied der Gotteshand",
        originValue: "Unbekannt",
        influenceValue: "Manipulation",
        featureValue: "Illusionen und Erinnerungen",
        full:
          "Ubik nutzt Visionen, Erinnerungen und psychologischen Druck. Er kämpft nicht mit Kraft, sondern zerbricht den Geist seiner Opfer.",
      },
      {
        name: "Conrad",
        image: "/god-hand/conrad.jpg",
        description: "Eine stille Gestalt von Verfall und Leid.",
        statusValue: "Mitglied der Gotteshand",
        originValue: "Unbekannt",
        influenceValue: "Krankheit und Verfall",
        featureValue: "Seuche und Verderben",
        full:
          "Conrad ist still, beunruhigend und fast emotionslos. Seine Präsenz fühlt sich wie Krankheit, Fäulnis und unvermeidlicher Niedergang an.",
      },
    ],
  },
};

export default function GodHandPage() {
  const { language } = useLanguage();
  const t = text[language];
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  const openedMember = openedIndex !== null ? t.members[openedIndex] : null;

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
              src="/god-hand/god-hand-banner.jpg"
              alt="God Hand"
              fill
              priority
              className="object-cover opacity-80"
            />

            <div className="absolute inset-0 bg-black/45" />
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
            {t.members.map((member, index) => (
              <button
                key={member.name}
                type="button"
                onClick={() => setOpenedIndex(index)}
                className="group overflow-hidden rounded-[32px] border border-red-950/70 bg-zinc-950/80 text-left transition hover:-translate-y-1 hover:border-red-700 hover:shadow-[0_0_45px_rgba(127,29,29,0.35)]"
              >
                <div className="relative h-64 overflow-hidden bg-black">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                <div className="p-6">
                  <h2 className="mb-3 text-3xl font-black uppercase text-red-600">
                    {member.name}
                  </h2>

                  <p className="leading-7 text-zinc-400">
                    {member.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {openedMember && (
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
                  src={openedMember.image}
                  alt={openedMember.name}
                  fill
                  className={
  openedMember.name === "Slan" || openedMember.name === "Void"
    ? "object-contain"
    : "object-cover"
}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                <div className="absolute bottom-8 left-6 right-6 md:left-10">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.45em] text-red-600">
                    {t.entity}
                  </p>

                  <h2 className="text-5xl font-black uppercase md:text-8xl">
                    {openedMember.name}
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
                    <p className="text-zinc-300">{openedMember.statusValue}</p>
                  </div>

                  <div className="rounded-[24px] border border-red-950/70 bg-black/60 p-5">
                    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-red-700">
                      {t.origin}
                    </p>
                    <p className="text-zinc-300">{openedMember.originValue}</p>
                  </div>

                  <div className="rounded-[24px] border border-red-950/70 bg-black/60 p-5">
                    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-red-700">
                      {t.influence}
                    </p>
                    <p className="text-zinc-300">
                      {openedMember.influenceValue}
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-red-950/70 bg-black/60 p-5">
                    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-red-700">
                      {t.feature}
                    </p>
                    <p className="text-zinc-300">{openedMember.featureValue}</p>
                  </div>
                </div>

                <p className="max-w-4xl text-xl leading-9 text-zinc-300">
                  {openedMember.full}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}