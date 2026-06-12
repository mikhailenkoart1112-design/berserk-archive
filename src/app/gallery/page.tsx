"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Header from "@/components/Header";
import { useLanguage } from "@/components/LanguageProvider";
import PageBackground from "@/components/PageBackground";
import BackToArchive from "@/components/BackToArchive";

const galleryImages = {
  manga: [
    "/gallery/manga/1.jpg",
    "/gallery/manga/2.jpg",
    "/gallery/manga/3.jpg",
    "/gallery/manga/4.jpg",
  ],
  anime: [
    "/gallery/anime/1.jpg",
    "/gallery/anime/2.jpg",
    "/gallery/anime/3.jpg",
    "/gallery/anime/4.jpg",
  ],
  characters: [
    "/gallery/characters/1.jpg",
    "/gallery/characters/2.jpg",
    "/gallery/characters/3.jpg",
    "/gallery/characters/4.jpg",
  ],
  godHand: [
    "/gallery/god-hand/1.jpg",
    "/gallery/god-hand/2.jpg",
    "/gallery/god-hand/3.jpg",
    "/gallery/god-hand/4.jpg",
  ],
  apostles: [
    "/gallery/apostles/1.jpg",
    "/gallery/apostles/2.jpg",
    "/gallery/apostles/3.jpg",
    "/gallery/apostles/4.jpg",
  ],
  weapons: [
    "/gallery/weapons/1.jpg",
    "/gallery/weapons/2.jpg",
    "/gallery/weapons/3.jpg",
    "/gallery/weapons/4.jpg",
  ],
  wallpapers: [
    "/gallery/wallpapers/1.jpg",
    "/gallery/wallpapers/2.jpg",
    "/gallery/wallpapers/3.jpg",
    "/gallery/wallpapers/4.jpg",
  ],
};

const text = {
  en: {
    label: "BERSERK ARCHIVE",
    title: "GALLERY",
    description:
      "A dark collection of panels, scenes and visual moments from Berserk.",
    section: "Archive Section",
    open: "Open Gallery",
    close: "Close",
    image: "Image",
    categories: [
      {
        id: "manga",
        title: "Manga Panels",
        description: "Iconic black and white panels from the manga.",
      },
      {
        id: "anime",
        title: "Anime 1997",
        description: "Scenes inspired by the 1997 adaptation.",
      },
      {
        id: "characters",
        title: "Characters",
        description: "Portraits of the main figures of Berserk.",
      },
      {
        id: "godHand",
        title: "God Hand",
        description: "The demonic beings behind fate and sacrifice.",
      },
      {
        id: "apostles",
        title: "Apostles",
        description: "Monsters born from Beherits and sacrifice.",
      },
      {
        id: "weapons",
        title: "Weapons",
        description: "Legendary weapons and artifacts.",
      },
      {
        id: "wallpapers",
        title: "Wallpapers",
        description: "Dark atmospheric Berserk visuals.",
      },
    ],
  },

  ua: {
    label: "АРХІВ BERSERK",
    title: "ГАЛЕРЕЯ",
    description:
      "Темна колекція панелей, сцен та візуальних моментів зі світу Berserk.",
    section: "Розділ архіву",
    open: "Відкрити галерею",
    close: "Закрити",
    image: "Зображення",
    categories: [
      {
        id: "manga",
        title: "Панелі манги",
        description: "Культові чорно-білі кадри з манги.",
      },
      {
        id: "anime",
        title: "Аніме 1997",
        description: "Сцени в атмосфері адаптації 1997 року.",
      },
      {
        id: "characters",
        title: "Персонажі",
        description: "Портрети головних героїв Berserk.",
      },
      {
        id: "godHand",
        title: "Рука Бога",
        description: "Демонічні істоти, пов’язані з долею та жертвою.",
      },
      {
        id: "apostles",
        title: "Апостоли",
        description: "Монстри, народжені через бехеріти та жертви.",
      },
      {
        id: "weapons",
        title: "Зброя",
        description: "Легендарна зброя та артефакти.",
      },
      {
        id: "wallpapers",
        title: "Шпалери",
        description: "Темні атмосферні зображення Berserk.",
      },
    ],
  },

  de: {
    label: "BERSERK ARCHIV",
    title: "GALERIE",
    description:
      "Eine dunkle Sammlung von Panels, Szenen und visuellen Momenten aus Berserk.",
    section: "Archivbereich",
    open: "Galerie öffnen",
    close: "Schließen",
    image: "Bild",
    categories: [
      {
        id: "manga",
        title: "Manga-Panels",
        description: "Ikonische schwarz-weiße Panels aus dem Manga.",
      },
      {
        id: "anime",
        title: "Anime 1997",
        description: "Szenen inspiriert von der 1997er Adaption.",
      },
      {
        id: "characters",
        title: "Charaktere",
        description: "Porträts der wichtigsten Figuren von Berserk.",
      },
      {
        id: "godHand",
        title: "Gotteshand",
        description: "Dämonische Wesen hinter Schicksal und Opfer.",
      },
      {
        id: "apostles",
        title: "Apostel",
        description: "Monster, geboren aus Beherits und Opfer.",
      },
      {
        id: "weapons",
        title: "Waffen",
        description: "Legendäre Waffen und Artefakte.",
      },
      {
        id: "wallpapers",
        title: "Wallpapers",
        description: "Dunkle atmosphärische Berserk-Bilder.",
      },
    ],
  },
};

