import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

const el = document.getElementById('root')

// In production the page is prerendered, so we hydrate it.
// In dev (npm run dev) the root is empty, so we render from scratch.
if (el.firstElementChild) {
  hydrateRoot(el, <App />)
} else {
  createRoot(el).render(<App />)
}
