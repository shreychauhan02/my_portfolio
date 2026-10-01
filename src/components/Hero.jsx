import { profile, heroNotes } from '../data.js'
import Note from './Note.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* scattered draggable notes — desktop gutters only */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <div className="pointer-events-auto contents">
          {heroNotes.map((n, i) => (
            <Note key={i} note={n} absolute />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-5 py-28 max-w-2xl">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-sticky-cream border border-ink/10 rounded-full px-5 py-2 text-lg shadow-sm hover:-translate-y-0.5 transition-transform mb-8"
        >
          <span className="text-2xl leading-none">👀</span> Checkout my first shipped models!
        </a>

        <h1 className="serif font-extrabold text-7xl sm:text-8xl leading-[1.02]">
          hey, I'm Shrey
        </h1>

        <p className="mt-6 text-xl tracking-[0.08em] uppercase">{profile.statusLine}</p>

        <p className="mt-6 text-xl text-ink/75 leading-relaxed">
          {profile.heroBlurb}
        </p>

        {/* mobile notes */}
        <div className="lg:hidden mt-10 flex flex-wrap justify-center gap-5">
          {heroNotes.slice(0, 3).map((n, i) => (
            <Note key={i} note={{ ...n, rot: i % 2 ? 3 : -3 }} />
          ))}
        </div>
      </div>
    </section>
  )
}
