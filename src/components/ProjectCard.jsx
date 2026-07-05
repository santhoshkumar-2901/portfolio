import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import Reveal from './Reveal'

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <motion.article
        whileHover={{ y: -3 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="group h-full overflow-hidden rounded-xl border border-line dark:border-line-dark bg-surface dark:bg-surface-dark shadow-card transition-shadow duration-300 ease-premium hover:shadow-card-hover dark:hover:shadow-card-hover-dark"
      >
        {/* Abstract project header — a generated visual identity per project, not a stock screenshot */}
        <div
          className="relative flex h-32 items-center justify-between overflow-hidden px-6"
          style={{
            background: project.featured
              ? 'linear-gradient(135deg, rgba(61,107,239,0.08), rgba(14,165,165,0.08))'
              : 'linear-gradient(135deg, rgba(14,165,165,0.08), rgba(61,107,239,0.05))',
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 text-line dark:text-line-dark opacity-60"
            style={{
              backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
              backgroundSize: '18px 18px',
              maskImage: 'linear-gradient(to bottom right, black, transparent 80%)',
              WebkitMaskImage: 'linear-gradient(to bottom right, black, transparent 80%)',
            }}
          />
          <span className="relative font-mono text-xs text-muted dark:text-muted-dark">
            {String(project.stack.length).padStart(2, '0')} technologies
          </span>
          <span className="relative font-display text-3xl font-semibold text-ink/10 dark:text-ink-dark/10">
            {project.title.slice(0, 2).toUpperCase()}
          </span>
        </div>

        <div className="p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              {project.featured && (
                <span className="mb-2 inline-block rounded-full bg-accent/10 dark:bg-accent-dark/10 px-2.5 py-0.5 font-mono text-xs text-accent dark:text-accent-dark">
                  Featured
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-ink dark:text-ink-dark">
                {project.title}
              </h3>
              <p className="mt-0.5 text-sm text-muted dark:text-muted-dark">
                {project.subtitle}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Live demo of ${project.title}`}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-muted dark:text-muted-dark transition-colors hover:bg-bg dark:hover:bg-bg-dark hover:text-accent dark:hover:text-accent-dark"
                >
                  <ArrowUpRight size={16} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`GitHub repository for ${project.title}`}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-muted dark:text-muted-dark transition-colors hover:bg-bg dark:hover:bg-bg-dark hover:text-accent dark:hover:text-accent-dark"
                >
                  <Github size={16} />
                </a>
              )}
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted dark:text-muted-dark">
            {project.description}
          </p>

          <ul className="mt-4 space-y-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-2.5 text-sm text-muted dark:text-muted-dark"
              >
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent dark:bg-accent-dark" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2 border-t border-line dark:border-line-dark pt-5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-bg dark:bg-bg-dark px-2.5 py-1 font-mono text-xs text-muted dark:text-muted-dark"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Reveal>
  )
}
