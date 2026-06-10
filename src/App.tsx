import { useEffect, useState } from 'react'

// ─── Animated monogram backdrop ───────────────────────────────────────────────
function MonogramBackdrop() {
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

// ─── Thin top bar ──────────────────────────────────────────────────────────────
function TopBar() {
  return (
    <header
      className="relative z-10 flex items-center justify-between px-8 py-7 opacity-0 animate-fade-up"
      style={{ animationFillMode: 'forwards', animationDelay: '100ms' }}
    >
      <div className="flex items-center gap-2.5">
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
      </div>

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

// ─── Divider line ──────────────────────────────────────────────────────────────
function Divider() {
  return (
    <div
      className="w-8 h-px my-8 opacity-0 animate-fade-up"
      style={{
        background: '#6366F1',
        animationFillMode: 'forwards',
        animationDelay: '500ms',
      }}
    />
  )
}

// ─── Social links ──────────────────────────────────────────────────────────────
function SocialLinks() {
  const links = [
    {
      label: 'GitHub',
      href: 'https://github.com',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: 'Email',
      href: 'mailto:vxjdev@gmail.com',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M2 7l10 7 10-7" />
        </svg>
      ),
    },
  ]

  return (
    <div
      className="flex items-center gap-4 opacity-0 animate-fade-up"
      style={{ animationFillMode: 'forwards', animationDelay: '900ms' }}
    >
      {links.map(({ label, href, icon }) => (
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
  )
}

// ─── Main page ─────────────────────────────────────────────────────────────────
export default function App() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: '#0A0F1E' }}>
      {/* Subtle radial glow at centre */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99,102,241,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Animated monogram backdrop */}
      <MonogramBackdrop />

      {/* Top bar */}
      <TopBar />

      {/* Main content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 py-16 text-center">

        {/* Eyebrow */}
        <p
          className="opacity-0 animate-fade-up"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: '12px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#6366F1',
            animationFillMode: 'forwards',
            animationDelay: '200ms',
          }}
        >
          Vithuran Jeyasingham Dev
        </p>

        {/* Headline */}
        <h1
          className="mt-5 opacity-0 animate-fade-up"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(36px, 6vw, 72px)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: '#F0EEE9',
            maxWidth: '640px',
            animationFillMode: 'forwards',
            animationDelay: '300ms',
          }}
        >
          Something new<br />
          is being built.
        </h1>

        {/* Sub-copy */}
        <p
          className="mt-6 opacity-0 animate-fade-up"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: 'clamp(15px, 1.8vw, 18px)',
            lineHeight: 1.7,
            color: 'rgba(240,238,233,0.5)',
            maxWidth: '420px',
            animationFillMode: 'forwards',
            animationDelay: '500ms',
          }}
        >
          A new developer org is taking shape. Feel free to follow my socials below and check in again soon!
        </p>

        <Divider />

        {/* Social links */}
        <div className="mt-12">
          <SocialLinks />
        </div>
      </main>

      {/* Footer */}
      <footer
        className="relative z-10 px-8 py-6 text-center opacity-0 animate-fade-up"
        style={{ animationFillMode: 'forwards', animationDelay: '900ms' }}
      >
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
    </div>
  )
}
