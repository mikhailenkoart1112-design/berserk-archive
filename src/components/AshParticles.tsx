export default function AshParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 38 }).map((_, index) => (
        <span
          key={index}
          className="ash-particle"
          style={{
            left: `${(index * 37) % 100}%`,
            animationDelay: `${(index % 12) * 0.7}s`,
            animationDuration: `${8 + (index % 8)}s`,
          }}
        />
      ))}
    </div>
  );
}