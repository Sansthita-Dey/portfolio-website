import Container from './Container'
import SectionHeader from './SectionHeader'
import { skills } from '../data/skills'

const categoryColors = {
  'Programming Languages':
    'bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-700/40',

  'AI / Machine Learning':
    'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700/40',

  'Frameworks & Web Development':
    'bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-700/40',

  'Databases':
    'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/40',

  'GenAI / LLM Tools':
    'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-700/40',

  'Developer Tools':
    'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700/40',

  'CS Fundamentals':
    'bg-slate-50 dark:bg-slate-900/20 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/40',
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section bg-light-bg dark:bg-dark-bg"
      aria-labelledby="skills-heading"
    >
      <Container>
        <SectionHeader
          label="Technical Expertise"
          title={<span id="skills-heading">Skills & Technologies</span>}
          subtitle="Core technical proficiencies across software engineering, AI/ML development, full-stack systems, and modern developer tooling."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map(group => (
            <div
              key={group.category}
              className="rounded-2xl border p-6 bg-white dark:bg-dark-surface
                border-gray-200 dark:border-dark-border
                hover:border-primary/30 dark:hover:border-primary/30
                transition-all duration-300 hover:shadow-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-2xl"
                  role="img"
                  aria-label={group.category}
                >
                  {group.icon}
                </span>

                <h3 className="font-heading font-semibold text-gray-900 dark:text-gray-100">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map(skill => (
                  <span
                    key={skill}
                    className={`chip border text-xs font-medium ${
                      categoryColors[group.category] ??
                      'bg-gray-100 dark:bg-dark-bg text-gray-600 dark:text-gray-400 border-gray-200 dark:border-dark-border'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}