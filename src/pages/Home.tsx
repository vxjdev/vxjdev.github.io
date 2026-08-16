import { Link } from 'react-router-dom'
import TechStackTicker from '../components/TechStackTicker'

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

export default function Home() {
  return (
    <>
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

      {/* Headline — the typewriter word is the main focus */}
      <h1
        className="mt-5 opacity-0 animate-fade-up"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(40px, 7vw, 84px)',
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          color: '#F0EEE9',
          maxWidth: '720px',
          minHeight: 'clamp(96px, 15.4vw, 185px)',
          animationFillMode: 'forwards',
          animationDelay: '300ms',
        }}
      >
        Expertise in<br />
        <TechStackTicker />
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
          maxWidth: '540px',
          animationFillMode: 'forwards',
          animationDelay: '500ms',
        }}
      >
        Hi there, my name is Vithuran Jeyasingham. I'm a senior software
        engineer, developing full stack solutions. This is my one man shop
        where I build and showcase applications. Have a look around and feel
        free to get in touch.
      </p>

      <Divider />

      {/* Page links */}
      <div
        className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-up"
        style={{ animationFillMode: 'forwards', animationDelay: '900ms' }}
      >
        <Link
          to="/projects"
          className="rounded-full border border-white/10 px-5 py-2.5 transition-colors duration-200 hover:border-[#6366F1]/50 hover:text-[#818CF8]"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: '13px',
            color: 'rgba(240,238,233,0.7)',
          }}
        >
          Personal Projects
        </Link>
        <Link
          to="/partners"
          className="rounded-full border border-white/10 px-5 py-2.5 transition-colors duration-200 hover:border-[#6366F1]/50 hover:text-[#818CF8]"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: '13px',
            color: 'rgba(240,238,233,0.7)',
          }}
        >
          Business Partners
        </Link>
      </div>
    </>
  )
}
