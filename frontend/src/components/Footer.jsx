import Container from './Container'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 dark:border-dark-border bg-white dark:bg-dark-surface">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8">
          <div className="flex items-center gap-3">
            <span className="font-heading font-bold text-lg bg-gradient-accent bg-clip-text text-transparent">
              &lt;Sansthita /&gt;
            </span>
            <span className="text-sm text-gray-400 dark:text-gray-500">
              © {year} Sansthita Dey. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-400 dark:text-gray-500">
            <span>Built with</span>
            <span className="text-red-400 mx-1" aria-label="love">♥</span>
            <span>using React + Tailwind</span>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-5">
              {['#projects', '#skills', '#contact'].map((href, i) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary
                      transition-colors duration-200 capitalize"
                  >
                    {href.replace('#', '')}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
