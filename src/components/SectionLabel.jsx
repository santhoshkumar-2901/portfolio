export default function SectionLabel({ path, title }) {
  return (
    <div className="mb-10">
      <div className="mb-5 h-px w-full bg-line dark:bg-line-dark" />
      <p className="font-mono text-sm text-accent dark:text-accent-dark">{path}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink dark:text-ink-dark sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}
