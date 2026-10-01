import { profile, socials, toolkit, impact, siUrl, toolIcon } from '../data.js'
import SectionTitle from './SectionTitle.jsx'
import Note from './Note.jsx'

const sideNotes = [
  { text: 'Turns chai into classifiers ☕ 9:1 ratio', color: 'green', rot: -4 },
  { text: 'Software engineer in spirit. ML is the side quest.', color: 'cream', rot: 3 },
  { text: 'My models have better recall than my group chat', color: 'pink', rot: -2 },
  { text: 'Yes, the notes move. No, not like my grades 📈', color: 'aqua', rot: 4 },
]

function ToolCard({ t }) {
  return (
    <div className="sketch bg-white rounded-[18px] p-3 flex flex-col items-center gap-2 hover:-translate-y-1 hover:shadow-soft transition-all">
      {t.icon ? (
        <img src={toolIcon(t.icon)} alt="" className="w-9 h-9 object-contain" loading="lazy" />
      ) : (
        <span
          className="w-9 h-9 rounded-lg grid place-items-center font-bold text-lg"
          style={{ background: t.tint || '#faefcc' }}
        >
          {t.letter}
        </span>
      )}
      <span className="text-base leading-none text-center">{t.name}</span>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="max-w-6xl mx-auto px-5">
        <SectionTitle>About</SectionTitle>

        <div className="grid lg:grid-cols-[300px_1fr] gap-14">
          {/* left rail: avatar + yours truly + notes + socials */}
          <div>
            <div data-reveal className="flex flex-col items-center">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-soft"
              />
              <svg viewBox="0 0 120 60" className="w-28 -mt-2 text-ink" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M95 8 C 60 45, 40 48, 14 34" />
                <path d="M22 30 L 13 34 L 20 41" />
              </svg>
              <span className="script text-3xl -mt-1">Yours Truly</span>
            </div>

            <div data-reveal className="mt-8 space-y-5">
              {sideNotes.map((n, i) => (
                <div key={i} className="flex" style={{ paddingLeft: `${(i % 3) * 28}px` }}>
                  <Note note={n} />
                </div>
              ))}
            </div>

            <h3 data-reveal className="serif font-bold text-2xl text-accent mt-12 mb-4">
              Stalk Me Here
            </h3>
            <div data-reveal className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target={s.url.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  title={s.name}
                  className="group w-12 h-12 rounded-full border-2 border-ink grid place-items-center hover:bg-ink hover:text-white transition-colors"
                >
                  <img
                    src={siUrl(s.si)}
                    alt={s.name}
                    className="w-5 h-5 [filter:invert(15%)] group-hover:[filter:invert(100%)] transition-[filter]"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* right: impact */}
          <div>
            <h3 data-reveal className="serif font-bold text-2xl text-[#22a558] mb-6">
              My Impact So Far
            </h3>
            <div className="space-y-6">
              {impact.map((c, i) => (
                <div key={i} data-reveal className={i % 2 ? 'sketch-alt' : 'sketch'} style={{ rotate: i % 2 ? '0.4deg' : '-0.4deg' }}>
                  <div className="bg-white rounded-[inherit] p-6 sm:p-8">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-2xl">{c.tag}</span>
                      <h4 className="serif font-bold text-xl">{c.org}</h4>
                    </div>
                    <div className="mt-1 text-lg">
                      {c.role} <span className="text-ink/45">· {c.when}</span>
                    </div>
                    <ul className="mt-3 space-y-1.5 text-lg text-ink/80 list-disc pl-5 marker:text-accent">
                      {c.lines.map((l, j) => (
                        <li key={j}>{l}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <a
              data-reveal
              href={profile.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-10 bg-ink text-white px-9 py-3.5 rounded-full text-lg hover:bg-accent transition-colors"
            >
              Download Resume ↓
            </a>
          </div>
        </div>

        {/* Tool Kit — full width so it never looks stranded */}
        <div className="mt-20">
          <h3 data-reveal className="serif font-bold text-2xl text-[#e0484d] mb-6 text-center">
            Tool Kit
          </h3>
          <div data-reveal className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {toolkit.map((t) => (
              <ToolCard key={t.name} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
