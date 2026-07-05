import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import ProjectCard from './ProjectCard'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-content">
        <Reveal>
          <SectionLabel path="~/projects" title="Featured Projects" />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
