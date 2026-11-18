import { useEffect, useState } from 'react'
import {
  site, niches, seasons, services, packages, work, steps, values, faqs, areas,
} from './data.js'
import {
  IconArrow, IconCheck, IconPlay, IconMail, IconPin, IconClock, IconMenu, IconClose, IconPlus, serviceIcons,
} from './icons.jsx'

/* ---------- Shared bits ---------- */

function SectionHead({ eyebrow, title, lead, center = false }) {
  return (
    <div className={`section-head ${center ? 'section-head--center' : ''}`}>
      <p className="eyebrow reveal">{eyebrow}</p>
      <h2 className="section-title reveal" style={{ '--d': 1 }}>{title}</h2>
      {lead && <p className="section-lead reveal" style={{ '--d': 2 }}>{lead}</p>}
    </div>
  )
}

function Streaks({ className = '' }) {
  return (
    <span className={`streaks ${className}`} aria-hidden="true">
      <i /><i /><i /><i /><i />
    </span>
  )
}

/* ---------- Navigation ---------- */

const navLinks = [
  ['Work', '#work'],
  ['Services', '#services'],
  ['Offers', '#seasonal'],
  ['Pricing', '#pricing'],
  ['About', '#about'],
  ['FAQ', '#faq'],
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(y > 20)
      setProgress(max > 0 ? Math.min(y / max, 1) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" aria-label="Street Motion Studio, back to top">
          <img src="/logo-wordmark-white.png" alt="Street Motion Studio" width="215" height="40" />
        </a>
        <nav className="nav__links" aria-label="Main">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} onClick={close}>{label}</a>
          ))}
          <a href="#contact" className="btn btn--primary btn--sm" onClick={close}>Get free samples</a>
        </nav>
        <button
          type="button"
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>
    </header>
  )
}

/* ---------- Hero ---------- */

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow" />
        <div className="hero__grid-lines" />
        <div className="hero__speed">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} style={{ '--i': i }} />
          ))}
        </div>
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow reveal">Bristol &amp; Somerset · AI creative studio</p>
          <h1 className="hero__title reveal" style={{ '--d': 1 }}>
            Ads that <span className="accent">move</span> your customers.
          </h1>
          <p className="hero__lead reveal" style={{ '--d': 2 }}>
            Cinematic promo videos, product images and Reels for local businesses, made with AI.
            You get the big-brand look without the film crew, the photoshoot or the agency bill.
          </p>
          <div className="hero__ctas reveal" style={{ '--d': 3 }}>
            <a href="#contact" className="btn btn--primary btn--lg">
              Get your free samples <IconArrow />
            </a>
            <a href="#work" className="btn btn--ghost btn--lg">See our work</a>
          </div>
          <ul className="hero__points reveal" style={{ '--d': 4 }}>
            <li><IconCheck /> Free samples first</li>
            <li><IconCheck /> No filming needed</li>
            <li><IconCheck /> Ready in days, not weeks</li>
          </ul>
        </div>

        <div className="hero__visual reveal" style={{ '--d': 2 }} aria-hidden="true">
          <div className="phone">
            <img src={work[0].image} alt="" width="1200" height="900" />
            <div className="phone__overlay">
              <span className="phone__tag"><span className="dot" /> Reel</span>
              <span className="phone__play"><IconPlay /></span>
              <span className="phone__caption">{work[0].brand}<br /><small>{work[0].project}</small></span>
            </div>
          </div>
          <div className="float-card float-card--a">
            <img src={work[2].image} alt="" width="1200" height="900" />
          </div>
          <div className="float-card float-card--b">
            <img src={work[4].image} alt="" width="1200" height="900" />
          </div>
          <img className="hero__icon" src="/sm-icon.png" alt="" width="600" height="300" />
        </div>
      </div>

      <a href="#ticker" className="hero__scroll" aria-label="Scroll down">
        <span />
      </a>
    </section>
  )
}

/* ---------- Ticker ---------- */

