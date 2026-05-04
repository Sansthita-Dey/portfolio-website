import Container from './Container'
import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'
import Button from './Button'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section
      id="projects"
      className="section bg-gray-50/50 dark:bg-dark-surface/30"
      aria-labelledby="projects-heading"
    >
      <Container>
        <div className="mb-12">
          <SectionHeader
            label="Work"
            title={<span id="projects-heading">Projects</span>}
            subtitle="A showcase of AI/ML systems, enterprise software solutions, and full-stack development projects."
            className="mb-0"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <Button
            href="https://github.com/Sansthita-Dey"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            See All on GitHub
          </Button>
        </div>
      </Container>
    </section>
  )
}