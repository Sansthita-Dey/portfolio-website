import Button from './Button'

export default function ProjectCard({
  title,
  description,
  tech,
  links,
}) {
  return (
    <article
      className="relative flex flex-col rounded-2xl border transition-all duration-300
        bg-white dark:bg-dark-surface
        border-gray-200 dark:border-dark-border
        hover:-translate-y-1.5 hover:shadow-card-hover hover:border-primary/40
        dark:hover:border-primary/40 shadow-card group"
    >
      <div className="flex flex-col flex-1 p-6">
        {/* Project Icon */}
        <div
          className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center
          bg-gradient-accent shadow-glow/30"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>

        {/* Project Title */}
        <h3
          className="font-heading text-lg font-semibold mb-2
          text-gray-900 dark:text-gray-100
          group-hover:text-primary dark:group-hover:text-primary
          transition-colors duration-200"
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-sm text-gray-500 dark:text-gray-400
          leading-relaxed flex-1 mb-5"
        >
          {description}
        </p>

        {/* Tech Stack */}
        <div
          className="flex flex-wrap gap-1.5 mb-6"
          aria-label="Tech stack"
        >
          {tech.map(tag => (
            <span
              key={tag}
              className="chip bg-gray-100 dark:bg-dark-bg
                text-gray-600 dark:text-gray-400
                border border-gray-200 dark:border-dark-border
                text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-auto">
          {/* Live Demo Button */}
          <Button
            href={links.demo || '#'}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            variant="primary"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Live Demo
          </Button>

          {/* GitHub Button */}
          {links.github && (
            <Button
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              variant="outline"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}