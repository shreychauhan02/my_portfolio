import Dock from './components/Dock.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import StripNotes from './components/StripNotes.jsx'
import Metrics from './components/Metrics.jsx'
import Projects from './components/Projects.jsx'
import MoreWork from './components/MoreWork.jsx'
import Contact from './components/Contact.jsx'
import { useRevealGroup } from './hooks/useReveal.js'
import { profile } from './data.js'

export default function App() {
  const root = useRevealGroup()
  return (
    <div ref={root} className="pb-24">
      <Dock />
      <main>
        <Hero />
        <About />
        <StripNotes />
        <Metrics />
        <Projects />
        <MoreWork />
        <Contact />
      </main>
      <footer className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-end gap-2 text-xl pb-6">
        <span className="serif font-bold">{profile.name}</span>
      </footer>
    </div>
  )
}
