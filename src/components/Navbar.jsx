import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import MobileMenu from './MobileMenu'
import { useActiveSection } from '../hooks/useActiveSection'
import { profile } from '../data/content'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = links.map((l) => l.href.replace('#', ''))

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? 'bg-surface/80 dark:bg-surface-dark/70 backdrop-blur-md border-b border-line dark:border-line-dark'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-content items-center justify-between px-6 py-4"
      >
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-tight text-ink dark:text-ink-dark"
        >
          Santhosh Kumar S
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeId === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className="relative px-3 py-2 text-sm text-muted dark:text-muted-dark hover:text-ink dark:hover:text-ink-dark transition-colors"
                >
                  <span className={isActive ? 'text-ink dark:text-ink-dark' : ''}>
                    {link.label}
                  </span>
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-[1px] h-[1.5px] rounded-full bg-accent dark:bg-accent-dark" />
                  )}
                </a>
              </li>
            )
          })}
          <li>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm text-muted dark:text-muted-dark hover:text-ink dark:hover:text-ink-dark transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden text-sm font-medium text-ink dark:text-ink-dark border border-line dark:border-line-dark rounded-lg px-4 py-1.5 transition-colors hover:border-ink/40 dark:hover:border-ink-dark/40 sm:block"
          >
            Get in touch
          </a>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line dark:border-line-dark text-ink dark:text-ink-dark hover:border-ink/40 dark:hover:border-ink-dark/40 transition-colors md:hidden"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={links}
        activeId={activeId}
        resumeUrl={profile.resumeUrl}
      />
    </header>
  )
}
