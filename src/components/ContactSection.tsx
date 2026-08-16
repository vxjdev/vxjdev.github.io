import { SOCIAL_LINKS } from '../data/socialLinks'

export default function ContactSection() {
  return (
    <div
      className="mt-16 flex w-full max-w-3xl flex-col items-center border-t border-white/5 pt-14 opacity-0 animate-fade-up"
      style={{ animationFillMode: 'forwards', animationDelay: '900ms' }}
    >
      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 500,
          fontSize: '12px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#6366F1',
        }}
      >
        Get in touch
      </p>

      <h2
        className="mt-4"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(24px, 3.4vw, 36px)',
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          color: '#F0EEE9',
        }}
      >
        Let's see what we can<br />build together.
      </h2>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {SOCIAL_LINKS.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-white/70 transition-colors duration-200 hover:border-[#6366F1]/50 hover:text-[#818CF8]"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '13px',
            }}
          >
            {icon}
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}
