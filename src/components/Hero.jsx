import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/content'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* structured dot-grid, fading toward the edges — an engineering-drawing texture rather than a decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 text-line dark:text-line-dark"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage:
            'radial-gradient(ellipse 65% 55% at 18% 22%, black 0%, transparent 72%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 65% 55% at 18% 22%, black 0%, transparent 72%)',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-content"
      >
        <motion.p
          variants={item}
          className="mb-5 font-mono text-sm text-accent dark:text-accent-dark"
        >
          ~/{profile.role.toLowerCase().replace(/\s+/g, '-')}
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight text-ink dark:text-ink-dark sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg text-muted dark:text-muted-dark sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-ink dark:bg-ink-dark px-5 py-2.5 text-sm font-medium text-bg dark:text-bg-dark shadow-card transition-all duration-300 ease-premium hover:shadow-card-hover dark:hover:shadow-card-hover-dark"
          >
            View Projects
            <ArrowRight
              size={15}
              className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5"
            />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-line dark:border-line-dark px-5 py-2.5 text-sm font-medium text-ink dark:text-ink-dark transition-colors duration-300 hover:border-ink/40 dark:hover:border-ink-dark/40 hover:bg-surface dark:hover:bg-surface-dark"
          >
            <Download size={15} />
            View Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-line dark:border-line-dark px-5 py-2.5 text-sm font-medium text-ink dark:text-ink-dark transition-colors duration-300 hover:border-ink/40 dark:hover:border-ink-dark/40 hover:bg-surface dark:hover:bg-surface-dark"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div variants={item} className="-ml-3 mt-12 flex items-center gap-1">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email Santhosh Kumar S"
            className="flex h-11 w-11 items-center justify-center rounded-full text-muted dark:text-muted-dark hover:text-ink dark:hover:text-ink-dark transition-colors"
          >
            <Mail size={20} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="flex h-11 w-11 items-center justify-center rounded-full text-muted dark:text-muted-dark hover:text-ink dark:hover:text-ink-dark transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="flex h-11 w-11 items-center justify-center rounded-full text-muted dark:text-muted-dark hover:text-ink dark:hover:text-ink-dark transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
