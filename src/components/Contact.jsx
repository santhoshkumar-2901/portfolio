import { Github, Linkedin, Mail } from 'lucide-react'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-content">
        <Reveal>
          <SectionLabel path="~/contact" title="Get in Touch" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="max-w-lg text-lg text-muted dark:text-muted-dark">
            I'm currently open to full-stack developer roles. The fastest way to reach
            me is by email.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-ink dark:bg-ink-dark px-5 py-2.5 text-sm font-medium text-bg dark:text-bg-dark shadow-card transition-all duration-300 ease-premium hover:shadow-card-hover dark:hover:shadow-card-hover-dark"
            >
              <Mail size={15} />
              {profile.email}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line dark:border-line-dark text-ink dark:text-ink-dark hover:border-ink/40 dark:hover:border-ink-dark/40 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line dark:border-line-dark text-ink dark:text-ink-dark hover:border-ink/40 dark:hover:border-ink-dark/40 transition-colors"
            >
              <Github size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
