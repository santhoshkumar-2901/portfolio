import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { profile } from '../data/content'

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-content">
        <Reveal>
          <SectionLabel path="~/about" title="About" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-lg leading-relaxed text-muted dark:text-muted-dark">
            {profile.bio}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
