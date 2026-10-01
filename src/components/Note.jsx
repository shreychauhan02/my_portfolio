import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { iconUrl } from '../data.js'

gsap.registerPlugin(Draggable)

const colorClass = {
  cream: 'bg-sticky-cream',
  aqua: 'bg-sticky-aqua',
  pink: 'bg-sticky-pink',
  green: 'bg-sticky-green',
  beige: 'bg-sticky-beige',
  violet: 'bg-sticky-violet',
}

export default function Note({ note, absolute = false, children }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const d = Draggable.create(ref.current, { type: 'x,y' })[0]
    return () => d && d.kill()
  }, [])

  return (
    <div
      ref={ref}
      className={`sticky-note rounded-[4px] px-6 py-5 text-ink ${
        colorClass[note.color] || 'bg-sticky-cream'
      } ${note.big ? 'text-xl sm:text-2xl px-8 py-7 leading-snug' : 'text-lg leading-snug'} ${
        absolute ? 'absolute max-w-[300px]' : 'relative w-max max-w-[300px]'
      } ${note.wide ? 'max-w-[340px]' : ''} ${note.logos ? 'min-w-[240px]' : ''}`}
      style={{
        top: note.top,
        left: note.left,
        rotate: note.rot ? `${note.rot}deg` : undefined,
      }}
    >
      {note.text && <span className="block">{note.text}</span>}
      {note.pre && <span className="block">{note.pre}</span>}
      {note.bold && <span className="block font-bold text-2xl">{note.bold}</span>}
      {note.logos && (
        <span className="flex gap-3 mt-2 items-center flex-nowrap">
          {note.logos.map((l) => (
            <img key={l} src={iconUrl(l)} alt="" className="w-9 h-9 object-contain" />
          ))}
        </span>
      )}
      {children}
    </div>
  )
}
