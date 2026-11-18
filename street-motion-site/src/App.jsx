import { useEffect } from 'react'
import {
  Nav, Hero, Ticker, Seasonal, Services, Work, Pricing, Process, About, Faq, Contact, Footer,
} from './sections.jsx'

export default function App() {
  // Fade sections in as they scroll into view.
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return undefined
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Ticker />
        <Work />
        <Services />
        <Seasonal />
        <Pricing />
        <Process />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
