import { featuredProjects, caseStudies, profile } from '../data.js'
import SectionTitle from './SectionTitle.jsx'

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="max-w-6xl mx-auto px-5">
        <SectionTitle>Projects</SectionTitle>

        <div className="space-y-12">
          {featuredProjects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              data-reveal
              className={`${i % 2 ? 'sketch-alt' : 'sketch'} group block bg-white transition-transform hover:-translate-y-1`}
              style={{ rotate: i % 2 ? '0.3deg' : '-0.3deg' }}
            >
              <div className="rounded-[inherit] overflow-hidden grid lg:grid-cols-[minmax(260px,400px)_1fr]">
                <div className="relative min-h-[240px] lg:min-h-full overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.imgAlt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 serif font-extrabold text-white/90 text-5xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] select-none">
                    0{i + 1}
                  </span>
                </div>

                <div className="p-7 sm:p-10">
                  <span className="inline-block text-base tracking-[0.15em] uppercase text-[#e0484d] border-2 border-[#e0484d] rounded-lg px-3 py-0.5 mb-4">
                    {p.badge}
                  </span>
                  <h3 className="serif font-bold text-3xl sm:text-4xl group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <div className="text-ink/45 text-lg mb-3">{p.realName}</div>
                  <p className="text-xl leading-snug text-ink/85">{p.blurb}</p>
                  <p className="mt-4 text-xl text-accent font-bold">{p.punch}</p>
                  <div className="mt-5 flex flex-wrap gap-2 items-center">
                    {p.stack.map((s) => (
                      <span key={s} className="text-base bg-sticky-beige rounded-full px-3 py-1">{s}</span>
                    ))}
                    <span className="text-lg text-ink/60 ml-auto group-hover:translate-x-1 transition-transform">
                      repo ↗
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div data-reveal className="mt-14 text-center">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-2xl hover:text-accent transition-colors"
          >
            ✏️ View all projects <span className="script text-3xl">↗</span>
          </a>
        </div>

        {/* ---- Case studies ---- */}
        <div className="mt-28">
          <SectionTitle>Case Studies</SectionTitle>
          <p data-reveal className="text-center -mt-10 mb-14 text-xl text-ink/60 max-w-2xl mx-auto">
            Eleven business problems dressed up as datasets — churn, commuters, treadmills, movies and loans. Almost all live in one GitHub repo.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {caseStudies.map((c, i) => (
              <a
                key={i}
                href={c.link}
                target="_blank"
                rel="noreferrer"
                data-reveal
                className={`group bg-white overflow-hidden ${i % 2 ? 'sketch-alt' : 'sketch'} hover:-translate-y-1.5 transition-transform`}
                style={{ rotate: i % 3 === 0 ? '-0.5deg' : i % 3 === 1 ? '0.5deg' : '0deg' }}
              >
                <div className="h-44 overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="serif font-bold text-xl mb-3 group-hover:text-accent transition-colors">
                    {c.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {c.tags.map((t) => (
                      <span key={t} className="text-sm bg-sticky-aqua/70 rounded-full px-2.5 py-0.5">{t}</span>
                    ))}
                  </div>
                  <p className="text-lg text-ink/75 leading-snug">{c.desc}</p>
                  <span className="inline-block mt-3 text-lg text-accent font-bold group-hover:translate-x-1 transition-transform">
                    Read more →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
