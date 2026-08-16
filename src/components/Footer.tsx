import { SOCIAL_LINKS } from '../data/socialLinks'

export default function Footer() {
  return (
    <footer
      className="relative z-10 flex flex-col items-center gap-5 px-8 py-10 text-center opacity-0 animate-fade-up"
      style={{ animationFillMode: 'forwards', animationDelay: '900ms' }}
    >
      <div className="flex items-center gap-4">
        {SOCIAL_LINKS.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="text-white/30 hover:text-[#818CF8] transition-colors duration-200 focus:outline-none focus:text-[#6366F1]"
          >
            {icon}
          </a>
        ))}
      </div>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: '12px',
          color: 'rgba(240,238,233,0.2)',
          letterSpacing: '0.02em',
        }}
      >
        © {new Date().getFullYear()} Vithuran Jeyasingham Dev · vxjdev.com
      </p>
    </footer>
  )
}
