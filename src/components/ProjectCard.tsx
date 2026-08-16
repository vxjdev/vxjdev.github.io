type Project = {
  title: string
  description: string
  tech: string[]
  githubUrl: string
  liveUrl?: string
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  )
}

export default function ProjectCard({ title, description, tech, githubUrl, liveUrl }: Project) {
  return (
    <div
      className="flex flex-col rounded-xl border border-white/10 p-6 text-left"
      style={{ background: 'rgba(240,238,233,0.02)' }}
    >
      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: '17px',
          color: '#F0EEE9',
        }}
      >
        {title}
      </p>

      <p
        className="mt-2.5"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: '13.5px',
          lineHeight: 1.65,
          color: 'rgba(240,238,233,0.5)',
        }}
      >
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 px-2.5 py-1"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '11px',
              color: '#818CF8',
              letterSpacing: '0.01em',
              background: 'rgba(99,102,241,0.06)',
            }}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4 border-t border-white/5 pt-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-white/50 transition-colors duration-200 hover:text-[#818CF8]"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: '12.5px' }}
        >
          <GithubIcon />
          Source
        </a>

        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/50 transition-colors duration-200 hover:text-[#818CF8]"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: '12.5px' }}
          >
            <ExternalLinkIcon />
            Live site
          </a>
        ) : (
          <span
            className="flex items-center gap-1.5 text-white/20"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: '12.5px' }}
          >
            <ExternalLinkIcon />
            Live site coming soon
          </span>
        )}
      </div>
    </div>
  )
}
