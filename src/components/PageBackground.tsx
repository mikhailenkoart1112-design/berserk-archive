import AshParticles from "@/components/AshParticles";
import SmokeLayer from "@/components/SmokeLayer";

export default function PageBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#230000_0%,#050000_45%,#000_100%)]" />
      <SmokeLayer />
      <AshParticles />
    </>
  );
}