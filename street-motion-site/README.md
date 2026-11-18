# Street Motion Studio: Website

One-page React site (Vite). It's prerendered at build time, so search engines get the full HTML, and then React takes over in the browser for the animations, countdown, filters and form.

## Run it locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/ (prerendered)
npm run preview    # preview the production build
```
Needs Node 18+ (Node 20 recommended).

## Where to edit things
| What | File |
|---|---|
| All text (services, pricing, FAQ, areas, seasonal dates) | `src/data.js` |
| Layout / sections | `src/sections.jsx` |
| Colours, fonts, spacing | `src/styles.css` (top of file) |
| Page title, meta description, Google schema | `index.html` |
| Privacy notice | `public/privacy.html` |
| Portfolio images | `public/portfolio/` (keep the same file names, 4:3 ratio, ~1200×900) |
| Social links (hidden until filled in) | `src/data.js` → `site.socials` |

Each year, update the seasonal dates in `src/data.js` and `<lastmod>` in `public/sitemap.xml`.

---

## Deploy to Netlify (recommended: from GitHub)
1. Push this folder to a new GitHub repo.
2. Netlify → **Add new site → Import an existing project** → pick the repo.
   Build settings come from `netlify.toml` (`npm run build` → `dist`).
3. **Forms:** Netlify → Site configuration → **Forms → Enable form detection**, then redeploy.
   Then go to Forms → Form notifications → add an **email notification** to hannan@thestreetmotionstudio.com.
4. Submit a test enquiry on the live site and check it arrives.

(Alternative: run `npm run build` locally and drag the `dist` folder onto Netlify's deploy page. Forms still work.)

## Connect thestreetmotionstudio.com
⚠️ **Your email runs on this domain.** Don't switch the nameservers to Netlify DNS unless you re-create your email (MX) records there first, or your email will stop working. The safe way:

1. Netlify → Domain management → **Add a domain** → `thestreetmotionstudio.com` (set it as primary).
2. At your domain registrar's DNS settings, add:
   - `A` record, host `@` → `75.2.60.5`
   - `CNAME` record, host `www` → `your-site-name.netlify.app`
   - Leave your existing MX/TXT (email) records alone.
3. Wait for DNS to update (minutes to a few hours). Netlify then issues the free HTTPS certificate automatically.
4. Check Netlify's domain page for the exact records it asks for. Those take priority over this list.

## After it's live (SEO checklist)
- [ ] **Google Search Console:** add the domain, verify it (DNS TXT record), and submit `https://thestreetmotionstudio.com/sitemap.xml`
- [ ] **Google Business Profile:** create it as a *service-area business* (no public address), category "Video production service", areas: Bristol, Bath, Somerset, North Somerset. This matters most for local searches.
- [ ] Test the share preview: paste the URL into WhatsApp or LinkedIn and check the logo image shows
- [ ] Run Google PageSpeed Insights on mobile and aim for 90+
- [ ] Add Instagram/TikTok links in `src/data.js` once the accounts exist
- [ ] Swap the placeholder portfolio images for your Higgsfield renders
- [ ] As soon as you have real clients (and their permission), add real work and a testimonial. That's the single biggest boost to trust.

---

## Portfolio prompts (run in Higgsfield → save over the matching file)
Use GPT Image 2.6 or Nano Banana Pro, **4:3**, 2K. These brands are fictional, so the site labels them "Concept". Never present these as real client work.

**concept-bakery.jpg** (Larkspur Bakehouse, Christmas cookie campaign)
```
Cinematic advertising photo for a fictional artisan bakery called "Larkspur Bakehouse": chunky chocolate chip cookies and festive gingerbread stacked on a rustic wooden counter, one cookie broken with melted chocolate, warm golden fairy lights and a soft-focus Christmas window behind, a kraft gift box with a simple navy "Larkspur Bakehouse" label. Shallow depth of field, premium food commercial lighting, 4:3.
```
**concept-coffee.jpg** (Ember & Bean Coffee, winter menu launch)
```
Moody cinematic photo for a fictional independent café called "Ember & Bean Coffee": a gingerbread latte with latte art and visible steam on a dark wooden table, cinnamon sticks and orange slices, rainy city street outside a window with warm bokeh lights, a small chalkboard reading "Winter Menu". Rich warm tones, commercial food photography, 4:3.
```
**concept-boxing.jpg** (Kinetic Boxing Lab, New Year membership drive)
```
Apple-style product commercial still for a fictional boxing gym called "Kinetic Boxing Lab": a pair of matte black boxing gloves with orange stitching suspended mid-air on a pure black background, dramatic rim lighting, fine chalk dust drifting, subtle "NEW YEAR. NEW YOU." text in clean white type. Minimal, premium, high contrast, 4:3.
```
**concept-cider.jpg** (Old Thorn Cider Co., gift set product shots)
```
Premium product photo for a fictional Somerset cider maker called "Old Thorn Cider Co.": three amber cider bottles with elegant kraft labels in a wooden gift crate with straw, red apples and a sprig of holly, set in an orchard at golden hour with soft haze. Warm, rustic, luxury gift-guide style, 4:3.
```
**concept-lodges.jpg** (Saltmarsh Lodges, lodge walkthrough stills)
```
Cinematic interior photo of a modern coastal holiday lodge for a fictional park called "Saltmarsh Lodges": open-plan living room with large windows looking out to the sea at dusk, warm lamps on, cosy throws on a grey sofa, wood-burning stove glowing, clean Scandinavian style. Real-estate video still, wide angle, natural and inviting, 4:3.
```
**concept-florist.jpg** (Wildbloom Florals, festive wreath collection)
```
Editorial photo for a fictional florist called "Wildbloom Florals": a lush handmade Christmas wreath of eucalyptus, dried orange slices, pine and deep red roses hanging on a sage green front door, soft winter daylight, a few more wreaths and ribbon spools on a workbench in the background. Elegant, seasonal, magazine quality, 4:3.
```
