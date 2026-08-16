import { Outlet } from 'react-router-dom'
import MonogramBackdrop from '../components/MonogramBackdrop'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function PageShell() {
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

      <MonogramBackdrop />
      <NavBar />

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 py-16 text-center">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
