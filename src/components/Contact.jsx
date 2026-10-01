import { useState } from 'react'
import { profile, socials, siUrl } from '../data.js'
import SectionTitle from './SectionTitle.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio hello from ${form.name || 'someone'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const field =
    'sketch w-full bg-white px-4 py-3 text-lg placeholder:text-ink/35 focus:outline-none focus:border-accent'

  return (
    <section id="contact" className="section-pad">
      <div className="max-w-2xl mx-auto px-5">
        <SectionTitle>Let's talk</SectionTitle>

        <p data-reveal className="text-center text-2xl mb-2 -mt-8">
          <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors underline decoration-accent decoration-2 underline-offset-4">
            {profile.email}
          </a>
        </p>

        <div data-reveal className="flex justify-center gap-3 mb-12">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target={s.url.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              title={s.name}
              className="group w-12 h-12 rounded-full border-2 border-ink grid place-items-center hover:bg-ink transition-colors"
            >
              <img src={siUrl(s.si)} alt={s.name} className="w-5 h-5 [filter:invert(15%)] group-hover:[filter:invert(100%)] transition-[filter]" />
            </a>
          ))}
        </div>

        <form data-reveal onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              className={field}
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className={field}
              type="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <textarea
            className={field}
            rows={5}
            placeholder="Message"
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button
            type="submit"
            className="w-full bg-[#3d3d3d] text-white text-xl py-3.5 rounded-2xl hover:bg-accent transition-colors"
          >
            Send
          </button>
          {sent && (
            <p className="text-center text-accent text-lg">
              Your email app just opened with the message ready — hit send there and I'll reply fast. 🚀
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
