import Button from './Button'
import Container from './Container'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden
        bg-light-bg dark:bg-dark-bg"
      aria-label="Hero section"
    >
      {/* Background blobs */}
      <div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full opacity-10 dark:opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6366F1, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full opacity-10 dark:opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #22D3EE, transparent 70%)' }}
        aria-hidden="true"
      />

      <Container className="relative w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center py-20 md:py-0">
          {/* Left — Hero Content */}
          <div className="animate-slide-up">
            <p
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
              text-xs font-semibold tracking-wide uppercase mb-6
              bg-primary/10 text-primary border border-primary/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Open to internships & collaborations
            </p>

            <h1
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold
              leading-tight mb-4 text-gray-900 dark:text-gray-50"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Sansthita Dey
              </span>
            </h1>

            <p className="text-lg sm:text-xl font-medium mb-4 text-gray-600 dark:text-gray-300">
              AI/ML Developer | Full Stack Engineer
            </p>

            <p
              className="text-base text-gray-500 dark:text-gray-400
              max-w-lg mb-8 leading-relaxed"
            >
              I design AI-powered systems, full-stack applications, and data-driven
              digital solutions that combine machine learning, intelligent automation,
              and impactful user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button href="#projects" variant="primary" size="lg">
                View Projects
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>

              <Button
                href="/Resume_Final.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
              >
                View Resume
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12">
              {[
                { value: '8+', label: 'Projects Built' },
                { value: '2+', label: 'Years Coding' },
                { value: '3+', label: 'AI/ML Systems' },
              ].map(stat => (
                <div key={stat.label}>
                  <p className="font-heading text-2xl font-bold text-gray-900 dark:text-gray-50">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Skill Visual */}
          <div className="hidden md:flex items-center justify-center animate-fade-in">
            <div className="relative w-80 h-80">
              {/* Outer Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border border-secondary/10 animate-[spin_15s_linear_infinite_reverse]" />

              {/* Central Orb */}
              <div
                className="absolute inset-12 rounded-full shadow-glow animate-float"
                style={{
                  background: 'linear-gradient(135deg, #6366F1, #22D3EE)',
                }}
              />

              {/* Floating Skill Chips */}
              {[
                { label: 'GenAI', pos: 'top-4 -right-6' },
                { label: 'Full Stack', pos: 'top-4 -left-6' },
                { label: 'Computer Vision', pos: 'bottom-12 -left-14' },
                { label: 'AI Automation', pos: 'bottom-8 -right-14' },
              ].map(chip => (
                <div
                  key={chip.label}
                  className={`absolute ${chip.pos} chip
                    bg-white dark:bg-dark-surface
                    text-gray-700 dark:text-gray-200
                    border border-gray-200 dark:border-dark-border
                    shadow-card px-3 py-1.5 text-xs font-medium rounded-lg`}
                >
                  {chip.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}