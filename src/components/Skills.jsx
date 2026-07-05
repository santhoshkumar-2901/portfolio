import { Code2, Database, Server, Wrench } from 'lucide-react'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { skills } from '../data/content'

const icons = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  'Tools & Version Control': Wrench,
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-content">
        <Reveal>
          <SectionLabel path="~/skills" title="Skills" />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {skills.map((group, i) => {
            const Icon = icons[group.group] ?? Code2
            return (
              <Reveal key={group.group} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-line dark:border-line-dark bg-surface dark:bg-surface-dark p-6 shadow-card transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:shadow-card-hover dark:hover:shadow-card-hover-dark">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 dark:bg-accent-dark/10 text-accent dark:text-accent-dark">
                      <Icon size={18} />
                    </span>
                    <h3 className="font-display text-base font-semibold text-ink dark:text-ink-dark">
                      {group.group}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-line dark:border-line-dark px-2.5 py-1 font-mono text-xs text-muted dark:text-muted-dark transition-colors hover:border-accent/50 dark:hover:border-accent-dark/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
