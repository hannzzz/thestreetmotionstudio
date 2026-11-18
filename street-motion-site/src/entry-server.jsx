import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { faqs } from './data.js'

export function render() {
  return renderToString(<App />)
}

export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}
