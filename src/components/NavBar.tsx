import { NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Partners', to: '/partners' },
]

export default function NavBar() {
  return (
    <header
      className="relative z-10 flex flex-wrap items-center justify-between gap-4 px-8 py-7 opacity-0 animate-fade-up"
      style={{ animationFillMode: 'forwards', animationDelay: '100ms' }}
    >
      <NavLink to="/" className="flex items-center gap-2.5">
        <div
          className="w-7 h-7 rounded-md flex items-center justify-center"
          style={{ background: '#6366F1' }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '11px',
              color: '#fff',
              letterSpacing: '-0.02em',
            }}
          >
            vxj
          </span>
        </div>
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: '14px',
            color: '#F0EEE9',
            letterSpacing: '-0.01em',
          }}
        >
          vxjdev
        </span>
      </NavLink>

      <nav className="flex items-center gap-6">
        {NAV_LINKS.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `transition-colors duration-200 focus:outline-none ${
                isActive ? 'text-[#F0EEE9]' : 'text-white/40 hover:text-[#818CF8]'
              }`
            }
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '13px',
              letterSpacing: '-0.01em',
            }}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10"
        style={{ background: 'rgba(99,102,241,0.1)' }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: '#6366F1' }}
        />
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: '12px',
            color: '#818CF8',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          In development
        </span>
      </div>
    </header>
  )
}
