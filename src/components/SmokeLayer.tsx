export default function SmokeLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="smoke smoke-one" />
      <div className="smoke smoke-two" />
      <div className="smoke smoke-three" />
    </div>
  );
}