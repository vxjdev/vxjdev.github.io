import ProjectCard from '../components/ProjectCard'
import ContactSection from '../components/ContactSection'

const PARTNER_PROJECTS = [
  {
    title: 'Articulate Ah',
    description:
      'A practice website for Articulate Ah, a speech pathology private practice — covering services like articulation, fluency, language development and literacy, NDIS and Medicare-funded therapy, telehealth, preschool screening, and clinical supervision.',
    tech: ['React 18', 'TypeScript', 'Vite', 'React Router', 'Tailwind CSS', 'Framer Motion', 'Docker + Nginx'],
    githubUrl: 'https://github.com/vxjdev/articulate-ah',
    liveUrl: 'https://articulate-ah.pages.dev/',
  },
]

export default function Partners() {
  return (
    <>
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
        Business Partners
      </p>

      <h1
        className="mt-5 opacity-0 animate-fade-up"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(32px, 5vw, 56px)',
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          color: '#F0EEE9',
          animationFillMode: 'forwards',
          animationDelay: '300ms',
        }}
      >
        Software built for<br />real businesses.
      </h1>

      <p
        className="mt-6 opacity-0 animate-fade-up"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: 'clamp(15px, 1.8vw, 18px)',
          lineHeight: 1.7,
          color: 'rgba(240,238,233,0.5)',
          maxWidth: '480px',
          animationFillMode: 'forwards',
          animationDelay: '500ms',
        }}
      >
        Applications delivered for business partners.
      </p>

      <div
        className="mt-14 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 opacity-0 animate-fade-up"
        style={{ animationFillMode: 'forwards', animationDelay: '700ms' }}
      >
        {PARTNER_PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <ContactSection />
    </>
  )
}
