"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Header from "@/components/Header";
import { useLanguage } from "@/components/LanguageProvider";
import PageBackground from "@/components/PageBackground";
import BackToArchive from "@/components/BackToArchive";

const text = {
  en: {
    label: "BERSERK ARCHIVE",
    title: "WEAPONS",
    description: "Legendary weapons and artifacts from the world of Berserk.",
    bannerTitle: "Tools of rage, fate and sacrifice",
    entity: "Legendary Armament",
    close: "Close",
    detailsTitle: "Full information",
    owner: "Owner",
    type: "Type",
    power: "Power",
    feature: "Feature",
    weapons: [
      {
        name: "Dragonslayer",
        image: "/weapons/dragonslayer.jpg",
        description: "Guts' massive sword, too large to be called a sword.",
        ownerValue: "Guts",
        typeValue: "Greatsword",
        powerValue: "Extreme cutting force",
        featureValue: "Can wound astral beings",
        full:
          "The Dragonslayer is Guts' iconic weapon: a massive slab of iron too large to be called a normal sword. Through endless battles against apostles and monsters, it becomes more than steel — a weapon capable of striking beings from the astral world.",
      },
      {
        name: "Berserker Armor",
        image: "/weapons/berserker-armor.jpg",
        description: "A cursed armor that pushes the wearer beyond human limits.",
        ownerValue: "Guts",
        typeValue: "Cursed armor",
        powerValue: "Removes pain limits",
        featureValue: "Beast of Darkness",
        full:
          "The Berserker Armor gives Guts terrifying power by ignoring the body's natural limits. It can keep him fighting through broken bones and fatal wounds, but it also threatens to consume his mind through rage and the Beast of Darkness.",
      },
      {
        name: "Cannon Arm",
        image: "/weapons/cannon-arm.jpg",
        description: "A hidden cannon built into Guts' prosthetic arm.",
        ownerValue: "Guts",
        typeValue: "Prosthetic weapon",
        powerValue: "Close-range blast",
        featureValue: "Surprise attack",
        full:
          "After losing his arm, Guts receives a prosthetic limb with a hidden cannon inside. It is brutal, direct and perfectly suited to his fighting style, turning a wound from the Eclipse into another weapon.",
      },
      {
        name: "Beherit",
        image: "/weapons/beherit.jpg",
        description: "A mysterious artifact connected to fate and the God Hand.",
        ownerValue: "Chosen by causality",
        typeValue: "Occult artifact",
        powerValue: "Opens the path to sacrifice",
        featureValue: "Connected to destiny",
        full:
          "The Beherit is one of the most mysterious artifacts in Berserk. It appears to those chosen by causality and can open the way to the God Hand when despair reaches its deepest point.",
      },
      {
        name: "Sword of Actuation",
        image: "/weapons/sword-of-actuation.jpg",
        description: "Skull Knight's strange sword made from beherits.",
        ownerValue: "Skull Knight",
        typeValue: "Dimensional sword",
        powerValue: "Cuts through space",
        featureValue: "Forged from Beherits",
        full:
          "The Sword of Actuation is Skull Knight's terrifying weapon, created through consumed Beherits. It can cut through layers of reality and open paths between dimensions, making it one of the strangest weapons in Berserk.",
      },
    ],
  },

  ua: {
    label: "АРХІВ BERSERK",
    title: "ЗБРОЯ",
    description: "Легендарна зброя та артефакти зі світу Berserk.",
    bannerTitle: "Інструменти люті, долі та жертви",
    entity: "Легендарне озброєння",
    close: "Закрити",
    detailsTitle: "Повна інформація",
    owner: "Власник",
    type: "Тип",
    power: "Сила",
    feature: "Особливість",
    weapons: [
      {
        name: "Dragonslayer",
        image: "/weapons/dragonslayer.jpg",
        description: "Величезний меч Гатса, занадто великий, щоб назвати його мечем.",
        ownerValue: "Гатс",
        typeValue: "Великий меч",
        powerValue: "Неймовірна рубаюча сила",
        featureValue: "Може ранити астральних істот",
        full:
          "Dragonslayer — культова зброя Гатса: масивна плита заліза, занадто велика, щоб бути звичайним мечем. Через нескінченні битви з апостолами й монстрами він стає не просто сталлю, а зброєю, здатною вражати істот астрального світу.",
      },
      {
        name: "Berserker Armor",
        image: "/weapons/berserker-armor.jpg",
        description: "Проклята броня, що виводить власника за межі людських можливостей.",
        ownerValue: "Гатс",
        typeValue: "Проклята броня",
        powerValue: "Ігнорує межі болю",
        featureValue: "Звір Темряви",
        full:
          "Berserker Armor дає Гатсу жахливу силу, змушуючи тіло ігнорувати природні обмеження. Вона дозволяє битися навіть зі зламаними кістками й смертельними ранами, але водночас загрожує поглинути розум люттю та Звіром Темряви.",
      },
      {
        name: "Рука-гармата",
        image: "/weapons/cannon-arm.jpg",
        description: "Прихована гармата, вбудована в протез руки Гатса.",
        ownerValue: "Гатс",
        typeValue: "Протез-зброя",
        powerValue: "Постріл на близькій дистанції",
        featureValue: "Раптова атака",
        full:
          "Після втрати руки Гатс отримує протез із прихованою гарматою всередині. Це груба, пряма й ідеальна для його стилю бою зброя, яка перетворює рану після Затьмарення на ще один інструмент виживання.",
      },
      {
        name: "Бехеріт",
        image: "/weapons/beherit.jpg",
        description: "Загадковий артефакт, пов’язаний з долею та Рукою Бога.",
        ownerValue: "Обраний причинністю",
        typeValue: "Окультний артефакт",
        powerValue: "Відкриває шлях до жертви",
        featureValue: "Пов’язаний із долею",
        full:
          "Бехеріт — один із найзагадковіших артефактів Berserk. Він з’являється у тих, кого обрала причинність, і може відкрити шлях до Руки Бога в момент найглибшого відчаю.",
      },
      {
        name: "Меч Активації",
        image: "/weapons/sword-of-actuation.jpg",
        description: "Дивний меч Лицаря Черепа, створений із бехерітів.",
        ownerValue: "Лицар Черепа",
        typeValue: "Просторовий меч",
        powerValue: "Розрізає простір",
        featureValue: "Створений із бехерітів",
        full:
          "Меч Активації — моторошна зброя Лицаря Черепа, створена через поглинені бехеріти. Він здатний розрізати шари реальності та відкривати проходи між вимірами.",
      },
    ],
  },

  de: {
    label: "BERSERK ARCHIV",
    title: "WAFFEN",
    description: "Legendäre Waffen und Artefakte aus der Welt von Berserk.",
    bannerTitle: "Werkzeuge von Zorn, Schicksal und Opfer",
    entity: "Legendäre Waffe",
    close: "Schließen",
    detailsTitle: "Vollständige Information",
    owner: "Besitzer",
    type: "Typ",
    power: "Kraft",
    feature: "Besonderheit",
    weapons: [
      {
        name: "Dragonslayer",
        image: "/weapons/dragonslayer.jpg",
        description: "Guts' gewaltiges Schwert, zu groß, um nur ein Schwert genannt zu werden.",
        ownerValue: "Guts",
        typeValue: "Großschwert",
        powerValue: "Extreme Schnittkraft",
        featureValue: "Kann astrale Wesen verletzen",
        full:
          "Der Dragonslayer ist Guts' ikonische Waffe: eine massive Eisenplatte, zu groß, um ein normales Schwert zu sein. Durch unzählige Kämpfe gegen Apostel und Monster wird er zu einer Waffe, die auch astrale Wesen treffen kann.",
      },
      {
        name: "Berserker Armor",
        image: "/weapons/berserker-armor.jpg",
        description: "Eine verfluchte Rüstung, die den Träger über menschliche Grenzen treibt.",
        ownerValue: "Guts",
        typeValue: "Verfluchte Rüstung",
        powerValue: "Ignoriert Schmerzgrenzen",
        featureValue: "Bestie der Dunkelheit",
        full:
          "Die Berserker Armor verleiht Guts schreckliche Kraft, indem sie die natürlichen Grenzen des Körpers ignoriert. Sie hält ihn trotz gebrochener Knochen und tödlicher Wunden im Kampf, bedroht aber seinen Verstand.",
      },
      {
        name: "Kanonenarm",
        image: "/weapons/cannon-arm.jpg",
        description: "Eine versteckte Kanone in Guts' Prothesenarm.",
        ownerValue: "Guts",
        typeValue: "Prothesenwaffe",
        powerValue: "Nahkampfschuss",
        featureValue: "Überraschungsangriff",
        full:
          "Nach dem Verlust seines Arms erhält Guts eine Prothese mit versteckter Kanone. Sie ist brutal, direkt und passt perfekt zu seinem Kampfstil.",
      },
      {
        name: "Beherit",
        image: "/weapons/beherit.jpg",
        description: "Ein geheimnisvolles Artefakt, verbunden mit Schicksal und der Gotteshand.",
        ownerValue: "Von Kausalität gewählt",
        typeValue: "Okkultes Artefakt",
        powerValue: "Öffnet den Weg zum Opfer",
        featureValue: "Mit dem Schicksal verbunden",
        full:
          "Der Beherit ist eines der geheimnisvollsten Artefakte in Berserk. Er erscheint jenen, die von der Kausalität gewählt wurden, und kann den Weg zur Gotteshand öffnen.",
      },
      {
        name: "Schwert der Aktivierung",
        image: "/weapons/sword-of-actuation.jpg",
        description: "Skull Knights seltsames Schwert, erschaffen aus Beherits.",
        ownerValue: "Skull Knight",
        typeValue: "Dimensionsschwert",
        powerValue: "Schneidet durch Raum",
        featureValue: "Aus Beherits geschmiedet",
        full:
          "Das Schwert der Aktivierung ist Skull Knights unheimliche Waffe, erschaffen durch verschlungene Beherits. Es kann Schichten der Realität durchschneiden und Wege zwischen Dimensionen öffnen.",
      },
    ],
  },
};

