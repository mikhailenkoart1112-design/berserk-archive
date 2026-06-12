"use client";

import Link from "next/link";

export default function EclipsePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#8b0000_0%,#220000_35%,#000_100%)]" />

      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-900 blur-[120px] opacity-40" />

      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-700 shadow-[0_0_100px_rgba(220,38,38,0.9)]" />

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <p className="mb-5 text-xs uppercase tracking-[0.6em] text-red-600">
          SECRET ARCHIVE
        </p>

        <h1 className="mb-8 text-6xl font-black uppercase md:text-8xl">
          ECLIPSE
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-zinc-300">
          In this world, is the destiny of mankind controlled by some transcendental entity or law?
        </p>

        <Link
          href="/"
          className="inline-block rounded-2xl border border-red-800 bg-black/50 px-8 py-4 text-sm font-bold uppercase tracking-[0.35em] text-white transition hover:bg-red-950"
        >
          Return
        </Link>
      </div>
    </main>
  );
}