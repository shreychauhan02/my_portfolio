import { useEffect, useRef } from 'react'
import { gsap } from '../hooks/useReveal.js'
import { metrics } from '../data.js'
import SectionTitle from './SectionTitle.jsx'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  useEffect(() => {
    const isDecimal = !Number.isInteger(value)
    const obj = { n: 0 }
    const tween = gsap.to(obj, {
      n: value,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 92%' },
      onUpdate: () => {
        ref.current.textContent = isDecimal
          ? obj.n.toFixed(2)
          : Math.round(obj.n).toLocaleString('en-US')
      },
    })
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [value])
  return (
    <span>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  )
}

export default function Metrics() {
  return (
    <section className="pb-24">
      <div className="max-w-6xl mx-auto px-5">
        <SectionTitle>Yours truly</SectionTitle>

        <div
          data-reveal
          className="glass rounded-[28px] p-8 sm:p-10 max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-2xl leading-relaxed">
            21, from Ahmedabad — a software engineer who fell for machine learning somewhere
            between an SQL join and a neural net. Give me messy data and a deadline, and
            something deployable comes out.{' '}
            <span className="text-accent font-bold">
              I like my models like my coffee — well-tuned, honestly evaluated, and served fresh.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {metrics.map((m, i) => (
            <div
              key={i}
              data-reveal
              className="glass rounded-[22px] p-6 text-center"
              style={{ rotate: i % 2 ? '0.8deg' : '-0.8deg' }}
            >
              <div className="serif font-extrabold text-4xl tracking-tight">
                <Counter value={m.value} suffix={m.suffix} />
              </div>
              <div className="mt-2 text-lg leading-tight">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
