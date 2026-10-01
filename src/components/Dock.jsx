import { profile } from '../data.js'

const I = {
  home: 'M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5',
  pen: 'M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-8 9a8 8 0 0 1 16 0',
  mail: 'M3 5h18v14H3zM3 6l9 7 9-7',
  down: 'M12 3v12m0 0 4-4m-4 4-4-4M4 21h16',
}

function Btn({ icon, href, label, emoji }) {
  return (
    <a
      href={href}
      title={label}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl glass grid place-items-center hover:-translate-y-1.5 transition-transform"
    >
      {emoji ? (
        <span className="text-2xl">{emoji}</span>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d={I[icon]} />
        </svg>
      )}
      <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-ink text-paper text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </a>
  )
}

export default function Dock() {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="glass flex items-center gap-2 sm:gap-3 rounded-[26px] px-3 sm:px-4 py-2.5">
        <Btn icon="home" href="#top" label="home, sweet home" />
        <Btn icon="pen" href="#projects" label="certified bangers 🔥" />
        <Btn icon="user" href="#about" label="the lore 📖" />
        <Btn icon="mail" href="#contact" label="slide into my inbox" />
        <Btn icon="down" href={profile.resumeHref} label="Resume" />
        <div className="w-px h-8 bg-ink/10 mx-1" />
        <Btn emoji="👀" href="#work" label="spill the tea ☕" />
      </div>
    </nav>
  )
}
