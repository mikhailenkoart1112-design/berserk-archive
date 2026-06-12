"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { useLanguage } from "@/components/LanguageProvider";

const text = {
  en: {
    logo: "BERSERK ARCHIVE",
    story: "Story",
    timeline: "Timeline",
    characters: "Characters",
    godHand: "God Hand",
    apostles: "Apostles",
    world: "World",
    weapons: "Weapons",
    gallery: "Gallery",
  },
  ua: {
    logo: "АРХІВ BERSERK",
    story: "Історія",
    timeline: "Таймлайн",
    characters: "Персонажі",
    godHand: "Рука Бога",
    apostles: "Апостоли",
    world: "Світ",
    weapons: "Зброя",
    gallery: "Галерея",
  },
  de: {
    logo: "BERSERK ARCHIV",
    story: "Geschichte",
    timeline: "Zeitleiste",
    characters: "Charaktere",
    godHand: "Gotteshand",
    apostles: "Apostel",
    world: "Welt",
    weapons: "Waffen",
    gallery: "Galerie",
  },
};

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const t = text[language];

  const nextLanguage = {
    en: "UA",
    ua: "DE",
    de: "EN",
  };

  const links = [
    [t.story, "/story"],
    [t.timeline, "/timeline"],
    [t.characters, "/characters"],
    [t.godHand, "/god-hand"],
    [t.apostles, "/apostles"],
    [t.world, "/world"],
    [t.weapons, "/weapons"],
    [t.gallery, "/gallery"],
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -18, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 w-full border-b border-red-950/60 bg-black/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="text-xs font-bold uppercase tracking-[0.3em] text-red-700 transition hover:text-red-500 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.8)] md:text-sm"
        >
          {t.logo}
        </Link>

        <nav className="hidden items-center gap-4 md:flex">
          {links.map(([label, href], index) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.035 }}
            >
              <Link
                href={href}
                className="text-sm text-zinc-300 transition hover:text-red-500 hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]"
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.button
            type="button"
            onClick={toggleLanguage}
            whileTap={{ scale: 0.92 }}
            whileHover={{ scale: 1.06 }}
            className="rounded-xl border border-red-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-950 hover:shadow-[0_0_25px_rgba(127,29,29,0.5)]"
          >
            <motion.span
              key={language}
              initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.25 }}
            >
              {nextLanguage[language]}
            </motion.span>
          </motion.button>

          <motion.button
            type="button"
            onClick={() => setOpen((current) => !current)}
            whileTap={{ scale: 0.9 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-900 text-white transition hover:bg-red-950 md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, height: "auto", filter: "blur(0px)" }}
            exit={{ opacity: 0, height: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden border-t border-red-950/60 bg-black/95 px-5 py-5 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {links.map(([label, href], index) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl border border-red-950/70 bg-zinc-950/80 px-5 py-4 text-sm font-bold uppercase tracking-[0.25em] text-zinc-200 transition hover:border-red-700 hover:bg-red-950/20"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}