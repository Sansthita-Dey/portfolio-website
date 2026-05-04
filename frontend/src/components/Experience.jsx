import Container from './Container'
import SectionHeader from './SectionHeader'

const experiences = [
  {
    id: 1,
    role: 'IT Intern | Full Stack Developer',
    company: 'Tata Steel',
    period: 'May 2025 — June 2026',
    type: 'Internship',
    description:
      'Built and deployed a full-stack enterprise web platform integrating secure authentication, MongoDB-backed product catalog systems, AI-powered RAG chatbot functionality, and scalable CRUD workflows for digital product lifecycle management.',
    highlights: [
      'Engineered full-stack web application with interactive frontend, backend APIs, and MongoDB integration',
      'Implemented secure login/signup authentication architecture',
      'Integrated RAG-powered chatbot for intelligent product search and customer interaction',
      'Developed product upload systems with image handling and dynamic catalog management',
      'Enabled full CRUD operations for scalable product lifecycle workflows',
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="section bg-gray-50/50 dark:bg-dark-surface/30"
      aria-labelledby="experience-heading"
    >
      <Container>
        <SectionHeader
          label="Professional Journey"
          title={<span id="experience-heading">Experience</span>}
          subtitle="Enterprise software development experience delivering scalable digital transformation solutions."
        />

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px bg-gray-200 dark:bg-dark-border hidden md:block"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8">
            {experiences.map(exp => (
              <div key={exp.id} className="relative md:pl-16 group">
                {/* Timeline dot */}
                <div
                  className="absolute hidden md:flex items-center justify-center
                    left-0 top-0 w-10 h-10 rounded-full
                    bg-white dark:bg-dark-surface
                    border-2 border-gray-200 dark:border-dark-border
                    group-hover:border-primary dark:group-hover:border-primary
                    transition-colors duration-300 z-10"
                  aria-hidden="true"
                >
                  <span className="w-2 h-2 rounded-full bg-primary" />
                </div>

                {/* Experience Card */}
                <div
                  className="rounded-2xl border p-6 bg-white dark:bg-dark-surface
                  border-gray-200 dark:border-dark-border
                  hover:border-primary/30 dark:hover:border-primary/30
                  hover:shadow-card transition-all duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-heading font-semibold text-gray-900 dark:text-gray-100 text-lg">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium text-sm mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className="text-sm text-gray-400 dark:text-gray-500">
                        {exp.period}
                      </span>
                      <span className="chip bg-primary/10 text-primary border border-primary/20 text-xs">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5">
                    {exp.highlights.map((hl, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <svg
                          className="w-4 h-4 mt-0.5 text-primary shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {hl}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/Tata Steel Internship Certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-primary hover:underline"
                  >
                    View Internship Certificate
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 3h7m0 0v7m0-7L10 14"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 5v14h14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}