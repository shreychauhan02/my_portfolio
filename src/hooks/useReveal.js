import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Fade/slide a set of [data-reveal] children into view on scroll.
export function useRevealGroup(deps = []) {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('[data-reveal]')
      items.forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          },
        )
      })
    }, ref)
    return () => ctx.revert()
  }, deps)
  return ref
}

export { gsap, ScrollTrigger }
