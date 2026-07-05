import { BookOpen } from 'lucide-react'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { currentLearning } from '../data/content'

export default function CurrentLearning() {
  return (
    <section id="learning" className="px-6 py-24">
      <div className="mx-auto max-w-content">
        <Reveal>
          <SectionLabel path="~/currently-learning" title="What I'm Exploring Next" />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {currentLearning.map((entry, i) => (
            <Reveal key={entry.title} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-line dark:border-line-dark bg-surface dark:bg-surface-dark p-6 shadow-card transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:shadow-card-hover dark:hover:shadow-card-hover-dark">
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 dark:bg-accent-dark/10 text-accent dark:text-accent-dark">
                  <BookOpen size={18} />
                </span>
                <h3 className="font-display text-base font-semibold text-ink dark:text-ink-dark">
                  {entry.title}
                </h3>
                <p className="mt-2 text-sm text-muted dark:text-muted-dark">
                  {entry.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
