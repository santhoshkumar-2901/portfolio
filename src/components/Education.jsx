import { GraduationCap } from 'lucide-react'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { education } from '../data/content'

export default function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-content">
        <Reveal>
          <SectionLabel path="~/education" title="Education" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex items-start gap-4 rounded-xl border border-line dark:border-line-dark bg-surface dark:bg-surface-dark p-6">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 dark:bg-accent-dark/10 text-accent dark:text-accent-dark">
              <GraduationCap size={18} />
            </span>
            <div>
              <h3 className="font-display text-base font-semibold text-ink dark:text-ink-dark">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm text-muted dark:text-muted-dark">
                {education.institution} · {education.location}
              </p>
              <p className="mt-1 font-mono text-xs text-muted dark:text-muted-dark">
                {education.duration}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
