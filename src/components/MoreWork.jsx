import { moreWork } from '../data.js'
import SectionTitle from './SectionTitle.jsx'

const tints = ['bg-sticky-cream', 'bg-sticky-aqua', 'bg-sticky-pink', 'bg-sticky-green', 'bg-sticky-beige', 'bg-sticky-violet']

export default function MoreWork() {
  return (
    <section className="pb-24">
      <div className="max-w-6xl mx-auto px-5">
        <SectionTitle>The long tail</SectionTitle>
        <p data-reveal className="text-center -mt-8 mb-12 text-xl text-ink/60">
          Scrapers, classifiers & side quests — all still alive on GitHub.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {moreWork.map((w, i) => (
            <a
              key={i}
              href={w.link}
              target="_blank"
              rel="noreferrer"
              data-reveal
              className={`sketch ${tints[i % tints.length]} p-5 hover:-translate-y-1.5 transition-transform`}
              style={{ rotate: i % 2 ? '0.8deg' : '-0.8deg' }}
            >
              <div className="serif font-bold text-xl mb-1">
                {w.name} ↗
              </div>
              <div className="text-lg text-ink/70 leading-snug">{w.desc}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
