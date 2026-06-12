export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      <div className="relative flex flex-col items-center px-6 text-center">
        <div className="absolute h-56 w-56 rounded-full bg-red-950/40 blur-[90px]" />

        <div className="relative mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-red-900 bg-black shadow-[0_0_60px_rgba(127,29,29,0.5)]">
          <div className="h-12 w-12 rotate-45 rounded-[14px] border border-red-700 bg-red-950/30 shadow-[0_0_35px_rgba(220,38,38,0.45)]" />
        </div>

        <p className="mb-4 text-xs font-bold uppercase tracking-[0.55em] text-red-700">
          BERSERK ARCHIVE
        </p>

        <h1 className="text-4xl font-black uppercase md:text-6xl">
          Loading
        </h1>

        <div className="mt-8 h-1 w-56 overflow-hidden rounded-full bg-red-950/60">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-red-700 shadow-[0_0_25px_rgba(220,38,38,0.8)]" />
        </div>
      </div>
    </main>
  );
}