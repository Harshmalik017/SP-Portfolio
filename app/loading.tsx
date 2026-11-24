export default function Loading() {
  return (
    <section className="route-loading glass-card" aria-live="polite" aria-busy="true">
      <span className="loading-mark" aria-hidden="true">SP</span>
      <p>Loading portfolio…</p>
    </section>
  );
}