export function Ticker() {
  const row = [...niches, ...niches]
  return (
    <div className="ticker" id="ticker" aria-label="Businesses we work with">
      <div className="ticker__track">
        {row.map((n, i) => (
          <span key={i} className="ticker__item" aria-hidden={i >= niches.length}>
            {n} <Streaks className="streaks--mini" />
          </span>
        ))}
      </div>
    </div>
  )
}

/* ---------- Seasonal offers ---------- */

function useNow() {
  const [now, setNow] = useState(null)
  useEffect(() => {
    setNow(Date.now())
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])
  return now
}

function pad(n) {
  return String(n).padStart(2, '0')
}

export function Seasonal() {
  const now = useNow()
  const next = now ? seasons.find((s) => new Date(s.date).getTime() > now) : null
  let parts = null
  if (next) {
    const diff = new Date(next.date).getTime() - now
    parts = {
      days: Math.floor(diff / 86400000),
      hours: Math.floor(diff / 3600000) % 24,
      mins: Math.floor(diff / 60000) % 60,
      secs: Math.floor(diff / 1000) % 60,
    }
  }
  const showCountdown = now === null || next

  return (
    <section className="section seasonal" id="seasonal">
      <div className="container">
        <div className="seasonal__panel reveal">
          <div className="seasonal__top">
            <div>
              <p className="eyebrow">Seasonal campaigns</p>
              <h2 className="section-title">
                Black Friday, Christmas &amp; New Year.<br />
                <span className="accent">Make it your busiest season yet.</span>
              </h2>
              <p className="section-lead">
                The next six weeks are the biggest of the year for local businesses. Get your offer videos,
                festive visuals and January promos made now, while your competitors are still planning.
              </p>
            </div>
            {showCountdown && (
              <div className="countdown" aria-live="off">
                <p className="countdown__label">{next ? `${next.name} starts in` : 'Next campaign starts in'}</p>
                <div className="countdown__grid">
                  {[
                    ['days', 'Days'],
                    ['hours', 'Hrs'],
                    ['mins', 'Min'],
                    ['secs', 'Sec'],
                  ].map(([k, label]) => (
                    <div key={k} className="countdown__cell">
                      <span className="countdown__num">{parts ? pad(parts[k]) : '--'}</span>
                      <span className="countdown__unit">{label}</span>
                    </div>
                  ))}
                </div>
                <a href="#contact" className="btn btn--primary">Book your seasonal campaign <IconArrow /></a>
              </div>
            )}
          </div>

          <div className="seasonal__cards">
            {seasons.map((s, i) => (
              <article
                key={s.key}
                className="season-card reveal"
                data-active={next && next.key === s.key ? 'true' : 'false'}
                style={{ '--d': i + 1 }}
              >
                <p className="season-card__date">{s.label}</p>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Services ---------- */

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHead
          eyebrow="What we make"
          title="Everything your business needs to look the part online."
          lead="One-off campaigns or a monthly flow of content, all made with AI and built around your real products."
        />
        <div className="services">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon]
            return (
              <article key={s.title} className="service-card reveal" style={{ '--d': i }}>
                <span className="service-card__icon"><Icon /></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            )
          })}
          <a href="#contact" className="service-card service-card--cta reveal" style={{ '--d': services.length }}>
            <h3>Not sure what you need?</h3>
            <p>Tell us about your business and we’ll suggest the content that will make the biggest difference.</p>
            <span className="link-arrow">Get free advice <IconArrow /></span>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ---------- Work ---------- */

export function Work() {
  const categories = ['All', ...new Set(work.map((w) => w.category))]
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? work : work.filter((w) => w.category === filter)

  return (
    <section className="section work" id="work">
      <div className="container">
        <div className="work__head">
          <SectionHead
            eyebrow="Our work"
            title="See what’s possible."
            lead="Concept pieces we created for fictional local brands, to show the kind of content we can make for you."
          />
          <div className="filters reveal" role="group" aria-label="Filter work by category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={filter === c}
                className={`filter ${filter === c ? 'filter--active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="work__grid">
          {shown.map((w) => (
            <figure key={w.brand} className="work-card">
              <div className="work-card__media">
                <img src={w.image} alt={`${w.project} for ${w.brand} (concept)`} loading="lazy" width="1200" height="900" />
                <span className="work-card__badge">Concept</span>
              </div>
              <figcaption>
                <span className="work-card__cat">{w.category}</span>
                <strong>{w.brand}</strong>
                <span>{w.project}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="work__note reveal">
          All pieces shown are concept work for fictional brands. Want to see it done for your business?{' '}
          <a href="#contact">Get your free samples</a>.
        </p>
      </div>
    </section>
  )
}

/* ---------- Pricing ---------- */

export function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <SectionHead
          center
          eyebrow="Pricing"
          title="Simple pricing. Start for free."
          lead="One-off or monthly, it’s up to you. Every new client starts with a free sample set."
        />
        <div className="pricing">
          {packages.map((p, i) => (
            <article
              key={p.name}
              className={`price-card reveal ${p.featured ? 'price-card--featured' : ''}`}
              style={{ '--d': i }}
            >
              {p.badge && <p className="price-card__badge">{p.badge}</p>}
              <h3>{p.name}</h3>
              <p className="price-card__price">
                {p.price}<span>{p.unit}</span>
              </p>
              <p className="price-card__blurb">{p.blurb}</p>
              <ul>
                {p.features.map((f) => (
                  <li key={f}><IconCheck /> {f}</li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${p.featured ? 'btn--primary' : 'btn--ghost'} btn--block`}>
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Process ---------- */

export function Process() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <SectionHead
          eyebrow="How it works"
          title="From first message to finished ad in days."
        />
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title} className="step reveal" style={{ '--d': i }}>
              <span className="step__num">{pad(i + 1)}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ---------- About ---------- */

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__inner">
        <div className="about__copy">
          <p className="eyebrow reveal">About us</p>
          <h2 className="section-title reveal" style={{ '--d': 1 }}>
            A small Bristol team, <span className="accent">building with AI every day.</span>
          </h2>
          <p className="reveal" style={{ '--d': 2 }}>
            Street Motion Studio is a Bristol-based creative studio with a background in software engineering.
            We work hands-on with the latest AI image and video tools every day, and we know how to get results
            from them that look like a proper production, not a template.
          </p>
          <p className="reveal" style={{ '--d': 3 }}>
            We started the studio for one reason: independent businesses deserve content as good as the big
            brands get, without the agency price tag, the film crew or weeks of waiting.
          </p>
          <a href="#contact" className="btn btn--ghost reveal" style={{ '--d': 4 }}>Work with us <IconArrow /></a>
        </div>
        <div className="values">
          {values.map((v, i) => (
            <article key={v.title} className="value reveal" style={{ '--d': i }}>
              <Streaks />
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- FAQ ---------- */

export function Faq() {
  return (
    <section className="section faq" id="faq">
      <div className="container faq__inner">
        <SectionHead
          eyebrow="FAQ"
          title="Questions we get asked."
          lead={<>Something else? Email us at <a href={`mailto:${site.email}`}>{site.email}</a>.</>}
        />
        <div className="faq__list">
          {faqs.map((f, i) => (
            <details key={f.q} className="faq__item reveal" style={{ '--d': i % 3 }}>
              <summary>
                <span>{f.q}</span>
                <IconPlus className="faq__icon" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Contact ---------- */

export function Contact() {
  const [status, setStatus] = useState('idle')

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const body = new URLSearchParams(new FormData(form)).toString()
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
      if (!res.ok) throw new Error('Request failed')
      form.reset()
      setStatus('sent')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner">
        <div className="contact__copy">
          <p className="eyebrow reveal">Get in touch</p>
          <h2 className="section-title reveal" style={{ '--d': 1 }}>
            Get your <span className="accent">free samples.</span>
          </h2>
          <p className="section-lead reveal" style={{ '--d': 2 }}>
            Tell us about your business and we’ll make you a set of AI images of your real products, free.
            If you like them, we’ll talk video.
          </p>
          <ul className="contact__info reveal" style={{ '--d': 3 }}>
            <li><IconMail /> <a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><IconPin /> Based in Bristol, working across Bristol &amp; Somerset</li>
            <li><IconClock /> We reply within one working day</li>
          </ul>
        </div>

        <div className="contact__card reveal" style={{ '--d': 2 }}>
          {status === 'sent' ? (
            <div className="form__success" role="status">
              <span className="form__success-icon"><IconCheck /></span>
              <h3>Thanks, we’ve got it.</h3>
              <p>We’ll be in touch within one working day with your next steps.</p>
              <button type="button" className="btn btn--ghost" onClick={() => setStatus('idle')}>Send another</button>
            </div>
          ) : (
            <form name="contact" method="POST" className="form" onSubmit={onSubmit}>
              <input type="hidden" name="form-name" defaultValue="contact" />
              <p className="form__hp">
                <label>Don’t fill this in: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
              </p>
              <div className="form__row">
                <label className="field">
                  <span>Your name</span>
                  <input name="name" required autoComplete="name" />
                </label>
                <label className="field">
                  <span>Business name</span>
                  <input name="business" required autoComplete="organization" />
                </label>
              </div>
              <div className="form__row">
                <label className="field">
                  <span>Email</span>
                  <input type="email" name="email" required autoComplete="email" />
                </label>
                <label className="field">
                  <span>Phone <em>(optional)</em></span>
                  <input type="tel" name="phone" autoComplete="tel" />
                </label>
              </div>
              <label className="field">
                <span>What do you need?</span>
                <select name="service" defaultValue="">
                  <option value="" disabled>Choose one</option>
                  <option>Free sample images</option>
                  <option>Promo video</option>
                  <option>Product &amp; brand images</option>
                  <option>Reels / TikToks</option>
                  <option>Property walkthrough</option>
                  <option>Monthly content</option>
                  <option>Black Friday / Christmas / New Year campaign</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label className="field">
                <span>Website or Instagram</span>
                <input name="website" placeholder="e.g. instagram.com/yourbusiness" />
              </label>
              <label className="field">
                <span>Tell us a bit about your business</span>
                <textarea name="message" rows={4} />
              </label>
              <p className="form__legal">
                We’ll only use your details to reply to you. See our <a href="/privacy.html">privacy notice</a>.
              </p>
              <button type="submit" className="btn btn--primary btn--lg btn--block" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : <>Send my request <IconArrow /></>}
              </button>
              {status === 'error' && (
                <p className="form__error" role="alert">
                  Something went wrong. Please email us at <a href={`mailto:${site.email}`}>{site.email}</a>.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

/* ---------- Footer ---------- */

export function Footer() {
  const socials = Object.entries(site.socials).filter(([, url]) => url)
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="/logo-wordmark-white.png" alt="Street Motion Studio" width="215" height="40" loading="lazy" />
            <p>AI promo videos and images for independent businesses across Bristol &amp; Somerset.</p>
            <a href={`mailto:${site.email}`} className="footer__email">{site.email}</a>
            {socials.length > 0 && (
              <p className="footer__socials">
                {socials.map(([name, url]) => (
                  <a key={name} href={url} target="_blank" rel="noopener noreferrer">{name}</a>
                ))}
              </p>
            )}
          </div>
          <nav className="footer__nav" aria-label="Footer">
            <p className="footer__heading">Explore</p>
            {navLinks.map(([label, href]) => (
              <a key={href} href={href}>{label}</a>
            ))}
            <a href="#contact">Contact</a>
          </nav>
          <div className="footer__areas">
            <p className="footer__heading">Areas we cover</p>
            <p>{areas.join(' · ')}</p>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Street Motion Studio. Bristol, UK.</p>
          <a href="/privacy.html">Privacy notice</a>
        </div>
      </div>
    </footer>
  )
}
