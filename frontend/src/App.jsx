import { useTheme } from './hooks/useTheme'
import Home from './pages/Home'
import './styles/globals.css'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Home theme={theme} toggleTheme={toggleTheme} />
    </div>
  )
}
