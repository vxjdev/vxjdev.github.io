export default function MonogramBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      <span
        className="animate-breathe"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(280px, 40vw, 560px)',
          letterSpacing: '-0.05em',
          color: '#F0EEE9',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        VXJ
      </span>
    </div>
  )
}
