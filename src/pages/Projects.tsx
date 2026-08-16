import ProjectCard from '../components/ProjectCard'

const PROJECTS = [
  {
    title: 'Train Board',
    description:
      "A live departures board for Melbourne's train network — search any Metro or V/Line stop and see upcoming services grouped by line and direction, colour-coded to PTV's brand palette. Auto-refreshes every 30 seconds with light/dark theming and persisted state.",
    tech: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'TanStack Query', 'Cloudflare Pages Functions'],
    githubUrl: 'https://github.com/vxjdev/train-board',
    liveUrl: 'https://train-board.vxjdev.com/',
  },
  {
    title: 'Shopping List',
    description:
      'A shopping list app that estimates and compares grocery prices between Woolworths and Coles using the Gemini API, so you know where to shop before you go.',
    tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Gemini API'],
    githubUrl: 'https://github.com/vxjdev/list-app',
    liveUrl: 'https://shopping-list.vxjdev.com/',
  },
]

export default function Projects() {
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
        Personal Projects
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
        Things I've built<br />on my own time.
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
        A couple of things I've built in my spare time.
      </p>

      <div
        className="mt-14 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 opacity-0 animate-fade-up"
        style={{ animationFillMode: 'forwards', animationDelay: '700ms' }}
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </>
  )
}
