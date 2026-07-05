import { AnimatePresence, motion } from 'framer-motion'

export default function MobileMenu({ open, onClose, links, activeId, resumeUrl }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden border-b border-line dark:border-line-dark bg-surface/95 dark:bg-surface-dark/95 backdrop-blur-md md:hidden"
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => {
              const isActive = activeId === link.href.replace('#', '')
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={onClose}
                    aria-current={isActive ? 'true' : undefined}
                    className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-accent dark:text-accent-dark bg-accent/5 dark:bg-accent-dark/5'
                        : 'text-muted dark:text-muted-dark hover:text-ink dark:hover:text-ink-dark'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
            <li>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-muted dark:text-muted-dark hover:text-ink dark:hover:text-ink-dark transition-colors"
              >
                Resume
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
