import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-line dark:border-line-dark px-6 py-8">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-muted dark:text-muted-dark">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-6">
          <a
            href="#top"
            className="text-xs text-muted dark:text-muted-dark hover:text-ink dark:hover:text-ink-dark transition-colors"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
