import { MotionConfig } from 'framer-motion'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CurrentLearning from './components/CurrentLearning'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink dark:focus:bg-ink-dark focus:px-4 focus:py-2 focus:text-bg dark:focus:text-bg-dark"
        >
          Skip to content
        </a>

        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <CurrentLearning />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  )
}
