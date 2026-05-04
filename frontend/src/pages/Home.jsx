import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Chatbot from '../components/Chatbot'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home({ theme, toggleTheme }) {
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        {/* <Chatbot /> */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
