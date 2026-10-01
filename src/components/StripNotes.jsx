import Note from './Note.jsx'
import { stripNotes } from '../data.js'

export default function StripNotes() {
  return (
    <section id="work" className="py-14">
      <div className="max-w-6xl mx-auto px-5 flex flex-wrap items-center justify-center gap-8">
        {stripNotes.map((n, i) => (
          <Note key={i} note={n} />
        ))}
      </div>
    </section>
  )
}