export default function WeaponsPage() {
  const { language } = useLanguage();
  const t = text[language];
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  const openedWeapon = openedIndex !== null ? t.weapons[openedIndex] : null;

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
              src="/weapons/weapons-banner.jpg"
              alt="Weapons"
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
            {t.weapons.map((weapon, index) => (
              <button
                key={weapon.name}
                type="button"
                onClick={() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  setOpenedIndex(index);
}}
                className="group overflow-hidden rounded-[32px] border border-red-950/70 bg-zinc-950/80 text-left transition hover:-translate-y-1 hover:border-red-700 hover:shadow-[0_0_45px_rgba(127,29,29,0.35)]"
              >
                <div className="relative h-64 overflow-hidden bg-black">
                  <Image
                    src={weapon.image}
                    alt={weapon.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                <div className="p-6">
                  <h2 className="mb-3 text-2xl font-black uppercase text-red-600">
                    {weapon.name}
                  </h2>

                  <p className="leading-7 text-zinc-400">
                    {weapon.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {openedWeapon && (
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
    src={openedWeapon.image}
    alt={openedWeapon.name}
    fill
    className="object-contain"
  />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                <div className="absolute bottom-8 left-6 right-6 md:left-10">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.45em] text-red-600">
                    {t.entity}
                  </p>

                  <h2 className="text-5xl font-black uppercase md:text-8xl">
                    {openedWeapon.name}
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
                      {t.owner}
                    </p>
                    <p className="text-zinc-300">{openedWeapon.ownerValue}</p>
                  </div>

                  <div className="rounded-[24px] border border-red-950/70 bg-black/60 p-5">
                    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-red-700">
                      {t.type}
                    </p>
                    <p className="text-zinc-300">{openedWeapon.typeValue}</p>
                  </div>

                  <div className="rounded-[24px] border border-red-950/70 bg-black/60 p-5">
                    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-red-700">
                      {t.power}
                    </p>
                    <p className="text-zinc-300">{openedWeapon.powerValue}</p>
                  </div>

                  <div className="rounded-[24px] border border-red-950/70 bg-black/60 p-5">
                    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-red-700">
                      {t.feature}
                    </p>
                    <p className="text-zinc-300">{openedWeapon.featureValue}</p>
                  </div>
                </div>

                <p className="max-w-4xl text-xl leading-9 text-zinc-300">
                  {openedWeapon.full}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}