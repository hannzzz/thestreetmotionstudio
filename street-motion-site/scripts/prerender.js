// Renders the React app to static HTML at build time, so Google (and anyone
// without JavaScript) sees the full page content straight away.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distIndex = path.join(root, 'dist', 'index.html')
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js')

const template = fs.readFileSync(distIndex, 'utf-8')
const { render, faqSchema } = await import(pathToFileURL(ssrEntry).href)

const html = template
  .replace('<!--app-html-->', render())
  .replace(
    '<!--faq-schema-->',
    `<script type="application/ld+json">${JSON.stringify(faqSchema())}</script>`
  )

fs.writeFileSync(distIndex, html)
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log('✓ Prerendered dist/index.html')