type CategoryId = keyof typeof galleryImages;

export default function GalleryPage() {
  const { language } = useLanguage();
  const t = text[language];

  const [activeCategory, setActiveCategory] = useState<CategoryId | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openedCategory =
    activeCategory !== null
      ? t.categories.find((category) => category.id === activeCategory)
      : null;

  const openedImages =
    activeCategory !== null ? galleryImages[activeCategory] : [];

  const openedImage =
    activeImageIndex !== null ? openedImages[activeImageIndex] : null;

  const openCategory = (categoryId: CategoryId) => {
    setActiveCategory(categoryId);
    setActiveImageIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextImage = () => {
    if (activeImageIndex === null || openedImages.length === 0) return;
    setActiveImageIndex((activeImageIndex + 1) % openedImages.length);
  };

  const prevImage = () => {
    if (activeImageIndex === null || openedImages.length === 0) return;
    setActiveImageIndex(
      activeImageIndex === 0 ? openedImages.length - 1 : activeImageIndex - 1
    );
  };

  const closeGallery = () => {
    setActiveCategory(null);
    setActiveImageIndex(null);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="relative min-h-screen overflow-hidden px-5 pb-16 pt-32">
        <PageBackground />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-8">
            <BackToArchive />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-sm uppercase tracking-[0.5em] text-red-700"
          >
            {t.label}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.45 }}
            className="mb-6 text-5xl font-black uppercase md:text-7xl"
          >
            {t.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mb-12 max-w-2xl text-zinc-400"
          >
            {t.description}
          </motion.p>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {t.categories.map((category, index) => {
              const categoryId = category.id as CategoryId;
              const coverImage = galleryImages[categoryId][0];

              return (
                <motion.button
                  key={category.id}
                  type="button"
                  onClick={() => openCategory(categoryId)}
                  initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: index * 0.06 }}
                  className="group relative h-80 overflow-hidden rounded-[32px] border border-red-950/70 bg-zinc-950/80 text-left transition duration-300 hover:-translate-y-2 hover:border-red-700 hover:shadow-[0_0_50px_rgba(120,0,0,0.35)]"
                >
                  <Image
                    src={coverImage}
                    alt={category.title}
                    fill
                    className="object-cover opacity-65 transition duration-700 group-hover:scale-110 group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  <div className="absolute right-6 top-6 text-7xl font-black text-red-950 transition group-hover:text-red-800">
                    0{index + 1}
                  </div>

                  <div className="relative z-10 flex h-full flex-col justify-end p-6">
                    <p className="mb-3 text-xs uppercase tracking-[0.35em] text-red-700">
                      {t.section}
                    </p>

                    <h2 className="mb-3 text-3xl font-black uppercase">
                      {category.title}
                    </h2>

                    <p className="mb-6 leading-7 text-zinc-400">
                      {category.description}
                    </p>

                    <span className="text-xs font-bold uppercase tracking-[0.35em] text-red-600">
                      {t.open}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {openedCategory && openedImage && activeImageIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] overflow-y-auto bg-black/95 px-5 py-8 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              onClick={closeGallery}
              className="fixed right-5 top-5 z-[120] rounded-full border border-red-800 bg-black/80 px-5 py-3 text-xs font-black uppercase tracking-[0.3em] text-red-600"
            >
              {t.close}
            </button>

            <div className="mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                transition={{ duration: 0.35 }}
                className="mb-8 pr-28"
              >
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.45em] text-red-700">
                  {t.section}
                </p>

                <h2 className="text-4xl font-black uppercase md:text-7xl">
                  {openedCategory.title}
                </h2>
              </motion.div>

              <motion.div
                key={openedImage}
                initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
                transition={{ duration: 0.3 }}
                className="relative h-[520px] overflow-hidden rounded-[36px] border border-red-950/80 bg-black shadow-[0_0_100px_rgba(127,29,29,0.35)] md:h-[720px]"
              >
                <Image
                  src={openedImage}
                  alt={openedCategory.title}
                  fill
                  className="object-contain"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                <div className="absolute bottom-6 left-6 rounded-full border border-red-950/70 bg-black/80 px-5 py-3 text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                  {t.image} {activeImageIndex + 1}/{openedImages.length}
                </div>

                <button
                  type="button"
                  onClick={prevImage}
                  className="absolute left-5 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-red-950/70 bg-black/80 text-3xl text-red-600 transition hover:border-red-700 hover:bg-red-950/40"
                >
                  ‹
                </button>

                <button
                  type="button"
                  onClick={nextImage}
                  className="absolute right-5 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-red-950/70 bg-black/80 text-3xl text-red-600 transition hover:border-red-700 hover:bg-red-950/40"
                >
                  ›
                </button>
              </motion.div>

              <div className="mt-6 grid gap-4 md:grid-cols-4">
                {openedImages.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative h-32 overflow-hidden rounded-[24px] border bg-black transition ${
                      activeImageIndex === index
                        ? "border-red-600 shadow-[0_0_35px_rgba(220,38,38,0.35)]"
                        : "border-red-950/70 hover:border-red-700"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${openedCategory.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}